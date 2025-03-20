---
theme: seriph
layout: two-cols-header
transition: fade
---

### Session 8: Advanced DataFrame Operations - Filtering Data - Introduction 🔍📊🐼

**Filtering DataFrames: Selecting Subsets of Data**

**Filtering** DataFrames means selecting rows based on specific conditions. It's like asking your DataFrame questions and getting back only the rows that answer "yes"!

**Why is Filtering Essential?**

*   **Focus on Relevant Data:** Isolate data subsets for specific analysis.
*   **Data Cleaning:**  Remove unwanted data (e.g., outliers, errors).
*   **Conditional Analysis:** Analyze different groups within your data separately.
*   **Feature Engineering:** Create new features based on data conditions.

**The core of DataFrame filtering is *Boolean Indexing*. Let's see how it works!**

---
layout: two-cols-header
transition: fade
---
### Session 8: Advanced DataFrame Operations - Filtering Data - Boolean Indexing Explained 🔍📊🐼

**Boolean Indexing: The Heart of DataFrame Filtering**

**Boolean Indexing** is the key to powerful DataFrame filtering. It works in two steps:

1.  **Create a Boolean Series:**  Generate a Series of `True` and `False` values based on a condition applied to a DataFrame column (or multiple columns).
2.  **Use the Boolean Series to Index the DataFrame:**  Pass this Boolean Series to the DataFrame's square brackets `[]`.  pandas will *select only the rows where the Boolean Series is `True`*.

**Analogy:** Imagine a light switch (`True`/`False`).  Boolean Indexing is like using a series of light switches (one for each row) to decide which rows to "turn on" (keep) and which to "turn off" (filter out).

**Let's see Boolean Indexing in action with a simple example: Filtering based on a single column condition!**

---
layout: two-cols-header
transition: fade
---

### Advanced DataFrame Operations - Filtering Data - Single Column Filtering (Part 1) 🔍📊🐼

**Filtering by Single Column Condition: Basic Boolean Indexing**

Let's filter our example DataFrame to select only rows where the 'Age' is greater than 25.

**Example: Filtering for people older than 25**
::left::
```python
import pandas as pd

data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'Tokyo'}
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)
```
::right::

```py
# 1. Create Boolean Series: Check 'Age' > 25 for each row
bool_series_age_gt_25 = df['Age'] > 25 
# ^--- Boolean Series!

print("\nBoolean Series (Age > 25):\n", bool_series_age_gt_25)

# 2. Use Boolean Series to filter DataFrame
df_filtered_age_gt_25 = df[bool_series_age_gt_25] 
# ^--- Filtering using [] and Boolean Series!

print("\nDataFrame Filtered (Age > 25):\n", df_filtered_age_gt_25)
```
---
layout: two-cols-header
transition: fade
---

### Advanced DataFrame Operations - Filtering Data - Single Column Filtering Example (Part 2) 🔍📊🐼

::left::

**Single Column Filtering: Output and Explanation**

<!-- Here's the output from the single column filtering code (previous slide): -->

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35   Tokyo

Boolean Series (Age > 25):
0    False
1     True
2    False
3     True
Name: Age, dtype: bool

DataFrame Filtered (Age > 25):
Name  Age    City
1     Bob   30  London
3   David   35   Tokyo
```

::right::

**Explanation:**

*   `df['Age'] > 25` created a **Boolean Series**. `True` where 'Age' > 25, `False` otherwise.
*   `df[bool_series_age_gt_25]` used this Series to **filter `df`**.
*   Only rows where `bool_series_age_gt_25` was `True` (rows with 'Bob' and 'David') are included in `df_filtered_age_gt_25`.
*   Rows where `bool_series_age_gt_25` was `False` (rows with 'Alice' and 'Charlie') were filtered out.

---
layout: two-cols-header
transition: fade
---

### Advanced DataFrame Operations - Filtering Data - Multiple Column Filtering (Part 1) 🔍📊🐼

**Filtering with Multiple Conditions: Combining Boolean Series**

You can combine multiple filtering conditions using **logical operators:**

*   **`&` (AND):**  Both conditions must be `True`.
*   **`|` (OR):**  At least one condition must be `True`.
*   **`~` (NOT):**  Negates a condition (inverts `True` to `False` and vice versa).

**Crucially, when combining conditions, *enclose each condition in parentheses `()` for clarity and to ensure correct operator precedence.***
---

### Advanced DataFrame Operations - Filtering Data - Multiple Column Filtering (Part 2) 🔍📊🐼

**Example: Filter for people older than 25 AND living in London**

```python
import pandas as pd

