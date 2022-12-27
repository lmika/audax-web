# Settings

## default-limit

- Type: int
- Default: `1000`

The maximum number of rows returned from a query or scan.

## ro

- Type: flag

Enable read-only mode.  When enabled, all modification operations are disabled, and will fail with a `Read-only mode` error.
The `rw` setting will disable read-only mode.

## rw

- Type: flag

Disable read-only mode.  The `ro` setting will enable read-only mode.