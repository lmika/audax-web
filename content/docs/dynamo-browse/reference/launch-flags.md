+++
title = "Launch Flags"
weight = 104
+++

### -debug

```
-debug <filename>
```

Enable debug logs, which will be written to _filename_.

### -default-limit

```
-default-limit <int>
```

Sets the default limit of queries or scans.  The default is 1,000 items.

### -local

```
-local [host]:<port>
```

Connect to a local DynamoDB service listening on _host_:_port_.  The default _host_ is `localhost`.

### -ro

```
-ro
```

Enable read-only mode.

### -t

```
-t <tableName>
```

Open the table _tableName_, instead of prompting for a table.

### -w

```
-w <workspaceFile>
```

Use _workspaceFile_ as the workspace file.  If unset, a temporary file will be used for the workspace.