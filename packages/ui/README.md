# @thecodinghqs/ui

A production-ready React UI component library.

[![npm version](https://img.shields.io/npm/v/@thecodinghqs/ui.svg?style=flat-square)](https://www.npmjs.com/package/@thecodinghqs/ui)
[![license](https://img.shields.io/npm/l/@thecodinghqs/ui.svg?style=flat-square)](https://github.com/your-username/my-ui-lib-monorepo/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/my-ui-lib-monorepo/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/my-ui-lib-monorepo/actions)

## Installation

```bash
npm install @thecodinghqs/ui
# or
pnpm add @thecodinghqs/ui
# or
yarn add @thecodinghqs/ui
```

## Usage

```tsx
import { Button } from '@thecodinghqs/ui'

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
