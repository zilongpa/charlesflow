# CharlesFlow
## Structure

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ expo
  |   ├─ Expo SDK 53 (EXPERIMENTAL)
  |   |   > [!WARNING]
  |   |   > Using Expo SDK 53 (canary) to unblock Next.js 15 / React 19 support.
  |   |   > This is experimental and might not work as expected.
  |   ├─ React Native using React 19
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  |   └─ Typesafe API calls using tRPC
  └─ next.js
      ├─ Next.js 15
      ├─ React 19
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v11 router definition
  ├─ auth
  |   └─ Authentication using better-auth.
  ├─ db
  |   └─ Typesafe db calls using Drizzle & Supabase
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

## Add a new UI component or package

```bash
pnpm ui-add # add a new UI component
pnpm turbo gen init # add a new package
```

## Expo

**Please make sure you understand the consequences before running any EAS commands!**

```bash
eas build --platform ios --profile production
eas submit --platform ios --latest
eas update --auto # Update current branch
```
