#PROJECT NAME
Argakuka7-Kukachat

Kamu sedang membuat sebuah aplikasi web dengan multi provider dengan banyak function call
Every time you choose to apply a rule(s), explicitly state the rulefs} in the output. You can abbreviate the rule description to single word or phrase

# Important rules you HAVE TO FOLLOW
- Always add debug logs & comments in the code for easier debug & readability

#PROJECT STRUCTURE
Directory structure:
└── argakuka7-kukachat.git/
    ├── README.md
    ├── LICENSE
    ├── auth.ts
    ├── biome.jsonc
    ├── bun.lockb
    ├── components.json
    ├── drizzle.config.ts
    ├── drop-tables.ts
    ├── drop_tables.sql
    ├── middleware.ts
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── vercel.json
    ├── .env.example
    ├── .eslintrc.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── (auth)/
    │   │   ├── actions.ts
    │   │   ├── auth.config.ts
    │   │   ├── auth.ts
    │   │   ├── api/
    │   │   │   └── auth/
    │   │   │       └── [...nextauth]/
    │   │   │           └── route.ts
    │   │   ├── landing/
    │   │   │   └── page.tsx
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   └── register/
    │   │       ├── error.tsx
    │   │       └── page.tsx
    │   ├── (chat)/
    │   │   ├── actions.ts
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── api/
    │   │   │   ├── chat/
    │   │   │   │   └── route.ts
    │   │   │   ├── document/
    │   │   │   │   └── route.ts
    │   │   │   ├── files/
    │   │   │   │   └── upload/
    │   │   │   │       └── route.ts
    │   │   │   ├── history/
    │   │   │   │   └── route.ts
    │   │   │   ├── suggestions/
    │   │   │   │   └── route.ts
    │   │   │   └── vote/
    │   │   │       └── route.ts
    │   │   └── chat/
    │   │       └── [id]/
    │   │           └── page.tsx
    │   └── auth/
    │       └── components/
    │           └── auth-form.tsx
    ├── components/
    │   ├── accordion.tsx
    │   ├── app-sidebar.tsx
    │   ├── auth-form.tsx
    │   ├── badge.tsx
    │   ├── block-actions.tsx
    │   ├── block-close-button.tsx
    │   ├── block-messages.tsx
    │   ├── block.tsx
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── chat-header.tsx
    │   ├── chat-history.tsx
    │   ├── chat.tsx
    │   ├── code-block.tsx
    │   ├── code-editor.tsx
    │   ├── console.tsx
    │   ├── data-stream-handler.tsx
    │   ├── diffview.tsx
    │   ├── document-preview.tsx
    │   ├── document-skeleton.tsx
    │   ├── document.tsx
    │   ├── editor.tsx
    │   ├── feature-card.tsx
    │   ├── feature-section.tsx
    │   ├── icons.tsx
    │   ├── image-preview.tsx
    │   ├── markdown.tsx
    │   ├── message-actions.tsx
    │   ├── message-editor.tsx
    │   ├── message.tsx
    │   ├── messages.tsx
    │   ├── model-selector.tsx
    │   ├── multimodal-input.tsx
    │   ├── overview.tsx
    │   ├── preview-attachment.tsx
    │   ├── pricing-card.tsx
    │   ├── sidebar-history.tsx
    │   ├── sidebar-toggle.tsx
    │   ├── sidebar-user-nav.tsx
    │   ├── sign-out-form.tsx
    │   ├── submit-button.tsx
    │   ├── suggested-actions.tsx
    │   ├── suggestion.tsx
    │   ├── testimonial-card.tsx
    │   ├── theme-provider.tsx
    │   ├── toolbar.tsx
    │   ├── use-scroll-to-bottom.ts
    │   ├── version-footer.tsx
    │   ├── visibility-selector.tsx
    │   ├── weather.tsx
    │   ├── animata/
    │   │   └── background/
    │   │       └── moving-gradient.tsx
    │   ├── auth/
    │   │   └── forgot-password-form.tsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── checkbox.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── navigation-menu.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── textarea.tsx
    │       ├── tooltip.tsx
    │       └── tweet-grid.tsx
    ├── dokumen/
    │   ├── authcontoh.md
    │   ├── flux.md
    │   ├── googleaisdk.md
    │   ├── toolcall.md
    │   └── uploaddokumen.md
    ├── hooks/
    │   ├── use-block.ts
    │   ├── use-chat-visibility.ts
    │   ├── use-mobile.tsx
    │   └── use-user-message-id.ts
    ├── lib/
    │   ├── supabase.ts
    │   ├── utils.ts
    │   ├── ai/
    │   │   ├── custom-middleware.ts
    │   │   ├── google-ai.ts
    │   │   ├── index.ts
    │   │   ├── models.ts
    │   │   └── prompts.ts
    │   ├── db/
    │   │   ├── index.ts
    │   │   ├── migrate.ts
    │   │   ├── queries.ts
    │   │   ├── schema.ts
    │   │   └── migrations/
    │   │       ├── 0000_keen_devos.sql
    │   │       ├── 0001_sparkling_blue_marvel.sql
    │   │       ├── 0002_wandering_riptide.sql
    │   │       ├── 0003_cloudy_glorian.sql
    │   │       ├── 0004_odd_slayback.sql
    │   │       └── meta/
    │   │           ├── 0000_snapshot.json
    │   │           ├── 0001_snapshot.json
    │   │           ├── 0002_snapshot.json
    │   │           ├── 0003_snapshot.json
    │   │           ├── 0004_snapshot.json
    │   │           └── _journal.json
    │   └── editor/
    │       ├── config.ts
    │       ├── diff.js
    │       ├── functions.tsx
    │       ├── react-renderer.tsx
    │       └── suggestions.tsx
    ├── public/
    │   ├── fonts/
    │   │   ├── geist-mono.woff2
    │   │   └── geist.woff2
    │   └── images/
    └── types/
        └── prosemirror-schema-basic.d.ts


