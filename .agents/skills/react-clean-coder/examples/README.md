# React Clean Coder Example

This example demonstrates the layered architecture with strict separation of concerns.

## Files Structure

```
UserProfile.tsx                    # UI Layer - Only JSX
useUserProfile.ts                  # Use Case Layer - State + handlers (NO logic)
useUserData.ts                     # Data Layer - Data fetching
domain/getUserProfileData.ts       # Domain Layer - ALL logic
```

## Key Points

1. **Domain function receives user directly** - including null/undefined
2. **Domain handles all logic** - null checks, calculations, conditionals
3. **One public function per behavior** - `getUserProfileData` returns both stats and VIP flag
4. **Private helper functions** - `calculateStats`, `isVipUser` used internally
5. **Use case hook has ZERO logic** - just calls `getUserProfileData(user)` directly
6. **UI layer only has presentation conditionals** - `if (isLoading)`, `{shouldShowVipBadge && ...}`
