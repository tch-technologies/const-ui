# 🚀 Const-UI Developer Workflow Checklist

Use this guide whenever you are making changes, pushing to GitHub, or releasing packages to NPM. Running these commands prevents build crashes and ensures a rock-solid code quality.

---

## 🛡️ 1. Daily "Pre-Push" Checklist

Run these commands from the **repository root** any time you finish a feature or styling change to guarantee zero bugs enter the Git repository or break the Vercel deployment:

### Step 1: Format Code

Auto-formats stylesheets, markdown, and scripts using standard Prettier guidelines.

```bash
pnpm format
```

### Step 2: Type-Check Workspace

Checks all workspace components (`web`, `docs`, `packages/ui`) for absolute TypeScript correctness.

```bash
pnpm type-check
```

### Step 3: Lint Syntax

Analyzes source files for syntax issues, unused imports, and basic coding violations.

```bash
pnpm lint
```

### Step 4: Run Unit Tests

Executes component test suites via Vitest to confirm component state machines and interactions function perfectly.

```bash
pnpm test
```

### Step 5: Complete Production Build Simulation

Runs a mock workspace compilation inside Turborepo. This ensures that all dependency chains (`@const-ui/react` dist folders) assemble flawlessly.

```bash
pnpm build
```

💡 **If all 5 steps finish with a GREEN checkmark, you are 100% ready to commit and push to GitHub!**

---

## 📦 2. "Publish to NPM" Lifecycle

When you want to release a new version of your component library `@const-ui/react` to the public NPM registry, follow this sequence:

### Phase A: Log and Stage your Version intent

Prompts you whether this is a `patch`, `minor`, or `major` release, and records what changed.

```bash
pnpm changeset
```

### Phase B: Automate Version Numbers

Consumes the staged changelog intent and automatically bumps `package.json` files and generates `CHANGELOG.md` logs.

```bash
pnpm changeset version
```

### Phase C: Production Asset Compiler

Builds the final package targets so the absolute latest bundles are loaded into the registry payload.

```bash
pnpm build
```

### Phase D: Commit Updates to Git

Saves the automated version bumps and log files directly into your branch history.

```bash
git add .
git commit -m "chore: release version upgrade"
```

### Phase E: Ship to NPM Registry

Recursively deploys the modified package tree into the public ecosystem.

```bash
pnpm publish -r --no-git-checks --access public
```

### Phase F: Sync Code and Tags Upstream

Propagates the final main branch commits and automated semantic version tags (`vX.Y.Z`) to GitHub.

```bash
git push origin main --follow-tags
```
