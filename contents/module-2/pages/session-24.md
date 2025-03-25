---
layout: two-cols-header
transition: fade
---
### 📅 Session 24: pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

In this session, we'll focus on handling date and time data in pandas. Time-based data is ubiquitous in data analysis, and pandas provides powerful tools for working with it effectively. We'll explore techniques for creating, parsing, manipulating, and analyzing date and time data.

::left::

**Why Handle Date and Time Data?**

* **Time Series Analysis:** Many datasets are time-dependent, requiring analysis of trends and patterns over time.
* **Data Aggregation:** Grouping and summarizing data by time intervals (e.g., daily, monthly) is essential for insights.
* **Data Filtering and Selection:** Selecting data based on specific time ranges is a common task.

::right::

**Key Concepts:**

* **Creating Datetime Objects:** Converting strings or numerical data to datetime objects.
* **Parsing Dates:** Handling different date formats and parsing them into datetime objects.
* **Performing Date Arithmetic:** Adding or subtracting time intervals from dates.
* **Resampling:** Changing the frequency of time series data.
* **Time Zone Handling:** Working with time zones and converting between them.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's start by understanding how to create datetime objects.

::left::

**1. Creating Datetime Objects:**

* pandas provides the `to_datetime()` function to convert strings or numerical data to datetime objects.
* Datetime objects represent specific points in time and can be used for various time-based operations.

::right::

**Example: Creating Datetime Objects**

```python
import pandas as pd

# Create a Series of date strings
date_strings = pd.Series(['2023-01-01', '2023-02-15', '2023-03-31'])
print("Original Series:\n", date_strings)

# Convert to datetime objects
datetime_series = pd.to_datetime(date_strings)
print("\nDatetime Series:\n", datetime_series)

# Create a single datetime object
single_datetime = pd.to_datetime('2023-04-20')
print("\nSingle Datetime Object:\n", single_datetime)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's see the output of creating datetime objects.

::left::

**Output & Explanation (Slide 2):**
```bash
Original Series:
0    2023-01-01
1    2023-02-15
2    2023-03-31
dtype: object

Datetime Series:
0   2023-01-01
1   2023-02-15
2   2023-03-31
dtype: datetime64[ns]

Single Datetime Object:
2023-04-20 00:00:00
```

::right::

**Explanation:**

* `pd.to_datetime(date_strings)` converts the Series of date strings to a Series of `datetime64[ns]` objects.
* `pd.to_datetime('2023-04-20')` converts the single date string to a `datetime64[ns]` object.
* The output shows the original date strings and their corresponding datetime objects.
* Notice that the single datetime object includes the time component (00:00:00) by default, even if it's not explicitly specified in the input string.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to parse dates with different formats.

::left::

**2. Parsing Dates:**

* Date strings can come in various formats, and pandas can parse them automatically or with specified formats using the `format` parameter in `to_datetime()`.
* Handling different date formats is crucial for accurate time-based analysis.

::right::

**Example: Parsing Dates with Different Formats**

```python
import pandas as pd

# Series with different date formats
date_strings = pd.Series(['01/01/2023', '15-02-2023', '2023 March 31'])
print("Original Series:\n", date_strings)

# Parse dates with specified formats
datetime_series1 = pd.to_datetime(date_strings[0], format='%d/%m/%Y')
datetime_series2 = pd.to_datetime(date_strings[1], format='%d-%m-%Y')
datetime_series3 = pd.to_datetime(date_strings[2], format='%Y %B %d')

print("\nParsed Datetime Objects:")
print(datetime_series1)
print(datetime_series2)
print(datetime_series3)

# Parse multiple dates automatically when possible.
datetime_series_auto = pd.to_datetime(pd.Series(['2023-01-01', '2023/02/15', '03/31/2023']))
print('\nParsed Datetime Objects Automatically:\n', datetime_series_auto)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

::left::

**Working with Time-Based Data in pandas**

Let's see the output of parsing dates with different formats.



