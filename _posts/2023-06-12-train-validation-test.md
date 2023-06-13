---
layout: post
title: Training, Validation, and Test Data Sets
date: 2023-06-12
description: Back to Basics&#58; Data set splits.
tags:
categories:
---
### Confusion Surrounding Data Set Splits
When developing a machine learning model, splitting the data into training and test data sets is common practice (see scikit-learn's `train_test_split` function). The model is trained only on the training set and model performance is evaluated on the test set. Because the model was built without seeing the test data, the results on that set offers an unbiased estimate of model performance.

While all that may be straightforward, there is typically a third data split that causes confusion: the **validation data set**. Throughout the literature, the terms "test" and "validation" are used interchangeably, fueling the confusion on the differences. Like the test set, the validation set is a sample that's held back during training. Unlike the test set, the validation set is generally a subsample of the training set whose purpose is to give an estimate of model performance during hyperparameter tuning.

### Validation Set for Cross-Validation
In many cases, a user does not have to explicitly generate the validation data split. If using something like scikit-learn's `GridSearchCV`, creation of the validation set is handled automatically. In this approach, the data only needs to be explicitly split once by the user into training and test sets using scikit-learn's `train_test_split`. The training data in its entirety is next passed to `GridSearchCV`, which then performs a k-fold cross validation algorithm. Here's a quick summary of that algorithm:
1. Training data is split into *k* folds.
2. One fold serves as the validation set for the model.
3. Model is trained on the remaining *k-1* folds.
4. Repeat steps 2 and 3 so that each fold is used as the validation set once.

This algorithm will therefore generate *k* out-of-sample errors which can then be used to compute the cross-validation error. This is starting to go beyond the intended scope for this blog post, but the point here is to illustrate how validation data sets are commonly used behind the scenes!
