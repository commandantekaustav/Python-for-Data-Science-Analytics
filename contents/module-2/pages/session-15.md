---
layout: two-cols-header
transition: fade
---
### ⏰ Session 15: Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

In this session, we'll explore how to work with date and time data in pandas. We'll cover handling date and time objects, performing operations such as date arithmetic, and formatting.

::left::

**Why Date and Time Manipulation?**

* Time-based data is prevalent in many real-world datasets.
* Accurate analysis of time-based data requires proper handling and manipulation.
* Pandas provides powerful tools for working with date and time data.

::right::

**Key Concepts:**

* **Datetime Objects:** `datetime64` data type in pandas.
* **Parsing Dates:** Converting strings to datetime objects.
* **Date Arithmetic:** Performing operations on dates and times.
* **Time Series Indexing:** Using dates as index for time series data.
* **Date Formatting:** Formatting dates and times for display.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's start by understanding how pandas represents date and time data.

::left::

**1. Datetime Objects in pandas:**

* Pandas uses the `datetime64` data type to represent date and time data.
* You can create datetime objects using `pd.to_datetime()`.

::right::

**Example: Creating Datetime Objects**

```python
import pandas as pd

# Creating a datetime Series
dates = pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03'])
print("Datetime Series:\n", dates)
print("\nData Type:\n", dates.dtype)
```

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's see the output of creating datetime objects.

::left::

**Output & Explanation (Slide 2):**
```bash
Datetime Series:
DatetimeIndex(['2023-01-01', '2023-01-02', '2023-01-03'], dtype='datetime64[ns]', freq=None)

Data Type: datetime64[ns]
```

::right::

**Explanation:**

* `pd.to_datetime()` converts the list of strings into a `DatetimeIndex`.
* The `dtype` is `datetime64[ns]`, indicating the data type is datetime.
* Datetime objects are essential for working with time-based data in pandas.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's explore how to parse dates from strings.

::left::

**2. Parsing Dates from Strings:**

* `pd.to_datetime()` can parse dates from various string formats.
* You can specify the format using the `format` parameter.
* Parsing dates ensures consistent datetime objects.

::right::

**Example: Parsing Dates with Format**

```python
import pandas as pd

# Parsing dates with a specific format
dates = pd.to_datetime(['01/01/2023', '02/01/2023', '03/01/2023'], format='%d/%m/%Y')
print("Parsed Dates:\n", dates)
```

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's see the output of parsing dates from strings.

::left::

**Output & Explanation (Slide 4):**
```bash
Parsed Dates:
DatetimeIndex(['2023-01-01', '2023-01-02', '2023-01-03'], dtype='datetime64[ns]', freq=None)
```

::right::

**Explanation:**

* `pd.to_datetime()` parses the dates according to the specified format `'%d/%m/%Y'`.
* `%d` represents the day, `%m` the month, and `%Y` the year.
* Specifying the format ensures that pandas correctly interprets the date strings.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's explore how to perform date arithmetic.

::left::

**3. Date Arithmetic:**

* You can perform arithmetic operations on datetime objects.
* This includes adding or subtracting time intervals.
* Pandas uses `Timedelta` objects to represent time intervals.

::right::

**Example: Date Arithmetic**

```python
import pandas as pd

# Creating a datetime Series
dates = pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03'])

# Adding a time interval
new_dates = dates + pd.Timedelta(days=7)
print("New Dates:\n", new_dates)
```

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's see the output of performing date arithmetic.

::left::

**Output & Explanation (Slide 6):**
```bash
New Dates:
DatetimeIndex(['2023-01-08', '2023-01-09', '2023-01-10'], dtype='datetime64[ns]', freq=None)
```

::right::

**Explanation:**

* `pd.Timedelta(days=7)` creates a timedelta object representing a 7-day interval.
* Adding this timedelta to the `dates` Series adds 7 days to each date.
* Date arithmetic allows you to easily calculate future or past dates.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's explore how to use dates as an index for time series data.

