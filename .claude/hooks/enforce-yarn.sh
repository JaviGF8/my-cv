#!/bin/bash
set -euo pipefail

# Extract the command Claude is trying to run
CMD=$(jq -r '.tool_input.command // empty')
[[ -z "$CMD" ]] && exit 0

# Only enforce if a yarn.lock exists in the project root
[[ ! -f "${CLAUDE_PROJECT_DIR}/yarn.lock" ]] && exit 0

# Block npm commands and instruct Claude to use Yarn
if echo "$CMD" | grep -qE '^npm\s'; then
  echo "BLOCKED: This project uses Yarn, not npm. Please use 'yarn' equivalent commands." >&2
  exit 2
fi

exit 0