**Output & Explanation (Slide 4):**
```bash
Original Series:
0    01/01/2023
1    15-02-2023
2    2023 March 31
dtype: object

Parsed Datetime Objects:
2023-01-01 00:00:00
2023-02-15 00:00:00
2023-03-31 00:00:00

Parsed Datetime Objects Automatically:
0   2023-01-01
1   2023-02-15
2   2023-03-31
dtype: datetime64[ns]
```

::right::

**Explanation:**

* `pd.to_datetime(date_strings[0], format='%d/%m/%Y')` parses the date string '01/01/2023' using the format '%d/%m/%Y' (day/month/year).
* `pd.to_datetime(date_strings[1], format='%d-%m-%Y')` parses '15-02-2023' using the format '%d-%m-%Y' (day-month-year).
* `pd.to_datetime(date_strings[2], format='%Y %B %d')` parses '2023 March 31' using the format '%Y %B %d' (year month day).
* `pd.to_datetime(pd.Series(['2023-01-01', '2023/02/15', '03/31/2023']))` parses multiple date formats automatically when pandas can infer the format.
* The output shows that pandas successfully parses the date strings into datetime objects using the specified formats.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to perform date arithmetic.

::left::

**3. Performing Date Arithmetic:**

* Date arithmetic involves adding or subtracting time intervals from dates.
* pandas provides `Timedelta` objects to represent time intervals and perform arithmetic operations on datetime objects.

::right::

**Example: Performing Date Arithmetic**

```python
import pandas as pd

# Create a datetime object
date = pd.to_datetime('2023-04-20')
print("Original Date:\n", date)

# Add 7 days
new_date_add = date + pd.Timedelta(days=7)
print("\nDate after adding 7 days:\n", new_date_add)

# Subtract 3 days
new_date_subtract = date - pd.Timedelta(days=3)
print("\nDate after subtracting 3 days:\n", new_date_subtract)

# Add 1 hour
new_date_hour = date + pd.Timedelta(hours=1)
print("\nDate after adding 1 hour:\n", new_date_hour)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's see the output of performing date arithmetic.

::left::

**Output & Explanation (Slide 6):**
```bash
Original Date:
2023-04-20 00:00:00

Date after adding 7 days:
2023-04-27 00:00:00

Date after subtracting 3 days:
2023-04-17 00:00:00

Date after adding 1 hour:
2023-04-20 01:00:00
```

::right::

**Explanation:**

* `date + pd.Timedelta(days=7)` adds 7 days to the original date.
* `date - pd.Timedelta(days=3)` subtracts 3 days from the original date.
* `date + pd.Timedelta(hours=1)` adds 1 hour to the original date.
* The output shows the resulting dates after performing the arithmetic operations.
* `Timedelta` objects allow you to specify time intervals in various units, such as days, hours, minutes, and seconds.


---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to resample time series data.

::left::

**4. Resampling:**

* Resampling involves changing the frequency of time series data.
* You can resample data to a higher frequency (upsampling) or a lower frequency (downsampling) using the `resample()` method.
* Resampling is useful for aggregating data, smoothing trends, and aligning time series with different frequencies.

::right::

**Example: Resampling Time Series Data**

```python
import pandas as pd
import numpy as np

# Create a DatetimeIndex
date_rng = pd.date_range(start='2023-01-01', end='2023-01-10', freq='D')
print("Original Date Range:\n", date_rng)

# Create a sample Series
data = pd.Series(np.arange(len(date_rng)), index=date_rng)
print("\nOriginal Series:\n", data)

# Resample to a lower frequency (downsampling) - weekly
weekly_data = data.resample('W').sum()
print("\nWeekly Resampled Data:\n", weekly_data)

# Resample to a higher frequency (upsampling) - hourly
hourly_data = data.resample('H').asfreq()
print("\nHourly Resampled Data:\n", hourly_data)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to resample time series data.

::left::

**4. Resampling:**

* Resampling involves changing the frequency of time series data.
* You can resample data to a higher frequency (upsampling) or a lower frequency (downsampling) using the `resample()` method.
* Resampling is useful for aggregating data, smoothing trends, and aligning time series with different frequencies.

::right::

**Creating Sample Time Series Data:**

