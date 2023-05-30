---
layout: post
title: Simple ETL Pipeline with Bash
date: 2023-05-30
description: Learn ETL pipelines with bash scripting.
tags:
categories:
---

ETL pipelines are more in the wheelhouse of data engineers, but given the frequent cross-over between data science and data engineering, ETL is an important concept for data scientists to know. My desire to learn more brought me to the edX course [Building ETL and Data Pipelines with Bash, Airflow and Kafka](https://www.edx.org/course/building-etl-and-data-pipelines-with-bash-airflow-and-kafka), which provides an excellent introduction to ETL and hands-on Bash, Python, and Airflow programming of data pipelines.

ETL stands for "Extract, Transform, Load". Quite simply, this involves extracting data from a source, transforming it into a more usable form, then loading the transformations into a database for follow-on use.

A single Bash script can be used to demonstrate ETL in action. Imagine this scenario:

*A team is looking to get temperature statistics reported every 10 minutes. The data source is a remote sensor that measures the current temperature on demand. The desired reported temperature statistics include current, max, min, and average temperature over each 10 minute interval.*

How can we implement this scenario using an ETL Bash script? (Spoiler alert: the complete code can by found on my Github [here](https://github.com/data-sandbox/data-pipelines/tree/main/bash_temp_reporting).)

### Extract

First we need to extract the current temperature data from the remote sensor source. This is performed by using a weather API that takes inputs of latitude and longitude and outputs the current temperature. In the script below, this temperature extraction step is implemented by the Python file `get_temp.py`. After obtaining the current temperature reading, both the date timestamp and temperature reading are saved to a log file.

```
## Extract
echo "Extracting..."
# Get temperature reading and append to log
timestamp=$(date +%Y-%m-%d_%H:%M:%S)
temperature=$(python3 get_temp.py --lat=39.828118 --lon=-104.936449)
echo "$timestamp,$temperature" >> temperature.log
```
### Transform

Next we need to calculate some statistics from the temperature readings. The following script takes the temperature log file output from the extract step and computes the max, min, and average temperature over the defined period. The Python file `get_stats.py` performs these computations and outputs the results as a json file, effectively transforming the data into aggregated statistics ready for the next phase.
```
## Transform
echo "Transforming..."
# Call get_stats.py to aggregate readings
python3 get_stats.py --log=temperature.log --output=temp_stats.json
```
And here's a look at the json file formatting.
```
{"current": 71.01, "avg": 70.96, "min": 70.72, "max": 71.01}
```


### Load

The final step involves pushing the transformed temperature statistics to a dashboard that the team can view and see update. Setting up a dashboard connection is beyond the scope of this ETL experiment so the loading script is left as future work.

```
## Load
echo "Loading..."
# Push stats to dashboard
# TODO
```

### Final Thoughts
Using Bash to create a simple ETL pipeline is a quick and effective way to practice the key principles of ETL. By using Python functions to perform the more complicated steps associated with the ETL phases, the overall ETL Bash script remains simple, readable, and maintainable.

See all the code for this on my Github [here](https://github.com/data-sandbox/data-pipelines/tree/main/bash_temp_reporting).
