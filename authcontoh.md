Directory structure:
└── giraffereactor-yt-authjs-v5.git/
    ├── README.md
    ├── CHECKLIST.md
    ├── components.json
    ├── drizzle.config.ts
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .env.example
    ├── .eslintrc.json
    ├── .prettierrc
    ├── migrations/
    │   ├── 0000_mean_vector.sql
    │   ├── 0001_greedy_red_shift.sql
    │   └── meta/
    │       ├── 0000_snapshot.json
    │       ├── 0001_snapshot.json
    │       └── _journal.json
    └── src/
        ├── auth.config.ts
        ├── auth.ts
        ├── middleware.ts
        ├── actions/
        │   ├── create-verification-token-action.ts
        │   ├── forgot-password-action.ts
        │   ├── oauth-signin-action.ts
        │   ├── oauth-verify-email-action.ts
        │   ├── reset-password-action.ts
        │   ├── signin-user-action.ts
        │   ├── signout-user-action.ts
        │   ├── signup-user-action.ts
        │   ├── update-user-info-action.ts
        │   ├── verify-credentials-email-action.ts
        │   ├── admin/
        │   │   ├── change-user-role-action.ts
        │   │   └── toggle-email-verified-action.ts
        │   └── mail/
        │       ├── send-forgot-password-email.ts
        │       └── send-signup-user-email.ts
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── api/
        │   │   └── auth/
        │   │       └── [...nextauth]/
        │   │           └── route.ts
        │   ├── auth/
        │   │   ├── layout.tsx
        │   │   ├── signin/
        │   │   │   ├── page.tsx
        │   │   │   ├── _components/
        │   │   │   │   ├── forgot-password-form.tsx
        │   │   │   │   └── signin-form.tsx
        │   │   │   ├── forgot-password/
        │   │   │   │   ├── page.tsx
        │   │   │   │   └── _components/
        │   │   │   │       └── reset-password-form.tsx
        │   │   │   └── reset-password/
        │   │   │       └── success/
        │   │   │           └── page.tsx
        │   │   └── signup/
        │   │       ├── page.tsx
        │   │       ├── _components/
        │   │       │   └── signup-form.tsx
        │   │       ├── success/
        │   │       │   └── page.tsx
        │   │       └── verify-email/
        │   │           ├── loading.tsx
        │   │           └── page.tsx
        │   └── profile/
        │       ├── page.tsx
        │       ├── _components/
        │       │   └── update-user-info-form.tsx
        │       └── admin-panel/
        │           ├── page.tsx
        │           └── _components/
        │               ├── change-user-role-input.tsx
        │               └── toggle-email-verified-input.tsx
        ├── components/
        │   ├── navbar-links.tsx
        │   ├── navbar.tsx
        │   ├── oauth-signin-buttons.tsx
        │   ├── providers.tsx
        │   ├── signout-button.tsx
        │   └── ui/
        │       ├── button.tsx
        │       ├── dialog.tsx
        │       ├── form.tsx
        │       ├── input.tsx
        │       └── label.tsx
        ├── drizzle/
        │   ├── index.ts
        │   └── schema.ts
        ├── lib/
        │   ├── constants.ts
        │   ├── custom-errors.ts
        │   ├── nodemailer.ts
        │   └── utils.ts
        ├── resources/
        │   ├── admin-user-email-address-queries.ts
        │   ├── user-queries.ts
        │   └── verification-token-queries.ts
        ├── types/
        │   ├── auth-core.d.ts
        │   └── next-auth.d.ts
        └── validators/
            ├── forgot-password-validator.ts
            ├── reset-password-validator.ts
            ├── signin-validator.ts
            ├── signup-validator.ts
            └── update-user-info-validator.ts


Files Content:

================================================
File: /README.md
================================================
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


================================================
File: /CHECKLIST.md
================================================
== PART 1 ==

[X] Create Next.js App WITH CLI
[X] Clean up files
[X] Install shadcn/ui
[X] Create Navbar
[X] Install shadcn button, form, input
[X] Create signup page
[X] Install valibot
[X] Create signup validator
[X] Create signup form
[X] Create signup server action
[X] Handle errors
[X] Hash password
[X] Create signin page
[X] Create signin validator
[X] Create signin form
[X] Create signin server action

== PART 2 ==

[X] Install prettier plugin tailwindcss
[X] Install Drizzle ORM / Drizzle Kit
[X] Create Drizzle Config
[X] Create Drizzle Schema
[X] Install Auth.js
[X] Update drizzle schema (password, role, email uniqueness)
[X] Setup Postgres with NeonDB
[X] Create helper scripts
[X] Show how to view data (drizzle studio, neon console)
[X] Create drizzle singleton
[X] Signup our first user
[X] Handle email conflicts
[X] Create success message

== PART 3 ==

[X] Redirect Links
[X] Setup AuthJS config
[X] Auth Secret, Auth Url
[X] Partial Signin - Parse Credentials
[X] User Queries
[X] `server-only` package
[X] Partial Signin - Log User
[X] Complete Signin
[X] Error Handling
[X] Create /profile
[X] Redirect to /profile
[X] Session info server side (auth function)
[X] Display information as table
[X] Create signout button
[X] Signout action
[X] Discussion: Next.js Client vs Server Components
[X] Navbar Links
[X] Session server side in NavbarLinks
[X] Session client side in NavbarLinks
[X] Session Provider
[X] Route Handlers
[X] Full Signin Signout flow

== PART 4 ==

[X] Setup Google OAuth
[X] Install Simple Icons
[X] Create OAuth Signin Buttons
[X] Test Google SignIn
[X] Setup Github OAuth
[X] Test Github SignIn
[X] Drizzle Adapter

Drizzle Adapter Source Code
https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-drizzle/src/lib/pg.ts

[X] AuthJS Callbacks
[X] Extend Session Information
[X] Extend Typescript Types
[X] Update Drizzle Adapter
[X] `@auth/core`
[X] AuthJS Events

== PART 5 ==

[X] Working with user from database instead of session
[X] Updating the session (schema, server action)
[X] JWT Callback (trigger)
[X] Verify With SignIn Callback

_CASE 1_
If I made an account with an OAuth Provider (Google or Github)
AND I am **LOGGED OUT**
I cannot login with the other OAuth Provider that has the same EMAIL

e.g. Create account with Github for email `giraffereactor@gmail.com`
THEN I cannot login with Google for email `giraffereactor@gmail.com`

BECAUSE of `allowDangerousEmailAccountLinking = false`

_CASE 2_
If I made an account with OAuth Provider (Google or Github)
AND I am **LOGGED OUT**
I cannot login with the Credentials Provider that has the same EMAIL

e.g. Create account with Github for email `giraffereactor@gmail.com`
THEN I cannot login with Credentials for email `giraffereactor@gmail.com`

BECAUSE in `auth.ts` my `authorize` has the statement `if (!user.password) return null`
AND accounts created with OAuth Providers have no password.

[X] Custom Errors
[X] allowDangerousEmailAccountLinking

We will set `allowDangerousEmailAccountLinking = true`

**NOW - IF WE ARE LOGGED OUT**
if we make an acc with credentials -> we can link google and/or github to that same email
if we make an acc with google -> we can link github to that same email
if we make an acc with github -> we can link google to that same email

[X] DISCUSSION about **LOGGED IN** and account linking
[X] Protect Pages With Auth
[X] Authorized Callback
[X] Protect Pages With Middleware
[X] The Problem With The Crypto Module
[X] The `auth.config.ts` File

== PART 6 ==

[X] User Roles
[X] How to create an admin user
[X] Option 1 - The process.env method
[X] Option 2 - The process.env method (extended)
[X] Option 3 - Manually edit in SQL Console
[X] Option 4 - Create Admin Email Table
(continue from here)
[X] Option 5 - ADMIN Dashboard
[X] Email Verification Checkbox
[X] Email Verification Action
[X] Role Change Select
[X] Role Change Action
[X] Discussion - Don't allow admins to edit each other

[X] Email Time - Nodemailer
[X] Google Cloud Console
[X] OAuth Playground
[X] Setup Transporter (Nodemailer Instance)
[X] Verification Token Action
[X] Discussion Delete Verification Tokens **
[X] Auth Config Deny Email Verification
[X] Forgot Password UI
[X] Forgot Password Action (deter OAauth)
[X] Reset Password Form
[X] Reverify in Server Action
[X] Again with **

Extensions:

TRY THESE

1. delete user (as an admin)
2. manage verification tokens (delete them as needed)
3. add update to user.images
4. add another OAuth provider
5. add a third role


================================================
File: /components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}

================================================
File: /drizzle.config.ts
================================================
import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL ?? "";

const drizzleConfig = {
  schema: "./src/drizzle/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: { url: DATABASE_URL },
} satisfies Config;

export default defineConfig(drizzleConfig);


================================================
File: /next.config.mjs
================================================
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


================================================
File: /package.json
================================================
{
  "name": "authy",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
  },
  "dependencies": {
    "@auth/core": "^0.34.1",
    "@auth/drizzle-adapter": "^1.4.1",
    "@hookform/resolvers": "^3.9.0",
    "@icons-pack/react-simple-icons": "^9.6.0",
    "@neondatabase/serverless": "^0.9.4",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "argon2": "^0.40.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "drizzle-orm": "^0.32.0",
    "lucide-react": "^0.408.0",
    "next": "14.2.5",
    "next-auth": "5.0.0-beta.19",
    "nodemailer": "^6.9.14",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.52.1",
    "server-only": "^0.0.1",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7",
    "valibot": "^0.36.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/nodemailer": "^6.4.15",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "drizzle-kit": "^0.23.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.5",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}


