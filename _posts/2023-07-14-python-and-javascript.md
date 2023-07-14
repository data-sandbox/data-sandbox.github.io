---
layout: post
title: Parallels between Python and JavaScript
date: 2023-07-14
description: JavaScript is not so scary.
tags:
categories:
---

I recently started exploring the world of software development and have been delving into JavaScript. Being originally a Python user, the thought of learning a new language seemed daunting at first. However, I've been pleasantly surprised to see the many similarities between Python and JavaScript which has made the learning process quite tractable!

Below is a list of some parallels between Python and JavaScript that I've found useful in my learning journey.

### 1. Dictionary versus Object
In Python, key-value pairs are stored in `dictionary` data type. JavaScript does not have a `dictionary` data type and instead stores key-value pairs in a `object` data type. This can be a little confusing since Python also uses the concept of objects.

### 2. Object instances with *self* versus *this*
Both Python's `self` and JavaScript's `this` are used to refer to the current object's instance within a method. The main difference is Python's `self` is not implicitly available and is an explicitly required parameter for all methods of an object. JavaScript's `this` can be called without declaring it within the object definition.

### 3. Copying and Object Pointing
Sometimes we want to copy an array without simply making a new pointer to the original object. In Python we can accomplish this with `.copy()`.
```
# Python
array1 = [1, 2, 3]
array2 = array1.copy()
array2[0] = 4
print(array1) # [1, 2, 3]
print(array2) # [4, 2, 3]
```
In JavaScript this is accomplished with the spread operator.
```
// JavaScript
let array1 = [1, 2, 3];
let array2 = [...array1];
array2[0] = 4;
console.log(array1); // [1, 2, 3]
console.log(array2); // [4, 2, 3]
```

### 4. Last Element
In Python the easiest way to reference the last element in an array or string is `array[-1]`. JavaScript also has the concept of `-1` but needs the additional method `at()` like in the example `array.at(-1)`.