#TECHS STACK 
1. **Next.js**: A React framework for building server-rendered applications.
2. **React**: A JavaScript library for building user interfaces.
3. **TypeScript**: A superset of JavaScript that adds static types.
4. **Vercel AI SDK**: A unified API for generating text and tool calls with large language models (LLMs).
5. **Tailwind CSS**: A utility-first CSS framework for styling.
6. **shadcn/ui**: A component library built on top of Radix UI for accessible and flexible UI components.
7. **Supabase**: An open-source Firebase alternative for database and authentication.
8. **Framer Motion**: A library for animations in React applications.
9. **Zod**: A TypeScript-first schema declaration and validation library.
10. **Lucide Icons**: A set of open-source icons for React.
11. **NextAuth.js**: A library for authentication in Next.js applications.

#TYPESCRIPT SPECIFIC RULES

Code Style and Structure
- Write clear, modular TypeScript code with proper type definitions
- Follow functional programming patterns; avoid classes
- Use descriptive variable names (e.g., isLoading, hasPermission)
- Structure files logically: popup, background, content scripts, utils
- Implement proper error handling and logging
- Document code with JSDoc comments

Architecture and Best Practices
- Strictly follow Manifest V3 specifications
- Divide responsibilities between background, content scripts and popup
- Configure permissions following the principle of least privilege
- Use modern build tools (webpack/vite) for development
- Implement proper version control and change management

Chrome API Usage
- Use chrome.* APIs correctly (storage, tabs, runtime, etc.)
- Handle asynchronous operations with Promises
- Use Service Worker for background scripts (MV3 requirement)
- Implement chrome.alarms for scheduled tasks
- Use chrome.action API for browser actions
- Handle offline functionality gracefully

Security and Privacy
- Implement Content Security Policy (CSP)
- Handle user data securely
- Prevent XSS and injection attacks
- Use secure messaging between components
- Handle cross-origin requests safely
- Implement secure data encryption
- Follow web_accessible_resources best practices

Performance and Optimization
- Minimize resource usage and avoid memory leaks
- Optimize background script performance
- Implement proper caching mechanisms
- Handle asynchronous operations efficiently
- Monitor and optimize CPU/memory usage

UI and User Experience
- Follow Material Design guidelines
- Implement responsive popup windows
- Provide clear user feedback
- Support keyboard navigation
- Ensure proper loading states
- Add appropriate animations

Internationalization
- Use chrome.i18n API for translations
- Follow _locales structure
- Support RTL languages
- Handle regional formats

Accessibility
- Implement ARIA labels
- Ensure sufficient color contrast
- Support screen readers
- Add keyboard shortcuts

Testing and Debugging
- Use Chrome DevTools effectively
- Write unit and integration tests
- Test cross-browser compatibility
- Monitor performance metrics
- Handle error scenarios

Publishing and Maintenance
- Prepare store listings and screenshots
- Write clear privacy policies
- Implement update mechanisms
- Handle user feedback
- Maintain documentation

Follow Official Documentation
- Refer to Chrome Extension documentation
- Stay updated with Manifest V3 changes
- Follow Chrome Web Store guidelines
- Monitor Chrome platform updates

Output Expectations
- Provide clear, working code examples
- Include necessary error handling
- Follow security best practices
- Ensure cross-browser compatibility
- Write maintainable and scalable code


  You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.
  
  Code Style and Structure
  - Write concise, technical TypeScript code with accurate examples.
  - Use functional and declarative programming patterns; avoid classes.
  - Prefer iteration and modularization over code duplication.
  - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
  - Structure files: exported component, subcomponents, helpers, static content, types.
  
  Naming Conventions
  - Use lowercase with dashes for directories (e.g., components/auth-wizard).
  - Favor named exports for components.
  
  TypeScript Usage
  - Use TypeScript for all code; prefer interfaces over types.
  - Avoid enums; use maps instead.
  - Use functional components with TypeScript interfaces.
  
  Syntax and Formatting
  - Use the "function" keyword for pure functions.
  - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
  - Use declarative JSX.
  
  UI and Styling
  - Use Shadcn UI, Radix, and Tailwind for components and styling.
  - Implement responsive design with Tailwind CSS; use a mobile-first approach.
  
  Performance Optimization
  - Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
  - Wrap client components in Suspense with fallback.
  - Use dynamic loading for non-critical components.
  - Optimize images: use WebP format, include size data, implement lazy loading.
  
  Key Conventions
  - Use 'nuqs' for URL search parameter state management.
  - Optimize Web Vitals (LCP, CLS, FID).
  - Limit 'use client':
    - Favor server components and Next.js SSR.
    - Use only for Web API access in small components.
    - Avoid for data fetching or state management.
  
  Follow Next.js docs for Data Fetching, Rendering, and Routing.
  

