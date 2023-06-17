---
layout: post
title: Differences Between Modules, Scripts, Packages, and More
date: 2023-06-17
description: Terminology cheat sheet.
tags:
categories:
---

There's a lot of Python terminology when it comes to pieces of code. Modules, packages, scripts, libraries, and frameworks are some commonly encountered terms that can be confusing to keep straight. The reason for all these different concepts is Python's **modular programming** approach, which involves breaking down a complex coding task into smaller components or modules.

The following is intended to be a cheat sheet describing the high-level differences.
- **Module:** File (*.py) containing related pieces of Python code. Could include functions, classes, or variables.
- **Script:** A directly executable code file. Any module can also be a Python script. Generally speaking, *scripts* are executed at the command line (using a command like `python module.py`) while *modules* are imported by other pieces of code.
- **Package:** Directory containing a collection of modules and a `__init__.py` file, which is executed when the package is imported. The `__init__.py` file is required to make Python treat the directory as a package (or subpackage).
- **Library:** Collection of packages. Oftentimes some Python packages (like NumPy or Pandas) are referred to as libraries because they encompass multiple subpackages.
- **Frameworks:** A collection of packages and modules but more complicated than a library. Frameworks contain the flow and architecture of an application. The flow and control of data is controlled by the framework (inversion of control). It decides when to call the packages. Contrast that to a library in which the developer decides when to call the packages.
