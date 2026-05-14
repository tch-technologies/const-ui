# @const/ui

A production-ready React UI component library.

[![npm version](https://img.shields.io/npm/v/@const/ui.svg?style=flat-square)](https://www.npmjs.com/package/@const/ui)
[![license](https://img.shields.io/npm/l/@const/ui.svg?style=flat-square)](https://github.com/your-username/my-ui-lib-monorepo/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/my-ui-lib-monorepo/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/my-ui-lib-monorepo/actions)

## Installation

```bash
npm install @const/ui
# or
pnpm add @const/ui
# or
yarn add @const/ui
```

## Usage

```tsx
import { Button } from '@const/ui'

export default function App() {
  return (
    <Button variant="default" size="md">
      Click Me
    </Button>
  )
}
```

## Theming

This library uses Tailwind CSS and CSS variables for theming. Ensure you have tailwind setup in your project and import the library's styles or configure your tailwind config to scan the node_modules component paths.
