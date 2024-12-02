# AI Commit Message Generator

A VS Code extension that generates commit messages using AI based on your current changes.

## Features

- Adds a button in the Source Control view to generate commit messages
- Uses OpenRouter AI to analyze your changes and generate meaningful commit messages
- Automatically fills the commit message input
- Configurable AI model selection
- Customizable prompt template for generating commit messages
- Follows conventional commit format by default

## Requirements

You need an OpenRouter API key to use this extension. Get one at [OpenRouter](https://openrouter.ai/).

## Extension Settings

This extension contributes the following settings:

* `aiCommit.openRouterApiKey`: Your OpenRouter API key
* `aiCommit.model`: The AI model to use (e.g., "anthropic/claude-3-sonnet", "mistralai/mistral-7b-instruct")
* `aiCommit.prompt`: Custom prompt template for generating commit messages. Uses {changes} as a placeholder for the git diff.

### Default Prompt

The default prompt is configured to generate conventional commit messages:

```
Given these staged changes:
{changes}

Generate a commit message that follows these rules:
1. Start with a type (feat/fix/docs)
2. Keep it under 50 characters
3. Use imperative mood
```

You can customize this prompt in the settings to match your team's commit message style.

## Setup

1. Install the extension
2. Get an API key from OpenRouter
3. Open VS Code Settings
4. Search for "AI Commit"
5. Enter your OpenRouter API key
6. (Optional) Customize the AI model and prompt template

## Usage

1. Make changes to your code
2. Stage your changes in Git
3. Click the "Generate Commit Message" button above the commit message input
4. The AI-generated message will automatically fill the commit message input
5. Edit the message if needed and commit as usual

## Development

1. Clone the repository
2. Run `npm install`
3. Open in VS Code
4. Press F5 to start debugging
