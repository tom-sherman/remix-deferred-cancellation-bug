## Steps to reproduce

1. Install and `pnpm run dev`
2. Open `/`
3. Open the network tab in the dev tools
4. Click the "refresh" link multiple times in quick succession

## Expected behavior

In-flight requests should be cancelled when a new request is made.

## Actual behavior

In-flight requests are not cancelled.