data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'} # Added David in London
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)

# Create Boolean Series for Age > 25 AND City == 'London'
bool_series_multiple_conditions = (df['Age'] > 25) & (df['City'] == 'London') # <--- AND condition with parentheses

print("\nBoolean Series (Age > 25) & (City == 'London')):\n", bool_series_multiple_conditions)

# Filter DataFrame using the combined Boolean Series
df_filtered_multiple_conditions = df[bool_series_multiple_conditions]

print("\nDataFrame Filtered (Age > 25) & (City == 'London'):\n", df_filtered_multiple_conditions)
```
---

---
layout: two-cols-header
transition: fade
---

### Advanced DF Ops - Filtering Data - Multiple Column Filtering Ex (P: 3) 🔍📊🐼

**Multiple Column Filtering: Output and Explanation**

<!-- Here's the output from the multiple column filtering code (previous slide - Part 2): -->
::left::
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
Boolean Series (Age > 25) & (City == 'London')):
0    False
1     True
2    False
3     True
dtype: bool
DataFrame Filtered (Age > 25) & (City == 'London'):
Name  Age    City
1    Bob   30  London
3  David   35  London
```

::right::
**Explanation:**

*   `(df['Age'] > 25) & (df['City'] == 'London')` created a **Boolean Series** with combined conditions using the **`&` (AND) operator**.
*   Both conditions (`Age > 25` *and* `City == 'London'`) had to be `True` for a row to be `True` in the Boolean Series.
*   `df[bool_series_multiple_conditions]` filtered the DataFrame, keeping only rows where the combined Boolean Series was `True`.
*   Only rows for 'Bob' and 'David' are included in the filtered DataFrame.

---
layout: two-cols-header
transition: fade
---
### Filtering Data - OR Condition 🔍📊🐼

**Filtering with OR: Selecting Rows Matching *Either* Condition**

Sometimes you need to select rows that satisfy *either* one condition *OR* another (or both).  For this, we use the **`|` (OR) logical operator**.

**Example Scenarios for OR Filtering:**

*   "Show me people who are either from NY *or* Paris."
*   "Find products that are either 'in stock' *or* 'on sale'."
*   "Select data points that are outliers in column A *or* column B."

**Let's see how to use the `|` operator for OR filtering in pandas!**

---
layout: two-cols-header
transition: fade
---
### Filtering Data - OR Example (Part 1) 🔍📊🐼

**Filtering with OR: Code Example**

Let's filter for people who are either younger than 25 *OR* from Paris.

```python
import pandas as pd
data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'},
    {'Name': 'Eve', 'Age': 24, 'City': 'Paris'} # Added Eve, age 24, Paris
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)

# Filter for Age < 25 OR City == 'Paris'
bool_series_or_condition = (df['Age'] < 25) | (df['City'] == 'Paris') # <--- OR condition with |

print("\nBoolean Series (Age < 25) | (City == 'Paris')):\n", bool_series_or_condition)

df_filtered_or_condition = df[bool_series_or_condition]

print("\nDataFrame Filtered (Age < 25) | (City == 'Paris'):\n", df_filtered_or_condition)
```
---
layout: two-cols-header
transition: fade
---

### Filtering Data - OR Example (Part 2a) - Boolean Series Byte 🔍📊🐼

**OR Filtering - Byte 1: Creating the Boolean Series**

Let's focus on *just* creating the Boolean Series for our OR condition:  `(Age < 25) | (City == 'Paris')`.

**Code Snippet: Boolean Series Creation**

```python
bool_series_or_condition = (df['Age'] < 25) | (df['City'] == 'Paris')
```

**Explanation:**
- This line creates `bool_series_or_condition`.
- It checks two conditions for each row:
    + `df['Age'] < 25`: Is the 'Age' column value less than 25?
    + `df['City'] == 'Paris'`: Is the 'City' column value equal to 'Paris'?
