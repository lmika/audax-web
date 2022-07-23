+++
title = "awstools suite"
layout = "single"
+++

# The lmika/awstools Suite

These awstools are small terminal based UI (TUI, sometimes called "Rougelike") tools for
administering AWS services.

They were built to make it easy to do quick things with
common AWS services, such as DynamoDB, without having to learn incantations with the CLI or
go to the AWS console itself.  This keeps you focused on your task and saves you from
breaking concentration, especially if you do a lot in the terminal (like me).

## Tool Suite

The set of tools available are:

- [dynamo-browse](/docs/dynamo-browse): Browse DynamoDB tables

## Install

Binary packages can be [download from GitHub](https://github.com/lmika/awstools/releases/latest).

To install the Debian package, download the `.deb` file, and install the package by running:

```
sudo apt install ./awstool_0.0.1_linux_amd64.deb
```

To install the RPM package, download the `.rpm` file, and install the package by running:

```
sudo yum install ./awstools_0.0.1_linux_amd64.rpm
```

If you have Go 1.18, you can install using the following command:

```
go install github.com/lmika/awstools/cmd/dynamo-browse@v0.0.1
```

The [source from GitHub](https://github.com/lmika/awstools).