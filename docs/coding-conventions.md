# Coding Conventions

- **No Redundant Awaits**: Never use `await` on expressions that do not return a Promise.
- **Type Safety**: The type `any` or using type-casting (`as`) is not allowed in production code. If for some reason `any` or type-casting is necessary, add a comment with a linter ignore rule for the specific line, explaining the reason why is needed. If this type-casting is to be used in different places, it should be inside a helper function so the "ignore rule" is only in one place.
- Maximum amount of parameters for a function should be 3. Use single params object when more args are needed.
- Do not nest ternary operators
- Do not add comments unless strictly necessary. Comments should be replaced by variables that indicate intent.
- File number of lines is kept under max allowed (400)

## React: Avoid useEffect Overuse

Most useEffect calls signal architecture problems. Effects are ONLY for external system synchronization.

### When NOT to use useEffect:

1. **Transforming data for render** → Use variables or `useMemo` (not state + effect)
2. **Resetting state when props change** → Use `key` prop to remount component
3. **Adjusting state when props change** → Calculate during render or rethink state structure
4. **Event-specific logic** (clicks, submits) → Use event handlers
5. **Chains of state updates** → Calculate all next state in one event handler
6. **Notifying parent of changes** → Update both in same event handler

### When useEffect IS appropriate:

- Browser APIs (addEventListener, etc.)
- Analytics tracking on component display
- Data layer (repository hooks) synchronizing with network

**Decision rule:** Code runs because user did something → event handler. Code runs because component displayed → Effect (rare).

Ref: https://react.dev/learn/you-might-not-need-an-effect
