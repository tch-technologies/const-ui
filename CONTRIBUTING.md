# Contributing

Thank you for your interest in contributing to `@const/ui`!

## Setup

1. Clone the repository
2. Run `nvm use` to ensure you are on the correct Node.js version.
3. Install dependencies using pnpm: `pnpm install`
4. Start the development environment: `pnpm dev` (This will start Storybook and the package builder in watch mode).

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Please ensure all your commit messages follow this format. Husky and commitlint are configured to enforce this.

Format: `type(scope): subject`

Examples:

- `feat(button): add ghost variant`
- `fix(ui): resolve styling issue in dark mode`
- `docs(storybook): update button stories`

## PR Process

1. Create a branch for your feature or fix.
2. Make your changes and ensure all tests and linting pass (`pnpm test`, `pnpm lint`).
3. If your changes affect the package output, run `pnpm changeset` and follow the prompts to generate a changeset file. Commit this file.
4. Push your branch and open a Pull Request against the `main` branch.
5. The CI pipeline will run automatically to verify your changes.