- The `|` (OR) operator combines these: If *either* condition is `True` for a row, the entire condition is `True`.
- The result is a pandas Series of `True` and `False` values.

**Next, we'll see how to use this Boolean Series to filter the DataFrame!**

---
layout: two-cols-header
transition: fade
---

### Filtering Data - OR Example (Part 2b) - DataFrame Filter Byte 🔍📊🐼

**OR Filtering - Byte 2: Filtering the DataFrame**

Now, let's see how to use the Boolean Series `bool_series_or_condition` to filter the DataFrame.

**Code Snippet: DataFrame Filtering**

```py
df_filtered_or_condition = df[bool_series_or_condition]
```

**Explanation:**
- This line performs the actual filtering.
- `df[bool_series_or_condition]` uses the Boolean Series as an *index* for the DataFrame `df`.
pandas *selects and keeps only the rows* where `bool_series_or_condition` is `True`.
Rows where `bool_series_or_condition` is `False` are filtered out.
The result is stored in `df_filtered_or_condition`.

**Finally, let's look at the complete output and explanation for the OR filtering example!**

---
layout: two-cols-header
transition: fade
---

### Filtering Data - OR Example (Part 2) - Output & Explanation 🔍📊🐼

**OR Filtering: Output and Explanation**

Here's the output from the OR filtering code (Slide 8-2-b):

::left::

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
4      Eve   24   Paris

DataFrame Filtered (Age < 25) | (City == 'Paris'):
Name  Age   City
2  Charlie   22  Paris
4    Eve     24  Paris
```
::right::

**Explanation:**

*   The code filters for rows where *either* `Age < 25` *OR* `City == 'Paris'` is `True`.
*   Rows for 'Charlie' (Age 22, Paris) and 'Eve' (Age 24, Paris) are kept because they meet at least *one* condition.
*   Rows for 'Alice', 'Bob', and 'David' are filtered out as they meet *neither* condition.

---
layout: two-cols-header
transition: fade
---
### Filtering Data - AND & OR Summary ✅🔍📊🐼

**Summary: Filtering with AND (`&`) and OR (`|`)**

*   **AND (`&`):**  Use `&` to combine conditions when *all* conditions must be `True` for a row to be selected.
    *   Example: `(df['Col1'] > 10) & (df['Col2'] == 'X')`

*   **OR (`|`):** Use `|` to combine conditions when *at least one* condition must be `True` for a row to be selected.
    *   Example: `(df['Col3'] < 5) | (df['Col4'] != 'Y')`

**Key Point: Always use parentheses `()` around *each individual condition* when combining them with `&` or `|` to ensure correct logic and avoid errors!**

With AND and OR filtering covered, let's move on to another useful filtering technique: **`isin()` filtering!**

---
layout: two-cols-header
transition: fade
---
### Filtering Data - `isin()` Filtering - Introduction 🖐️🔍📊🐼

**Filtering with `isin()`: Checking for Value Membership**

The `.isin()` method is used to filter rows based on whether a column's values are present in a *list* or *set* of allowed values.

**Why is `isin()` Useful?**

*   **Filtering by Categories:** Select rows where a column's value belongs to a specific category (e.g., filter for cities that are in a list of 'major cities').
*   **Cleaning Data Based on Allowed Values:**  Keep only rows with valid values in a column, based on a predefined list of acceptable entries.
*   **Simplifying Complex OR Conditions:**  `isin()` can often replace long chains of `OR` conditions when checking for multiple specific values.

**Let's see how to use `.isin()` to filter DataFrames based on value membership!**

---
layout: two-cols-header
transition: fade
---
### Filtering Data - `isin()` Example (Part 1) 🔍📊🐼

**Filtering with `isin()`: Code Example**
Let's filter for people who live in either 'NY' or 'Paris' using `.isin()`.

::left::

```python
import pandas as pd

data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'},
    {'Name': 'Eve', 'Age': 24, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)
```
::right::
```py
# Filter for City being in ['NY', 'Paris'] using .isin()
cities_to_include = ['NY', 'Paris'] # List of allowed cities
bool_series_isin = df['City'].isin(cities_to_include) 

