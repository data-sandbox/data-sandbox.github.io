---
layout: page
title: Cloud-free backups
description: Secure local backup workflow using built-in rsync utility.
img: assets/img/backups1.jpg
importance: 3
category: work
---

#### The Problem

Cloud backup services have existed for some time now. While they can be incredibly convenient, data privacy concerns have been on the rise. Unless the cloud provider advertises zero-knowledge encryption (where only the user holds the encryption key to decrypt the account), the provider still holds the encryption key to access your account which presents a security risk.

#### Rsync

As an alternative to cloud services, I created a backup script that uses the built-in (Unix) rsync command-line utility to perform backups locally to external hard drives. No cloud services or third-party backup software needed!

The backup strategy here is two-fold. First the main contents are synced to a primary external hard drive. Second, the primary external hard drive is synced to at least one replica external hard drive (which is then stored in a different location from the primary to minimize the risk of data loss from events like theft, fire, flood, etc.).

While no backup strategy is bulletproof, this approach provides multiple points of failure and only uses the built-in rsync utility. This workflow can also be automated to run periodically by scheduling a cron job.

All code for this can be found on [github](https://github.com/data-sandbox/bash/tree/main/rsync).