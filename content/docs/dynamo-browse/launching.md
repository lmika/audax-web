+++
title = "Launching And Quitting"
weight = 10
+++

To launch dynamo-browse, run the following command at the terminal:

```
dynamo-browse
```

This will use your current AWS configuration and region.

In order to launch dynamo-browse to connect to a local instance of AWS, such as one
running in a Docker container, run the command with the `-local` flag set to the local
endpoint (if localhost is used, only the port is required):

```
dynamo-browse -local :8080
```

### Selecting A Table

Upon launch, dynamo-browse will request a description of the tables within the account
and present them as a list:

XXX 

Select the table to view by pressing <kbd>Enter</kbd>.  Use the following keys to navigate
the items within the list:

- <kbd>&uarr;</kbd>/<kbd>i</kbd>: Move selection up
- <kbd>&darr;</kbd>/<kbd>k</kbd>: Move selection down

Once the table is selected, the table will be scanned and dynamo-browse will be presented in
[View Mode](#view-mode).
dynamo-browse can also be launched with a specific table preselected using the `-t` flag:

```
dynamo-browse -t TABLE
```

## Quitting

To quit _dynamodb-browse_, enter the command `q` by pressing <kbd>:</kbd>, then typing <kbd>q</kbd><kbd>Enter</kbd>.
The keystroke <kbd>^C</kbd> can also be used to quit.