print("\nBoolean Series (City isin ['NY', 'Paris']):\n", 
                    bool_series_isin)

df_filtered_isin = df[bool_series_isin]

print("\nDataFrame Filtered (City isin ['NY', 'Paris']):\n", 
                    df_filtered_isin)
```

---
layout: two-cols-header
transition: fade
---

### Filtering Data - `isin()` Example (Part 2) - Output & Explanation 🖐️🔍📊🐼

**`isin()` Filtering: Output and Explanation**

<!-- Here's the output from the `.isin()` filtering code (Slide 8-4-b): -->

<!-- **Output:** -->

::left:: 

```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
4      Eve   24   Paris

Boolean Series (City isin ['NY', 'Paris']):
0     True
1    False
2     True
3    False
4     True
Name: City, dtype: bool

DataFrame Filtered (City isin ['NY', 'Paris']):
Name  Age   City
0    Alice   25     NY
2  Charlie   22  Paris
4      Eve   24  Paris
```
::right::

**Explanation:**

*   `df['City'].isin(['NY', 'Paris'])` created a **Boolean Series** using `.isin()`.
*   For each row, `.isin()` checks if the 'City' value is present in the list `['NY', 'Paris']`.
*   If 'City' is in the list, the Boolean Series is `True`; otherwise, it's `False`.
*   `df[bool_series_isin]` filters the DataFrame, keeping only rows where 'City' is 'NY' or 'Paris'.
*   Rows for 'Alice', 'Charlie', and 'Eve' are kept; rows for 'Bob' and 'David' are filtered out.

---
layout: two-cols-header
transition: fade
---
### Filtering Data - `isin()` Summary ✅🖐️🔍📊🐼

**Summary: Filtering with `.isin()`**

*   `.isin(values)` method checks if DataFrame column values are present in a given *list* or *set* of `values`.
*   Returns a Boolean Series: `True` if value is in `values`, `False` otherwise.
*   Very useful for:
    *   Filtering by categories or allowed values.
    *   Replacing long `OR` conditions for multiple value checks, making code cleaner and more readable.

**With `.isin()` filtering covered, let's now transition to the second major topic of this session: DataFrame Sorting!**

---
layout: two-cols-header
transition: fade
---
### Sorting Data - Introduction to Sorting ⬆️⬇️📊🐼

**Sorting DataFrames: Ordering Your Data**

**Sorting** a DataFrame means arranging its rows in a specific order, based on the values in one or more columns.

**Why is Sorting Important?**

*   **Data Exploration:** Easily identify highest/lowest values, trends, and patterns.
*   **Reporting and Presentation:**  Present data in a clear, ordered manner for better understanding.
*   **Data Analysis Preparation:**  Sorting can be a prerequisite for certain analytical tasks.

**pandas provides powerful and flexible methods for sorting DataFrames! Let's explore them!**

---
layout: two-cols-header
transition: fade
---
### Sorting Data - `sort_values()` Method ⬆️⬇️📊🐼

**Sorting by Values: Using `.sort_values()`**

The `.sort_values()` method sorts a DataFrame's rows based on the values in one or more columns.

**Key Parameters of `.sort_values()`:**

*   **`by`:**  Specify the column name (or list of column names) to sort by.  This is *required*.
*   **`ascending`:**  `True` (default) for ascending sort, `False` for descending sort.
*   **`inplace`:**  `False` (default) returns a *new* sorted DataFrame. `True` modifies the *original* DataFrame directly.

**`.sort_values()` is your primary tool for ordering DataFrames based on column data! Let's see it in action!**

---
layout: two-cols-header
transition: fade
---
### Sorting Data - `sort_values()` Example (Part 1) ⬆️⬇️📊🐼

**Sorting by Single Column: Code Example**

Let's sort our DataFrame by 'Age' in *ascending* order (default).

```python
import pandas as pd

data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'},
    {'Name': 'Eve', 'Age': 24, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)

# Sort DataFrame by 'Age' column (ascending by default)
df_sorted_age_asc = df.sort_values(by='Age') # <--- Sort by 'Age'

