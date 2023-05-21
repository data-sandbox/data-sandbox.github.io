---
layout: post
title: How Random Forest Works
date: 2023-05-20
description: Back to Basics&#58; Random Forest Algorithm.
tags:
categories:
---

Random Forest is one of the most popular machine learning algorithms, and for good reason. It works for both classification and regression problems, is less prone to overfitting thanks to being an ensemble method, and has high interpretability compared to other machine learning algorithms.

### How Decision Trees Work
Because Random Forest consists of a collection of decision tree models, it makes sense to start with how a single decision tree works. A decision tree is a hierarchical binary tree consisting of a root node, branches, internal nodes, and leaf nodes. At each node, a single feature and decision criteria is used to split the data into two more nodes.

To determine the optimal feature and decision criteria to use at each node, the algorithm works to minimize a "purity" criterion. The Gini index or Gini impurity is a common metric for this. Gini impurity measures the probability of a feature being incorrectly classified if it was randomly selected. The feature and decision criteria (can be true, false, or a numeric threshold) with the lowest Gini impurity is selected as the split decision at each node.

**Aside:** A decision tree is a non-parametric, supervised learning algorithm. Non-parametric algorithms do not assume mathematical mappings between inputs and outputs like parametric algorithms do. Instead, non-parametric algorithms learn patterns from the training data itself, making them more flexible but also more computationally expensive.

### How Random Forest Works
Random Forest works by collecting the results of many independent decision tree models and takes the average of the predictions. This diversity of trees often results in a significant decrease in variance, resulting in a better overall model.

The dataset for each decision tree in the model is built with bootstrap aggregating (aka bagging), where observations are sampled with replacement from the training data, resulting in some repeats.

Random Forest can also inject more randomness into each decision tree by using a random subset of all the features when determining the best node split. In sci-kit learn, this is controlled by the hyperparameter `max_features`. This additional randomness aims to decrease overall model variance.
