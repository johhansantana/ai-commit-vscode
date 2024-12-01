# AI Commit Message Generator

A VS Code extension that generates commit messages using AI based on your current changes.

## Features

- Adds a button in the Source Control view to generate commit messages
- Uses OpenRouter AI to analyze your changes and generate meaningful commit messages
- Automatically fills the commit message input

## Requirements

You need an OpenRouter API key to use this extension. Get one at [OpenRouter](https://openrouter.ai/).

## Extension Settings

This extension contributes the following settings:

* `aiCommit.openRouterApiKey`: Your OpenRouter API key

## Setup

1. Install the extension
2. Get an API key from OpenRouter
3. Open VS Code Settings
4. Search for "AI Commit"
5. Enter your OpenRouter API key

## Usage

1. Make changes to your code
2. Open the Source Control view
3. Click the "Generate Commit Message" button above the commit message input
4. The AI-generated message will automatically fill the commit message input
5. Edit the message if needed and commit as usual

## Development

1. Clone the repository
2. Run `npm install`
3. Open in VS Code
4. Press F5 to start debugging
