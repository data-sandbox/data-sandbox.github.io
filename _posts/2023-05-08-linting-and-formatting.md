---
layout: post
title: Linting and Formatting in VS Code
date: 2023-05-07
description: How to set up linters in VS Code.
tags:
categories:
---

Messy code may still work functionally, but is hard to read and maintain. **Linting** identifies syntax and style issues in your Python code, which helps maintain coding best practices and minimize errors.

Similarly, **formatting** restructures how the code looks, helping readability and consistency across multiple files and authors.

There are many linters and formatters to choose from in Python. Rather than discuss the pros and cons of the more popular choices here and open a can of worms, we'll limit the discussion to one of my personal favorites, `flake8`.

### Enable Linting in VS Code

First step is to install `flake8` in your environment with `pip install flake8` (or `python -m pip install flake8` if in a virtual environment). Next, linting in VS Code can be enabled by the following:

1. Open `Settings` menu with `⌘,`
2. Search `flake8`
3. Enable the option `Python>Linting: Flake8 Enabled`

If using virtual environments, `flake8` will have to be installed in every virtual environment. To avoid this repetitive step, you can install `flake8` globally:

1. In the terminal, deactivate all virtual environments
2. Run `pip3 install flake8`
3. Run `whereis flake8` to see the global path
4. Add the global path to the VS Code setting `Python>Linting: Flake8 Path`

### Run Linting Automatically

The last step in setting up a linting workflow is to set it to run automatically. This can be done for both Python scripts and Jupyter notebooks. In VS Code, the linting step can be triggered when saving the file:

1. Open `Settings` menu with `⌘,`
2. Search `flake8`
3. Enable the option `Python>Linting: Lint on Save`
4. Search `notebook`
5. Enable the option `Notebook>Format On Save: Enabled`

**Update:** Lately I was having issues with automatic formatting on save not working. After some debugging, the issue seems to have been resolved by reinstalling (or maybe installing, not positive I had it before) the `autopep8` extension for VSCode.