print("\nDataFrame Sorted by 'Age' (Ascending):\n", df_sorted_age_asc)
```
---
layout: two-cols-header
transition: fade
---
### Sorting Data - `sort_values()` Example (Part 2) - Output & Explanation ⬆️⬇️📊🐼

**Sorting by Single Column: Output and Explanation**

Here's the output from the single column sorting code (Slide 8-6-c):
::left::
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
4      Eve   24   Paris

DataFrame Sorted by 'Age' (Ascending):
Name  Age    City
2  Charlie   22   Paris
4      Eve   24   Paris
0    Alice   25      NY
1      Bob   30  London
3    David   35  London
```
::right::

**Explanation:**

*   `df.sort_values(by='Age')` sorted the DataFrame `df` based on the 'Age' column.
*   `ascending=True` (default) was used, so the DataFrame is sorted from the *youngest to oldest* (ascending order of 'Age').
*   The *index labels* (0, 1, 2, 3, 4) are *rearranged* to maintain the row's original data association, reflecting the new sorted order.

---
layout: two-cols-header
transition: fade
---

### Sorting Data - Descending Sort Example (Part 1) ⬆️⬇️📊🐼

**Sorting in Descending Order**

To sort in *descending* order (highest to lowest), set `ascending=False` in `.sort_values()`.

**Example: Sort by 'Age' in descending order (oldest to youngest)**

```python
import pandas as pd

data_list_dicts = [ # Using the same data
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'},
    {'Name': 'Eve', 'Age': 24, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)

# Sort DataFrame by 'Age' column in descending order
df_sorted_age_desc = df.sort_values(by='Age', ascending=False) # <--- ascending=False for descending

print("\nDataFrame Sorted by 'Age' (Descending):\n", df_sorted_age_desc)
```
---

---
layout: two-cols-header
transition: fade
---

### Sorting Data - Descending Sort Example (Part 2) - Output & Explanation ⬆️⬇️📊🐼

**Descending Sort: Output and Explanation**

<!-- Here's the output from the descending sort code (Slide 8-7-a): -->
:: left:: 
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
4      Eve   24   Paris

DataFrame Sorted by 'Age' (Descending):
Name  Age    City
3    David   35  London
1      Bob   30  London
0    Alice   25      NY
4      Eve   24   Paris
2  Charlie   22   Paris
```

::right::


**Explanation:**

*   `df.sort_values(by='Age', ascending=False)` sorted the DataFrame `df` by 'Age' in *descending* order.
*   `ascending=False` reversed the sort order, arranging rows from *oldest to youngest* (descending order of 'Age').
*   Again, index labels are rearranged to reflect the sorted row order, maintaining data integrity.

---
layout: two-cols-header
transition: fade
---

### Sorting Data - Multi-Column Sort (Part 1) ⬆️⬇️📊🐼

**Sorting by Multiple Columns: Refining Your Order**

You can sort by *multiple columns* to create a more refined order.  `.sort_values()` allows you to specify a *list* of column names for the `by` parameter.

**How Multi-Column Sorting Works:**

1.  **Primary Sort:** DataFrame is first sorted by the *first column* in the `by` list.
2.  **Secondary Sort (and so on):**  *Within groups* of rows that have the *same value* in the first column, rows are then sorted by the *second column* in the `by` list, and so on.

**Example:** Sort first by 'City', then by 'Age' within each city.  This will group people by city, and then order them by age within each city.

Let's see multi-column sorting in action!

---
layout: two-cols-header
transition: fade
---
### Sorting Data - Multi-Column Sort Example (Part 2) ⬆️⬇️📊🐼

**Sorting by Multiple Columns: Code Example**

Let's sort first by 'City' (alphabetical order), and then by 'Age' (ascending) within each city.

```python
import pandas as pd

data_list_dicts = [ # Example data with cities and ages
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'London'},
    {'Name': 'Eve', 'Age': 24, 'City': 'Paris'},
    {'Name': 'Frank', 'Age': 30, 'City': 'NY'} # Added Frank to NY, age 30
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)

# Sort by 'City' (primary), then by 'Age' (secondary), both ascending
df_sorted_multi = df.sort_values(by=['City', 'Age']) # <--- List of columns for 'by'

