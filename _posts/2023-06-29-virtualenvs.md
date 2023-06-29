---
layout: post
title: Pitfalls to Avoid with Virtual Environments
date: 2023-06-29
description: TIL (Today I Learned) Series.
tags:
categories:
---

Having used virtual environments for awhile now, I thought I knew all the main points to be aware of. However, after watching [Calmcode's](https://calmcode.io/) track on [virtualenv](https://calmcode.io/virtualenv/intro.html), there were a few useful pointers I picked up.

### Difference between `virtualenv` and `venv`
`venv` is a built-in Python module, but `virtualenv` is a superset of it with more features. Biggest advantages of `virtualenv` include:
- Faster in creating virtual environments
- Tool can be upgrading simply using `pip`

Creating an environment with `virtualenv` follows the same syntax of `venv`. For instance,
```
python3.10 -m virtualenv venv310
```
creates a virtual environment folder titled `venv310`.

### Always include `python -m`
After sourcing a virtual environment, the commands `python -m pip install <package>` and the shorter version `pip install <package>` are generally equivalent. However, there is a risk here when calling `pip` or other packages (`juypter`, `pytest`, etc) directly. If `pip` is properly installed in the virtual environment folder, then everything should be good. If it's not installed there, then the system will start looking for `pip` in a global Python environment and load it from there (without any warnings or errors!). The solution here is to keep those global Python environments lightweight (see section below) and specifically include `python -m` in your command to force it to use the version of Python within the current virtual environment.

### Keep global Python environments lightweight
Only install the bare minimum packages or libraries in these environments. That way if the system starts looking for a package outside of the virtual environment, it will come up empty.

### Deactivating and re-sourcing virtual environments
Imagine the case where you're in a virtualenv and install a new package. If that same package also lives in a global environment, there is a risk that at the time of sourcing the virtualenv, a link was created between that package in the global environment and the virtualenv. Even after installing the package within the virtualenv, calls to that package might still refer to the global environment version (even though `pip freeze` shows that package in our virtualenv!). To solve this, you can always deactivate and source the virtualenv to reset the connections. Or better yet, as mentioned in a previous section, specifically using `python -m` before the main entry point restricts it to look only within the current virtualenv.