::left::

**4. Time Series Indexing:**

* Using dates as the index allows for efficient time-based data retrieval.
* You can easily select data within a specific time range.
* Time series indexing is crucial for time-based analysis.

::right::

**Example: Time Series Indexing**

```python
import pandas as pd

# Creating a DataFrame with a DatetimeIndex
dates = pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03'])
data = pd.DataFrame({'values': [10, 20, 30]}, index=dates)
print("DataFrame:\n", data)

# Selecting data within a time range
selected_data = data['2023-01-02':'2023-01-03']
print("\nSelected Data:\n", selected_data)
```

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's see the output of using dates as an index for time series data.

::left::

**Output & Explanation (Slide 8):**
```bash
DataFrame:
            values
2023-01-01      10
2023-01-02      20
2023-01-03      30

Selected Data:
            values
2023-01-02      20
2023-01-03      30
```

::right::

**Explanation:**

* The `dates` Series is used as the index for the DataFrame.
* `data['2023-01-02':'2023-01-03']` selects rows with dates between '2023-01-02' and '2023-01-03' (inclusive).
* Time series indexing allows for efficient retrieval of time-based data.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's explore how to format dates and times for display.

::left::

**5. Date Formatting:**

* You can format datetime objects using the `strftime()` method.
* This allows you to display dates and times in various formats.
* Date formatting is essential for creating reports and visualizations.

::right::

**Example: Date Formatting**

```python
import pandas as pd

# Creating a datetime Series
dates = pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03'])

# Formatting dates
formatted_dates = dates.strftime('%d-%m-%Y')
print("Formatted Dates:\n", formatted_dates)
```

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's see the output of formatting dates.

::left::

**Output & Explanation (Slide 10):**
```bash
Formatted Dates:
Index(['01-01-2023', '02-01-2023', '03-01-2023'], dtype='object')
```
::right::

**Explanation:**

* `dates.strftime('%d-%m-%Y')` formats each date according to the specified format `'%d-%m-%Y'`.
* This converts the datetime objects into strings with the day, month, and year separated by hyphens.
* Date formatting allows for customized display of dates and times.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's summarize the key concepts of date and time manipulation in pandas.

::left::

**6. Recap of Key Concepts:**

* **Datetime Objects:** Using `pd.to_datetime()` to create datetime objects.
* **Parsing Dates:** Parsing dates from strings with `format` parameter.
* **Date Arithmetic:** Performing operations with `Timedelta`.
* **Time Series Indexing:** Using dates as index for efficient retrieval.
* **Date Formatting:** Formatting dates with `strftime()`.

::right::

**Key Takeaways:**

* Pandas provides powerful tools for handling date and time data.
* Understanding datetime objects and operations is crucial for time-based analysis.
* Proper formatting and indexing enhance the usability of time-based data.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

Using a DataFrame with date and time data, perform the following:

1.  Convert a column of date strings to datetime objects.
2.  Parse dates from strings with a specific format.
3.  Add a time interval (e.g., 1 week) to the dates.
4.  Set the datetime column as the index of the DataFrame.
5.  Select data within a specific time range.
6.  Format the dates in a different format (e.g., 'YYYY/MM/DD').

::right::

**Tips:**

* Choose a dataset with date and time information.
* Experiment with different date formats and time intervals.
* Use the pandas documentation for reference.

---
layout: two-cols-header
transition: fade
---
### ⏰ Date and Time Data Manipulation in pandas 📅

**Working with Time-Based Data**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we explored how to work with date and time data in pandas, including creating datetime objects, parsing dates, performing date arithmetic, using time series indexing, and formatting dates.

::right::

**Next Steps:**

* Practice with different datasets and time-based operations.
* Explore advanced time series analysis techniques.
* Combine date and time manipulation with other pandas functionalities for comprehensive data analysis.

Keep exploring and refining your skills!