```python
import pandas as pd
import numpy as np

# Create a DatetimeIndex
date_rng = pd.date_range(start='2023-01-01', end='2023-01-10', freq='D')
print("Original Date Range:\n", date_rng)

# Create a sample Series
data = pd.Series(np.arange(len(date_rng)), index=date_rng)
print("\nOriginal Series:\n", data)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to resample time series data.

::left::

**4. Resampling:**

* Resampling involves changing the frequency of time series data.
* You can resample data to a higher frequency (upsampling) or a lower frequency (downsampling) using the `resample()` method.
* Resampling is useful for aggregating data, smoothing trends, and aligning time series with different frequencies.

::right::

**Downsampling: Resampling to Weekly Data**

```python
# Resample to a lower frequency (downsampling) - weekly
weekly_data = data.resample('W').sum()
print("\nWeekly Resampled Data:\n", weekly_data)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to resample time series data.

::left::

**4. Resampling:**

* Resampling involves changing the frequency of time series data.
* You can resample data to a higher frequency (upsampling) or a lower frequency (downsampling) using the `resample()` method.
* Resampling is useful for aggregating data, smoothing trends, and aligning time series with different frequencies.

::right::

**Upsampling: Resampling to Hourly Data**

```python
# Resample to a higher frequency (upsampling) - hourly
hourly_data = data.resample('H').asfreq()
print("\nHourly Resampled Data:\n", hourly_data)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's see the output of resampling time series data.

::left::

**Output & Explanation:**
```bash
Original Date Range:
DatetimeIndex(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04',
               '2023-01-05', '2023-01-06', '2023-01-07', '2023-01-08',
               '2023-01-09', '2023-01-10'],
              dtype='datetime64[ns]', freq='D')

Original Series:
2023-01-01    0
2023-01-02    1
2023-01-03    2
2023-01-04    3
2023-01-05    4
2023-01-06    5
2023-01-07    6
2023-01-08    7
2023-01-09    8
2023-01-10    9
Freq: D, dtype: int64
```

::right::

**Explanation:**

* **Original Data:** We create a daily DatetimeIndex and a Series of numbers indexed by it.
* The `DatetimeIndex` shows the range of dates from January 1st to 10th, 2023, with a daily frequency (freq='D').
* The `Original Series` displays the values associated with each date in the index.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's see the output of resampling time series data.

::left::

**Output & Explanation:**
```bash
Weekly Resampled Data:
2023-01-01     3
2023-01-08    31
Freq: W-SUN, dtype: int64
```

::right::
**Explanation:**

* **Downsampling:** `data.resample('W').sum()` aggregates the daily data into weekly sums.
* The first week (2023-01-01) includes the values from 2023-01-01 to 2023-01-07, which are 0, 1, 2, 3, 4, 5, and 6. The sum of these values is 21. However, because the resample is using sunday as the end of the week, the first week only includes the first three days. 0+1+2 = 3.
* The second week (2023-01-08) includes the values from 2023-01-08 to 2023-01-10, which are 7, 8 and 9. The sum of these values is 24.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's see the output of resampling time series data.

::left::

**Output & Explanation:**
```bash
Hourly Resampled Data:
2023-01-01 00:00:00    0.0
2023-01-01 01:00:00    NaN
2023-01-01 02:00:00    NaN
2023-01-01 03:00:00    NaN
2023-01-01 04:00:00    NaN
...
2023-01-10 20:00:00    NaN
2023-01-10 21:00:00    NaN
2023-01-10 22:00:00    NaN
2023-01-10 23:00:00    NaN
Freq: H, Length: 217, dtype: float64
```

::right::
**Explanation:**
* **Upsampling:** `data.resample('H').asfreq()` converts the daily data to hourly data.
* `asfreq()` returns the value at the end of each hour, filling in missing values with `NaN`.
* Only the start of each day (00:00:00) has a value from the original Series, as the original data was daily.
* All other hours within each day are filled with `NaN` because there were no corresponding values in the original daily data.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's explore how to handle time zones.

::left::

**5. Time Zone Handling:**

* Time zone handling is crucial when working with time series data that spans multiple time zones.
* pandas provides tools for working with time zones, including converting between them using the `tz_localize()` and `tz_convert()` methods.

::right::

**Example: Time Zone Handling**

```python
import pandas as pd

