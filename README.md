# My CuVe — Javi García Fajardo

Interactive 3D CV built with React, TypeScript, Vite, and Tailwind CSS.
Rotate a cube to explore six faces of professional information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

1. Install Node.js and NPM

### Installing

Open your terminal, go to te project folder and install de packages running the following command

```
yarn install
```

Now start the development server using

```
yarn dev
```

## Code standards and workflow

### JavaScript and TypeScript rules

- Use arrow functions instead of the `function` declaration keyword
- Import each entity individually; avoid dot-notation. Bad: `React.useEffect` — Good: `useEffect`
- Complete typing is required for all functionality
- Avoid weak types (`any`, untyped generics)
- Types should be declared in their own file
- Each added functionality should contain unit testing
- Use React functional components — no Class Components

```tsx
import type { FC } from 'react';

import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ className, header }) => {
  const { text } = header;

  return <header className={className}>{text}</header>;
};
```

### Code style

The project uses **ESLint** for linting and **Prettier** for formatting.

- ESLint config: `eslint.config.js` (flat config, ESLint 10)
- Prettier config: `.prettierrc`

**Recommended IDE setup:** install the ESLint and Prettier extensions for your editor and enable:
- Format on save (Prettier)
- ESLint auto-fix on save

**Manual commands:**

```bash
yarn lint:fix    # fix all auto-fixable ESLint issues
yarn format      # reformat all files with Prettier
```

### Architecture

Follows layered clean architecture (react-clean-coder):

- **UI layer** — components contain only JSX and presentation conditionals
- **Use-case layer** — custom hooks manage state and event handlers (no logic)
- **Domain layer** — pure functions for all logic, calculations, and transformations
- **Data layer** — data-fetching hooks (where applicable)

## Built With

- [React](https://facebook.github.io/react/docs/getting-started) - The framework used

## Author

- **Javi Fajardo** - [JaviGF8](https://github.com/JaviGF8)
