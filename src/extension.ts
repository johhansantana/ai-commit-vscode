import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('ai-commit-vscode.generateCommitMessage', async () => {
        try {
            const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
            if (!gitExtension) {
                vscode.window.showErrorMessage('Git extension not found');
                return;
            }

            const git = gitExtension.getAPI(1);
            const repository = git.repositories[0];
            
            if (!repository) {
                vscode.window.showErrorMessage('No Git repository found');
                return;
            }

            // Get the changes
            const changes = await repository.diff(true);
            
            // Get the API key from settings
            const config = vscode.workspace.getConfiguration('aiCommit');
            const apiKey = config.get<string>('openRouterApiKey');
            
            if (!apiKey) {
                vscode.window.showErrorMessage('Please set your OpenRouter API key in settings');
                return;
            }

            // Show loading message
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Generating commit message...",
                cancellable: false
            }, async () => {
                try {
                    // Call OpenRouter API
                    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
                        model: "mistralai/mistral-7b-instruct",
                        messages: [{
                            role: "user",
                            content: `Generate a concise and descriptive commit message for the following changes:\n\n${changes}`
                        }],
                    }, {
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    const commitMessage = response.data.choices[0].message.content.trim();
                    
                    // Set the commit message in the input box
                    repository.inputBox.value = commitMessage;
                    
                } catch (error) {
                    vscode.window.showErrorMessage('Failed to generate commit message: ' + error.message);
                }
            });

        } catch (error) {
            vscode.window.showErrorMessage('Error: ' + error.message);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