# Create a DatetimeIndex without time zone information
date_rng = pd.date_range(start='2023-01-01 09:00:00', periods=3, freq='H')
print("Original DatetimeIndex:\n", date_rng)

# Localize to UTC
utc_date_rng = date_rng.tz_localize('UTC')
print("\nLocalized to UTC:\n", utc_date_rng)

# Convert to Pacific Time
pacific_date_rng = utc_date_rng.tz_convert('US/Pacific')
print("\nConverted to Pacific Time:\n", pacific_date_rng)
```

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

::left::

**Working with Time-Based Data in pandas**

Let's see the output of time zone handling.


**Output & Explanation:**
```bash
Original DatetimeIndex:
DatetimeIndex(['2023-01-01 09:00:00', '2023-01-01 10:00:00',
               '2023-01-01 11:00:00'],
              dtype='datetime64[ns]', freq='H')

Localized to UTC:
DatetimeIndex(['2023-01-01 09:00:00+00:00', '2023-01-01 10:00:00+00:00',
               '2023-01-01 11:00:00+00:00'],
              dtype='datetime64[ns, UTC]', freq='H')

Converted to Pacific Time:
DatetimeIndex(['2023-01-01 01:00:00-08:00', '2023-01-01 02:00:00-08:00',
               '2023-01-01 03:00:00-08:00'],
              dtype='datetime64[ns, US/Pacific]', freq='H')
```

::right::

**Explanation:**
* `pd.date_range(start='2023-01-01 09:00:00', periods=3, freq='H')` creates a DatetimeIndex without explicit time zone information.
* `date_rng.tz_localize('UTC')` localizes the DatetimeIndex to UTC, adding the '+00:00' offset and the 'UTC' time zone information.
* `utc_date_rng.tz_convert('US/Pacific')` converts the UTC DatetimeIndex to Pacific Time ('US/Pacific'), adjusting the times and adding the '-08:00' offset.
* The output shows the original DatetimeIndex, the UTC-localized DatetimeIndex, and the Pacific Time-converted DatetimeIndex, demonstrating the time zone handling capabilities of pandas.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's recap the key concepts of date and time handling.

::left::

**6. Recap of Key Concepts:**

* **Creating Datetime Objects:** Using `pd.to_datetime()` to convert strings or numerical data to datetime objects.
* **Parsing Dates:** Handling different date formats and parsing them into datetime objects using the `format` parameter.
* **Performing Date Arithmetic:** Adding or subtracting time intervals from dates using `pd.Timedelta`.

::right::

* **Resampling:** Changing the frequency of time series data using the `resample()` method.
* **Time Zone Handling:** Working with time zones and converting between them using `tz_localize()` and `tz_convert()`.


**Key Takeaways:**

* pandas provides powerful tools for working with date and time data, enabling efficient time series analysis.
* Understanding how to create, parse, manipulate, and resample date and time data is essential for data analysis.
* Time zone handling is crucial for accurate analysis of data that spans multiple time zones.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

1.  Create a pandas Series with date and time data in various formats.
2.  Convert the Series to datetime objects, handling any format inconsistencies.
3.  Perform date arithmetic operations, such as adding or subtracting days, hours, or minutes.
4.  Resample a time series dataset to different frequencies (e.g., daily to weekly, hourly to daily).
5.  Work with time zones by localizing a DatetimeIndex and converting it to a different time zone.

::right::

**Tips:**

* Refer to the pandas documentation for a comprehensive list of datetime formatting codes.
* Experiment with different resampling frequencies and aggregation functions.
* Explore the `pytz` library for more advanced time zone handling capabilities.

---
layout: two-cols-header
transition: fade
---
### 📅 pandas Data Cleaning - Date and Time Handling ⏰

**Working with Time-Based Data in pandas**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we covered date and time handling in pandas. We explored techniques for creating, parsing, manipulating, resampling, and working with time zones in time series data.

::right::

**Next Steps:**

* Practice handling date and time data from various real-world datasets.
* Explore advanced time series analysis techniques, such as rolling windows and time series decomposition.
* Consider integrating date and time handling into your data preprocessing pipelines for time-dependent data.

Keep practicing and refining your skills!