print("\nDataFrame Sorted by 'City', then 'Age' (Ascending):\n", df_sorted_multi)
```
---
layout: two-cols-header
transition: fade
---

### Sorting Data - Multi-Column Sort Example (Part 3) - Output & Explanation ⬆️⬇️📊🐼
::left::

**Multi-Column Sort: Output and Explanation**

<!-- Here's the output from the multi-column sorting code (Slide 8-8-b): -->
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35  London
4      Eve   24   Paris
5    Frank   30      NY
DataFrame Sorted by 'City', then 'Age' (Ascending):
Name  Age    City
1      Bob   30  London
3    David   35  London
0    Alice   25      NY
5    Frank   30      NY
2  Charlie   22   Paris
4      Eve   24   Paris
```

::right::


**Explanation:**

*   `df.sort_values(by=['City', 'Age'])` sorted by *two* columns: 'City' and 'Age'.
*   **Primary Sort (City):** Rows are first grouped and sorted alphabetically by 'City' (London, London, NY, NY, Paris, Paris).
*   **Secondary Sort (Age within City):** Within each 'City' group, rows are then sorted by 'Age' in ascending order.
    *   London group: 'Bob' (30) then 'David' (35).
    *   NY group: 'Alice' (25) then 'Frank' (30).
    *   Paris group: 'Charlie' (22) then 'Eve' (24).

---
layout: two-cols-header
transition: fade
---
### Sorting Data - `sort_values()` Summary ✅⬆️⬇️📊🐼

**Summary: DataFrame Sorting with `.sort_values()`**

*   `.sort_values(by, ascending=True, inplace=False)` sorts a DataFrame by column values.
*   **`by`:**  *Required* parameter. Column name (string) or list of column names to sort by.
*   **`ascending`:**  Boolean, `True` (default) for ascending, `False` for descending sort. Can be a list of booleans for multi-column sort (one per column in `by`).
*   **`inplace`:** Boolean, `False` (default) returns a *new* sorted DataFrame, `True` modifies the original.

**`.sort_values()` is a versatile tool for ordering your DataFrames for analysis and presentation!**

With `.sort_values()` covered, we've completed the core DataFrame Sorting techniques for this session! Let's create a Session 8 Summary next!

---
layout: two-cols-header
transition: fade
---

### Session 8: Advanced DataFrame Operations - Filtering & Sorting - Session Summary ✅📊🐼

**Session 8 Summary: Filtering and Sorting DataFrames**

::left::

In this session, we mastered essential DataFrame operations for data selection and ordering:


*   **DataFrame Filtering:**
    *   **Boolean Indexing:** Core concept for selecting rows based on conditions.
    *   **Single Column Filtering:** Filtering based on conditions in one column.
    *   **Multiple Column Filtering:** Combining conditions with `&` (AND) and `|` (OR).
    *   **`.isin()` Filtering:** Selecting rows based on value membership in a list.

::right::

*   **DataFrame Sorting:**
    *   **`.sort_values()` Method:**  Primary method for ordering DataFrames.
    *   **Single Column Sorting:** Sorting by values in a single column (ascending/descending).
    *   **Multi-Column Sorting:** Sorting by multiple columns for refined ordering.

**You are now equipped with powerful techniques to filter and sort DataFrames, enabling you to effectively explore and prepare your data!**

<!-- **What's next? We can move on to more DataFrame Operations, like adding, removing, and renaming columns!** -->

---
layout: two-cols-header
transition: fade
---
### Session 8: Advanced DataFrame Operations - Filtering & Sorting - What's Next? 🚀📊🐼

**What's Next?  Expanding DataFrame Manipulation Skills!**

Having mastered Filtering and Sorting, you are now ready to further manipulate your DataFrames!

**Logical Next Steps:**

*   **Session 9: DataFrame Operations - Adding, Removing, and Renaming Columns:** Learn to modify the structure of your DataFrames by adding new columns, deleting unnecessary ones, and renaming columns for clarity.  These are fundamental data wrangling tasks!

*   **Continue Exploring DataFrame Operations:**  We'll delve deeper into data cleaning, transformation, and preparation in upcoming sessions, building upon the filtering and sorting foundation you now have.

**Stay tuned for Session 9 where we'll reshape and refine our DataFrames!**

**End of Session 8: Advanced DataFrame Operations - Filtering & Sorting Data.**

---