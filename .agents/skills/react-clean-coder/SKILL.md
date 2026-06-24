---
name: react-clean-coder
description: Use this skill when user asks for refactoring or implementing React components/hooks. Enforces layered architecture with strict separation of concerns and TypeScript quality standards.
---

# React Clean Coder

Refactor or implement React components following the layered architecture pattern. All logic must be decoupled from React. Components contain only JSX and presentation conditionals.

## Architecture Layers (Mandatory)

### UI Layer (Component)

- **Location**: Component files
- **Contains**: ONLY JSX and presentation conditionals (e.g., `{isLoading && <Spinner />}`)
- **Does NOT contain**: State management, event handlers logic, data transformations, calculations
- **Names**: PascalCase (e.g., `UserProfile`, `ProductCard`)

### Use Case Layer (Hook)

- **Location**: Custom hooks using other hooks and domain functions
- **Contains**: State management, event handlers that call domain functions
- **Does NOT contain**: ANY logic - no ternaries, no null checks, no calculations, no transformations
- **Names**: camelCase with "use" prefix (e.g., `useUserProfile`, `useProductFilters`)
- **Handlers**: Prefix with "handle" (e.g., `handleSubmit`, `handleFilterChange`)
- **Pattern**: Call ONE public domain function per behavior - domain handles all logic including null checks

### Data Layer (Hook)

- **Location**: Repository hooks for data fetching
- **Contains**: Data fetching, caching, server state management
- **Names**: camelCase with "use" prefix (e.g., `useUserData`, `useProductList`)

### Domain Layer (Functions)

- **Location**: `domain` folder in component/hook scope
- **Contains**: ALL logic - calculations, transformations, validations, null checks, ternaries, conditionals
- **Requirements**: Framework-agnostic pure functions
- **Names**: camelCase with verbs (e.g., `calculateTotal`, `validateForm`, `filterByStatus`)
- **Pattern**: One public function per behavior that returns all needed values. Internal (private) functions for sub-logic.

## TypeScript Quality Standards (Enforced)

1. **No `any` type or type-casting (`as`)** - If unavoidable, add `// eslint-disable-next-line` with explanation in a helper function
2. **No redundant `await`** - Only await Promises (Sonar S4123)
3. **Cognitive Complexity < 15** per function (Sonar S3776)
4. **Max 3 parameters** - Use params object if more needed
5. **No nested ternaries** (Sonar S3358)
6. **No comments** - Replace with intent-revealing variable names. Exception: `@deprecated` JSDoc annotations are instructions to act on, not comments to remove — if a field or function is marked `@deprecated` with a condition (e.g. "remove when flag X is removed"), execute that removal as part of the refactor
7. **Boolean prefixes**: `is`, `has`, `should` (e.g., `isLoading`, `hasError`)

## React: Avoid useEffect Overuse

Effects are ONLY for external system synchronization. Most useEffect usage violates layered architecture.

### When NOT to use useEffect:

1. **Transforming data for render** → Domain layer function (plus `useMemo` if needed)
2. **Resetting state when props change** → Use `key` prop on child component to remount
3. **Adjusting state when props change** → Calculate in domain layer during render
4. **Event-specific logic** → Handle in use case layer event handlers
5. **Chains of state updates** → Calculate all next state in domain function called from event handler
6. **Notifying parent of changes** → Update both in same event handler

### When useEffect IS appropriate:

- Browser APIs (addEventListener, etc.) in use case layer
- Analytics tracking on component display
- Data layer hooks synchronizing with network

**Rule:** User action → event handler. Component displayed → Effect (rare).

## Example

See complete example in `examples/` folder

## Critical Rules

- **Zero logic in hooks**: No ternaries, no null checks, no conditionals. Call domain functions directly.
- **One public domain function per behavior**: Returns all values needed by UI. Can call private helper functions.
- **Domain handles null/undefined**: Pass data as-is to domain; domain decides what to return for null/undefined cases.
- **Domain functions exist to contain logic, not as structural formality**: If a refactor reduces a domain function to literal assignments with no branching, remove it and inline the values directly in the hook. A domain file that contains no logic is dead code.

## Refactoring Checklist

1. **Extract ALL logic** from components/hooks to domain functions (including ternaries, null checks)
2. **Move state & handlers** from components to use case hooks
3. **Separate data fetching** to data layer hooks
4. **Keep components** with only JSX and presentation conditionals
5. **One domain function per behavior** - let it return all needed values
6. **Prune dead signatures** - after changing a function's logic, audit the full signature: remove any parameter no longer read inside the function, and remove any return value that is now a constant (always the same literal) — then propagate both removals to all call sites and types
7. **Verify** no `any` types, cognitive complexity < 15, max 3 params
8. **Replace comments** with descriptive variable names
9. **When updating tests, edit minimally** - only remove a test case if the behavior it specifies no longer exists in the function; distinguish between fixture data (incidental values in the test setup, safe to update) and behavioral assertions (the specific value being tested, must be preserved or translated to the new equivalent)

## Execution

Apply these rules automatically when writing or refactoring React code. No assumptions—follow the layered architecture strictly. All logic goes to domain layer, all state management to use case layer, all JSX to UI layer.