================================================
File: /pnpm-lock.yaml
================================================
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@auth/core':
        specifier: ^0.34.1
        version: 0.34.1(nodemailer@6.9.14)
      '@auth/drizzle-adapter':
        specifier: ^1.4.1
        version: 1.4.1(nodemailer@6.9.14)
      '@hookform/resolvers':
        specifier: ^3.9.0
        version: 3.9.0(react-hook-form@7.52.1(react@18.3.1))
      '@icons-pack/react-simple-icons':
        specifier: ^9.6.0
        version: 9.6.0(react@18.3.1)
      '@neondatabase/serverless':
        specifier: ^0.9.4
        version: 0.9.4
      '@radix-ui/react-dialog':
        specifier: ^1.1.1
        version: 1.1.1(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-label':
        specifier: ^2.1.0
        version: 2.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot':
        specifier: ^1.1.0
        version: 1.1.0(@types/react@18.3.3)(react@18.3.1)
      argon2:
        specifier: ^0.40.3
        version: 0.40.3
      class-variance-authority:
        specifier: ^0.7.0
        version: 0.7.0
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      drizzle-orm:
        specifier: ^0.32.0
        version: 0.32.0(@neondatabase/serverless@0.9.4)(@types/pg@8.11.6)(@types/react@18.3.3)(react@18.3.1)
      lucide-react:
        specifier: ^0.408.0
        version: 0.408.0(react@18.3.1)
      next:
        specifier: 14.2.5
        version: 14.2.5(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      next-auth:
        specifier: 5.0.0-beta.19
        version: 5.0.0-beta.19(next@14.2.5(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(nodemailer@6.9.14)(react@18.3.1)
      nodemailer:
        specifier: ^6.9.14
        version: 6.9.14
      react:
        specifier: ^18
        version: 18.3.1
      react-dom:
        specifier: ^18
        version: 18.3.1(react@18.3.1)
      react-hook-form:
        specifier: ^7.52.1
        version: 7.52.1(react@18.3.1)
      server-only:
        specifier: ^0.0.1
        version: 0.0.1
      tailwind-merge:
        specifier: ^2.4.0
        version: 2.4.0
      tailwindcss-animate:
        specifier: ^1.0.7
        version: 1.0.7(tailwindcss@3.4.6)
      valibot:
        specifier: ^0.36.0
        version: 0.36.0
    devDependencies:
      '@types/node':
        specifier: ^20
        version: 20.14.11
      '@types/nodemailer':
        specifier: ^6.4.15
        version: 6.4.15
      '@types/react':
        specifier: ^18
        version: 18.3.3
      '@types/react-dom':
        specifier: ^18
        version: 18.3.0
      drizzle-kit:
        specifier: ^0.23.0
        version: 0.23.0
      eslint:
        specifier: ^8
        version: 8.57.0
      eslint-config-next:
        specifier: 14.2.5
        version: 14.2.5(eslint@8.57.0)(typescript@5.5.3)
      postcss:
        specifier: ^8
        version: 8.4.39
      prettier:
        specifier: ^3.3.3
        version: 3.3.3
      prettier-plugin-tailwindcss:
        specifier: ^0.6.5
        version: 0.6.5(prettier@3.3.3)
      tailwindcss:
        specifier: ^3.4.1
        version: 3.4.6
      typescript:
        specifier: ^5
        version: 5.5.3

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@auth/core@0.32.0':
    resolution: {integrity: sha512-3+ssTScBd+1fd0/fscAyQN1tSygXzuhysuVVzB942ggU4mdfiTbv36P0ccVnExKWYJKvu3E2r3/zxXCCAmTOrg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      nodemailer: ^6.8.0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true

  '@auth/core@0.34.1':
    resolution: {integrity: sha512-tuYU2VIbI8rFbkSwP710LmybB2FXJsPN7j3sjRVfN9SXVQBK2ej6LdewQaofpBGp4Mk+cC2UeiGNH0or4tgaeA==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      nodemailer: ^6.8.0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true

  '@auth/drizzle-adapter@1.4.1':
    resolution: {integrity: sha512-pUC8D0jfANDvThH1CrcUXmjZyF98ccVMY3iEZUQzUTr0U1csuppvRoz5JccOLzjv3tu+Nb9Qd6SvrmmsnuYgSw==}

  '@esbuild-kit/core-utils@3.3.2':
    resolution: {integrity: sha512-sPRAnw9CdSsRmEtnsl2WXWdyquogVpB3yZ3dgwJfe8zrOzTsV7cJvmwrKVa+0ma5BoiGJ+BoqkMvawbayKUsqQ==}

  '@esbuild-kit/esm-loader@2.6.5':
    resolution: {integrity: sha512-FxEMIkJKnodyA1OaCUoEvbYRkoZlLZ4d/eXFu9Fh8CbBBgP5EmZxrfTRyN0qpXZ4vOvqnE5YdRdcrmUUXuU+dA==}

  '@esbuild/aix-ppc64@0.19.12':
    resolution: {integrity: sha512-bmoCYyWdEL3wDQIVbcyzRyeKLgk2WtWLTWz1ZIAZF/EGbNOwSA6ew3PftJ1PqMiOOGu0OyFMzG53L0zqIpPeNA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.18.20':
    resolution: {integrity: sha512-Nz4rJcchGDtENV0eMKUNa6L12zz2zBDXuhj/Vjh18zGqB44Bi7MBMSXjgunJgjRhCmKOjnPuZp4Mb6OKqtMHLQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm64@0.19.12':
    resolution: {integrity: sha512-P0UVNGIienjZv3f5zq0DP3Nt2IE/3plFzuaS96vihvD0Hd6H/q4WXUGpCxD/E8YrSXfNyRPbpTq+T8ZQioSuPA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.18.20':
    resolution: {integrity: sha512-fyi7TDI/ijKKNZTUJAQqiG5T7YjJXgnzkURqmGj13C6dCqckZBLdl4h7bkhHt/t0WP+zO9/zwroDvANaOqO5Sw==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-arm@0.19.12':
    resolution: {integrity: sha512-qg/Lj1mu3CdQlDEEiWrlC4eaPZ1KztwGJ9B6J+/6G+/4ewxJg7gqj8eVYWvao1bXrqGiW2rsBZFSX3q2lcW05w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.18.20':
    resolution: {integrity: sha512-8GDdlePJA8D6zlZYJV/jnrRAi6rOiNaCC/JclcXpB+KIuvfBN4owLtgzY2bsxnx666XjJx2kDPUmnTtR8qKQUg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/android-x64@0.19.12':
    resolution: {integrity: sha512-3k7ZoUW6Q6YqhdhIaq/WZ7HwBpnFBlW905Fa4s4qWJyiNOgT1dOqDiVAQFwBH7gBRZr17gLrlFCRzF6jFh7Kew==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.18.20':
    resolution: {integrity: sha512-bxRHW5kHU38zS2lPTPOyuyTm+S+eobPUnTNkdJEfAddYgEcll4xkT8DB9d2008DtTbl7uJag2HuE5NZAZgnNEA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-arm64@0.19.12':
    resolution: {integrity: sha512-B6IeSgZgtEzGC42jsI+YYu9Z3HKRxp8ZT3cqhvliEHovq8HSX2YX8lNocDn79gCKJXOSaEot9MVYky7AKjCs8g==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.18.20':
    resolution: {integrity: sha512-pc5gxlMDxzm513qPGbCbDukOdsGtKhfxD1zJKXjCCcU7ju50O7MeAZ8c4krSJcOIJGFR+qx21yMMVYwiQvyTyQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/darwin-x64@0.19.12':
    resolution: {integrity: sha512-hKoVkKzFiToTgn+41qGhsUJXFlIjxI/jSYeZf3ugemDYZldIXIxhvwN6erJGlX4t5h417iFuheZ7l+YVn05N3A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.18.20':
    resolution: {integrity: sha512-yqDQHy4QHevpMAaxhhIwYPMv1NECwOvIpGCZkECn8w2WFHXjEwrBn3CeNIYsibZ/iZEUemj++M26W3cNR5h+Tw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-arm64@0.19.12':
    resolution: {integrity: sha512-4aRvFIXmwAcDBw9AueDQ2YnGmz5L6obe5kmPT8Vd+/+x/JMVKCgdcRwH6APrbpNXsPz+K653Qg8HB/oXvXVukA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.18.20':
    resolution: {integrity: sha512-tgWRPPuQsd3RmBZwarGVHZQvtzfEBOreNuxEMKFcd5DaDn2PbBxfwLcj4+aenoh7ctXcbXmOQIn8HI6mCSw5MQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.19.12':
    resolution: {integrity: sha512-EYoXZ4d8xtBoVN7CEwWY2IN4ho76xjYXqSXMNccFSx2lgqOG/1TBPW0yPx1bJZk94qu3tX0fycJeeQsKovA8gg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.18.20':
    resolution: {integrity: sha512-2YbscF+UL7SQAVIpnWvYwM+3LskyDmPhe31pE7/aoTMFKKzIc9lLbyGUpmmb8a8AixOL61sQ/mFh3jEjHYFvdA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm64@0.19.12':
    resolution: {integrity: sha512-EoTjyYyLuVPfdPLsGVVVC8a0p1BFFvtpQDB/YLEhaXyf/5bczaGeN15QkR+O4S5LeJ92Tqotve7i1jn35qwvdA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.18.20':
    resolution: {integrity: sha512-/5bHkMWnq1EgKr1V+Ybz3s1hWXok7mDFUMQ4cG10AfW3wL02PSZi5kFpYKrptDsgb2WAJIvRcDm+qIvXf/apvg==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-arm@0.19.12':
    resolution: {integrity: sha512-J5jPms//KhSNv+LO1S1TX1UWp1ucM6N6XuL6ITdKWElCu8wXP72l9MM0zDTzzeikVyqFE6U8YAV9/tFyj0ti+w==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.18.20':
    resolution: {integrity: sha512-P4etWwq6IsReT0E1KHU40bOnzMHoH73aXp96Fs8TIT6z9Hu8G6+0SHSw9i2isWrD2nbx2qo5yUqACgdfVGx7TA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-ia32@0.19.12':
    resolution: {integrity: sha512-Thsa42rrP1+UIGaWz47uydHSBOgTUnwBwNq59khgIwktK6x60Hivfbux9iNR0eHCHzOLjLMLfUMLCypBkZXMHA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.18.20':
    resolution: {integrity: sha512-nXW8nqBTrOpDLPgPY9uV+/1DjxoQ7DoB2N8eocyq8I9XuqJ7BiAMDMf9n1xZM9TgW0J8zrquIb/A7s3BJv7rjg==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-loong64@0.19.12':
    resolution: {integrity: sha512-LiXdXA0s3IqRRjm6rV6XaWATScKAXjI4R4LoDlvO7+yQqFdlr1Bax62sRwkVvRIrwXxvtYEHHI4dm50jAXkuAA==}
    engines: {node: '>=12'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.18.20':
    resolution: {integrity: sha512-d5NeaXZcHp8PzYy5VnXV3VSd2D328Zb+9dEq5HE6bw6+N86JVPExrA6O68OPwobntbNJ0pzCpUFZTo3w0GyetQ==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-mips64el@0.19.12':
    resolution: {integrity: sha512-fEnAuj5VGTanfJ07ff0gOA6IPsvrVHLVb6Lyd1g2/ed67oU1eFzL0r9WL7ZzscD+/N6i3dWumGE1Un4f7Amf+w==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.18.20':
    resolution: {integrity: sha512-WHPyeScRNcmANnLQkq6AfyXRFr5D6N2sKgkFo2FqguP44Nw2eyDlbTdZwd9GYk98DZG9QItIiTlFLHJHjxP3FA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-ppc64@0.19.12':
    resolution: {integrity: sha512-nYJA2/QPimDQOh1rKWedNOe3Gfc8PabU7HT3iXWtNUbRzXS9+vgB0Fjaqr//XNbd82mCxHzik2qotuI89cfixg==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.18.20':
    resolution: {integrity: sha512-WSxo6h5ecI5XH34KC7w5veNnKkju3zBRLEQNY7mv5mtBmrP/MjNBCAlsM2u5hDBlS3NGcTQpoBvRzqBcRtpq1A==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-riscv64@0.19.12':
    resolution: {integrity: sha512-2MueBrlPQCw5dVJJpQdUYgeqIzDQgw3QtiAHUC4RBz9FXPrskyyU3VI1hw7C0BSKB9OduwSJ79FTCqtGMWqJHg==}
    engines: {node: '>=12'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.18.20':
    resolution: {integrity: sha512-+8231GMs3mAEth6Ja1iK0a1sQ3ohfcpzpRLH8uuc5/KVDFneH6jtAJLFGafpzpMRO6DzJ6AvXKze9LfFMrIHVQ==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-s390x@0.19.12':
    resolution: {integrity: sha512-+Pil1Nv3Umes4m3AZKqA2anfhJiVmNCYkPchwFJNEJN5QxmTs1uzyy4TvmDrCRNT2ApwSari7ZIgrPeUx4UZDg==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.18.20':
    resolution: {integrity: sha512-UYqiqemphJcNsFEskc73jQ7B9jgwjWrSayxawS6UVFZGWrAAtkzjxSqnoclCXxWtfwLdzU+vTpcNYhpn43uP1w==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/linux-x64@0.19.12':
    resolution: {integrity: sha512-B71g1QpxfwBvNrfyJdVDexenDIt1CiDN1TIXLbhOw0KhJzE78KIFGX6OJ9MrtC0oOqMWf+0xop4qEU8JrJTwCg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-x64@0.18.20':
    resolution: {integrity: sha512-iO1c++VP6xUBUmltHZoMtCUdPlnPGdBom6IrO4gyKPFFVBKioIImVooR5I83nTew5UOYrk3gIJhbZh8X44y06A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.19.12':
    resolution: {integrity: sha512-3ltjQ7n1owJgFbuC61Oj++XhtzmymoCihNFgT84UAmJnxJfm4sYCiSLTXZtE00VWYpPMYc+ZQmB6xbSdVh0JWA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-x64@0.18.20':
    resolution: {integrity: sha512-e5e4YSsuQfX4cxcygw/UCPIEP6wbIL+se3sxPdCiMbFLBWu0eiZOJ7WoD+ptCLrmjZBK1Wk7I6D/I3NglUGOxg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.19.12':
    resolution: {integrity: sha512-RbrfTB9SWsr0kWmb9srfF+L933uMDdu9BIzdA7os2t0TXhCRjrQyCeOt6wVxr79CKD4c+p+YhCj31HBkYcXebw==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.18.20':
    resolution: {integrity: sha512-kDbFRFp0YpTQVVrqUd5FTYmWo45zGaXe0X8E1G/LKFC0v8x0vWrhOWSLITcCn63lmZIxfOMXtCfti/RxN/0wnQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/sunos-x64@0.19.12':
    resolution: {integrity: sha512-HKjJwRrW8uWtCQnQOz9qcU3mUZhTUQvi56Q8DPTLLB+DawoiQdjsYq+j+D3s9I8VFtDr+F9CjgXKKC4ss89IeA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.18.20':
    resolution: {integrity: sha512-ddYFR6ItYgoaq4v4JmQQaAI5s7npztfV4Ag6NrhiaW0RrnOXqBkgwZLofVTlq1daVTQNhtI5oieTvkRPfZrePg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-arm64@0.19.12':
    resolution: {integrity: sha512-URgtR1dJnmGvX864pn1B2YUYNzjmXkuJOIqG2HdU62MVS4EHpU2946OZoTMnRUHklGtJdJZ33QfzdjGACXhn1A==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.18.20':
    resolution: {integrity: sha512-Wv7QBi3ID/rROT08SABTS7eV4hX26sVduqDOTe1MvGMjNd3EjOz4b7zeexIR62GTIEKrfJXKL9LFxTYgkyeu7g==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-ia32@0.19.12':
    resolution: {integrity: sha512-+ZOE6pUkMOJfmxmBZElNOx72NKpIa/HFOMGzu8fqzQJ5kgf6aTGrcJaFsNiVMH4JKpMipyK+7k0n2UXN7a8YKQ==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.18.20':
    resolution: {integrity: sha512-kTdfRcSiDfQca/y9QIkng02avJ+NCaQvrMejlsB3RRv5sE9rRoeBPISaZpKxHELzRxZyLvNts1P27W3wV+8geQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@esbuild/win32-x64@0.19.12':
    resolution: {integrity: sha512-T1QyPSDCyMXaO3pzBkF96E8xMkiRYbUEZADd29SyPGabqxMViNoii+NcK7eWJAEoU6RZyEm5lVSIjTmcdoB9HA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]

  '@eslint-community/eslint-utils@4.4.0':
    resolution: {integrity: sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.11.0':
    resolution: {integrity: sha512-G/M/tIiMrTAxEWRfLfQJMmGNX28IxBg4PBz8XqQhqUHLFI6TL2htpIB1iQCj144V5ee/JaKyT9/WZ0MGZWfA7A==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/eslintrc@2.1.4':
    resolution: {integrity: sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@eslint/js@8.57.0':
    resolution: {integrity: sha512-Ys+3g2TaW7gADOJzPt83SJtCDhMjndcDMFVQ/Tj9iA1BfJzFKD9mAUXT3OenpuPHbI6P/myECxRJrofUsDx/5g==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@hookform/resolvers@3.9.0':
    resolution: {integrity: sha512-bU0Gr4EepJ/EQsH/IwEzYLsT/PEj5C0ynLQ4m+GSHS+xKH4TfSelhluTgOaoc4kA5s7eCsQbM4wvZLzELmWzUg==}
    peerDependencies:
      react-hook-form: ^7.0.0

  '@humanwhocodes/config-array@0.11.14':
    resolution: {integrity: sha512-3T8LkOmg45BV5FICb15QQMsyUSWrQ8AygVfC7ZG32zOalnqrilm018ZVCw0eapXux8FtA33q8PSRSstjee3jSg==}
    engines: {node: '>=10.10.0'}
    deprecated: Use @eslint/config-array instead

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/object-schema@2.0.3':
    resolution: {integrity: sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==}
    deprecated: Use @eslint/object-schema instead

  '@icons-pack/react-simple-icons@9.6.0':
    resolution: {integrity: sha512-8lDLssg+2aJutepQV/P4zlGm0fgujSeIItCYaLKo+25NtwepozWxZJOnc5WGHSi3HjiLcGmxI6dA2eiD5w3i+w==}
    peerDependencies:
      react: ^16.13 || ^17 || ^18

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.5':
    resolution: {integrity: sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@neondatabase/serverless@0.9.4':
    resolution: {integrity: sha512-D0AXgJh6xkf+XTlsO7iwE2Q1w8981E1cLCPAALMU2YKtkF/1SF6BiAzYARZFYo175ON+b1RNIy9TdSFHm5nteg==}

  '@next/env@14.2.5':
    resolution: {integrity: sha512-/zZGkrTOsraVfYjGP8uM0p6r0BDT6xWpkjdVbcz66PJVSpwXX3yNiRycxAuDfBKGWBrZBXRuK/YVlkNgxHGwmA==}

  '@next/eslint-plugin-next@14.2.5':
    resolution: {integrity: sha512-LY3btOpPh+OTIpviNojDpUdIbHW9j0JBYBjsIp8IxtDFfYFyORvw3yNq6N231FVqQA7n7lwaf7xHbVJlA1ED7g==}

  '@next/swc-darwin-arm64@14.2.5':
    resolution: {integrity: sha512-/9zVxJ+K9lrzSGli1///ujyRfon/ZneeZ+v4ptpiPoOU+GKZnm8Wj8ELWU1Pm7GHltYRBklmXMTUqM/DqQ99FQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@14.2.5':
    resolution: {integrity: sha512-vXHOPCwfDe9qLDuq7U1OYM2wUY+KQ4Ex6ozwsKxp26BlJ6XXbHleOUldenM67JRyBfVjv371oneEvYd3H2gNSA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@14.2.5':
    resolution: {integrity: sha512-vlhB8wI+lj8q1ExFW8lbWutA4M2ZazQNvMWuEDqZcuJJc78iUnLdPPunBPX8rC4IgT6lIx/adB+Cwrl99MzNaA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@14.2.5':
    resolution: {integrity: sha512-NpDB9NUR2t0hXzJJwQSGu1IAOYybsfeB+LxpGsXrRIb7QOrYmidJz3shzY8cM6+rO4Aojuef0N/PEaX18pi9OA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@14.2.5':
    resolution: {integrity: sha512-8XFikMSxWleYNryWIjiCX+gU201YS+erTUidKdyOVYi5qUQo/gRxv/3N1oZFCgqpesN6FPeqGM72Zve+nReVXQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@14.2.5':
    resolution: {integrity: sha512-6QLwi7RaYiQDcRDSU/os40r5o06b5ue7Jsk5JgdRBGGp8l37RZEh9JsLSM8QF0YDsgcosSeHjglgqi25+m04IQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@14.2.5':
    resolution: {integrity: sha512-1GpG2VhbspO+aYoMOQPQiqc/tG3LzmsdBH0LhnDS3JrtDx2QmzXe0B6mSZZiN3Bq7IOMXxv1nlsjzoS1+9mzZw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-ia32-msvc@14.2.5':
    resolution: {integrity: sha512-Igh9ZlxwvCDsu6438FXlQTHlRno4gFpJzqPjSIBZooD22tKeI4fE/YMRoHVJHmrQ2P5YL1DoZ0qaOKkbeFWeMg==}
    engines: {node: '>= 10'}
    cpu: [ia32]
    os: [win32]

  '@next/swc-win32-x64-msvc@14.2.5':
    resolution: {integrity: sha512-tEQ7oinq1/CjSG9uSTerca3v4AZ+dFa+4Yu6ihaG8Ud8ddqLQgFGcnwYls13H5X5CPDPZJdYxyeMui6muOLd4g==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@panva/hkdf@1.2.1':
    resolution: {integrity: sha512-6oclG6Y3PiDFcoyk8srjLfVKyMfVCKJ27JwNPViuXziFpmdz+MZnZN/aKY0JGXgYuO/VghU0jcOAZgWXZ1Dmrw==}

  '@phc/format@1.0.0':
    resolution: {integrity: sha512-m7X9U6BG2+J+R1lSOdCiITLLrxm+cWlNI3HUFA92oLO77ObGNzaKdh8pMLqdZcshtkKuV84olNNXDfMc4FezBQ==}
    engines: {node: '>=10'}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@radix-ui/primitive@1.1.0':
    resolution: {integrity: sha512-4Z8dn6Upk0qk4P74xBhZ6Hd/w0mPEzOOLxy4xiPXOXqjF7jZS0VAKk7/x/H6FyY2zCkYJqePf1G5KmkmNJ4RBA==}

  '@radix-ui/react-compose-refs@1.1.0':
    resolution: {integrity: sha512-b4inOtiaOnYf9KWyO3jAeeCG6FeyfY6ldiEPanbUjWd+xIk5wZeHa8yVwmrJ2vderhu/BQvzCrJI0lHd+wIiqw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.0':
    resolution: {integrity: sha512-OKrckBy+sMEgYM/sMmqmErVn0kZqrHPJze+Ql3DzYsDDp0hl0L62nx/2122/Bvps1qz645jlcu2tD9lrRSdf8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.1':
    resolution: {integrity: sha512-zysS+iU4YP3STKNS6USvFVqI4qqx8EpiwmT5TuCApVEBca+eRCbONi4EgzfNSuVnOXvC5UPHHMjs8RXO6DH9Bg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.0':
    resolution: {integrity: sha512-/UovfmmXGptwGcBQawLzvn2jOfM0t4z3/uKffoBlj724+n3FvBbZ7M0aaBOmkp6pqFYpO4yx8tSVJjx3Fl2jig==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.0':
    resolution: {integrity: sha512-w6XZNUPVv6xCpZUqb/yN9DL6auvpGX3C/ee6Hdi16v2UUy25HV2Q5bcflsiDyT/g5RwbPQ/GIT1vLkeRb+ITBw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.0':
    resolution: {integrity: sha512-200UD8zylvEyL8Bx+z76RJnASR2gRMuxlgFCPAe/Q/679a/r0eK3MBVYMb7vZODZcffZBdob1EGnky78xmVvcA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.0':
    resolution: {integrity: sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.0':
    resolution: {integrity: sha512-peLblDlFw/ngk3UWq0VnYaOLy6agTZZ+MUO/WhVfm14vJGML+xH4FAl2XQGLqdefjNb7ApRg6Yn7U42ZhmYXdw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.1':
    resolution: {integrity: sha512-A3UtLk85UtqhzFqtoC8Q0KvR2GbXF3mtPgACSazajqq6A41mEQgo53iPzY4i6BwDxlIFqWIhiQ2G729n+2aw/g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.0':
    resolution: {integrity: sha512-Gq6wuRN/asf9H/E/VzdKoUtT8GC9PQc9z40/vEr0VCJ4u5XvvhWIrSsCB6vD2/cH7ugTdSfYq9fLJCcM00acrQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.0':
    resolution: {integrity: sha512-ZSpFm0/uHa8zTvKBDjLFWLo8dkr4MBsiDLz0g3gMUwqgLHz9rTaRRGYDgvZPtBJgYCBKXkS9fzmoySgr8CO6Cw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.1.0':
    resolution: {integrity: sha512-FUCf5XMfmW4dtYl69pdS4DbxKy8nj4M7SafBgPllysxmdachynNflAdp/gCsnYWNDnge6tI9onzMp5ARYc1KNw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.0':
    resolution: {integrity: sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.1.0':
    resolution: {integrity: sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.0':
    resolution: {integrity: sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.0':
    resolution: {integrity: sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@rushstack/eslint-patch@1.10.3':
    resolution: {integrity: sha512-qC/xYId4NMebE6w/V33Fh9gWxLgURiNYgVNObbJl2LZv0GUUItCcCqC5axQSwRaAgaxl2mELq1rMzlswaQ0Zxg==}

  '@swc/counter@0.1.3':
    resolution: {integrity: sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==}

  '@swc/helpers@0.5.5':
    resolution: {integrity: sha512-KGYxvIOXcceOAbEk4bi/dVLEK9z8sZ0uBB3Il5b1rhfClSpcX0yfRO0KmTkqR2cnQDymwLB+25ZyMzICg/cm/A==}

  '@types/cookie@0.6.0':
    resolution: {integrity: sha512-4Kh9a6B2bQciAhf7FSuMRRkUWecJgJu9nPnx3yzpsfXX/c50REIqpHY4C82bXP90qrLtXtkDxTZosYO3UpOwlA==}

  '@types/json5@0.0.29':
    resolution: {integrity: sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==}

  '@types/node@20.14.11':
    resolution: {integrity: sha512-kprQpL8MMeszbz6ojB5/tU8PLN4kesnN8Gjzw349rDlNgsSzg90lAVj3llK99Dh7JON+t9AuscPPFW6mPbTnSA==}

  '@types/nodemailer@6.4.15':
    resolution: {integrity: sha512-0EBJxawVNjPkng1zm2vopRctuWVCxk34JcIlRuXSf54habUWdz1FB7wHDqOqvDa8Mtpt0Q3LTXQkAs2LNyK5jQ==}

  '@types/pg@8.11.6':
    resolution: {integrity: sha512-/2WmmBXHLsfRqzfHW7BNZ8SbYzE8OSk7i3WjFYvfgRHj7S1xj+16Je5fUKv3lVdVzk/zn9TXOqf+avFCFIE0yQ==}

  '@types/prop-types@15.7.12':
    resolution: {integrity: sha512-5zvhXYtRNRluoE/jAp4GVsSduVUzNWKkOZrCDBWYtE7biZywwdC2AcEzg+cSMLFRfVgeAFqpfNabiPjxFddV1Q==}

  '@types/react-dom@18.3.0':
    resolution: {integrity: sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==}

  '@types/react@18.3.3':
    resolution: {integrity: sha512-hti/R0pS0q1/xx+TsI73XIqk26eBsISZ2R0wUijXIngRK9R/e7Xw/cXVxQK7R5JjW+SV4zGcn5hXjudkN/pLIw==}

  '@typescript-eslint/parser@7.2.0':
    resolution: {integrity: sha512-5FKsVcHTk6TafQKQbuIVkXq58Fnbkd2wDL4LB7AURN7RUOu1utVP+G8+6u3ZhEroW3DF6hyo3ZEXxgKgp4KeCg==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^8.56.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/scope-manager@7.2.0':
    resolution: {integrity: sha512-Qh976RbQM/fYtjx9hs4XkayYujB/aPwglw2choHmf3zBjB4qOywWSdt9+KLRdHubGcoSwBnXUH2sR3hkyaERRg==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/types@7.2.0':
    resolution: {integrity: sha512-XFtUHPI/abFhm4cbCDc5Ykc8npOKBSJePY3a3s+lwumt7XWJuzP5cZcfZ610MIPHjQjNsOLlYK8ASPaNG8UiyA==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/typescript-estree@7.2.0':
    resolution: {integrity: sha512-cyxS5WQQCoBwSakpMrvMXuMDEbhOo9bNHHrNcEWis6XHx6KF518tkF1wBvKIn/tpq5ZpUYK7Bdklu8qY0MsFIA==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/visitor-keys@7.2.0':
    resolution: {integrity: sha512-c6EIQRHhcpl6+tO8EMR+kjkkV+ugUNXOmeASA1rlzkd8EPIriavpWoiEz1HR/VLhbVIdhqnV6E7JZm00cBDx2A==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@ungap/structured-clone@1.2.0':
    resolution: {integrity: sha512-zuVdFrMJiuCDQUMCzQaD6KL28MjnqqN8XnAqiEq9PNm/hCPTSGfrXCOfwj1ow4LFb/tNymJPwsNbVePc1xFqrQ==}

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.12.1:
    resolution: {integrity: sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.0.1:
    resolution: {integrity: sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argon2@0.40.3:
    resolution: {integrity: sha512-FrSmz4VeM91jwFvvjsQv9GYp6o/kARWoYKjbjDB2U5io1H3e5X67PYGclFDeQff6UXIhUd4aHR3mxCdBbMMuQw==}
    engines: {node: '>=16.17.0'}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.4:
    resolution: {integrity: sha512-y+CcFFwelSXpLZk/7fMB2mUbGtX9lKycf1MWJ7CaTIERyitVlyQx6C+sxcROU2BAJ24OiZyK+8wj2i8AlBoS3A==}
    engines: {node: '>=10'}

  aria-query@5.1.3:
    resolution: {integrity: sha512-R5iJ5lkuHybztUfuOAznmboyjWq8O6sqNqtK7CLOqdydi54VNbORp49mb14KbWgG1QD3JFO9hJdZ+y4KutfdOQ==}

  array-buffer-byte-length@1.0.1:
    resolution: {integrity: sha512-ahC5W1xgou+KTXix4sAO8Ki12Q+jf4i0+tmk3sC+zgcynshkHxzpXdImBehiUYKKKDwvfFiJl1tZt6ewscS1Mg==}
    engines: {node: '>= 0.4'}

  array-includes@3.1.8:
    resolution: {integrity: sha512-itaWrbYbqpGXkGhZPGUulwnhVf5Hpy1xiCFsGqyIGglbBxmG5vSjxQen3/WGOjPpNEv1RtBLKxbmVXm8HpJStQ==}
    engines: {node: '>= 0.4'}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlastindex@1.2.5:
    resolution: {integrity: sha512-zfETvRFA8o7EiNn++N5f/kaCw221hrpGsDmcpndVupkPzEc1Wuf3VgC0qby1BbHs7f5DVYjgtEU2LLh5bqeGfQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.2:
    resolution: {integrity: sha512-djYB+Zx2vLewY8RWlNCUdHjDXs2XOgm602S9E7P/UpHgfeHL00cRiIF+IN/G/aUJ7kGPb6yO/ErDI5V2s8iycA==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.2:
    resolution: {integrity: sha512-Ewyx0c9PmpcsByhSW4r+9zDU7sGjFc86qf/kKtuSCRdhfbk0SNLLkaT5qvcHnRGgc5NP/ly/y+qkXkqONX54CQ==}
    engines: {node: '>= 0.4'}

  array.prototype.toreversed@1.1.2:
    resolution: {integrity: sha512-wwDCoT4Ck4Cz7sLtgUmzR5UV3YF5mFHUlbChCzZBQZ+0m2cl/DH3tKgvphv1nKgFsJ48oCSg6p91q2Vm0I/ZMA==}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.3:
    resolution: {integrity: sha512-bMxMKAjg13EBSVscxTaYA4mRc5t1UAXa2kXiGTNfZ079HIWXEkKmkgFrh/nJqamaLSrXO5H4WFFkPEaLJWbs3A==}
    engines: {node: '>= 0.4'}

  ast-types-flow@0.0.8:
    resolution: {integrity: sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==}

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axe-core@4.9.1:
    resolution: {integrity: sha512-QbUdXJVTpvUTHU7871ppZkdOLBeGUKBQWHkHrvN2V9IQWGMt61zf3B45BtzjxEJzYuj0JBjBZP/hmYS/R9pmAw==}
    engines: {node: '>=4'}

  axobject-query@3.1.1:
    resolution: {integrity: sha512-goKlv8DZrK9hUh975fnHzhNIO4jUnFCfv/dszV5VwUGDFjI6vQ2VwoyjYjYNEbBE8AH87TduWP5uyDR1D+Iteg==}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  call-bind@1.0.7:
    resolution: {integrity: sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  caniuse-lite@1.0.30001642:
    resolution: {integrity: sha512-3XQ0DoRgLijXJErLSl+bLnJ+Et4KqV1PY6JJBGAFlsNsz31zeAIncyeZfLCabHK/jtSh+671RM9YMldxjUPZtA==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  class-variance-authority@0.7.0:
    resolution: {integrity: sha512-jFI8IQw4hczaL4ALINxqLEXQbWcNjoSkloa4IaufXCJr6QawJyw7tuRysRsrE8w2p/4gGaxKIt/hX3qz/IbD1A==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clsx@2.0.0:
    resolution: {integrity: sha512-rQ1+kcj+ttHG0MKVGBUXwayCCF1oh39BF5COIpRzuCEv8Mwjv0XucrI2ExNTOn9IlLifGClWQcU9BrZORvtw6Q==}
    engines: {node: '>=6'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  cookie@0.6.0:
    resolution: {integrity: sha512-U71cyTamuh1CRNCfpGY6to28lxvNwPG4Guz/EVjgf3Jmzv0vlDp1atT9eS5dDjMYHucpHbWns6Lwf3BKz6svdw==}
    engines: {node: '>= 0.6'}

  cross-spawn@7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  damerau-levenshtein@1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}

  data-view-buffer@1.0.1:
    resolution: {integrity: sha512-0lht7OugA5x3iJLOWFhWK/5ehONdprk0ISXqVFn/NFrDu+cuc8iADFrGQz5BnRK7LLU3JmkbXSxaqX+/mXYtUA==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.1:
    resolution: {integrity: sha512-4J7wRJD3ABAzr8wP+OcIcqq2dlUKp4DVflx++hs5h5ZKydWMI6/D/fAot+yh6g2tHh8fLFTvNOaVN357NvSrOQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.0:
    resolution: {integrity: sha512-t/Ygsytq+R995EJ5PZlD4Cu56sWa8InXySaViRzw9apusqsOO2bQP+SbYzAhR0pFKoB+43lYy8rWban9JSuXnA==}
    engines: {node: '>= 0.4'}

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.3.5:
    resolution: {integrity: sha512-pt0bNEmneDIvdL1Xsd9oDQ/wrQRkXDT4AUWlNZNPKvW5x/jyO9VFXkJUP07vQ2upmw5PlaITaPKc31jK13V+jg==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  deep-equal@2.2.3:
    resolution: {integrity: sha512-ZIwpnevOurS8bpT4192sqAowWM76JDKSHYzMLty3BZGSswgq6pBaH3DhCSW5xVAZICZyKdOBPjwww5wfgT/6PA==}
    engines: {node: '>= 0.4'}

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  doctrine@3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}

  drizzle-kit@0.23.0:
    resolution: {integrity: sha512-w9jE97z193dd4jzAyj4Uv2SOh8Ydue70Ki6W0awy4bGM1aPXan6zD6Yv+nNTA6oGgNTDl2MJFxutjHG4fden5g==}
    hasBin: true

  drizzle-orm@0.32.0:
    resolution: {integrity: sha512-99IlfVGPNHzOFEXo9Phyu5At5TALLsY2t6WxFFy68rYd9Ej4cHX/7WjdPOn7JNRW69MNeNtP8XrDQg43SppuAA==}
    peerDependencies:
      '@aws-sdk/client-rds-data': '>=3'
      '@cloudflare/workers-types': '>=3'
      '@electric-sql/pglite': '>=0.1.1'
      '@libsql/client': '*'
      '@neondatabase/serverless': '>=0.1'
      '@op-engineering/op-sqlite': '>=2'
      '@opentelemetry/api': ^1.4.1
      '@planetscale/database': '>=1'
      '@prisma/client': '*'
      '@tidbcloud/serverless': '*'
      '@types/better-sqlite3': '*'
      '@types/pg': '*'
      '@types/react': '>=18'
      '@types/sql.js': '*'
      '@vercel/postgres': '>=0.8.0'
      '@xata.io/client': '*'
      better-sqlite3: '>=7'
      bun-types: '*'
      expo-sqlite: '>=13.2.0'
      knex: '*'
      kysely: '*'
      mysql2: '>=2'
      pg: '>=8'
      postgres: '>=3'
      prisma: '*'
      react: '>=18'
      sql.js: '>=1'
      sqlite3: '>=5'
    peerDependenciesMeta:
      '@aws-sdk/client-rds-data':
        optional: true
      '@cloudflare/workers-types':
        optional: true
      '@electric-sql/pglite':
        optional: true
      '@libsql/client':
        optional: true
      '@neondatabase/serverless':
        optional: true
      '@op-engineering/op-sqlite':
        optional: true
      '@opentelemetry/api':
        optional: true
      '@planetscale/database':
        optional: true
      '@prisma/client':
        optional: true
      '@tidbcloud/serverless':
        optional: true
      '@types/better-sqlite3':
        optional: true
      '@types/pg':
        optional: true
      '@types/react':
        optional: true
      '@types/sql.js':
        optional: true
      '@vercel/postgres':
        optional: true
      '@xata.io/client':
        optional: true
      better-sqlite3:
        optional: true
      bun-types:
        optional: true
      expo-sqlite:
        optional: true
      knex:
        optional: true
      kysely:
        optional: true
      mysql2:
        optional: true
      pg:
        optional: true
      postgres:
        optional: true
      prisma:
        optional: true
      react:
        optional: true
      sql.js:
        optional: true
      sqlite3:
        optional: true

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  enhanced-resolve@5.17.0:
    resolution: {integrity: sha512-dwDPwZL0dmye8Txp2gzFmA6sxALaSvdRDjPH0viLcKrtlOL3tw62nWWweVD1SdILDTJrbrL6tdWVN58Wo6U3eA==}
    engines: {node: '>=10.13.0'}

  es-abstract@1.23.3:
    resolution: {integrity: sha512-e+HfNH61Bj1X9/jLc5v1owaLYuHdeHHSQlkhCBiTK8rBvKaULl/beGMxwrMXjpYrv4pz22BlY570vVePA2ho4A==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.0:
    resolution: {integrity: sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-get-iterator@1.1.3:
    resolution: {integrity: sha512-sPZmqHBe6JIiTfN5q2pEi//TwxmAFHwj/XEuYjTuse78i8KxaqMTTzxPoFKuzRpDpTJ+0NAbpfenkmH2rePtuw==}

  es-iterator-helpers@1.0.19:
    resolution: {integrity: sha512-zoMwbCcH5hwUkKJkT8kDIBZSz9I6mVG//+lDCinLCGov4+r7NIy0ld8o03M0cJxl2spVf6ESYVS6/gpIfq1FFw==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.0.0:
    resolution: {integrity: sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.0.3:
    resolution: {integrity: sha512-3T8uNMC3OQTHkFUsFq8r/BwAXLHvU/9O9mE0fBc/MY5iq/8H7ncvO947LmYA6ldWw9Uh8Yhf25zu6n7nML5QWQ==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.0.2:
    resolution: {integrity: sha512-J3yBRXCzDu4ULnQwxyToo/OjdMx6akgVC7K6few0a7F/0wLtmKKN7I73AH5T2836UuXRqN7Qg+IIUw/+YJksRw==}

  es-to-primitive@1.2.1:
    resolution: {integrity: sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==}
    engines: {node: '>= 0.4'}

  esbuild-register@3.5.0:
    resolution: {integrity: sha512-+4G/XmakeBAsvJuDugJvtyF1x+XJT4FMocynNpxrvEBViirpfUn2PgNpCHedfWhF4WokNsO/OvMKrmJOIJsI5A==}
    peerDependencies:
      esbuild: '>=0.12 <1'

  esbuild@0.18.20:
    resolution: {integrity: sha512-ceqxoedUrcayh7Y7ZX6NdbbDzGROiyVBgC4PriJThBKSVPWnnFHZAkfI1lJT8QFkOwH4qOS2SJkS4wvpGl8BpA==}
    engines: {node: '>=12'}
    hasBin: true

  esbuild@0.19.12:
    resolution: {integrity: sha512-aARqgq8roFBj054KvQr5f1sFu0D65G+miZRCuJyJ0G13Zwx7vRar5Zhn2tkQNzIXcBrNVsv/8stehpj+GAjgbg==}
    engines: {node: '>=12'}
    hasBin: true

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-next@14.2.5:
    resolution: {integrity: sha512-zogs9zlOiZ7ka+wgUnmcM0KBEDjo4Jis7kxN1jvC0N4wynQ2MIx/KBkg4mVF63J5EK4W0QMCn7xO3vNisjaAoA==}
    peerDependencies:
      eslint: ^7.23.0 || ^8.0.0
      typescript: '>=3.3.1'
    peerDependenciesMeta:
      typescript:
        optional: true

  eslint-import-resolver-node@0.3.9:
    resolution: {integrity: sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==}

  eslint-import-resolver-typescript@3.6.1:
    resolution: {integrity: sha512-xgdptdoi5W3niYeuQxKmzVDTATvLYqhpwmykwsh7f6HIOStGWEIL9iqZgQDF9u9OEzrRwR8no5q2VT+bjAujTg==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      eslint-plugin-import: '*'

  eslint-module-utils@2.8.1:
    resolution: {integrity: sha512-rXDXR3h7cs7dy9RNpUlQf80nX31XWJEyGq1tRMo+6GsO5VmTe4UTwtmonAD4ZkAsrfMVDA2wlGJ3790Ys+D49Q==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: '*'
      eslint-import-resolver-node: '*'
      eslint-import-resolver-typescript: '*'
      eslint-import-resolver-webpack: '*'
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true
      eslint:
        optional: true
      eslint-import-resolver-node:
        optional: true
      eslint-import-resolver-typescript:
        optional: true
      eslint-import-resolver-webpack:
        optional: true

  eslint-plugin-import@2.29.1:
    resolution: {integrity: sha512-BbPC0cuExzhiMo4Ff1BTVwHpjjv28C5R+btTOGaCRC7UEz801up0JadwkeSk5Ued6TG34uaczuVuH6qyy5YUxw==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true

  eslint-plugin-jsx-a11y@6.9.0:
    resolution: {integrity: sha512-nOFOCaJG2pYqORjK19lqPqxMO/JpvdCZdPtNdxY3kvom3jTvkAbOvQvD8wuD0G8BYR0IGAGYDlzqWJOh/ybn2g==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8

  eslint-plugin-react-hooks@4.6.2:
    resolution: {integrity: sha512-QzliNJq4GinDBcD8gPB5v0wh6g8q3SUi6EFF0x8N/BL9PoVs0atuGc47ozMRyOWAKdwaZ5OnbOEa3WR+dSGKuQ==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0

  eslint-plugin-react@7.34.4:
    resolution: {integrity: sha512-Np+jo9bUwJNxCsT12pXtrGhJgT3T44T1sHhn1Ssr42XFn8TES0267wPGo5nNrMHi8qkyimDAX2BUmkf9pSaVzA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8

  eslint-scope@7.2.2:
    resolution: {integrity: sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint@8.57.0:
    resolution: {integrity: sha512-dZ6+mexnaTIbSBZWgou51U6OmzIhYM2VcNdtiTtI7qPNZm35Akpr0f6vtw3w1Kmn5PYo+tZVfh13WrhpS6oLqQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    hasBin: true

  espree@9.6.1:
    resolution: {integrity: sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}

  file-entry-cache@6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@3.2.0:
    resolution: {integrity: sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==}
    engines: {node: ^10.12.0 || >=12.0.0}

  flatted@3.3.1:
    resolution: {integrity: sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==}

  for-each@0.3.3:
    resolution: {integrity: sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==}

  foreground-child@3.2.1:
    resolution: {integrity: sha512-PXUUyLqrR2XCWICfv6ukppP96sdFwWbNEnfEMt7jNsISjMsvaLNinAHNDYyvkyU+SZG2BTSbT5NjG+vZslfGTA==}
    engines: {node: '>=14'}

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.6:
    resolution: {integrity: sha512-Z5kx79swU5P27WEayXM1tBi5Ze/lbIyiNgU3qyXUOf9b2rgXYyF9Dy9Cx+IQv/Lc8WCG6L82zwUPpSS9hGehIg==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  get-intrinsic@1.2.4:
    resolution: {integrity: sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-symbol-description@1.0.2:
    resolution: {integrity: sha512-g0QYk1dZBxGwk+Ngc+ltRH2IBp2f7zBkBMBJZCDerh6EhlhSR6+9irMCuT/09zD6qkarHUSn529sK/yL4S27mg==}
    engines: {node: '>= 0.4'}

  get-tsconfig@4.7.5:
    resolution: {integrity: sha512-ZCuZCnlqNzjb4QprAzXKdpp/gh6KTxSJuw3IBsPnV/7fV4NxC9ckB+vPTt8w7fJA0TaSD7c55BR47JD6MEDyDw==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@10.3.10:
    resolution: {integrity: sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@13.24.0:
    resolution: {integrity: sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==}
    engines: {node: '>=8'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  globby@11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}

  gopd@1.0.1:
    resolution: {integrity: sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  has-bigints@1.0.2:
    resolution: {integrity: sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.0.3:
    resolution: {integrity: sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==}
    engines: {node: '>= 0.4'}

  has-symbols@1.0.3:
    resolution: {integrity: sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  ignore@5.3.1:
    resolution: {integrity: sha512-5Fytz/IraMjqpwfd34ke28PTVMjZjJG2MPn5t7OE4eUCUNf8BAa7b5WUS9/Qvr6mwOQS7Mk6vdsMno5he+T8Xw==}
    engines: {node: '>= 4'}

  import-fresh@3.3.0:
    resolution: {integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  internal-slot@1.0.7:
    resolution: {integrity: sha512-NGnrKwXzSms2qUUih/ILZ5JBqNTSa1+ZmP6flaIp6KmSElgE9qdndzS3cqjrDovwFdmwsGsLdeFgB6suw+1e9g==}
    engines: {node: '>= 0.4'}

  invariant@2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}

  is-arguments@1.1.1:
    resolution: {integrity: sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==}
    engines: {node: '>= 0.4'}

  is-array-buffer@3.0.4:
    resolution: {integrity: sha512-wcjaerHw0ydZwfhiKbXJWLDY8A7yV7KhjQOpb83hGgGfId/aQa4TOvwyzn2PuswW2gPCYEL/nEAiSVpdOj1lXw==}
    engines: {node: '>= 0.4'}

  is-async-function@2.0.0:
    resolution: {integrity: sha512-Y1JXKrfykRJGdlDwdKlLpLyMIiWqWvuSd17TvZk68PLAOGOoF4Xyav1z0Xhoi+gCYjZVeC5SI+hYFOfvXmGRCA==}
    engines: {node: '>= 0.4'}

  is-bigint@1.0.4:
    resolution: {integrity: sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.1.2:
    resolution: {integrity: sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==}
    engines: {node: '>= 0.4'}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.15.0:
    resolution: {integrity: sha512-Dd+Lb2/zvk9SKy1TGCt1wFJFo/MWBPMX5x7KcvLajWTGuomczdQX61PvY5yK6SVACwpoexWo81IfFyoKY2QnTA==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.1:
    resolution: {integrity: sha512-AHkaJrsUVW6wq6JS8y3JnM/GJF/9cf+k20+iDzlSaJrinEo5+7vRiteOSwBhHRiAyQATN1AmY4hwzxJKPmYf+w==}
    engines: {node: '>= 0.4'}

  is-date-object@1.0.5:
    resolution: {integrity: sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.0.2:
    resolution: {integrity: sha512-0by5vtUJs8iFQb5TYUHHPudOR+qXYIMKtiUzvLIZITZUjknFmziyBJuLhVRc+Ds0dREFlskDNJKYIdIzu/9pfw==}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-function@1.0.10:
    resolution: {integrity: sha512-jsEjy9l3yiXEQ+PsXdmBwEPcOxaXWLspKdplFUVI9vq1iZgIekeC0L167qeu86czQaxed3q/Uzuw0swL0irL8A==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-negative-zero@2.0.3:
    resolution: {integrity: sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.0.7:
    resolution: {integrity: sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-path-inside@3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  is-regex@1.1.4:
    resolution: {integrity: sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.3:
    resolution: {integrity: sha512-nA2hv5XIhLR3uVzDDfCIknerhx8XUKnstuOERPNNIinXG7v9u+ohXF67vxm4TPTEPU6lm61ZkwP3c9PCB97rhg==}
    engines: {node: '>= 0.4'}

  is-string@1.0.7:
    resolution: {integrity: sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==}
    engines: {node: '>= 0.4'}

  is-symbol@1.0.4:
    resolution: {integrity: sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.13:
    resolution: {integrity: sha512-uZ25/bUAlUY5fR4OKT4rZQEBrzQWYV9ZJYGGsUmEJ6thodVJ1HX64ePQ6Z0qPWP+m+Uq6e9UugrE38jeYsDSMw==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.0.2:
    resolution: {integrity: sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==}

  is-weakset@2.0.3:
    resolution: {integrity: sha512-LvIm3/KWzS9oRFHugab7d+M/GcBXuXX5xZkzPmN+NxihdQlZUQ4dWuSV1xR/sq6upL1TJEDrfBgRepHFdBtSNQ==}
    engines: {node: '>= 0.4'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  iterator.prototype@1.1.2:
    resolution: {integrity: sha512-DR33HMMr8EzwuRL8Y9D3u2BMj8+RqSE850jfGu59kS7tbmPLzGkZmVSfyCFSDxuZiEY6Rzt3T2NA/qU+NwVj1w==}

  jackspeak@2.3.6:
    resolution: {integrity: sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==}
    engines: {node: '>=14'}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jiti@1.21.6:
    resolution: {integrity: sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==}
    hasBin: true

  jose@5.6.3:
    resolution: {integrity: sha512-1Jh//hEEwMhNYPDDLwXHa2ePWgWiFNNUadVmguAAw2IJ6sj9mNxV5tGXJNqlMkJAybF6Lgw1mISDxTePP/187g==}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  language-subtag-registry@0.3.23:
    resolution: {integrity: sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==}

  language-tags@1.0.9:
    resolution: {integrity: sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==}
    engines: {node: '>=0.10'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lilconfig@2.1.0:
    resolution: {integrity: sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==}
    engines: {node: '>=10'}

  lilconfig@3.1.2:
    resolution: {integrity: sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lucide-react@0.408.0:
    resolution: {integrity: sha512-8kETAAeWmOvtGIr7HPHm51DXoxlfkNncQ5FZWXR+abX8saQwMYXANWIkUstaYtcKSo/imOe/q+tVFA8ANzdSVA==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.7:
    resolution: {integrity: sha512-LPP/3KorzCwBxfeUuZmaR6bG2kdeHSbe0P2tY3FLRU4vYrjYz5hI4QZwV0njUx3jeuKe67YukQ1LSPZBKDqO/Q==}
    engines: {node: '>=8.6'}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.3:
    resolution: {integrity: sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  ms@2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.7:
    resolution: {integrity: sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next-auth@5.0.0-beta.19:
    resolution: {integrity: sha512-YHu1igcAxZPh8ZB7GIM93dqgY6gcAzq66FOhQFheAdOx1raxNcApt05nNyNCSB6NegSiyJ4XOPsaNow4pfDmsg==}
    peerDependencies:
      '@simplewebauthn/browser': ^9.0.1
      '@simplewebauthn/server': ^9.0.2
      next: ^14 || ^15.0.0-0
      nodemailer: ^6.6.5
      react: ^18.2.0 || ^19.0.0-0
    peerDependenciesMeta:
      '@simplewebauthn/browser':
        optional: true
      '@simplewebauthn/server':
        optional: true
      nodemailer:
        optional: true

  next@14.2.5:
    resolution: {integrity: sha512-0f8aRfBVL+mpzfBjYfQuLWh2WyAwtJXCRfkPF4UJ5qd2YwrHczsrSzXU4tRMV0OAxR8ZJZWPFn6uhSC56UTsLA==}
    engines: {node: '>=18.17.0'}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      react: ^18.2.0
      react-dom: ^18.2.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      sass:
        optional: true

  node-addon-api@8.1.0:
    resolution: {integrity: sha512-yBY+qqWSv3dWKGODD6OGE6GnTX7Q2r+4+DfpqxHSHh8x0B4EKP9+wVGLS6U/AM1vxSNNmUEuIV5EGhYwPpfOwQ==}
    engines: {node: ^18 || ^20 || >= 21}

  node-gyp-build@4.8.1:
    resolution: {integrity: sha512-OSs33Z9yWr148JZcbZd5WiAXhh/n9z8TxQcdMhIOlpN9AhWpLfvVFO73+m77bBABQMaY9XSvIa+qk0jlI7Gcaw==}
    hasBin: true

  nodemailer@6.9.14:
    resolution: {integrity: sha512-Dobp/ebDKBvz91sbtRKhcznLThrKxKt97GI2FAlAyy+fk19j73Uz3sBXolVtmcXjaorivqsbbbjDY+Jkt4/bQA==}
    engines: {node: '>=6.0.0'}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  oauth4webapi@2.11.1:
    resolution: {integrity: sha512-aNzOnL98bL6izG97zgnZs1PFEyO4WDVRhz2Pd066NPak44w5ESLRCYmJIyey8avSBPOMtBjhF3ZDDm7bIb7UOg==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.2:
    resolution: {integrity: sha512-IRZSRuzJiynemAXPYtPe5BoI/RESNYR7TYm50MC5Mqbd3Jmw5y790sErYw3V6SryFJD64b74qQQs9wn5Bg/k3g==}
    engines: {node: '>= 0.4'}

  object-is@1.1.6:
    resolution: {integrity: sha512-F8cZ+KfGlSGi09lJT7/Nd6KJZ9ygtvYC0/UYYLI9nmQKLMnydpB9yvbv9K1uSkEu7FU9vYPmVwLg328tX+ot3Q==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.5:
    resolution: {integrity: sha512-byy+U7gp+FVwmyzKPYhW2h5l3crpmGsxl7X2s8y43IgxvG4g3QZ6CffDtsNQy1WsmZpQbO+ybo0AlW7TY6DcBQ==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.8:
    resolution: {integrity: sha512-cmopxi8VwRIAw/fkijJohSfpef5PdN0pMQJN6VC/ZKvn0LIknWD8KtgY6KlQdEc4tIjcQ3HxSMmnvtzIscdaYQ==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.groupby@1.0.3:
    resolution: {integrity: sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.0:
    resolution: {integrity: sha512-yBYjY9QX2hnRmZHAjG/f13MzmBzxzYgQhFrke06TTyKY5zSTEqkOeukBzIdVA3j3ulu8Qa3MbVFShV7T2RmGtQ==}
    engines: {node: '>= 0.4'}

  obuf@1.1.2:
    resolution: {integrity: sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  package-json-from-dist@1.0.0:
    resolution: {integrity: sha512-dATvCeZN/8wQsGywez1mzHtTlP22H8OEfPrVMLNr4/eGa+ijtLn/6M5f0dY8UKNrC2O9UCU6SSoG3qRKnt7STw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pg-int8@1.0.1:
    resolution: {integrity: sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==}
    engines: {node: '>=4.0.0'}

  pg-numeric@1.0.2:
    resolution: {integrity: sha512-BM/Thnrw5jm2kKLE5uJkXqqExRUY/toLHda65XgFTBTFYZyopbKjBe29Ii3RbkvlsMoFwD+tHeGaCjjv0gHlyw==}
    engines: {node: '>=4'}

  pg-protocol@1.6.1:
    resolution: {integrity: sha512-jPIlvgoD63hrEuihvIg+tJhoGjUsLPn6poJY9N5CnlPd91c2T18T/9zBtLxZSb1EhYxBRoZJtzScCaWlYLtktg==}

  pg-types@4.0.2:
    resolution: {integrity: sha512-cRL3JpS3lKMGsKaWndugWQoLOCoP+Cic8oseVcbr0qhPzYD5DWXK+RZ9LY9wxRf7RQia4SCwQlXk0q6FCPrVng==}
    engines: {node: '>=10'}

  picocolors@1.0.1:
    resolution: {integrity: sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  possible-typed-array-names@1.0.0:
    resolution: {integrity: sha512-d7Uw+eZoloe0EHDIYoe+bQ5WXnGMOpmiZFTuMWCwpjzzkL2nTjcKiAk4hh8TjnGye2TwWOk3UXucZ+3rbmBa8Q==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.0.1:
    resolution: {integrity: sha512-mEp4xPMi5bSWiMbsgoPfcP74lsWLHkQbZc3sY+jWYd65CUwXrUaTp0fmNpa01ZcETKlIgUdFN/MpS2xZtqL9dQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.1:
    resolution: {integrity: sha512-b4dlw/9V8A71rLIDsSwVmak9z2DuBUB7CA1/wSdelNEzqsjoSPeADTWNO09lpH49Diy3/JIZ2bSPB1dI3LJCHg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.4.39:
    resolution: {integrity: sha512-0vzE+lAiG7hZl1/9I8yzKLx3aR9Xbof3fBHKunvMfOCYAtMhrsnccJY2iTURb9EZd5+pLuiNV9/c/GZJOHsgIw==}
    engines: {node: ^10 || ^12 || >=14}

  postgres-array@3.0.2:
    resolution: {integrity: sha512-6faShkdFugNQCLwucjPcY5ARoW1SlbnrZjmGl0IrrqewpvxvhSLHimCVzqeuULCbG0fQv7Dtk1yDbG3xv7Veog==}
    engines: {node: '>=12'}

  postgres-bytea@3.0.0:
    resolution: {integrity: sha512-CNd4jim9RFPkObHSjVHlVrxoVQXz7quwNFpz7RY1okNNme49+sVyiTvTRobiLV548Hx/hb1BG+iE7h9493WzFw==}
    engines: {node: '>= 6'}

  postgres-date@2.1.0:
    resolution: {integrity: sha512-K7Juri8gtgXVcDfZttFKVmhglp7epKb1K4pgrkLxehjqkrgPhfG6OO8LHLkfaqkbpjNRnra018XwAr1yQFWGcA==}
    engines: {node: '>=12'}

  postgres-interval@3.0.0:
    resolution: {integrity: sha512-BSNDnbyZCXSxgA+1f5UU2GmwhoI0aU5yMxRGO8CdFEcY2BQF9xm/7MqKnYoM1nJDk8nONNWDk9WeSmePFhQdlw==}
    engines: {node: '>=12'}

  postgres-range@1.1.4:
    resolution: {integrity: sha512-i/hbxIE9803Alj/6ytL7UHQxRvZkI9O4Sy+J3HGc4F4oo/2eQAjTSNJ0bfxyse3bH0nuVesCk+3IRLaMtG3H6w==}

  preact-render-to-string@5.2.3:
    resolution: {integrity: sha512-aPDxUn5o3GhWdtJtW0svRC2SS/l8D9MAgo2+AWml+BhDImb27ALf04Q2d+AHqUUOc6RdSXFIBVa2gxzgMKgtZA==}
    peerDependencies:
      preact: '>=10'

  preact@10.11.3:
    resolution: {integrity: sha512-eY93IVpod/zG3uMF22Unl8h9KkrcKIRs2EGar8hwLZZDU1lkjph303V9HZBwufh2s736U6VXuhD109LYqPoffg==}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prettier-plugin-tailwindcss@0.6.5:
    resolution: {integrity: sha512-axfeOArc/RiGHjOIy9HytehlC0ZLeMaqY09mm8YCkMzznKiDkwFzOpBvtuhuv3xG5qB73+Mj7OCe2j/L1ryfuQ==}
    engines: {node: '>=14.21.3'}
    peerDependencies:
      '@ianvs/prettier-plugin-sort-imports': '*'
      '@prettier/plugin-pug': '*'
      '@shopify/prettier-plugin-liquid': '*'
      '@trivago/prettier-plugin-sort-imports': '*'
      '@zackad/prettier-plugin-twig-melody': '*'
      prettier: ^3.0
      prettier-plugin-astro: '*'
      prettier-plugin-css-order: '*'
      prettier-plugin-import-sort: '*'
      prettier-plugin-jsdoc: '*'
      prettier-plugin-marko: '*'
      prettier-plugin-organize-attributes: '*'
      prettier-plugin-organize-imports: '*'
      prettier-plugin-sort-imports: '*'
      prettier-plugin-style-order: '*'
      prettier-plugin-svelte: '*'
    peerDependenciesMeta:
      '@ianvs/prettier-plugin-sort-imports':
        optional: true
      '@prettier/plugin-pug':
        optional: true
      '@shopify/prettier-plugin-liquid':
        optional: true
      '@trivago/prettier-plugin-sort-imports':
        optional: true
      '@zackad/prettier-plugin-twig-melody':
        optional: true
      prettier-plugin-astro:
        optional: true
      prettier-plugin-css-order:
        optional: true
      prettier-plugin-import-sort:
        optional: true
      prettier-plugin-jsdoc:
        optional: true
      prettier-plugin-marko:
        optional: true
      prettier-plugin-organize-attributes:
        optional: true
      prettier-plugin-organize-imports:
        optional: true
      prettier-plugin-sort-imports:
        optional: true
      prettier-plugin-style-order:
        optional: true
      prettier-plugin-svelte:
        optional: true

  prettier@3.3.3:
    resolution: {integrity: sha512-i2tDNA0O5IrMO757lfrdQZCc2jPNDVntV0m/+4whiDfWaTKfMNgR7Qz0NAeGz/nRqF4m5/6CLzbP4/liHt12Ew==}
    engines: {node: '>=14'}
    hasBin: true

  pretty-format@3.8.0:
    resolution: {integrity: sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@18.3.1:
    resolution: {integrity: sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==}
    peerDependencies:
      react: ^18.3.1

  react-hook-form@7.52.1:
    resolution: {integrity: sha512-uNKIhaoICJ5KQALYZ4TOaOLElyM+xipord+Ha3crEFhTntdLvWZqVY49Wqd/0GiVCA/f9NjemLeiNPjG7Hpurg==}
    engines: {node: '>=12.22.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-remove-scroll-bar@2.3.6:
    resolution: {integrity: sha512-DtSYaao4mBmX+HDo5YWYdBWQwYIQQshUV/dVxFxK+KM26Wjwp1gZ6rv6OC3oujI6Bfu6Xyg3TwK533AQutsn/g==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.5.7:
    resolution: {integrity: sha512-FnrTWO4L7/Bhhf3CYBNArEG/yROV0tKmTv7/3h9QCFvH6sndeFf1wPqOcbFVu5VAulS5dV1wGT3GZZ/1GawqiA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.1:
    resolution: {integrity: sha512-ZWj0fHEMyWkHzKYUr2Bs/4zU6XLmq9HsgBURm7g5pAVfyn49DgUiNgY2d4lXRlYSiCif9YBGpQleewkcqddc7g==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  reflect.getprototypeof@1.0.6:
    resolution: {integrity: sha512-fmfw4XgoDke3kdI6h4xcUz1dG8uaiv5q9gcEwLS4Pnth2kxT+GZ7YehS1JTMGBQmtV7Y4GFGbs2re2NqhdozUg==}
    engines: {node: '>= 0.4'}

  regexp.prototype.flags@1.5.2:
    resolution: {integrity: sha512-NcDiDkTLuPR+++OCKB0nWafEmhg/Da8aUPLPMQbK+bxKKCm1/S5he+AqYa4PlMCVBalb4/yxIRub6qkEx5yJbw==}
    engines: {node: '>= 0.4'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve@1.22.8:
    resolution: {integrity: sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==}
    hasBin: true

  resolve@2.0.0-next.5:
    resolution: {integrity: sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==}
    hasBin: true

  reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.2:
    resolution: {integrity: sha512-vj6RsCsWBCf19jIeHEfkRMw8DPiBb+DMXklQ/1SGDHOMlHdPUkZXFQ2YdplS23zESTijAcurb1aSgJA3AgMu1Q==}
    engines: {node: '>=0.4'}

  safe-regex-test@1.0.3:
    resolution: {integrity: sha512-CdASjNJPvRa7roO6Ra/gLYBTzYzzPyyBXxIMdGW3USQLyjWEls2RgW5UBTXaQVp+OrpeCK3bLem8smtmheoRuw==}
    engines: {node: '>= 0.4'}

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.6.3:
    resolution: {integrity: sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==}
    engines: {node: '>=10'}
    hasBin: true

  server-only@0.0.1:
    resolution: {integrity: sha512-qepMx2JxAa5jjfzxG79yPPq+8BuFToHd1hm7kI+Z4zAq1ftQiP7HcxMhDDItrbtwVeLg/cY2JnKnrcFkmiswNA==}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel@1.0.6:
    resolution: {integrity: sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==}
    engines: {node: '>= 0.4'}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  source-map-js@1.2.0:
    resolution: {integrity: sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  stop-iteration-iterator@1.0.0:
    resolution: {integrity: sha512-iCGQj+0l0HOdZ2AEeBADlsRC+vsnDsZsbdSiH1yNSjcfKM7fdpCMfqAL/dwF5BLiw/XhRft/Wax6zQbhq2BcjQ==}
    engines: {node: '>= 0.4'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string.prototype.includes@2.0.0:
    resolution: {integrity: sha512-E34CkBgyeqNDcrbU76cDjL5JLcVrtSdYq0MEh/B10r17pRP4ciHLwTgnuLV8Ay6cgEMLkcBkFCKyFZ43YldYzg==}

  string.prototype.matchall@4.0.11:
    resolution: {integrity: sha512-NUdh0aDavY2og7IbBPenWqR9exH+E26Sv8e0/eTe1tltDGZL+GtBkDAnnyBtmekfK6/Dq3MkcGtzXFEd1LQrtg==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.9:
    resolution: {integrity: sha512-klHuCNxiMZ8MlsOihJhJEBJAiMVqU3Z2nEXWfWnIqjN0gEFS9J9+IxKozWWtQGcgoa1WUZzLjKPTr4ZHNFTFxw==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.8:
    resolution: {integrity: sha512-p73uL5VCHCO2BZZ6krwwQE3kCzM7NKmis8S//xEC6fQonchbum4eP6kR4DLEjQFO3Wnj3Fuo8NM0kOSjVdHjZQ==}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  styled-jsx@5.1.1:
    resolution: {integrity: sha512-pW7uC1l4mBZ8ugbiZrcIsiIvVx1UmTfw7UkC3Um2tmfUq9Bhk8IiyEIPl6F8agHgjzku6j0xQEZbfA5uSgSaCw==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tailwind-merge@2.4.0:
    resolution: {integrity: sha512-49AwoOQNKdqKPd9CViyH5wJoSKsCDjUlzL8DxuGp3P1FsGY36NJDAa18jLZcaHAUUuTj+JB8IAo8zWgBNvBF7A==}

  tailwindcss-animate@1.0.7:
    resolution: {integrity: sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders'

  tailwindcss@3.4.6:
    resolution: {integrity: sha512-1uRHzPB+Vzu57ocybfZ4jh5Q3SdlH7XW23J5sQoM9LhE9eIOlzxer/3XPSsycvih3rboRsvt0QCmzSrqyOYUIA==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  tapable@2.2.1:
    resolution: {integrity: sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==}
    engines: {node: '>=6'}

  text-table@0.2.0:
    resolution: {integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==}

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  ts-api-utils@1.3.0:
    resolution: {integrity: sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==}
    engines: {node: '>=16'}
    peerDependencies:
      typescript: '>=4.2.0'

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  tsconfig-paths@3.15.0:
    resolution: {integrity: sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==}

  tslib@2.6.3:
    resolution: {integrity: sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  type-fest@0.20.2:
    resolution: {integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==}
    engines: {node: '>=10'}

  typed-array-buffer@1.0.2:
    resolution: {integrity: sha512-gEymJYKZtKXzzBzM4jqa9w6Q1Jjm7x2d+sh19AdsD4wqnMPDYyvwpsIc2Q/835kHuo3BEQ7CjelGhfTsoBb2MQ==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.1:
    resolution: {integrity: sha512-3iMJ9q0ao7WE9tWcaYKIptkNBuOIcZCCT0d4MRvuuH88fEoEH62IuQe0OtraD3ebQEoTRk8XCBoknUNc1Y67pw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.2:
    resolution: {integrity: sha512-Ous0vodHa56FviZucS2E63zkgtgrACj7omjwd/8lTEMEPFFyjfixMZ1ZXenpgCFBBt4EC1J2XsyVS2gkG0eTFA==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.6:
    resolution: {integrity: sha512-/OxDN6OtAk5KBpGb28T+HZc2M+ADtvRxXrKKbUwtsLgdoxgX13hyy7ek6bFRl5+aBs2yZzB0c4CnQfAtVypW/g==}
    engines: {node: '>= 0.4'}

  typescript@5.5.3:
    resolution: {integrity: sha512-/hreyEujaB0w76zKo6717l3L0o/qEUtRgdvUBvlkhoWeOVMjMuHNHk0BRBzikzuGDqNmPQbg5ifMEqsHLiIUcQ==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.0.2:
    resolution: {integrity: sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==}

  undici-types@5.26.5:
    resolution: {integrity: sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==}

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-callback-ref@1.3.2:
    resolution: {integrity: sha512-elOQwe6Q8gqZgDA8mrh44qRTQqpIHDcZ3hXTLjBe1i4ph8XpNJnO+aQf3NaG+lriLopI4HMx9VjQLfPQ6vhnoA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.2:
    resolution: {integrity: sha512-epTbsLuzZ7lPClpz2TyryBfztm7m+28DlEv2ZCQ3MDr5ssiwyOwGH/e5F9CkfWjJ1t4clvI58yF822/GUkjjhw==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': ^16.9.0 || ^17.0.0 || ^18.0.0
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  valibot@0.36.0:
    resolution: {integrity: sha512-CjF1XN4sUce8sBK9TixrDqFM7RwNkuXdJu174/AwmQUB62QbCQADg5lLe8ldBalFgtj1uKj+pKwDJiNo4Mn+eQ==}

  which-boxed-primitive@1.0.2:
    resolution: {integrity: sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==}

  which-builtin-type@1.1.3:
    resolution: {integrity: sha512-YmjsSMDBYsM1CaFiayOVT06+KJeXf0o5M/CAd4o1lTadFAtacTUM49zoYxr/oroopFDfhvN6iEcBxUyc3gvKmw==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.15:
    resolution: {integrity: sha512-oV0jmFtUky6CXfkqehVvBP/LSWJ2sy4vWMioiENyJLePrBO/yKyV9OyJySfAKosh+RYkIl5zJCNZ8/4JncrpdA==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  yaml@2.4.5:
    resolution: {integrity: sha512-aBx2bnqDzVOyNKfsysjA2ms5ZlnjSAW2eG3/L5G/CSujfjLJTJsEw1bGw8kCf04KodQWk1pxlGnZ56CRxiawmg==}
    engines: {node: '>= 14'}
    hasBin: true

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@auth/core@0.32.0(nodemailer@6.9.14)':
    dependencies:
      '@panva/hkdf': 1.2.1
      '@types/cookie': 0.6.0
      cookie: 0.6.0
      jose: 5.6.3
      oauth4webapi: 2.11.1
      preact: 10.11.3
      preact-render-to-string: 5.2.3(preact@10.11.3)
    optionalDependencies:
      nodemailer: 6.9.14

  '@auth/core@0.34.1(nodemailer@6.9.14)':
    dependencies:
      '@panva/hkdf': 1.2.1
      '@types/cookie': 0.6.0
      cookie: 0.6.0
      jose: 5.6.3
      oauth4webapi: 2.11.1
      preact: 10.11.3
      preact-render-to-string: 5.2.3(preact@10.11.3)
    optionalDependencies:
      nodemailer: 6.9.14

  '@auth/drizzle-adapter@1.4.1(nodemailer@6.9.14)':
    dependencies:
      '@auth/core': 0.34.1(nodemailer@6.9.14)
    transitivePeerDependencies:
      - '@simplewebauthn/browser'
      - '@simplewebauthn/server'
      - nodemailer

  '@esbuild-kit/core-utils@3.3.2':
    dependencies:
      esbuild: 0.18.20
      source-map-support: 0.5.21

  '@esbuild-kit/esm-loader@2.6.5':
    dependencies:
      '@esbuild-kit/core-utils': 3.3.2
      get-tsconfig: 4.7.5

  '@esbuild/aix-ppc64@0.19.12':
    optional: true

  '@esbuild/android-arm64@0.18.20':
    optional: true

  '@esbuild/android-arm64@0.19.12':
    optional: true

  '@esbuild/android-arm@0.18.20':
    optional: true

  '@esbuild/android-arm@0.19.12':
    optional: true

  '@esbuild/android-x64@0.18.20':
    optional: true

  '@esbuild/android-x64@0.19.12':
    optional: true

  '@esbuild/darwin-arm64@0.18.20':
    optional: true

  '@esbuild/darwin-arm64@0.19.12':
    optional: true

  '@esbuild/darwin-x64@0.18.20':
    optional: true

  '@esbuild/darwin-x64@0.19.12':
    optional: true

  '@esbuild/freebsd-arm64@0.18.20':
    optional: true

  '@esbuild/freebsd-arm64@0.19.12':
    optional: true

  '@esbuild/freebsd-x64@0.18.20':
    optional: true

  '@esbuild/freebsd-x64@0.19.12':
    optional: true

  '@esbuild/linux-arm64@0.18.20':
    optional: true

  '@esbuild/linux-arm64@0.19.12':
    optional: true

  '@esbuild/linux-arm@0.18.20':
    optional: true

  '@esbuild/linux-arm@0.19.12':
    optional: true

  '@esbuild/linux-ia32@0.18.20':
    optional: true

  '@esbuild/linux-ia32@0.19.12':
    optional: true

  '@esbuild/linux-loong64@0.18.20':
    optional: true

  '@esbuild/linux-loong64@0.19.12':
    optional: true

  '@esbuild/linux-mips64el@0.18.20':
    optional: true

  '@esbuild/linux-mips64el@0.19.12':
    optional: true

  '@esbuild/linux-ppc64@0.18.20':
    optional: true

  '@esbuild/linux-ppc64@0.19.12':
    optional: true

  '@esbuild/linux-riscv64@0.18.20':
    optional: true

  '@esbuild/linux-riscv64@0.19.12':
    optional: true

  '@esbuild/linux-s390x@0.18.20':
    optional: true

  '@esbuild/linux-s390x@0.19.12':
    optional: true

  '@esbuild/linux-x64@0.18.20':
    optional: true

  '@esbuild/linux-x64@0.19.12':
    optional: true

  '@esbuild/netbsd-x64@0.18.20':
    optional: true

  '@esbuild/netbsd-x64@0.19.12':
    optional: true

  '@esbuild/openbsd-x64@0.18.20':
    optional: true

  '@esbuild/openbsd-x64@0.19.12':
    optional: true

  '@esbuild/sunos-x64@0.18.20':
    optional: true

  '@esbuild/sunos-x64@0.19.12':
    optional: true

  '@esbuild/win32-arm64@0.18.20':
    optional: true

  '@esbuild/win32-arm64@0.19.12':
    optional: true

  '@esbuild/win32-ia32@0.18.20':
    optional: true

  '@esbuild/win32-ia32@0.19.12':
    optional: true

  '@esbuild/win32-x64@0.18.20':
    optional: true

  '@esbuild/win32-x64@0.19.12':
    optional: true

  '@eslint-community/eslint-utils@4.4.0(eslint@8.57.0)':
    dependencies:
      eslint: 8.57.0
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.11.0': {}

  '@eslint/eslintrc@2.1.4':
    dependencies:
      ajv: 6.12.6
      debug: 4.3.5
      espree: 9.6.1
      globals: 13.24.0
      ignore: 5.3.1
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@8.57.0': {}

  '@hookform/resolvers@3.9.0(react-hook-form@7.52.1(react@18.3.1))':
    dependencies:
      react-hook-form: 7.52.1(react@18.3.1)

  '@humanwhocodes/config-array@0.11.14':
    dependencies:
      '@humanwhocodes/object-schema': 2.0.3
      debug: 4.3.5
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/object-schema@2.0.3': {}

  '@icons-pack/react-simple-icons@9.6.0(react@18.3.1)':
    dependencies:
      react: 18.3.1

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@jridgewell/gen-mapping@0.3.5':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.5.0
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/sourcemap-codec@1.5.0': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@neondatabase/serverless@0.9.4':
    dependencies:
      '@types/pg': 8.11.6

  '@next/env@14.2.5': {}

  '@next/eslint-plugin-next@14.2.5':
    dependencies:
      glob: 10.3.10

  '@next/swc-darwin-arm64@14.2.5':
    optional: true

  '@next/swc-darwin-x64@14.2.5':
    optional: true

  '@next/swc-linux-arm64-gnu@14.2.5':
    optional: true

  '@next/swc-linux-arm64-musl@14.2.5':
    optional: true

  '@next/swc-linux-x64-gnu@14.2.5':
    optional: true

  '@next/swc-linux-x64-musl@14.2.5':
    optional: true

  '@next/swc-win32-arm64-msvc@14.2.5':
    optional: true

  '@next/swc-win32-ia32-msvc@14.2.5':
    optional: true

  '@next/swc-win32-x64-msvc@14.2.5':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1

  '@panva/hkdf@1.2.1': {}

  '@phc/format@1.0.0': {}

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@radix-ui/primitive@1.1.0': {}

  '@radix-ui/react-compose-refs@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-context@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-dialog@1.1.1(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.0
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-context': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-dismissable-layer': 1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-focus-guards': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-focus-scope': 1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-portal': 1.1.1(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-presence': 1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-slot': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      aria-hidden: 1.2.4
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      react-remove-scroll: 2.5.7(@types/react@18.3.3)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-dismissable-layer@1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.0
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-use-escape-keydown': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-focus-guards@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-focus-scope@1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-id@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-label@2.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-portal@1.1.1(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-presence@1.1.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-primitive@2.0.0(@types/react-dom@18.3.0)(@types/react@18.3.3)(react-dom@18.3.1(react@18.3.1))(react@18.3.1)':
    dependencies:
      '@radix-ui/react-slot': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3
      '@types/react-dom': 18.3.0

  '@radix-ui/react-slot@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-use-callback-ref@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-use-controllable-state@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-use-escape-keydown@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.3)(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@radix-ui/react-use-layout-effect@1.1.0(@types/react@18.3.3)(react@18.3.1)':
    dependencies:
      react: 18.3.1
    optionalDependencies:
      '@types/react': 18.3.3

  '@rushstack/eslint-patch@1.10.3': {}

  '@swc/counter@0.1.3': {}

  '@swc/helpers@0.5.5':
    dependencies:
      '@swc/counter': 0.1.3
      tslib: 2.6.3

  '@types/cookie@0.6.0': {}

  '@types/json5@0.0.29': {}

  '@types/node@20.14.11':
    dependencies:
      undici-types: 5.26.5

  '@types/nodemailer@6.4.15':
    dependencies:
      '@types/node': 20.14.11

  '@types/pg@8.11.6':
    dependencies:
      '@types/node': 20.14.11
      pg-protocol: 1.6.1
      pg-types: 4.0.2

  '@types/prop-types@15.7.12': {}

  '@types/react-dom@18.3.0':
    dependencies:
      '@types/react': 18.3.3

  '@types/react@18.3.3':
    dependencies:
      '@types/prop-types': 15.7.12
      csstype: 3.1.3

  '@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3)':
    dependencies:
      '@typescript-eslint/scope-manager': 7.2.0
      '@typescript-eslint/types': 7.2.0
      '@typescript-eslint/typescript-estree': 7.2.0(typescript@5.5.3)
      '@typescript-eslint/visitor-keys': 7.2.0
      debug: 4.3.5
      eslint: 8.57.0
    optionalDependencies:
      typescript: 5.5.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@7.2.0':
    dependencies:
      '@typescript-eslint/types': 7.2.0
      '@typescript-eslint/visitor-keys': 7.2.0

  '@typescript-eslint/types@7.2.0': {}

  '@typescript-eslint/typescript-estree@7.2.0(typescript@5.5.3)':
    dependencies:
      '@typescript-eslint/types': 7.2.0
      '@typescript-eslint/visitor-keys': 7.2.0
      debug: 4.3.5
      globby: 11.1.0
      is-glob: 4.0.3
      minimatch: 9.0.3
      semver: 7.6.3
      ts-api-utils: 1.3.0(typescript@5.5.3)
    optionalDependencies:
      typescript: 5.5.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/visitor-keys@7.2.0':
    dependencies:
      '@typescript-eslint/types': 7.2.0
      eslint-visitor-keys: 3.4.3

  '@ungap/structured-clone@1.2.0': {}

  acorn-jsx@5.3.2(acorn@8.12.1):
    dependencies:
      acorn: 8.12.1

  acorn@8.12.1: {}

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-regex@5.0.1: {}

  ansi-regex@6.0.1: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@6.2.1: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  arg@5.0.2: {}

  argon2@0.40.3:
    dependencies:
      '@phc/format': 1.0.0
      node-addon-api: 8.1.0
      node-gyp-build: 4.8.1

  argparse@2.0.1: {}

  aria-hidden@1.2.4:
    dependencies:
      tslib: 2.6.3

  aria-query@5.1.3:
    dependencies:
      deep-equal: 2.2.3

  array-buffer-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      is-array-buffer: 3.0.4

  array-includes@3.1.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0
      get-intrinsic: 1.2.4
      is-string: 1.0.7

  array-union@2.1.0: {}

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      es-shim-unscopables: 1.0.2

  array.prototype.findlastindex@1.2.5:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      es-shim-unscopables: 1.0.2

  array.prototype.flat@1.3.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-shim-unscopables: 1.0.2

  array.prototype.flatmap@1.3.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-shim-unscopables: 1.0.2

  array.prototype.toreversed@1.1.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-shim-unscopables: 1.0.2

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-shim-unscopables: 1.0.2

  arraybuffer.prototype.slice@1.0.3:
    dependencies:
      array-buffer-byte-length: 1.0.1
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      is-array-buffer: 3.0.4
      is-shared-array-buffer: 1.0.3

  ast-types-flow@0.0.8: {}

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.0.0

  axe-core@4.9.1: {}

  axobject-query@3.1.1:
    dependencies:
      deep-equal: 2.2.3

  balanced-match@1.0.2: {}

  binary-extensions@2.3.0: {}

  brace-expansion@1.1.11:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  buffer-from@1.1.2: {}

  busboy@1.6.0:
    dependencies:
      streamsearch: 1.1.0

  call-bind@1.0.7:
    dependencies:
      es-define-property: 1.0.0
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      set-function-length: 1.2.2

  callsites@3.1.0: {}

  camelcase-css@2.0.1: {}

  caniuse-lite@1.0.30001642: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  class-variance-authority@0.7.0:
    dependencies:
      clsx: 2.0.0

  client-only@0.0.1: {}

  clsx@2.0.0: {}

  clsx@2.1.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  commander@4.1.1: {}

  concat-map@0.0.1: {}

  cookie@0.6.0: {}

  cross-spawn@7.0.3:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.1.3: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.1:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  data-view-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  data-view-byte-offset@1.0.0:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-data-view: 1.0.1

  debug@3.2.7:
    dependencies:
      ms: 2.1.3

  debug@4.3.5:
    dependencies:
      ms: 2.1.2

  deep-equal@2.2.3:
    dependencies:
      array-buffer-byte-length: 1.0.1
      call-bind: 1.0.7
      es-get-iterator: 1.1.3
      get-intrinsic: 1.2.4
      is-arguments: 1.1.1
      is-array-buffer: 3.0.4
      is-date-object: 1.0.5
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.3
      isarray: 2.0.5
      object-is: 1.1.6
      object-keys: 1.1.1
      object.assign: 4.1.5
      regexp.prototype.flags: 1.5.2
      side-channel: 1.0.6
      which-boxed-primitive: 1.0.2
      which-collection: 1.0.2
      which-typed-array: 1.1.15

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.0
      es-errors: 1.3.0
      gopd: 1.0.1

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  detect-node-es@1.1.0: {}

  didyoumean@1.2.2: {}

  dir-glob@3.0.1:
    dependencies:
      path-type: 4.0.0

  dlv@1.1.3: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  doctrine@3.0.0:
    dependencies:
      esutils: 2.0.3

  drizzle-kit@0.23.0:
    dependencies:
      '@esbuild-kit/esm-loader': 2.6.5
      esbuild: 0.19.12
      esbuild-register: 3.5.0(esbuild@0.19.12)
    transitivePeerDependencies:
      - supports-color

  drizzle-orm@0.32.0(@neondatabase/serverless@0.9.4)(@types/pg@8.11.6)(@types/react@18.3.3)(react@18.3.1):
    optionalDependencies:
      '@neondatabase/serverless': 0.9.4
      '@types/pg': 8.11.6
      '@types/react': 18.3.3
      react: 18.3.1

  eastasianwidth@0.2.0: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  enhanced-resolve@5.17.0:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.2.1

  es-abstract@1.23.3:
    dependencies:
      array-buffer-byte-length: 1.0.1
      arraybuffer.prototype.slice: 1.0.3
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      data-view-buffer: 1.0.1
      data-view-byte-length: 1.0.1
      data-view-byte-offset: 1.0.0
      es-define-property: 1.0.0
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      es-set-tostringtag: 2.0.3
      es-to-primitive: 1.2.1
      function.prototype.name: 1.1.6
      get-intrinsic: 1.2.4
      get-symbol-description: 1.0.2
      globalthis: 1.0.4
      gopd: 1.0.1
      has-property-descriptors: 1.0.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      hasown: 2.0.2
      internal-slot: 1.0.7
      is-array-buffer: 3.0.4
      is-callable: 1.2.7
      is-data-view: 1.0.1
      is-negative-zero: 2.0.3
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.3
      is-string: 1.0.7
      is-typed-array: 1.1.13
      is-weakref: 1.0.2
      object-inspect: 1.13.2
      object-keys: 1.1.1
      object.assign: 4.1.5
      regexp.prototype.flags: 1.5.2
      safe-array-concat: 1.1.2
      safe-regex-test: 1.0.3
      string.prototype.trim: 1.2.9
      string.prototype.trimend: 1.0.8
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.2
      typed-array-byte-length: 1.0.1
      typed-array-byte-offset: 1.0.2
      typed-array-length: 1.0.6
      unbox-primitive: 1.0.2
      which-typed-array: 1.1.15

  es-define-property@1.0.0:
    dependencies:
      get-intrinsic: 1.2.4

  es-errors@1.3.0: {}

  es-get-iterator@1.1.3:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4
      has-symbols: 1.0.3
      is-arguments: 1.1.1
      is-map: 2.0.3
      is-set: 2.0.3
      is-string: 1.0.7
      isarray: 2.0.5
      stop-iteration-iterator: 1.0.0

  es-iterator-helpers@1.0.19:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-set-tostringtag: 2.0.3
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      globalthis: 1.0.4
      has-property-descriptors: 1.0.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      internal-slot: 1.0.7
      iterator.prototype: 1.1.2
      safe-array-concat: 1.1.2

  es-object-atoms@1.0.0:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.0.3:
    dependencies:
      get-intrinsic: 1.2.4
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  es-shim-unscopables@1.0.2:
    dependencies:
      hasown: 2.0.2

  es-to-primitive@1.2.1:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.0.5
      is-symbol: 1.0.4

  esbuild-register@3.5.0(esbuild@0.19.12):
    dependencies:
      debug: 4.3.5
      esbuild: 0.19.12
    transitivePeerDependencies:
      - supports-color

  esbuild@0.18.20:
    optionalDependencies:
      '@esbuild/android-arm': 0.18.20
      '@esbuild/android-arm64': 0.18.20
      '@esbuild/android-x64': 0.18.20
      '@esbuild/darwin-arm64': 0.18.20
      '@esbuild/darwin-x64': 0.18.20
      '@esbuild/freebsd-arm64': 0.18.20
      '@esbuild/freebsd-x64': 0.18.20
      '@esbuild/linux-arm': 0.18.20
      '@esbuild/linux-arm64': 0.18.20
      '@esbuild/linux-ia32': 0.18.20
      '@esbuild/linux-loong64': 0.18.20
      '@esbuild/linux-mips64el': 0.18.20
      '@esbuild/linux-ppc64': 0.18.20
      '@esbuild/linux-riscv64': 0.18.20
      '@esbuild/linux-s390x': 0.18.20
      '@esbuild/linux-x64': 0.18.20
      '@esbuild/netbsd-x64': 0.18.20
      '@esbuild/openbsd-x64': 0.18.20
      '@esbuild/sunos-x64': 0.18.20
      '@esbuild/win32-arm64': 0.18.20
      '@esbuild/win32-ia32': 0.18.20
      '@esbuild/win32-x64': 0.18.20

  esbuild@0.19.12:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.19.12
      '@esbuild/android-arm': 0.19.12
      '@esbuild/android-arm64': 0.19.12
      '@esbuild/android-x64': 0.19.12
      '@esbuild/darwin-arm64': 0.19.12
      '@esbuild/darwin-x64': 0.19.12
      '@esbuild/freebsd-arm64': 0.19.12
      '@esbuild/freebsd-x64': 0.19.12
      '@esbuild/linux-arm': 0.19.12
      '@esbuild/linux-arm64': 0.19.12
      '@esbuild/linux-ia32': 0.19.12
      '@esbuild/linux-loong64': 0.19.12
      '@esbuild/linux-mips64el': 0.19.12
      '@esbuild/linux-ppc64': 0.19.12
      '@esbuild/linux-riscv64': 0.19.12
      '@esbuild/linux-s390x': 0.19.12
      '@esbuild/linux-x64': 0.19.12
      '@esbuild/netbsd-x64': 0.19.12
      '@esbuild/openbsd-x64': 0.19.12
      '@esbuild/sunos-x64': 0.19.12
      '@esbuild/win32-arm64': 0.19.12
      '@esbuild/win32-ia32': 0.19.12
      '@esbuild/win32-x64': 0.19.12

  escape-string-regexp@4.0.0: {}

  eslint-config-next@14.2.5(eslint@8.57.0)(typescript@5.5.3):
    dependencies:
      '@next/eslint-plugin-next': 14.2.5
      '@rushstack/eslint-patch': 1.10.3
      '@typescript-eslint/parser': 7.2.0(eslint@8.57.0)(typescript@5.5.3)
      eslint: 8.57.0
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0)
      eslint-plugin-import: 2.29.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0)
      eslint-plugin-jsx-a11y: 6.9.0(eslint@8.57.0)
      eslint-plugin-react: 7.34.4(eslint@8.57.0)
      eslint-plugin-react-hooks: 4.6.2(eslint@8.57.0)
    optionalDependencies:
      typescript: 5.5.3
    transitivePeerDependencies:
      - eslint-import-resolver-webpack
      - supports-color

  eslint-import-resolver-node@0.3.9:
    dependencies:
      debug: 3.2.7
      is-core-module: 2.15.0
      resolve: 1.22.8
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0):
    dependencies:
      debug: 4.3.5
      enhanced-resolve: 5.17.0
      eslint: 8.57.0
      eslint-module-utils: 2.8.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0)
      eslint-plugin-import: 2.29.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0)
      fast-glob: 3.3.2
      get-tsconfig: 4.7.5
      is-core-module: 2.15.0
      is-glob: 4.0.3
    transitivePeerDependencies:
      - '@typescript-eslint/parser'
      - eslint-import-resolver-node
      - eslint-import-resolver-webpack
      - supports-color

  eslint-module-utils@2.8.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0):
    dependencies:
      debug: 3.2.7
    optionalDependencies:
      '@typescript-eslint/parser': 7.2.0(eslint@8.57.0)(typescript@5.5.3)
      eslint: 8.57.0
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.29.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0):
    dependencies:
      array-includes: 3.1.8
      array.prototype.findlastindex: 1.2.5
      array.prototype.flat: 1.3.2
      array.prototype.flatmap: 1.3.2
      debug: 3.2.7
      doctrine: 2.1.0
      eslint: 8.57.0
      eslint-import-resolver-node: 0.3.9
      eslint-module-utils: 2.8.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.6.1(@typescript-eslint/parser@7.2.0(eslint@8.57.0)(typescript@5.5.3))(eslint-import-resolver-node@0.3.9)(eslint-plugin-import@2.29.1(eslint@8.57.0))(eslint@8.57.0))(eslint@8.57.0)
      hasown: 2.0.2
      is-core-module: 2.15.0
      is-glob: 4.0.3
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.0
      semver: 6.3.1
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 7.2.0(eslint@8.57.0)(typescript@5.5.3)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.9.0(eslint@8.57.0):
    dependencies:
      aria-query: 5.1.3
      array-includes: 3.1.8
      array.prototype.flatmap: 1.3.2
      ast-types-flow: 0.0.8
      axe-core: 4.9.1
      axobject-query: 3.1.1
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      es-iterator-helpers: 1.0.19
      eslint: 8.57.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      safe-regex-test: 1.0.3
      string.prototype.includes: 2.0.0

  eslint-plugin-react-hooks@4.6.2(eslint@8.57.0):
    dependencies:
      eslint: 8.57.0

  eslint-plugin-react@7.34.4(eslint@8.57.0):
    dependencies:
      array-includes: 3.1.8
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.2
      array.prototype.toreversed: 1.1.2
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.0.19
      eslint: 8.57.0
      estraverse: 5.3.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.2
      object.entries: 1.1.8
      object.fromentries: 2.0.8
      object.values: 1.2.0
      prop-types: 15.8.1
      resolve: 2.0.0-next.5
      semver: 6.3.1
      string.prototype.matchall: 4.0.11
      string.prototype.repeat: 1.0.0

  eslint-scope@7.2.2:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint@8.57.0:
    dependencies:
      '@eslint-community/eslint-utils': 4.4.0(eslint@8.57.0)
      '@eslint-community/regexpp': 4.11.0
      '@eslint/eslintrc': 2.1.4
      '@eslint/js': 8.57.0
      '@humanwhocodes/config-array': 0.11.14
      '@humanwhocodes/module-importer': 1.0.1
      '@nodelib/fs.walk': 1.2.8
      '@ungap/structured-clone': 1.2.0
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.5
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.2.2
      eslint-visitor-keys: 3.4.3
      espree: 9.6.1
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      find-up: 5.0.0
      glob-parent: 6.0.2
      globals: 13.24.0
      graphemer: 1.4.0
      ignore: 5.3.1
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      is-path-inside: 3.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
      strip-ansi: 6.0.1
      text-table: 0.2.0
    transitivePeerDependencies:
      - supports-color

  espree@9.6.1:
    dependencies:
      acorn: 8.12.1
      acorn-jsx: 5.3.2(acorn@8.12.1)
      eslint-visitor-keys: 3.4.3

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.2:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.7

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.17.1:
    dependencies:
      reusify: 1.0.4

  file-entry-cache@6.0.1:
    dependencies:
      flat-cache: 3.2.0

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@3.2.0:
    dependencies:
      flatted: 3.3.1
      keyv: 4.5.4
      rimraf: 3.0.2

  flatted@3.3.1: {}

  for-each@0.3.3:
    dependencies:
      is-callable: 1.2.7

  foreground-child@3.2.1:
    dependencies:
      cross-spawn: 7.0.3
      signal-exit: 4.1.0

  fs.realpath@1.0.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  function.prototype.name@1.1.6:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      functions-have-names: 1.2.3

  functions-have-names@1.2.3: {}

  get-intrinsic@1.2.4:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2
      has-proto: 1.0.3
      has-symbols: 1.0.3
      hasown: 2.0.2

  get-nonce@1.0.1: {}

  get-symbol-description@1.0.2:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      get-intrinsic: 1.2.4

  get-tsconfig@4.7.5:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@10.3.10:
    dependencies:
      foreground-child: 3.2.1
      jackspeak: 2.3.6
      minimatch: 9.0.5
      minipass: 7.1.2
      path-scurry: 1.11.1

  glob@10.4.5:
    dependencies:
      foreground-child: 3.2.1
      jackspeak: 3.4.3
      minimatch: 9.0.5
      minipass: 7.1.2
      package-json-from-dist: 1.0.0
      path-scurry: 1.11.1

  glob@7.2.3:
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  globals@13.24.0:
    dependencies:
      type-fest: 0.20.2

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.0.1

  globby@11.1.0:
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.3.2
      ignore: 5.3.1
      merge2: 1.4.1
      slash: 3.0.0

  gopd@1.0.1:
    dependencies:
      get-intrinsic: 1.2.4

  graceful-fs@4.2.11: {}

  graphemer@1.4.0: {}

  has-bigints@1.0.2: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.0

  has-proto@1.0.3: {}

  has-symbols@1.0.3: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.0.3

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  ignore@5.3.1: {}

  import-fresh@3.3.0:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  inflight@1.0.6:
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  inherits@2.0.4: {}

  internal-slot@1.0.7:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.2
      side-channel: 1.0.6

  invariant@2.2.4:
    dependencies:
      loose-envify: 1.4.0

  is-arguments@1.1.1:
    dependencies:
      call-bind: 1.0.7
      has-tostringtag: 1.0.2

  is-array-buffer@3.0.4:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4

  is-async-function@2.0.0:
    dependencies:
      has-tostringtag: 1.0.2

  is-bigint@1.0.4:
    dependencies:
      has-bigints: 1.0.2

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-boolean-object@1.1.2:
    dependencies:
      call-bind: 1.0.7
      has-tostringtag: 1.0.2

  is-callable@1.2.7: {}

  is-core-module@2.15.0:
    dependencies:
      hasown: 2.0.2

  is-data-view@1.0.1:
    dependencies:
      is-typed-array: 1.1.13

  is-date-object@1.0.5:
    dependencies:
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.0.2:
    dependencies:
      call-bind: 1.0.7

  is-fullwidth-code-point@3.0.0: {}

  is-generator-function@1.0.10:
    dependencies:
      has-tostringtag: 1.0.2

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.0.7:
    dependencies:
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-path-inside@3.0.3: {}

  is-regex@1.1.4:
    dependencies:
      call-bind: 1.0.7
      has-tostringtag: 1.0.2

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.3:
    dependencies:
      call-bind: 1.0.7

  is-string@1.0.7:
    dependencies:
      has-tostringtag: 1.0.2

  is-symbol@1.0.4:
    dependencies:
      has-symbols: 1.0.3

  is-typed-array@1.1.13:
    dependencies:
      which-typed-array: 1.1.15

  is-weakmap@2.0.2: {}

  is-weakref@1.0.2:
    dependencies:
      call-bind: 1.0.7

  is-weakset@2.0.3:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  iterator.prototype@1.1.2:
    dependencies:
      define-properties: 1.2.1
      get-intrinsic: 1.2.4
      has-symbols: 1.0.3
      reflect.getprototypeof: 1.0.6
      set-function-name: 2.0.2

  jackspeak@2.3.6:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jackspeak@3.4.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jiti@1.21.6: {}

  jose@5.6.3: {}

  js-tokens@4.0.0: {}

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.8
      array.prototype.flat: 1.3.2
      object.assign: 4.1.5
      object.values: 1.2.0

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lilconfig@2.1.0: {}

  lilconfig@3.1.2: {}

  lines-and-columns@1.2.4: {}

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@10.4.3: {}

  lucide-react@0.408.0(react@18.3.1):
    dependencies:
      react: 18.3.1

  merge2@1.4.1: {}

  micromatch@4.0.7:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.11

  minimatch@9.0.3:
    dependencies:
      brace-expansion: 2.0.1

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.1

  minimist@1.2.8: {}

  minipass@7.1.2: {}

  ms@2.1.2: {}

  ms@2.1.3: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nanoid@3.3.7: {}

  natural-compare@1.4.0: {}

  next-auth@5.0.0-beta.19(next@14.2.5(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(nodemailer@6.9.14)(react@18.3.1):
    dependencies:
      '@auth/core': 0.32.0(nodemailer@6.9.14)
      next: 14.2.5(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      react: 18.3.1
    optionalDependencies:
      nodemailer: 6.9.14

  next@14.2.5(react-dom@18.3.1(react@18.3.1))(react@18.3.1):
    dependencies:
      '@next/env': 14.2.5
      '@swc/helpers': 0.5.5
      busboy: 1.6.0
      caniuse-lite: 1.0.30001642
      graceful-fs: 4.2.11
      postcss: 8.4.31
      react: 18.3.1
      react-dom: 18.3.1(react@18.3.1)
      styled-jsx: 5.1.1(react@18.3.1)
    optionalDependencies:
      '@next/swc-darwin-arm64': 14.2.5
      '@next/swc-darwin-x64': 14.2.5
      '@next/swc-linux-arm64-gnu': 14.2.5
      '@next/swc-linux-arm64-musl': 14.2.5
      '@next/swc-linux-x64-gnu': 14.2.5
      '@next/swc-linux-x64-musl': 14.2.5
      '@next/swc-win32-arm64-msvc': 14.2.5
      '@next/swc-win32-ia32-msvc': 14.2.5
      '@next/swc-win32-x64-msvc': 14.2.5
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-addon-api@8.1.0: {}

  node-gyp-build@4.8.1: {}

  nodemailer@6.9.14: {}

  normalize-path@3.0.0: {}

  oauth4webapi@2.11.1: {}

  object-assign@4.1.1: {}

  object-hash@3.0.0: {}

  object-inspect@1.13.2: {}

  object-is@1.1.6:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1

  object-keys@1.1.1: {}

  object.assign@4.1.5:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      has-symbols: 1.0.3
      object-keys: 1.1.1

  object.entries@1.1.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3

  object.values@1.2.0:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  obuf@1.1.2: {}

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  package-json-from-dist@1.0.0: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-is-absolute@1.0.1: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.4.3
      minipass: 7.1.2

  path-type@4.0.0: {}

  pg-int8@1.0.1: {}

  pg-numeric@1.0.2: {}

  pg-protocol@1.6.1: {}

  pg-types@4.0.2:
    dependencies:
      pg-int8: 1.0.1
      pg-numeric: 1.0.2
      postgres-array: 3.0.2
      postgres-bytea: 3.0.0
      postgres-date: 2.1.0
      postgres-interval: 3.0.0
      postgres-range: 1.1.4

  picocolors@1.0.1: {}

  picomatch@2.3.1: {}

  pify@2.3.0: {}

  pirates@4.0.6: {}

  possible-typed-array-names@1.0.0: {}

  postcss-import@15.1.0(postcss@8.4.39):
    dependencies:
      postcss: 8.4.39
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.8

  postcss-js@4.0.1(postcss@8.4.39):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.4.39

  postcss-load-config@4.0.2(postcss@8.4.39):
    dependencies:
      lilconfig: 3.1.2
      yaml: 2.4.5
    optionalDependencies:
      postcss: 8.4.39

  postcss-nested@6.0.1(postcss@8.4.39):
    dependencies:
      postcss: 8.4.39
      postcss-selector-parser: 6.1.1

  postcss-selector-parser@6.1.1:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0

  postcss@8.4.39:
    dependencies:
      nanoid: 3.3.7
      picocolors: 1.0.1
      source-map-js: 1.2.0

  postgres-array@3.0.2: {}

  postgres-bytea@3.0.0:
    dependencies:
      obuf: 1.1.2

  postgres-date@2.1.0: {}

  postgres-interval@3.0.0: {}

  postgres-range@1.1.4: {}

  preact-render-to-string@5.2.3(preact@10.11.3):
    dependencies:
      preact: 10.11.3
      pretty-format: 3.8.0

  preact@10.11.3: {}

  prelude-ls@1.2.1: {}

  prettier-plugin-tailwindcss@0.6.5(prettier@3.3.3):
    dependencies:
      prettier: 3.3.3

  prettier@3.3.3: {}

  pretty-format@3.8.0: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-dom@18.3.1(react@18.3.1):
    dependencies:
      loose-envify: 1.4.0
      react: 18.3.1
      scheduler: 0.23.2

  react-hook-form@7.52.1(react@18.3.1):
    dependencies:
      react: 18.3.1

  react-is@16.13.1: {}

  react-remove-scroll-bar@2.3.6(@types/react@18.3.3)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-style-singleton: 2.2.1(@types/react@18.3.3)(react@18.3.1)
      tslib: 2.6.3
    optionalDependencies:
      '@types/react': 18.3.3

  react-remove-scroll@2.5.7(@types/react@18.3.3)(react@18.3.1):
    dependencies:
      react: 18.3.1
      react-remove-scroll-bar: 2.3.6(@types/react@18.3.3)(react@18.3.1)
      react-style-singleton: 2.2.1(@types/react@18.3.3)(react@18.3.1)
      tslib: 2.6.3
      use-callback-ref: 1.3.2(@types/react@18.3.3)(react@18.3.1)
      use-sidecar: 1.1.2(@types/react@18.3.3)(react@18.3.1)
    optionalDependencies:
      '@types/react': 18.3.3

  react-style-singleton@2.2.1(@types/react@18.3.3)(react@18.3.1):
    dependencies:
      get-nonce: 1.0.1
      invariant: 2.2.4
      react: 18.3.1
      tslib: 2.6.3
    optionalDependencies:
      '@types/react': 18.3.3

  react@18.3.1:
    dependencies:
      loose-envify: 1.4.0

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  reflect.getprototypeof@1.0.6:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      globalthis: 1.0.4
      which-builtin-type: 1.1.3

  regexp.prototype.flags@1.5.2:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-errors: 1.3.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@1.22.8:
    dependencies:
      is-core-module: 2.15.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  resolve@2.0.0-next.5:
    dependencies:
      is-core-module: 2.15.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.0.4: {}

  rimraf@3.0.2:
    dependencies:
      glob: 7.2.3

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.2:
    dependencies:
      call-bind: 1.0.7
      get-intrinsic: 1.2.4
      has-symbols: 1.0.3
      isarray: 2.0.5

  safe-regex-test@1.0.3:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-regex: 1.1.4

  scheduler@0.23.2:
    dependencies:
      loose-envify: 1.4.0

  semver@6.3.1: {}

  semver@7.6.3: {}

  server-only@0.0.1: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.2.4
      gopd: 1.0.1
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel@1.0.6:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      get-intrinsic: 1.2.4
      object-inspect: 1.13.2

  signal-exit@4.1.0: {}

  slash@3.0.0: {}

  source-map-js@1.2.0: {}

  source-map-support@0.5.21:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  stop-iteration-iterator@1.0.0:
    dependencies:
      internal-slot: 1.0.7

  streamsearch@1.1.0: {}

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  string.prototype.includes@2.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.23.3

  string.prototype.matchall@4.0.11:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-errors: 1.3.0
      es-object-atoms: 1.0.0
      get-intrinsic: 1.2.4
      gopd: 1.0.1
      has-symbols: 1.0.3
      internal-slot: 1.0.7
      regexp.prototype.flags: 1.5.2
      set-function-name: 2.0.2
      side-channel: 1.0.6

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.23.3

  string.prototype.trim@1.2.9:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-abstract: 1.23.3
      es-object-atoms: 1.0.0

  string.prototype.trimend@1.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.7
      define-properties: 1.2.1
      es-object-atoms: 1.0.0

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.0.1

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.1(react@18.3.1):
    dependencies:
      client-only: 0.0.1
      react: 18.3.1

  sucrase@3.35.0:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.5
      commander: 4.1.1
      glob: 10.4.5
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.6
      ts-interface-checker: 0.1.13

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwind-merge@2.4.0: {}

  tailwindcss-animate@1.0.7(tailwindcss@3.4.6):
    dependencies:
      tailwindcss: 3.4.6

  tailwindcss@3.4.6:
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.2
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.6
      lilconfig: 2.1.0
      micromatch: 4.0.7
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.0.1
      postcss: 8.4.39
      postcss-import: 15.1.0(postcss@8.4.39)
      postcss-js: 4.0.1(postcss@8.4.39)
      postcss-load-config: 4.0.2(postcss@8.4.39)
      postcss-nested: 6.0.1(postcss@8.4.39)
      postcss-selector-parser: 6.1.1
      resolve: 1.22.8
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node

  tapable@2.2.1: {}

  text-table@0.2.0: {}

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  ts-api-utils@1.3.0(typescript@5.5.3):
    dependencies:
      typescript: 5.5.3

  ts-interface-checker@0.1.13: {}

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.6.3: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  type-fest@0.20.2: {}

  typed-array-buffer@1.0.2:
    dependencies:
      call-bind: 1.0.7
      es-errors: 1.3.0
      is-typed-array: 1.1.13

  typed-array-byte-length@1.0.1:
    dependencies:
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13

  typed-array-byte-offset@1.0.2:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13

  typed-array-length@1.0.6:
    dependencies:
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-proto: 1.0.3
      is-typed-array: 1.1.13
      possible-typed-array-names: 1.0.0

  typescript@5.5.3: {}

  unbox-primitive@1.0.2:
    dependencies:
      call-bind: 1.0.7
      has-bigints: 1.0.2
      has-symbols: 1.0.3
      which-boxed-primitive: 1.0.2

  undici-types@5.26.5: {}

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.2(@types/react@18.3.3)(react@18.3.1):
    dependencies:
      react: 18.3.1
      tslib: 2.6.3
    optionalDependencies:
      '@types/react': 18.3.3

  use-sidecar@1.1.2(@types/react@18.3.3)(react@18.3.1):
    dependencies:
      detect-node-es: 1.1.0
      react: 18.3.1
      tslib: 2.6.3
    optionalDependencies:
      '@types/react': 18.3.3

  util-deprecate@1.0.2: {}

  valibot@0.36.0: {}

  which-boxed-primitive@1.0.2:
    dependencies:
      is-bigint: 1.0.4
      is-boolean-object: 1.1.2
      is-number-object: 1.0.7
      is-string: 1.0.7
      is-symbol: 1.0.4

  which-builtin-type@1.1.3:
    dependencies:
      function.prototype.name: 1.1.6
      has-tostringtag: 1.0.2
      is-async-function: 2.0.0
      is-date-object: 1.0.5
      is-finalizationregistry: 1.0.2
      is-generator-function: 1.0.10
      is-regex: 1.1.4
      is-weakref: 1.0.2
      isarray: 2.0.5
      which-boxed-primitive: 1.0.2
      which-collection: 1.0.2
      which-typed-array: 1.1.15

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.3

  which-typed-array@1.1.15:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.7
      for-each: 0.3.3
      gopd: 1.0.1
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  wrappy@1.0.2: {}

  yaml@2.4.5: {}

  yocto-queue@0.1.0: {}


================================================
File: /postcss.config.mjs
================================================
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;


================================================
File: /tailwind.config.ts
================================================
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

================================================
File: /tsconfig.json
================================================
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}


================================================
File: /.env.example
================================================
DATABASE_URL="FILL_ME"

AUTH_SECRET="FILL_ME"

AUTH_URL="FILL_ME"

GOOGLE_CLIENT_ID="FILL_ME"
GOOGLE_CLIENT_SECRET="FILL_ME"

GITHUB_CLIENT_ID="FILL_ME"
GITHUB_CLIENT_SECRET="FILL_ME"

# ADMIN_EMAIL_ADDRESSES="FILL_ME"

NODEMAILER_GOOGLE_SMTP_USER="FILL_ME"
NODEMAILER_GOOGLE_ACCESS_TOKEN="FILL_ME"
NODEMAILER_GOOGLE_REFRESH_TOKEN="FILL_ME"

================================================
File: /.eslintrc.json
================================================
{
  "extends": "next/core-web-vitals"
}


================================================
File: /.prettierrc
================================================
{
  "plugins": ["prettier-plugin-tailwindcss"]
}


================================================
File: /migrations/0000_mean_vector.sql
================================================
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "authenticator" (
	"credentialID" text NOT NULL,
	"userId" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID"),
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"password" text,
	"role" "role" DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "emailUniqueIndex" ON "user" USING btree (lower("email"));

================================================
File: /migrations/0001_greedy_red_shift.sql
================================================
CREATE TABLE IF NOT EXISTS "adminUserEmailAddresses" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "adminEmailUniqueIndex" ON "adminUserEmailAddresses" USING btree (lower("email"));

================================================
File: /migrations/meta/0000_snapshot.json
================================================
{
  "id": "9f782d31-52fd-4586-a80e-1b7da32bb65c",
  "prevId": "00000000-0000-0000-0000-000000000000",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.account": {
      "name": "account",
      "schema": "",
      "columns": {
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "type": {
          "name": "type",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "provider": {
          "name": "provider",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "providerAccountId": {
          "name": "providerAccountId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "refresh_token": {
          "name": "refresh_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "access_token": {
          "name": "access_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "expires_at": {
          "name": "expires_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false
        },
        "token_type": {
          "name": "token_type",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "scope": {
          "name": "scope",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "id_token": {
          "name": "id_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "session_state": {
          "name": "session_state",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        }
      },
      "indexes": {},
      "foreignKeys": {
        "account_userId_user_id_fk": {
          "name": "account_userId_user_id_fk",
          "tableFrom": "account",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {
        "account_provider_providerAccountId_pk": {
          "name": "account_provider_providerAccountId_pk",
          "columns": [
            "provider",
            "providerAccountId"
          ]
        }
      },
      "uniqueConstraints": {}
    },
    "public.authenticator": {
      "name": "authenticator",
      "schema": "",
      "columns": {
        "credentialID": {
          "name": "credentialID",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "providerAccountId": {
          "name": "providerAccountId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "credentialPublicKey": {
          "name": "credentialPublicKey",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "counter": {
          "name": "counter",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "credentialDeviceType": {
          "name": "credentialDeviceType",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "credentialBackedUp": {
          "name": "credentialBackedUp",
          "type": "boolean",
          "primaryKey": false,
          "notNull": true
        },
        "transports": {
          "name": "transports",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        }
      },
      "indexes": {},
      "foreignKeys": {
        "authenticator_userId_user_id_fk": {
          "name": "authenticator_userId_user_id_fk",
          "tableFrom": "authenticator",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {
        "authenticator_userId_credentialID_pk": {
          "name": "authenticator_userId_credentialID_pk",
          "columns": [
            "userId",
            "credentialID"
          ]
        }
      },
      "uniqueConstraints": {
        "authenticator_credentialID_unique": {
          "name": "authenticator_credentialID_unique",
          "nullsNotDistinct": false,
          "columns": [
            "credentialID"
          ]
        }
      }
    },
    "public.session": {
      "name": "session",
      "schema": "",
      "columns": {
        "sessionToken": {
          "name": "sessionToken",
          "type": "text",
          "primaryKey": true,
          "notNull": true
        },
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "expires": {
          "name": "expires",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true
        }
      },
      "indexes": {},
      "foreignKeys": {
        "session_userId_user_id_fk": {
          "name": "session_userId_user_id_fk",
          "tableFrom": "session",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "public.user": {
      "name": "user",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "text",
          "primaryKey": true,
          "notNull": true
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "email": {
          "name": "email",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "emailVerified": {
          "name": "emailVerified",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": false
        },
        "image": {
          "name": "image",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "password": {
          "name": "password",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "role": {
          "name": "role",
          "type": "role",
          "typeSchema": "public",
          "primaryKey": false,
          "notNull": true,
          "default": "'user'"
        }
      },
      "indexes": {
        "emailUniqueIndex": {
          "name": "emailUniqueIndex",
          "columns": [
            {
              "expression": "lower(\"email\")",
              "asc": true,
              "isExpression": true,
              "nulls": "last"
            }
          ],
          "isUnique": true,
          "concurrently": false,
          "method": "btree",
          "with": {}
        }
      },
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "public.verificationToken": {
      "name": "verificationToken",
      "schema": "",
      "columns": {
        "identifier": {
          "name": "identifier",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "token": {
          "name": "token",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "expires": {
          "name": "expires",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {
        "verificationToken_identifier_token_pk": {
          "name": "verificationToken_identifier_token_pk",
          "columns": [
            "identifier",
            "token"
          ]
        }
      },
      "uniqueConstraints": {}
    }
  },
  "enums": {
    "public.role": {
      "name": "role",
      "schema": "public",
      "values": [
        "user",
        "admin"
      ]
    }
  },
  "schemas": {},
  "sequences": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}

================================================
File: /migrations/meta/0001_snapshot.json
================================================
{
  "id": "0493672a-f8a4-4727-b642-2e67a707ffcd",
  "prevId": "9f782d31-52fd-4586-a80e-1b7da32bb65c",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.account": {
      "name": "account",
      "schema": "",
      "columns": {
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "type": {
          "name": "type",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "provider": {
          "name": "provider",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "providerAccountId": {
          "name": "providerAccountId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "refresh_token": {
          "name": "refresh_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "access_token": {
          "name": "access_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "expires_at": {
          "name": "expires_at",
          "type": "integer",
          "primaryKey": false,
          "notNull": false
        },
        "token_type": {
          "name": "token_type",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "scope": {
          "name": "scope",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "id_token": {
          "name": "id_token",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "session_state": {
          "name": "session_state",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        }
      },
      "indexes": {},
      "foreignKeys": {
        "account_userId_user_id_fk": {
          "name": "account_userId_user_id_fk",
          "tableFrom": "account",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {
        "account_provider_providerAccountId_pk": {
          "name": "account_provider_providerAccountId_pk",
          "columns": [
            "provider",
            "providerAccountId"
          ]
        }
      },
      "uniqueConstraints": {}
    },
    "public.adminUserEmailAddresses": {
      "name": "adminUserEmailAddresses",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "text",
          "primaryKey": true,
          "notNull": true
        },
        "email": {
          "name": "email",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        }
      },
      "indexes": {
        "adminEmailUniqueIndex": {
          "name": "adminEmailUniqueIndex",
          "columns": [
            {
              "expression": "lower(\"email\")",
              "asc": true,
              "isExpression": true,
              "nulls": "last"
            }
          ],
          "isUnique": true,
          "concurrently": false,
          "method": "btree",
          "with": {}
        }
      },
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "public.authenticator": {
      "name": "authenticator",
      "schema": "",
      "columns": {
        "credentialID": {
          "name": "credentialID",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "providerAccountId": {
          "name": "providerAccountId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "credentialPublicKey": {
          "name": "credentialPublicKey",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "counter": {
          "name": "counter",
          "type": "integer",
          "primaryKey": false,
          "notNull": true
        },
        "credentialDeviceType": {
          "name": "credentialDeviceType",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "credentialBackedUp": {
          "name": "credentialBackedUp",
          "type": "boolean",
          "primaryKey": false,
          "notNull": true
        },
        "transports": {
          "name": "transports",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        }
      },
      "indexes": {},
      "foreignKeys": {
        "authenticator_userId_user_id_fk": {
          "name": "authenticator_userId_user_id_fk",
          "tableFrom": "authenticator",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {
        "authenticator_userId_credentialID_pk": {
          "name": "authenticator_userId_credentialID_pk",
          "columns": [
            "userId",
            "credentialID"
          ]
        }
      },
      "uniqueConstraints": {
        "authenticator_credentialID_unique": {
          "name": "authenticator_credentialID_unique",
          "nullsNotDistinct": false,
          "columns": [
            "credentialID"
          ]
        }
      }
    },
    "public.session": {
      "name": "session",
      "schema": "",
      "columns": {
        "sessionToken": {
          "name": "sessionToken",
          "type": "text",
          "primaryKey": true,
          "notNull": true
        },
        "userId": {
          "name": "userId",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "expires": {
          "name": "expires",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true
        }
      },
      "indexes": {},
      "foreignKeys": {
        "session_userId_user_id_fk": {
          "name": "session_userId_user_id_fk",
          "tableFrom": "session",
          "tableTo": "user",
          "columnsFrom": [
            "userId"
          ],
          "columnsTo": [
            "id"
          ],
          "onDelete": "cascade",
          "onUpdate": "no action"
        }
      },
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "public.user": {
      "name": "user",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "text",
          "primaryKey": true,
          "notNull": true
        },
        "name": {
          "name": "name",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "email": {
          "name": "email",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "emailVerified": {
          "name": "emailVerified",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": false
        },
        "image": {
          "name": "image",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "password": {
          "name": "password",
          "type": "text",
          "primaryKey": false,
          "notNull": false
        },
        "role": {
          "name": "role",
          "type": "role",
          "typeSchema": "public",
          "primaryKey": false,
          "notNull": true,
          "default": "'user'"
        }
      },
      "indexes": {
        "emailUniqueIndex": {
          "name": "emailUniqueIndex",
          "columns": [
            {
              "expression": "lower(\"email\")",
              "asc": true,
              "isExpression": true,
              "nulls": "last"
            }
          ],
          "isUnique": true,
          "concurrently": false,
          "method": "btree",
          "with": {}
        }
      },
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {}
    },
    "public.verificationToken": {
      "name": "verificationToken",
      "schema": "",
      "columns": {
        "identifier": {
          "name": "identifier",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "token": {
          "name": "token",
          "type": "text",
          "primaryKey": false,
          "notNull": true
        },
        "expires": {
          "name": "expires",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {
        "verificationToken_identifier_token_pk": {
          "name": "verificationToken_identifier_token_pk",
          "columns": [
            "identifier",
            "token"
          ]
        }
      },
      "uniqueConstraints": {}
    }
  },
  "enums": {
    "public.role": {
      "name": "role",
      "schema": "public",
      "values": [
        "user",
        "admin"
      ]
    }
  },
  "schemas": {},
  "sequences": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}

================================================
File: /migrations/meta/_journal.json
================================================
{
  "version": "7",
  "dialect": "postgresql",
  "entries": [
    {
      "idx": 0,
      "version": "7",
      "when": 1721346603435,
      "tag": "0000_mean_vector",
      "breakpoints": true
    },
    {
      "idx": 1,
      "version": "7",
      "when": 1721493512768,
      "tag": "0001_greedy_red_shift",
      "breakpoints": true
    }
  ]
}

================================================
File: /src/auth.config.ts
================================================
import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import db from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { oauthVerifyEmailAction } from "@/actions/oauth-verify-email-action";
import { USER_ROLES } from "@/lib/constants";
import type { AdapterUser } from "@auth/core/adapters";
import { getTableColumns } from "drizzle-orm";
import { findAdminUserEmailAddresses } from "./resources/admin-user-email-address-queries";

export const authConfig = {
  adapter: {
    ...DrizzleAdapter(db, {
      accountsTable: schema.accounts,
      usersTable: schema.users,
      authenticatorsTable: schema.authenticators,
      sessionsTable: schema.sessions,
      verificationTokensTable: schema.verificationTokens,
    }),
    async createUser(data: AdapterUser) {
      const { id, ...insertData } = data;
      const hasDefaultId = getTableColumns(schema.users)["id"]["hasDefault"];

      const adminEmails = await findAdminUserEmailAddresses();
      const isAdmin = adminEmails.includes(insertData.email.toLowerCase());

      if (isAdmin) {
        insertData.role = isAdmin ? USER_ROLES.ADMIN : USER_ROLES.USER;
      }

      return db
        .insert(schema.users)
        .values(hasDefaultId ? insertData : { ...insertData, id })
        .returning()
        .then((res) => res[0]);
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;

      const isLoggedIn = !!auth?.user;
      const isOnProfile = nextUrl.pathname.startsWith("/profile");
      const isOnAuth = nextUrl.pathname.startsWith("/auth");

      if (isOnProfile) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/auth/signin", nextUrl));
      }

      if (isOnAuth) {
        if (!isLoggedIn) return true;
        return Response.redirect(new URL("/profile", nextUrl));
      }

      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (user?.id) token.id = user.id;
      if (user?.role) token.role = user.role;

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
    signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        return !!profile?.email_verified;
      }

      if (account?.provider === "github") {
        return true;
      }

      if (account?.provider === "credentials") {
        if (user.emailVerified) return true;
      }

      return false;
    },
  },
  events: {
    async linkAccount({ user, account }) {
      if (["google", "github"].includes(account.provider)) {
        if (user.email) await oauthVerifyEmailAction(user.email);
      }
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
} satisfies NextAuthConfig;


================================================
File: /src/auth.ts
================================================
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as v from "valibot";
import argon2 from "argon2";
import { SigninSchema } from "@/validators/signin-validator";
import { findUserByEmail } from "@/resources/user-queries";
import { OAuthAccountAlreadyLinkedError } from "@/lib/custom-errors";
import { authConfig } from "@/auth.config";

const { providers: authConfigProviders, ...authConfigRest } = authConfig;

const nextAuth = NextAuth({
  ...authConfigRest,
  providers: [
    ...authConfigProviders,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = v.safeParse(SigninSchema, credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.output;

          const user = await findUserByEmail(email);
          if (!user) return null;

          if (!user.password) throw new OAuthAccountAlreadyLinkedError();

          const passwordsMatch = await argon2.verify(user.password, password);

          if (passwordsMatch) {
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
        }

        return null;
      },
    }),
  ],
});

export const { signIn, signOut, auth, handlers } = nextAuth;


================================================
File: /src/middleware.ts
================================================
import NextAuth from "next-auth"; //  { type Session }
import { authConfig } from "@/auth.config";
// import { NextRequest } from "next/server";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

/** alternative you can do authorize logic in the middleware.ts file */
// type NextAuthRequest = NextRequest & { auth: Session | null };

// const auth = NextAuth(authConfig).auth;

// export default auth((request: NextAuthRequest) => {
//   const { auth, nextUrl } = request;

//   const isLoggedIn = !!auth?.user;
//   const isOnProfile = nextUrl.pathname.startsWith("/profile");
//   const isOnAuth = nextUrl.pathname.startsWith("/auth");

//   if (isOnProfile) {
//     if (isLoggedIn) return;
//     return Response.redirect(new URL("/auth/signin", nextUrl));
//   }

//   if (isOnAuth) {
//     if (!isLoggedIn) return;
//     return Response.redirect(new URL("/profile", nextUrl));
//   }

//   return;
// });


================================================
File: /src/actions/create-verification-token-action.ts
================================================
"use server";

import db from "@/drizzle";
import { verificationTokens } from "@/drizzle/schema";
import { VERIFICATION_TOKEN_EXP_MIN } from "@/lib/constants";

export async function createVerificationTokenAction(
  identifier: (typeof verificationTokens.$inferSelect)["identifier"],
) {
  const expires = new Date(Date.now() + VERIFICATION_TOKEN_EXP_MIN * 60 * 1000);

  const token = Math.random().toString(36).substring(2);

  const newVerificationToken = await db
    .insert(verificationTokens)
    .values({ expires, identifier, token })
    .returning({ token: verificationTokens.token })
    .then((res) => res[0]);

  return newVerificationToken;
}


================================================
File: /src/actions/forgot-password-action.ts
================================================
"use server";

import { findUserByEmail } from "@/resources/user-queries";
import { ForgotPasswordSchema } from "@/validators/forgot-password-validator";
import * as v from "valibot";
import { createVerificationTokenAction } from "@/actions/create-verification-token-action";
import { sendForgotPasswordEmail } from "@/actions/mail/send-forgot-password-email";

type Res =
  | { success: true }
  | { success: false; error: v.FlatErrors<undefined>; statusCode: 400 }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function forgotPasswordAction(values: unknown): Promise<Res> {
  const parsedValues = v.safeParse(ForgotPasswordSchema, values);

  if (!parsedValues.success) {
    const flatErrors = v.flatten(parsedValues.issues);
    return { success: false, error: flatErrors, statusCode: 400 };
  }

  const email = parsedValues.output.email;

  try {
    const existingUser = await findUserByEmail(email);

    // this is a false positive, to deter malicious users
    if (!existingUser?.id) return { success: true };

    if (!existingUser.password) {
      return {
        success: false,
        error: "This user was created with OAuth, please sign in with OAuth",
        statusCode: 401,
      };
    }

    const verificationToken = await createVerificationTokenAction(
      existingUser.email,
    );

    await sendForgotPasswordEmail({
      email: existingUser.email,
      token: verificationToken.token,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}


================================================
File: /src/actions/oauth-signin-action.ts
================================================
"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function oauthSigninAction(provider: "google" | "github") {
  try {
    await signIn(provider, { redirectTo: "/profile" });
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }

    console.error(err);
  }
}


================================================
File: /src/actions/oauth-verify-email-action.ts
================================================
"use server";

import db from "@/drizzle";
import { users } from "@/drizzle/schema";
import { and, eq, isNull } from "drizzle-orm";

export async function oauthVerifyEmailAction(email: string) {
  const existingUser = await db
    .select({ id: users.id })
    .from(users)
    .where(
      and(
        eq(users.email, email),
        isNull(users.password),
        isNull(users.emailVerified),
      ),
    )
    .then((res) => res[0] ?? null);

  if (existingUser?.id) {
    await db
      .update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.id, existingUser.id));
  }
}


================================================
File: /src/actions/reset-password-action.ts
================================================
"use server";

import { users, verificationTokens } from "@/drizzle/schema";
import { findUserByEmail } from "@/resources/user-queries";
import { findVerificationTokenByToken } from "@/resources/verification-token-queries";
import { ResetPasswordSchema } from "@/validators/reset-password-validator";
import * as v from "valibot";
import argon2 from "argon2";
import db from "@/drizzle";
import { eq } from "drizzle-orm";

type Res =
  | { success: true }
  | { success: false; error: v.FlatErrors<undefined>; statusCode: 400 }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function resetPasswordAction(
  email: (typeof users.$inferSelect)["email"],
  token: (typeof verificationTokens.$inferSelect)["token"],
  values: unknown,
): Promise<Res> {
  const parsedValues = v.safeParse(ResetPasswordSchema, values);

  if (!parsedValues.success) {
    const flatErrors = v.flatten(parsedValues.issues);
    return { success: false, error: flatErrors, statusCode: 400 };
  }

  const password = parsedValues.output.password;

  const existingToken = await findVerificationTokenByToken(token);

  if (!existingToken?.expires) {
    return {
      success: false,
      error: "Token is invalid",
      statusCode: 401,
    };
  }

  if (new Date(existingToken.expires) < new Date()) {
    return {
      success: false,
      error: "Token is expired",
      statusCode: 401,
    };
  }

  const existingUser = await findUserByEmail(email);

  if (
    !existingUser?.password ||
    existingUser.email !== existingToken.identifier
  ) {
    return {
      success: false,
      error: "Oops, something went wrong",
      statusCode: 401,
    };
  }

  try {
    const hashedPassword = await argon2.hash(password);

    await db
      .update(users)
      .set({ password: hashedPassword })
      .where(eq(users.email, email));

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}


================================================
File: /src/actions/signin-user-action.ts
================================================
"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

type Res =
  | { success: true }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function signinUserAction(values: unknown): Promise<Res> {
  try {
    if (
      typeof values !== "object" ||
      values === null ||
      Array.isArray(values)
    ) {
      throw new Error("Invalid JSON Object");
    }

    await signIn("credentials", { ...values, redirect: false });

    return { success: true };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return {
            success: false,
            error: "Invalid credentials",
            statusCode: 401,
          };
        case "AccessDenied":
          return {
            success: false,
            error:
              "Please verify your email, sign up again to resend verification email",
            statusCode: 401,
          };
        // custom error
        case "OAuthAccountAlreadyLinked" as AuthError["type"]:
          return {
            success: false,
            error: "Login with your Google or Github account",
            statusCode: 401,
          };
        default:
          return {
            success: false,
            error: "Oops. Something went wrong",
            statusCode: 500,
          };
      }
    }

    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}


================================================
File: /src/actions/signout-user-action.ts
================================================
"use server";

import { signOut } from "@/auth";

export async function signoutUserAction() {
  try {
    await signOut({ redirect: false });
  } catch (err) {
    console.error(err);
  }
}


================================================
File: /src/actions/signup-user-action.ts
================================================
"use server";

import argon2 from "argon2";
import * as v from "valibot";
import { SignupSchema } from "@/validators/signup-validator";
import db from "@/drizzle";
import { lower, users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { USER_ROLES } from "@/lib/constants";
import { findAdminUserEmailAddresses } from "@/resources/admin-user-email-address-queries";
import { createVerificationTokenAction } from "@/actions/create-verification-token-action";
import { sendSignupUserEmail } from "@/actions/mail/send-signup-user-email";

type Res =
  | { success: true }
  | { success: false; error: v.FlatErrors<undefined>; statusCode: 400 }
  | { success: false; error: string; statusCode: 409 | 500 };

export async function signupUserAction(values: unknown): Promise<Res> {
  const parsedValues = v.safeParse(SignupSchema, values);

  if (!parsedValues.success) {
    const flatErrors = v.flatten(parsedValues.issues);
    console.log(flatErrors);
    return { success: false, error: flatErrors, statusCode: 400 };
  }

  const { name, email, password } = parsedValues.output;

  try {
    const existingUser = await db
      .select({
        id: users.id,
        email: users.email,
        emailVerified: users.emailVerified,
      })
      .from(users)
      .where(eq(lower(users.email), email.toLowerCase()))
      .then((res) => res[0] ?? null);

    if (existingUser?.id) {
      if (!existingUser.emailVerified) {
        const verificationToken = await createVerificationTokenAction(
          existingUser.email,
        );

        await sendSignupUserEmail({
          email: existingUser.email,
          token: verificationToken.token,
        });

        return {
          success: false,
          error: "User exists but not verified. Verification link resent",
          statusCode: 409,
        };
      } else {
        return {
          success: false,
          error: "Email already exists",
          statusCode: 409,
        };
      }
    }
  } catch (err) {
    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }

  try {
    const hashedPassword = await argon2.hash(password);
    const adminEmails = await findAdminUserEmailAddresses();
    const isAdmin = adminEmails.includes(email.toLowerCase());

    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
        role: isAdmin ? USER_ROLES.ADMIN : USER_ROLES.USER,
      })
      .returning({
        id: users.id,
        email: users.email,
        emailVerified: users.emailVerified,
      })
      .then((res) => res[0]);

    const verificationToken = await createVerificationTokenAction(
      newUser.email,
    );

    await sendSignupUserEmail({
      email: newUser.email,
      token: verificationToken.token,
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}


================================================
File: /src/actions/update-user-info-action.ts
================================================
"use server";

import * as v from "valibot";
import { UpdateUserInfoSchema } from "@/validators/update-user-info-validator";
import { auth } from "@/auth";
import { users } from "@/drizzle/schema";
import db from "@/drizzle";
import { eq } from "drizzle-orm";

type Res =
  | {
      success: true;
      data: {
        id: (typeof users.$inferSelect)["id"];
        name: (typeof users.$inferSelect)["name"];
      };
    }
  | { success: false; error: v.FlatErrors<undefined>; statusCode: 400 }
  | { success: false; error: string; statusCode: 401 | 500 };

export async function updateUserInfoAction(values: unknown): Promise<Res> {
  const parsedValues = v.safeParse(UpdateUserInfoSchema, values);

  if (!parsedValues.success) {
    const flatErrors = v.flatten(parsedValues.issues);
    return { success: false, error: flatErrors, statusCode: 400 };
  }

  const { id, name } = parsedValues.output;

  const session = await auth();

  if (!session?.user?.id || session.user.id !== id) {
    return { success: false, error: "Unauthorized", statusCode: 401 };
  }

  if (session.user.name === name) {
    return { success: true, data: { id, name } };
  }

  try {
    const updatedUser = await db
      .update(users)
      .set({ name })
      .where(eq(users.id, id))
      .returning({ id: users.id, name: users.name })
      .then((res) => res[0]);

    return { success: true, data: updatedUser };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}


================================================
File: /src/actions/verify-credentials-email-action.ts
================================================
"use server";

import db from "@/drizzle";
import { users, verificationTokens } from "@/drizzle/schema";
import { findUserByEmail } from "@/resources/user-queries";
import { findVerificationTokenByToken } from "@/resources/verification-token-queries";
import { eq } from "drizzle-orm";

export async function verifyCredentialsEmailAction(
  token: (typeof verificationTokens.$inferSelect)["token"],
) {
  const verificationToken = await findVerificationTokenByToken(token);

  if (!verificationToken?.expires) return { success: false };

  if (new Date(verificationToken.expires) < new Date()) {
    return { success: false };
  }

  const existingUser = await findUserByEmail(verificationToken.identifier);

  if (
    existingUser?.id &&
    !existingUser.emailVerified &&
    existingUser.email === verificationToken.identifier
  ) {
    await db
      .update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.id, existingUser.id));

    await db
      .update(verificationTokens)
      .set({ expires: new Date() })
      .where(eq(verificationTokens.identifier, existingUser.email));

    return { success: true };
  } else {
    return { success: false };
  }
}


================================================
File: /src/actions/admin/change-user-role-action.ts
================================================
"use server";

import { auth } from "@/auth";
import db from "@/drizzle";
import { users } from "@/drizzle/schema";
import { USER_ROLES } from "@/lib/constants";
import { findUserByEmail } from "@/resources/user-queries";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// ADMIN PANEL ACTION
export async function changeUserRoleAction(
  email: (typeof users.$inferSelect)["email"],
  newRole: (typeof users.$inferSelect)["role"],
) {
  const session = await auth();

  if (session?.user?.role !== USER_ROLES.ADMIN) {
    throw new Error("Unauthorized");
  }

  const existingUser = await findUserByEmail(email);

  if (!existingUser?.id) return;
  if (existingUser.role === USER_ROLES.ADMIN) return;
  if (existingUser.role === newRole) return;

  await db
    .update(users)
    .set({ role: newRole })
    .where(eq(users.id, existingUser.id));

  revalidatePath("/profile/admin-panel");
}


================================================
File: /src/actions/admin/toggle-email-verified-action.ts
================================================
"use server";

import { auth } from "@/auth";
import db from "@/drizzle";
import { users } from "@/drizzle/schema";
import { USER_ROLES } from "@/lib/constants";
import { findUserByEmail } from "@/resources/user-queries";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// ADMIN PANEL ACTION
export async function toggleEmailVerifiedAction(
  email: (typeof users.$inferSelect)["email"],
  isCurrentlyVerified: boolean,
) {
  const session = await auth();

  if (session?.user?.role !== USER_ROLES.ADMIN) {
    throw new Error("Unauthorized");
  }

  const existingUser = await findUserByEmail(email);

  if (!existingUser) return;
  if (existingUser.role === USER_ROLES.ADMIN) return;

  const emailVerified = isCurrentlyVerified ? null : new Date();

  await db
    .update(users)
    .set({ emailVerified })
    .where(eq(users.id, existingUser.id));

  revalidatePath("/profile.admin-panel");
}


================================================
File: /src/actions/mail/send-forgot-password-email.ts
================================================
"use server";

import { VERIFICATION_TOKEN_EXP_MIN } from "@/lib/constants";
import transport from "@/lib/nodemailer";

export async function sendForgotPasswordEmail({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
  console.log(`Sending email to ${email} with token ${token}`);

  await transport.sendMail({
    from: `"Authy Team" <${process.env.NODEMAILER_GOOGLE_SMTP_USER}>`,
    to: email,
    subject: "Reset your password",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
      <h2 style="text-align: center; color: #eab308;">Authy</h2>

      <p>Hi there,</p>

      <p>Please use the link below to access the reset password form on Authy. This link will expire in ${VERIFICATION_TOKEN_EXP_MIN} minutes. If you don't think you should be receiving this email, you can safely ignore it.</p>

      <p style="text-align: center;">
        <a href="${process.env.AUTH_URL}/auth/signin/forgot-password?token=${token}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #eab308; text-decoration: none; border-radius: 5px;">Reset Password Form</a>
      </p>
      
      <br />

      <p>You received this email because you send a forgot password request for Authy.</p>

      <p style="text-align: center; font-size: 12px; color: #aaa;">&copy; 2024 Authy. All rights reserved.</p>
    </div>
    `,
  });

  console.log(`Email send to ${email} with token ${token}`);
}


================================================
File: /src/actions/mail/send-signup-user-email.ts
================================================
"use server";

import { VERIFICATION_TOKEN_EXP_MIN } from "@/lib/constants";
import transport from "@/lib/nodemailer";

export async function sendSignupUserEmail({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
  console.log(`Sending email to ${email} with token ${token}`);

  await transport.sendMail({
    from: `"Authy Team" <${process.env.NODEMAILER_GOOGLE_SMTP_USER}>`,
    to: email,
    subject: "Verify your email address",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
      <h2 style="text-align: center; color: #3b82f6;">Authy</h2>

      <p>Hi there,</p>

      <p>Please use the link below to verify your email address and continue on Authy. This link will expire in ${VERIFICATION_TOKEN_EXP_MIN} minutes. If you don't think you should be receiving this email, you can safely ignore it.</p>

      <p style="text-align: center;">
        <a href="${process.env.AUTH_URL}/auth/signup/verify-email?token=${token}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #3b82f6; text-decoration: none; border-radius: 5px;">Verify Email</a>
      </p>
      
      <br />

      <p>You received this email because you signed up for Authy.</p>

      <p style="text-align: center; font-size: 12px; color: #aaa;">&copy; 2024 Authy. All rights reserved.</p>
    </div>
    `,
  });

  console.log(`Email send to ${email} with token ${token}`);
}


================================================
File: /src/app/globals.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

================================================
File: /src/app/layout.tsx
================================================
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}


================================================
File: /src/app/page.tsx
================================================
export default function HomePage() {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>

        <div className="my-2 h-1 bg-muted" />
        <h2 className="text-2xl font-bold tracking-tight">Features</h2>

        <ul className="mt-4 grid grid-cols-2 gap-2">
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            User in Client Components
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            User in Server Components
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Credentials Provider
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Protect Pages
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Signout
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Google OAuth Provider
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Github OAuth Provider
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Auth.js Drizzle Adapter
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Extend Session Information
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Auth.js Extend Types
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Auth.js Session Events
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Update Session (Client)
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Auth.js Session Callbacks
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Custom errors
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Account Linking
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Middleware
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            User Roles
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Admin Dashboard
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Email Verification
          </li>
          <li className="line-clamp-1 break-all p-2 shadow hover:bg-muted">
            Password Reset
          </li>
        </ul>

        <div className="my-2 h-1 bg-muted" />
        <h2 className="text-2xl font-bold tracking-tight">Created With</h2>

        <ul className="mt-4 grid grid-cols-4 gap-2">
          <li className="p-2 shadow hover:bg-muted">Next.js</li>
          <li className="p-2 shadow hover:bg-muted">Tailwind</li>
          <li className="p-2 shadow hover:bg-muted">shadcn/ui</li>
          <li className="p-2 shadow hover:bg-muted">Auth.js</li>
          <li className="p-2 shadow hover:bg-muted">Drizzle ORM</li>
          <li className="p-2 shadow hover:bg-muted">NeonDB</li>
          <li className="p-2 shadow hover:bg-muted">PostgreSQL</li>
          <li className="p-2 shadow hover:bg-muted">Valibot</li>
          <li className="p-2 shadow hover:bg-muted">TypeScript</li>
        </ul>
      </div>
    </main>
  );
}


================================================
File: /src/app/api/auth/[...nextauth]/route.ts
================================================
import { handlers } from "@/auth";

export const { GET, POST } = handlers;


================================================
File: /src/app/auth/layout.tsx
================================================
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  // if (session) redirect("/profile");

  return <>{children}</>;
}


================================================
File: /src/app/auth/signin/page.tsx
================================================
import { Button } from "@/components/ui/button";
import { SigninForm } from "./_components/signin-form";
import Link from "next/link";
import {
  OAuthSigninButtons,
  OAuthSigninButtonsSkeleton,
} from "@/components/oauth-signin-buttons";
import { Suspense } from "react";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

export default function SigninPage() {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>

        {/* Signin Form */}
        <div className="my-4 h-1 bg-muted" />
        <SigninForm />

        {/* OAuth Links */}
        <div className="my-4 h-1 bg-muted" />
        <Suspense fallback={<OAuthSigninButtonsSkeleton />}>
          <OAuthSigninButtons />
        </Suspense>

        {/* Go to Signup Link */}
        <div className="my-4 h-1 bg-muted" />
        <p>
          Don&apos;t have an account? Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/auth/signup">here</Link>
          </Button>{" "}
          to sign up.
        </p>

        {/* Forgot Password Dialog */}
        <ForgotPasswordForm />
      </div>
    </main>
  );
}


================================================
File: /src/app/auth/signin/_components/forgot-password-form.tsx
================================================
"use client";

import { forgotPasswordAction } from "@/actions/forgot-password-action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ForgotPasswordSchema } from "@/validators/forgot-password-validator";
import type { ForgotPasswordInput } from "@/validators/forgot-password-validator";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const ForgotPasswordForm = () => {
  const [success, setSuccess] = useState("");

  const form = useForm<ForgotPasswordInput>({
    resolver: valibotResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: ForgotPasswordInput) => {
    setSuccess("");

    const res = await forgotPasswordAction(values);

    if (res.success) {
      setSuccess("Password reset email sent.");
    } else {
      switch (res.statusCode) {
        case 400:
          const nestedErrors = res.error.nested;

          if (nestedErrors && "email" in nestedErrors) {
            setError("email", { message: nestedErrors.email?.[0] });
          } else {
            setError("email", { message: "Internal Server Error" });
          }
          break;
        case 401:
          setError("email", { message: res.error });
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("email", { message: error });
      }
    }
  };

  return (
    <Dialog>
      Forgot your password? Click{" "}
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="px-0">
          here
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Your Email</DialogTitle>

          <DialogDescription>
            We will send you an email with a link to reset your password.
          </DialogDescription>

          <div className="my-2 h-1 bg-muted" />

          <Form {...form}>
            <form onSubmit={handleSubmit(submit)} className="space-y-4">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} disabled={!!success} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {success && (
                <p className="text-sm font-medium text-green-600">{success}</p>
              )}

              <Button
                type="submit"
                disabled={formState.isSubmitting || !!success}
                className="w-full"
              >
                Send Password Reset Email
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};


================================================
File: /src/app/auth/signin/_components/signin-form.tsx
================================================
"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type SigninInput, SigninSchema } from "@/validators/signin-validator";
import { signinUserAction } from "@/actions/signin-user-action";

export const SigninForm = () => {
  const form = useForm<SigninInput>({
    resolver: valibotResolver(SigninSchema),
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: SigninInput) => {
    const res = await signinUserAction(values);

    if (res.success) {
      window.location.href = "/profile";
    } else {
      switch (res.statusCode) {
        case 401:
          setError("password", { message: res.error });
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("password", { message: error });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-[400px] space-y-8"
        autoComplete="false"
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. john.smith@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
};


================================================
File: /src/app/auth/signin/forgot-password/page.tsx
================================================
import { Button } from "@/components/ui/button";
import { findVerificationTokenByToken } from "@/resources/verification-token-queries";
import Link from "next/link";
import { ResetPasswordForm } from "./_components/reset-password-form";

type PageProps = { searchParams: { token: string } };

export default async function Page({ searchParams }: PageProps) {
  const verificationToken = await findVerificationTokenByToken(
    searchParams.token,
  );

  if (!verificationToken?.expires) return <TokenIsInvalidState />;

  const isExpired = new Date(verificationToken.expires) < new Date();

  if (isExpired) return <TokenIsInvalidState />;

  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">
          Forgot Password?
        </div>

        <div className="my-2 h-1 bg-muted" />
        <div className="rounded bg-green-100 p-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Enter your new password below
          </h2>

          <div className="mt-4">
            <ResetPasswordForm
              email={verificationToken.identifier}
              token={searchParams.token}
            />
          </div>
        </div>

        <span>
          No longer need to reset your password? Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/auth/signin">here</Link>
          </Button>{" "}
          to sign in.
        </span>
      </div>
    </main>
  );
}

const TokenIsInvalidState = () => {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">
          Forgot Password?
        </div>

        <div className="my-2 h-1 bg-muted" />
        <div className="rounded bg-red-100 p-4">
          <p>Token is invalid.</p>

          <span>
            Click{" "}
            <Button variant="link" size="sm" className="px-0" asChild>
              <Link href="/auth/signin">here</Link>
            </Button>{" "}
            to sign in page so you can request a new forgot password email.
          </span>
        </div>
      </div>
    </main>
  );
};


================================================
File: /src/app/auth/signin/forgot-password/_components/reset-password-form.tsx
================================================
"use client";

import { resetPasswordAction } from "@/actions/reset-password-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  type ResetPasswordInput,
  ResetPasswordSchema,
} from "@/validators/reset-password-validator";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type ResetPasswordFormProps = { email: string; token: string };

export const ResetPasswordForm = ({ email, token }: ResetPasswordFormProps) => {
  const router = useRouter();

  const form = useForm<ResetPasswordInput>({
    resolver: valibotResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: ResetPasswordInput) => {
    const res = await resetPasswordAction(email, token, values);

    if (res.success) {
      router.push("/auth/signin/reset-password/success");
    } else {
      switch (res.statusCode) {
        case 400:
          const nestedErrors = res.error.nested;

          for (const key in nestedErrors) {
            setError(key as keyof ResetPasswordInput, {
              message: nestedErrors[key]?.[0],
            });
          }
          break;
        case 401:
          setError("confirmPassword", { message: res.error });
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("confirmPassword", { message: error });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submit)} className="max-w-[400px] space-y-6">
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
};


================================================
File: /src/app/auth/signin/reset-password/success/page.tsx
================================================
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">Reset Password</div>

        <div className="my-2 h-1 bg-muted" />
        <p>Password has been successfully reset!</p>

        <div className="my-2 h-1 bg-muted" />
        <span>
          Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/auth/signin">here</Link>
          </Button>{" "}
          to sign in.
        </span>
      </div>
    </main>
  );
}


================================================
File: /src/app/auth/signup/page.tsx
================================================
import { Button } from "@/components/ui/button";
import { SignupForm } from "./_components/signup-form";
import Link from "next/link";
import {
  OAuthSigninButtons,
  OAuthSigninButtonsSkeleton,
} from "@/components/oauth-signin-buttons";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <main className="mt-4">
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>

        {/* Signup Form */}
        <div className="my-4 h-1 bg-muted" />
        <SignupForm />

        {/* OAuth Links */}
        <div className="my-4 h-1 bg-muted" />
        <Suspense fallback={<OAuthSigninButtonsSkeleton signup />}>
          <OAuthSigninButtons signup />
        </Suspense>

        {/* Go to Signin Link */}
        <div className="my-4 h-1 bg-muted" />
        <p>
          Already have an account? Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/auth/signin">here</Link>
          </Button>{" "}
          to sign in.
        </p>
      </div>
    </main>
  );
}


================================================
File: /src/app/auth/signup/_components/signup-form.tsx
================================================
"use client";

import { type SignupInput, SignupSchema } from "@/validators/signup-validator";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupUserAction } from "@/actions/signup-user-action";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<SignupInput>({
    resolver: valibotResolver(SignupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: SignupInput) => {
    const res = await signupUserAction(values);

    if (res.success) {
      router.push("/auth/signup/success");
    } else {
      switch (res.statusCode) {
        case 400:
          const nestedErrors = res.error.nested;

          for (const key in nestedErrors) {
            setError(key as keyof SignupInput, {
              message: nestedErrors[key]?.[0],
            });
          }
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("confirmPassword", { message: error });
      }
    }
  };

  if (success) {
    return (
      <div>
        <p>User successfully created!</p>

        <span>
          Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/auth/signin">here</Link>
          </Button>{" "}
          to sign in.
        </span>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-[400px] space-y-8"
        autoComplete="false"
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="e.g. John Smith" {...field} />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. john.smith@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full"
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
};


================================================
File: /src/app/auth/signup/success/page.tsx
================================================
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">Sign Up</div>

        <div className="my-2 h-1 bg-muted" />
        <p>Verification email has been sent!</p>
        <p>Please check your email to verify your account.</p>

        <div className="my-2 h-1 bg-muted" />
        <span>
          Click{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/">here</Link>
          </Button>{" "}
          to go back to the home page.
        </span>
      </div>
    </main>
  );
}


================================================
File: /src/app/auth/signup/verify-email/loading.tsx
================================================
export default function Loading() {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">Verify Email</div>

        <div className="my-2 h-1 bg-muted" />
        <div className="h-24 animate-pulse rounded bg-muted p-4" />
      </div>
    </main>
  );
}


================================================
File: /src/app/auth/signup/verify-email/page.tsx
================================================
import { verifyCredentialsEmailAction } from "@/actions/verify-credentials-email-action";
import { Button } from "@/components/ui/button";
import { findVerificationTokenByToken } from "@/resources/verification-token-queries";
import Link from "next/link";

type PageProps = { searchParams: { token: string } };

export default async function Page({ searchParams }: PageProps) {
  const verificationToken = await findVerificationTokenByToken(
    searchParams.token,
  );

  if (!verificationToken?.expires) return <TokenIsInvalidState />;

  const isExpired = new Date(verificationToken.expires) < new Date();

  if (isExpired) return <TokenIsInvalidState />;

  const res = await verifyCredentialsEmailAction(searchParams.token);

  if (!res.success) return <TokenIsInvalidState />;

  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">Verify Email</div>

        <div className="my-2 h-1 bg-muted" />
        <div className="rounded bg-green-100 p-4">
          <p>Email verified.</p>

          <span>
            Click{" "}
            <Button variant="link" size="sm" className="px-0" asChild>
              <Link href="/auth/signin">here</Link>
            </Button>{" "}
            to sign in.
          </span>
        </div>
      </div>
    </main>
  );
}

const TokenIsInvalidState = () => {
  return (
    <main className="mt-4">
      <div className="container">
        <div className="text-3xl font-bold tracking-tight">Verify Email</div>

        <div className="my-2 h-1 bg-muted" />
        <div className="rounded bg-red-100 p-4">
          <p>Token is invalid.</p>

          <span>
            Click{" "}
            <Button variant="link" size="sm" className="px-0" asChild>
              <Link href="/auth/signup">here</Link>
            </Button>{" "}
            to sign up again.
          </span>
        </div>
      </div>
    </main>
  );
};


================================================
File: /src/app/profile/page.tsx
================================================
import Link from "next/link";
import { auth } from "@/auth";
import { SignoutButton } from "@/components/signout-button";
import { Button } from "@/components/ui/button";
import { type User } from "next-auth";
import { UpdateUserInfoForm } from "./_components/update-user-info-form";
import { USER_ROLES } from "@/lib/constants";
import { LockIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function ProfilePage() {
  const session = await auth();
  const isAdmin = session?.user?.role === USER_ROLES.ADMIN;

  return (
    <main className="mt-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          {isAdmin && <AdminPanelButton />}
        </div>

        <div className="my-4 h-1 bg-muted" />

        {!!session?.user ? <SignedIn user={session.user} /> : <SignedOut />}
      </div>
    </main>
  );
}

const SignedIn = ({ user }: { user: User }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">User Information</h2>
        <UpdateUserInfoForm user={user} />
      </div>

      <table className="mt-4 table-auto divide-y">
        <thead>
          <tr className="divide-x">
            <th className="bg-gray-50 px-6 py-3 text-start">id</th>
            <th className="bg-gray-50 px-6 py-3 text-start">name</th>
            <th className="bg-gray-50 px-6 py-3 text-start">email</th>
            <th className="bg-gray-50 px-6 py-3 text-start">role</th>
          </tr>
        </thead>

        <tbody>
          <tr className="divide-x">
            <td className="px-6 py-3">{user.id}</td>
            <td
              className={cn("px-6 py-3", {
                "opacity-50": user.name === null,
              })}
            >
              {user.name ?? "NULL"}
            </td>
            <td className="px-6 py-3">{user.email}</td>
            <td className="px-6 py-3 uppercase">{user.role}</td>
          </tr>
        </tbody>
      </table>

      <div className="my-2 h-1 bg-muted" />
      <SignoutButton />
    </>
  );
};

const SignedOut = () => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight">User Not Signed In</h2>

      <div className="my-2 h-1 bg-muted" />

      <Button asChild>
        <Link href="/auth/signin">Sign In</Link>
      </Button>
    </>
  );
};

const AdminPanelButton = () => {
  return (
    <Button size="lg" asChild>
      <Link href="/profile/admin-panel">
        <LockIcon className="mr-2" />
        Admin Panel
      </Link>
    </Button>
  );
};


================================================
File: /src/app/profile/_components/update-user-info-form.tsx
================================================
"use client";

import { updateUserInfoAction } from "@/actions/update-user-info-action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  type UpdateUserInfoInput,
  UpdateUserInfoSchema,
} from "@/validators/update-user-info-validator";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { PencilIcon } from "lucide-react";
import { type User } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type UpdateUserInfoFormProps = { user: User };

export const UpdateUserInfoForm = ({ user }: UpdateUserInfoFormProps) => {
  const [success, setSuccess] = useState("");
  const { data: session, update } = useSession();
  const router = useRouter();

  const { id, name: defaultName } = user;

  const form = useForm<UpdateUserInfoInput>({
    resolver: valibotResolver(UpdateUserInfoSchema),
    defaultValues: { id, name: defaultName || "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: UpdateUserInfoInput) => {
    const res = await updateUserInfoAction(values);

    if (res.success) {
      const updatedUser = res.data;

      if (session?.user) {
        await update({
          ...session,
          user: {
            ...session.user,
            name: updatedUser.name,
          },
        });
      }

      router.refresh();
      setSuccess("User information updated successfully.");
    } else {
      switch (res.statusCode) {
        case 400:
          const nestedErrors = res.error.nested;

          for (const key in nestedErrors) {
            setError(key as keyof UpdateUserInfoInput, {
              message: nestedErrors[key]?.[0],
            });
          }
          break;
        case 401:
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("name", { message: error });
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="bg-yellow-600 transition-colors hover:bg-yellow-600/80"
        >
          <PencilIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User Information</DialogTitle>

          <DialogDescription>
            Update your user information below.
          </DialogDescription>

          <div className="my-2 h-1 bg-muted" />

          <Form {...form}>
            <form onSubmit={handleSubmit(submit)} className="space-y-4">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {success && (
                <p className="text-sm font-medium text-green-600">{success}</p>
              )}

              <FormField name="id" render={() => <FormMessage />} />

              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="w-full"
              >
                Update
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};


================================================
File: /src/app/profile/admin-panel/page.tsx
================================================
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { USER_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { findAllUsers } from "@/resources/user-queries";
import { ArrowLeftSquareIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ToggleEmailVerifiedInput } from "./_components/toggle-email-verified-input";
import { ChangeUserRoleInput } from "./_components/change-user-role-input";

export default async function Page() {
  const session = await auth();

  if (session?.user?.role !== USER_ROLES.ADMIN) redirect("/profile");

  const users = await findAllUsers();

  return (
    <main className="mt-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
          <ProfileButton />
        </div>

        <div className="my-4 h-1 bg-muted" />
        <h2 className="text-2xl font-bold tracking-tight">All Users</h2>

        <div className="my-4 h-1 bg-muted" />
        <table className="mt-4 w-full table-auto divide-y">
          <thead>
            <tr className="divide-x">
              <th className="bg-primary-foreground px-6 py-3 text-start">id</th>
              <th className="bg-primary-foreground px-6 py-3 text-start">
                name
              </th>
              <th className="bg-primary-foreground px-6 py-3 text-start">
                email
              </th>
              <th className="bg-primary-foreground px-6 py-3 text-start">
                email verified
              </th>
              <th className="bg-primary-foreground px-6 py-3 text-start">
                role
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={cn("divide-x", {
                  "bg-primary/15": user.role === USER_ROLES.ADMIN,
                })}
              >
                <td className="px-6 py-3">{user.id}</td>
                <td
                  className={cn("px-6 py-3", {
                    "opacity-50": user.name === null,
                  })}
                >
                  {user.name ?? "NULL"}
                </td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">
                  <ToggleEmailVerifiedInput
                    email={user.email}
                    emailVerified={user.emailVerified}
                    isAdmin={user.role === USER_ROLES.ADMIN}
                  />
                </td>
                <td className="px-6 py-3 uppercase">
                  <ChangeUserRoleInput
                    email={user.email}
                    currentRole={user.role}
                    isAdmin={user.role === USER_ROLES.ADMIN}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

const ProfileButton = () => {
  return (
    <Button size="lg" asChild>
      <Link href="/profile">
        <ArrowLeftSquareIcon className="mr-2" />
        Profile
      </Link>
    </Button>
  );
};


================================================
File: /src/app/profile/admin-panel/_components/change-user-role-input.tsx
================================================
"use client";

import { changeUserRoleAction } from "@/actions/admin/change-user-role-action";
import { users } from "@/drizzle/schema";
import React, { useTransition } from "react";

type ChangeUserRoleInputProps = {
  email: (typeof users.$inferSelect)["email"];
  currentRole: (typeof users.$inferSelect)["role"];
  isAdmin: boolean;
};

export const ChangeUserRoleInput = ({
  email,
  currentRole,
  isAdmin,
}: ChangeUserRoleInputProps) => {
  const [isPending, startTransition] = useTransition();

  const changeHandler = (
    email: string,
    evt: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newRole = evt.target.value as (typeof users.$inferSelect)["role"];

    if (newRole === currentRole) return;

    startTransition(async () => {
      await changeUserRoleAction(email, newRole);
    });
  };

  return (
    <select
      disabled={isAdmin || isPending}
      defaultValue={currentRole}
      onChange={changeHandler.bind(null, email)}
      className="w-full rounded border border-gray-200 bg-white px-2 py-1 leading-tight focus:border-gray-500 focus:outline-none disabled:opacity-50"
    >
      <option value="user">USER</option>
      <option value="admin">ADMIN</option>
    </select>
  );
};


================================================
File: /src/app/profile/admin-panel/_components/toggle-email-verified-input.tsx
================================================
"use client";

import { toggleEmailVerifiedAction } from "@/actions/admin/toggle-email-verified-action";
import { users } from "@/drizzle/schema";
import { useTransition } from "react";

type ToggleEmailVerifiedInputProps = {
  email: (typeof users.$inferSelect)["email"];
  emailVerified: (typeof users.$inferSelect)["emailVerified"];
  isAdmin: boolean;
};

export const ToggleEmailVerifiedInput = ({
  email,
  emailVerified,
  isAdmin,
}: ToggleEmailVerifiedInputProps) => {
  const [isPending, startTransition] = useTransition();

  const clickHandler = (email: string, isCurrentlyVerified: boolean) => {
    startTransition(async () => {
      await toggleEmailVerifiedAction(email, isCurrentlyVerified);
    });
  };

  return (
    <div className="flex items-center justify-center">
      <input
        disabled={isAdmin || isPending}
        type="checkbox"
        checked={!!emailVerified}
        className="scale-150 enabled:cursor-pointer disabled:opacity-50"
        readOnly
        onClick={clickHandler.bind(null, email, !!emailVerified)}
      />
    </div>
  );
};


================================================
File: /src/components/navbar-links.tsx
================================================
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignoutButton } from "@/components/signout-button";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";

export const NavbarLinks = () => {
  const session = useSession();

  switch (session.status) {
    case "loading":
      return <Loading />;
    case "unauthenticated":
      return <SignedOut />;
    case "authenticated":
      return <SignedIn />;
    default:
      return null;
  }
};

const Loading = () => {
  return (
    <li>
      <Button size="sm" variant="ghost">
        <Loader2Icon className="min-w-[8ch] animate-spin" />
      </Button>
    </li>
  );
};

const SignedIn = () => {
  return (
    <>
      <li>
        <Button size="sm" asChild>
          <Link href="/profile">Profile</Link>
        </Button>
      </li>

      <li>
        <SignoutButton />
      </li>
    </>
  );
};

const SignedOut = () => {
  return (
    <>
      <li>
        <Button variant="outline" size="sm" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      </li>

      <li>
        <Button variant="outline" size="sm" asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </li>
    </>
  );
};


================================================
File: /src/components/navbar.tsx
================================================
import Link from "next/link";
import { NavbarLinks } from "./navbar-links";

export const Navbar = () => {
  return (
    <nav className="h-14 border-b">
      <div className="container flex h-full items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight">
          <Link href="/">Authy</Link>
        </h3>

        <ul className="flex items-center gap-x-4">
          <NavbarLinks />
        </ul>
      </div>
    </nav>
  );
};


================================================
File: /src/components/oauth-signin-buttons.tsx
================================================
"use client";

import {
  SiGithub,
  SiGithubHex,
  SiGoogle,
  SiGoogleHex,
} from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { oauthSigninAction } from "@/actions/oauth-signin-action";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type OAuthSigninButtonsProps = { signup?: boolean };

export const OAuthSigninButtons = ({ signup }: OAuthSigninButtonsProps) => {
  const [errMessage, setErrMessage] = useState("");
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (!error) return;

    if (error === "OAuthAccountNotLinked") {
      setErrMessage("This account is already in use. Please sign in.");
    } else {
      setErrMessage("An error occured. Please try again.");
    }
  }, [error]);

  const clickHandler = async (provider: "google" | "github") => {
    try {
      await oauthSigninAction(provider);
    } catch (err) {
      console.log(err);
    }
  };

  const text = signup ? "Sign up" : "Sign in";
  return (
    <div className="max-w-[400px]">
      <Button
        variant="secondary"
        className="w-full"
        onClick={clickHandler.bind(null, "google")}
        // onClick={() => clickHandler("google")}
      >
        <SiGoogle color={SiGoogleHex} className="mr-2" />
        {text} with Google
      </Button>

      <Button
        variant="secondary"
        className="mt-2 w-full"
        onClick={clickHandler.bind(null, "github")}
      >
        <SiGithub color={SiGithubHex} className="mr-2" />
        {text} with Github
      </Button>

      {errMessage && (
        <p className="mt-2 text-sm font-medium text-destructive">
          {errMessage}
        </p>
      )}
    </div>
  );
};

type OAuthSigninButtonsSkeletonProps = OAuthSigninButtonsProps;

export const OAuthSigninButtonsSkeleton = ({
  signup,
}: OAuthSigninButtonsSkeletonProps) => {
  const text = signup ? "Sign up" : "Sign in";

  return (
    <div className="max-w-[400px]">
      <Button variant="secondary" className="w-full">
        <SiGoogle color={SiGoogleHex} className="mr-2" />
        {text} with Google
      </Button>

      <Button variant="secondary" className="mt-2 w-full">
        <SiGithub color={SiGithubHex} className="mr-2" />
        {text} with Github
      </Button>
    </div>
  );
};


================================================
File: /src/components/providers.tsx
================================================
"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};


================================================
File: /src/components/signout-button.tsx
================================================
"use client";

import { signoutUserAction } from "@/actions/signout-user-action";
import { Button } from "@/components/ui/button";

export const SignoutButton = () => {
  const clickHandler = async () => {
    await signoutUserAction();
    window.location.href = "/";
  };

  return (
    <Button variant="destructive" size="sm" onClick={clickHandler}>
      Sign Out
    </Button>
  );
};


================================================
File: /src/components/ui/button.tsx
================================================
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


================================================
File: /src/components/ui/dialog.tsx
================================================
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}


================================================
File: /src/components/ui/form.tsx
================================================
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      // className={cn(error && "text-destructive", className)}
      className={className}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};


================================================
File: /src/components/ui/input.tsx
================================================
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }


================================================
File: /src/components/ui/label.tsx
================================================
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }


================================================
File: /src/drizzle/index.ts
================================================
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL ?? "";

const sql = neon(DATABASE_URL);

const db = drizzle(sql, { schema });

export default db;


================================================
File: /src/drizzle/schema.ts
================================================
import { sql, SQL } from "drizzle-orm";
import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  type AnyPgColumn,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

// custom lower function
export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable(
  "user",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    password: text("password"),
    role: roleEnum("role").notNull().default("user"),
  },
  (table) => ({
    emailUniqueIndex: uniqueIndex("emailUniqueIndex").on(lower(table.email)),
  }),
);

export const adminUserEmailAddresses = pgTable(
  "adminUserEmailAddresses",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    email: text("email").notNull(),
  },
  (table) => ({
    adminEmailUniqueIndex: uniqueIndex("adminEmailUniqueIndex").on(
      lower(table.email),
    ),
  }),
);

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
);


================================================
File: /src/lib/constants.ts
================================================
export enum USER_ROLES {
  USER = "user",
  ADMIN = "admin",
}

export const VERIFICATION_TOKEN_EXP_MIN = 15 as const;


================================================
File: /src/lib/custom-errors.ts
================================================
import { AuthError } from "next-auth";

export class OAuthAccountAlreadyLinkedError extends AuthError {
  static type = "OAuthAccountAlreadyLinked";
}


================================================
File: /src/lib/nodemailer.ts
================================================
import "server-only";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.NODEMAILER_GOOGLE_SMTP_USER,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    accessToken: process.env.NODEMAILER_GOOGLE_ACCESS_TOKEN,
    refreshToken: process.env.NODEMAILER_GOOGLE_REFRESH_TOKEN,
  },
});

export default transport;


================================================
File: /src/lib/utils.ts
================================================
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


================================================
File: /src/resources/admin-user-email-address-queries.ts
================================================
import "server-only";
import db from "@/drizzle";
import { adminUserEmailAddresses, lower } from "@/drizzle/schema";

export const findAdminUserEmailAddresses = async () => {
  const adminUserEmailAddress = await db
    .select({ email: lower(adminUserEmailAddresses.email) })
    .from(adminUserEmailAddresses);

  return adminUserEmailAddress.map((item) => item.email as string);
};


================================================
File: /src/resources/user-queries.ts
================================================
import "server-only";

import db from "@/drizzle";
import { lower, users } from "@/drizzle/schema";
import {
  desc,
  eq,
  getTableColumns,
  //  getTableColumns
} from "drizzle-orm";
import { USER_ROLES } from "@/lib/constants";
import { auth } from "@/auth";
// import { auth } from "@/auth";

/* ADMIN QUERIES - THESE QUERIES REQUIRE ADMIN ACCESS */
export async function findAllUsers() {
  const session = await auth();

  if (session?.user?.role !== USER_ROLES.ADMIN) {
    throw new Error("Unauthorized");
  }

  const { password, ...rest } = getTableColumns(users);

  const allUsers = await db
    .select({ ...rest })
    .from(users)
    .orderBy(desc(users.role));

  return allUsers;
}
/* -------------------------------------------------- */

export const findUserByEmail = async (
  email: string,
): Promise<typeof users.$inferSelect | null> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(lower(users.email), email.toLowerCase()))
    .then((res) => res[0] ?? null);

  return user;
};

// type UserWithoutPassword = Omit<typeof users.$inferSelect, "password">;

// export const findUserById = async (
//   id: string,
// ): Promise<UserWithoutPassword> => {
//   const { password, ...rest } = getTableColumns(users);

//   const user = await db
//     .select(rest)
//     .from(users)
//     .where(eq(users.id, id))
//     .then((res) => res[0] ?? null);

//   if (!user) throw new Error("User not found.");

//   return user;
// };

// export const findUserByAuth = async () => {
//   const session = await auth();

//   const sessionUserId = session?.user?.id;
//   if (!sessionUserId) throw new Error("Unauthorized");

//   const { password, ...rest } = getTableColumns(users);

//   const user = await db
//     .select(rest)
//     .from(users)
//     .where(eq(users.id, sessionUserId))
//     .then((res) => res[0] ?? null);

//   if (!user) throw new Error("User not found.");

//   return user;
// };


================================================
File: /src/resources/verification-token-queries.ts
================================================
import db from "@/drizzle";
import { verificationTokens } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import "server-only";

export async function findVerificationTokenByToken(
  token: (typeof verificationTokens.$inferSelect)["token"],
): Promise<typeof verificationTokens.$inferSelect | null> {
  const verificationToken = await db
    .select()
    .from(verificationTokens)
    .where(eq(verificationTokens.token, token))
    .then((res) => res[0] ?? null);

  return verificationToken;
}


================================================
File: /src/types/auth-core.d.ts
================================================
import type { AdapterUser as DefaultAdapterUser } from "@auth/core/adapters";
import { users } from "@/drizzle/schema";

declare module "@auth/core/adapters" {
  export interface AdapterUser extends DefaultAdapterUser {
    role: (typeof users.$inferSelect)["role"];
  }
}


================================================
File: /src/types/next-auth.d.ts
================================================
import type { JWT as DefaultJWT } from "next-auth/jwt";
import type { User as DefaultUser } from "next-auth";
import { users } from "@/drizzle/schema";

declare module "next-auth" {
  interface User extends DefaultUser {
    role: (typeof users.$inferSelect)["role"];
    emailVerified: (typeof users.$inferSelect)["emailVerified"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: (typeof users.$inferSelect)["id"];
    role: (typeof users.$inferSelect)["role"];
  }
}


================================================
File: /src/validators/forgot-password-validator.ts
================================================
import * as v from "valibot";

export const ForgotPasswordSchema = v.object({
  email: v.pipe(
    v.string("Your email must be a string."),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted."),
  ),
});

export type ForgotPasswordInput = v.InferInput<typeof ForgotPasswordSchema>;


================================================
File: /src/validators/reset-password-validator.ts
================================================
import * as v from "valibot";

export const ResetPasswordSchema = v.pipe(
  v.object({
    password: v.pipe(
      v.string("Your password must be a string."),
      v.nonEmpty("Please enter your password."),
      v.minLength(6, "Your password must have 6 characters or more."),
    ),
    confirmPassword: v.pipe(
      v.string("Your password must be a string."),
      v.nonEmpty("Please confirm your password."),
    ),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "The two passwords do not match.",
    ),
    ["confirmPassword"],
  ),
);

export type ResetPasswordInput = v.InferInput<typeof ResetPasswordSchema>;


================================================
File: /src/validators/signin-validator.ts
================================================
import * as v from "valibot";

export const SigninSchema = v.object({
  email: v.pipe(
    v.string("Your email must be a string."),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted")
  ),
  password: v.pipe(
    v.string("Your password must be a string."),
    v.nonEmpty("Please enter your password.")
  ),
});

export type SigninInput = v.InferInput<typeof SigninSchema>;


================================================
File: /src/validators/signup-validator.ts
================================================
import * as v from "valibot";

export const SignupSchema = v.pipe(
  v.object({
    name: v.optional(
      v.union([
        v.pipe(
          v.literal(""),
          v.transform(() => undefined)
        ),
        v.pipe(
          v.string("Your name must be a string."),
          v.nonEmpty("Please enter your name."),
          v.minLength(6, "Your name must have 6 characters or more.")
        ),
      ])
    ),
    email: v.pipe(
      v.string("Your email must be a string."),
      v.nonEmpty("Please enter your email."),
      v.email("The email address is badly formatted")
    ),
    password: v.pipe(
      v.string("Your password must be a string."),
      v.nonEmpty("Please enter your password."),
      v.minLength(6, "Your password must have 6 characters or more.")
    ),
    confirmPassword: v.pipe(
      v.string("Your password must be a string."),
      v.nonEmpty("Please confirm your password.")
    ),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "The two passwords do not match."
    ),
    ["confirmPassword"]
  )
);

export type SignupInput = v.InferInput<typeof SignupSchema>;


================================================
File: /src/validators/update-user-info-validator.ts
================================================
import * as v from "valibot";

export const UpdateUserInfoSchema = v.object({
  id: v.pipe(
    v.string("Your id must be a string."),
    v.uuid("Your id must be a valid UUID."),
  ),
  name: v.pipe(
    v.string("Your name must be a string"),
    v.nonEmpty("Please enter your name."),
    v.minLength(6, "Your name must have 6 characters or more."),
  ),
});

export type UpdateUserInfoInput = v.InferInput<typeof UpdateUserInfoSchema>;

