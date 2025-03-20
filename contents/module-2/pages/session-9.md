---
theme: seriph
layout: two-cols-header
transition: fade
---
### Session 9: DataFrame Operations - Column Manipulation - Introduction 🛠️📊🐼

**Column Manipulation: Reshaping Your DataFrames**

**Column Manipulation** involves modifying the columns of a DataFrame:

*   **Adding New Columns:**  Creating columns from existing data or new calculations.
*   **Removing Columns:**  Deleting columns that are no longer needed or irrelevant.
*   **Renaming Columns:**  Changing column names for clarity and consistency.

**Why is Column Manipulation Crucial?**

*   **Data Cleaning:**  Removing irrelevant or redundant columns.
*   **Feature Engineering:** Creating new, insightful features from existing columns.
*   **Data Preparation:**  Reshaping data to fit analysis or modeling requirements.
*   **Improved Readability:**  Making DataFrames easier to understand and work with.

**Let's start by learning how to *add new columns* to DataFrames!**

---
layout: two-cols-header
transition: fade
---

### Column Manipulation - Adding Columns - Introduction ➕📊🐼

**Adding New Columns: Enriching Your DataFrames**

Adding new columns is a fundamental DataFrame operation. You can create new columns based on:

*   **Existing Columns:** Calculations, transformations of other columns.
*   **Scalar Values:**  Adding a column with the same value for all rows.
*   **External Data:**  Merging data from other sources.

**Common Methods for Adding Columns:**

*   **Direct Assignment (`df['new_column_name'] = ...`):**  Simplest and most common way to add a column.
*   **`.assign()` Method:**  More flexible for adding multiple columns at once or using function-based assignments.

**Let's start with Direct Assignment to add new columns!**

---
layout: two-cols-header
transition: fade
---

### Column Manipulation - Adding Columns - Direct Assignment (Part 1) ➕📊🐼

**Adding Columns: 1. Direct Assignment**

**Direct Assignment** is the easiest way to add a new column to a DataFrame.  You simply assign values to a *new column name* using square brackets `[]` on the DataFrame.

::left::

**Syntax:**

```python
df['new_column_name'] = values
```

- `df['new_column_name']`: Specifies the new column to create (or modify if it already exists).
- `values`: The values to assign to the new column. `values` can be:
    - A `scalar value`: Same value for all rows.
    - A `Series` or `list`: Values matching the DataFrame's row index.
::right::
**Example: Adding a 'CityRank' column with a scalar value (initial rank of 1)**
```python
import pandas as pd

data_list_dicts = [ # Our usual example data
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)

# Add 'CityRank' column with scalar value 1
df['CityRank'] = 1 # <--- Direct assignment of scalar value
print("\nDataFrame with 'CityRank' column added:\n", df)
```
---
layout: two-cols-header
transition: fade
---

### Column Manipulation - Adding Columns - Direct Assignment (Part 2) - Output & Explanation ➕📊🐼

**Direct Assignment: Output and Explanation**

Here's the output from the direct assignment code (Slide 9-1-c):

::left::

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

DataFrame with 'CityRank' column added:
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1
```

::right::


**Explanation:**

*   `df['CityRank'] = 1` added a *new column* named 'CityRank' to the DataFrame `df`.
*   The scalar value `1` was assigned to *every row* in the new 'CityRank' column.
*   Direct assignment is a simple and efficient way to add columns with constant values or values derived from other operations.

---
layout: two-cols-header
transition: fade
---
### Column Manipulation - Adding Columns - Direct Assignment from Existing Column (Part 1) ➕📊🐼

**Direct Assignment: Using Existing Columns for New Column Values**

You can create a new column based on calculations or transformations of *existing columns* using direct assignment.

**Example: Adding a 'AgeInMonths' column calculated from the 'Age' column**

```python
import pandas as pd
data_list_dicts = [ # Same example data
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)

# Add 'AgeInMonths' column by multiplying 'Age' by 12
df['AgeInMonths'] = df['Age'] * 12 # <--- Direct assignment from calculation on 'Age'

print("\nDataFrame with 'AgeInMonths' column added:\n", df)
```
---
layout: two-cols-header
transition: fade
---
### Column Manipulation - Adding Columns - Direct Assignment from Existing Column (Part 2) - Output & Explanation ➕📊🐼

**Direct Assignment from Existing Column: Output and Explanation**

<!-- Here's the output from the code calculating 'AgeInMonths' (Slide 9-1-e): -->
::left:: 
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

DataFrame with 'AgeInMonths' column added:
Name  Age    City  AgeInMonths
0    Alice   25      NY          300
1      Bob   30  London          360
2  Charlie   22   Paris          264
```
::right::

**Explanation:**

*   `df['AgeInMonths'] = df['Age'] * 12` created a new column 'AgeInMonths'.
*   For each row, it took the value from the 'Age' column, multiplied it by 12, and assigned the result to the corresponding row in the new 'AgeInMonths' column.
*   Direct assignment allows you to easily derive new columns based on transformations of existing data, enabling feature engineering and data enrichment.

---
layout: two-cols-header
transition: fade
---
### Column Manipulation - Adding Columns - Direct Assignment with Series/List (Part 1) ➕📊🐼

**Direct Assignment: Using Series or Lists for Column Values**

For more control, you can assign a pandas **Series** or a Python **list** to a new column.  The Series or list must have the *same length* as the DataFrame's number of rows.

**Example: Adding a 'IsSenior' column based on a list of True/False values**
::left::
```python
import pandas as pd

data_list_dicts = [ # Same data again
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)
print("Original DataFrame:\n", df)
```
::right::

```python
# Create a list of boolean values 
# (e.g., manually determined 'IsSenior' status)
senior_status_list = [False, True, False] #  Matching the order of rows

# Add 'IsSenior' column using the list
df['IsSenior'] = senior_status_list 
# ^--- Direct assignment using a list
print("\nDataFrame with 'IsSenior' column added:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### Adding Columns - Direct Assignment (Series/List) - Output & Explanation ➕📊🐼

**Direct Assignment (Series/List): O/p and Explanation**
::left::

Here's the output from the code using a list for 'IsSenior' (Slide 9-1-g):

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

DataFrame with 'IsSenior' column added:
Name  Age    City  IsSenior
0    Alice   25      NY     False
1      Bob   30  London      True
2  Charlie   22   Paris     False
```

::right::

**Explanation:**

*   `senior_status_list = [False, True, False]` created a Python list of boolean values.
*   `df['IsSenior'] = senior_status_list` added the 'IsSenior' column.
*   Values from `senior_status_list` were assigned *row-wise* to the 'IsSenior' column, maintaining the order of the list to match the DataFrame rows.
*   Direct assignment with Series or Lists provides fine-grained control over column values, allowing for row-specific data entry.

---
layout: two-cols-header
transition: fade
---
### Adding Columns - Direct Assignment Summary ✅➕📊🐼

**Summary: Adding Columns with Direct Assignment**

*   **`df['new_column'] = values`**: Simplest way to add/modify columns.
*   `values` can be:
    *   **Scalar Value:**  Constant value for all rows.
    *   **Series/List:** Row-wise values (must match DataFrame length).
    *   **Calculation on Existing Columns:**  Derive new columns from transformations of other columns.

**Direct Assignment is versatile for quick and common column addition tasks!**

Next, let's explore another powerful method: **`.assign()`!**

---
layout: two-cols-header
transition: fade
---
### Adding Columns - `.assign()` Method ➕📊🐼

**Adding Columns: 2. Using `.assign()`**

The `.assign()` method is another powerful way to add *new* columns to a DataFrame.  It offers more flexibility than direct assignment, especially for:

*   **Adding Multiple Columns at Once:** Create several new columns in a single operation.
*   **Chaining Operations:**  `.assign()` returns a *new* DataFrame, allowing you to chain multiple DataFrame operations together in a readable flow.
*   **Function-Based Assignment:** Use functions to calculate new column values based on existing columns.

::left::
**Basic Syntax:**

```python
df_new = df.assign(
    new_column1 = values1,
    new_column2 = values2,
    ...
)
```

::right::

- `.assign(...)` creates a *copy* of the DataFrame with the new columns.
- Original DataFrame `df` is *not modified* unless you re-assign the result back to `df` (e.g., `df = df.assign(...)`).
Let's see `.assign()` in action with examples!

---
layout: two-cols-header
transition: fade
---
### Adding Columns - `.assign()` i/p (Part 1) ➕📊🐼

**`.assign()` Example: Adding a Single Column**

Let's add a 'CityRank' column (again, initially set to 1 for all cities) using `.assign()`.

```python
import pandas as pd

data_list_dicts = [ # Using our familiar data
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)

# Add 'CityRank' column using .assign()
df_assigned = df.assign(CityRank = 1) # <--- .assign() with CityRank = 1

print("\nDataFrame with 'CityRank' (using .assign()):\n", df_assigned)

# (Optional) Verify original DataFrame is unchanged
print("\nOriginal DataFrame (df) - Unchanged:\n", df)
```
---
layout: two-cols-header
transition: fade
---

### Adding Columns - `.assign()` o/p (Part 2) ➕📊🐼
::left::
**`.assign()` Example: Output and Explanation**

<!-- Here's the output from the `.assign()` code (Slide 9-3-b): -->

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

DataFrame with 'CityRank' (using .assign()):
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1

Original DataFrame (df) - Unchanged:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
```

::right::

**Explanation:**

*   `df.assign(CityRank = 1)` created a *new* DataFrame (`df_assigned`) with the added 'CityRank' column.
*   The original DataFrame `df` remained *unchanged*.
*   `.assign()` *does not modify the original DataFrame in place*. It returns a *new* DataFrame with the modifications. This is a key difference from direct assignment.
*   To keep the modified DataFrame, you need to assign the result back to a variable (e.g., `df = df.assign(...)`).

---
layout: two-cols-header
transition: fade
---
### Adding Columns - `.assign()` - Multiple Columns i/p (Part 3) ➕➕📊🐼

**`.assign()` Example: Adding *Multiple* Columns**

`.assign()` shines when adding *multiple* columns at once. Just specify them as comma-separated keyword arguments within `.assign()`.

**Example: Adding 'CityRank' and 'IsSenior' columns in one `.assign()` call**
::left::
```python
import pandas as pd

data_list_dicts = [ # Our example data
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts)

print("Original DataFrame:\n", df)
```

::right::

```python
# Add 'CityRank' and 'IsSenior' columns in one .assign() call
df_assigned_multi = df.assign(
    CityRank = 1,                 # Add 'CityRank' as before
    IsSenior = [False, True, False] # Add 'IsSenior' using a list
) # <--- Multiple columns in .assign()

print("\nDataFrame with 'CityRank' and 'IsSenior' (using .assign()):\n", 
                df_assigned_multi)
```

---
layout: two-cols-header
transition: fade
---

### Adding Columns - `.assign()` - Multiple Columns o/p (Part 4) ➕➕📊🐼

::left::

**`.assign()` Example: Multiple Columns Output and Explanation**

Here's the output from the code adding 'CityRank' and 'IsSenior' (Slide 9-3-d):

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

DataFrame with 'CityRank' and 'IsSenior' (using .assign()):
Name  Age    City  CityRank  IsSenior
0    Alice   25      NY         1     False
1      Bob   30  London         1      True
2  Charlie   22   Paris         1     False
```

::right::


**Explanation:**

*   `df.assign(CityRank = 1, IsSenior = [False, True, False])` added *two new columns* in a single step.
*   `CityRank = 1`: Assigned the scalar value `1` to the 'CityRank' column for all rows.
*   `IsSenior = [False, True, False]`: Assigned the list of boolean values to the 'IsSenior' column, row by row.
*   `.assign()` efficiently allows for adding multiple columns with different value sources within one concise operation.

---
layout: two-cols-header
transition: fade
---
### Adding Columns - `.assign()` Summary ✅➕📊🐼

**Summary: Adding Columns with `.assign()`**

*   **`df.assign(new_col1=values1, new_col2=values2, ...)`**: Adds *one or more new columns* in a single, readable operation.
*   **Returns a *new* DataFrame:**  Original DataFrame is *not modified* (unless you re-assign).
*   **Flexibility:** `values` can be scalar values, lists, Series, or results of calculations on existing columns.
*   **Chaining-Friendly:**  Ideal for building data manipulation pipelines as it returns a new DataFrame that can be further processed.

**`.assign()` is a powerful and recommended method for adding columns, especially when adding multiple columns or building data processing workflows!**

Having covered adding columns with both Direct Assignment and `.assign()`, let's now move on to **Removing Columns!**

---
layout: two-cols-header
transition: fade
---
### Removing Columns - Introduction ➖📊🐼

**Removing Columns: Streamlining Your DataFrames**

Removing columns is as important as adding them!  You might want to remove columns because:

*   **Irrelevant Data:** Columns not needed for your analysis.
*   **Redundancy:**  Duplicate or highly correlated columns.
*   **Data Cleaning:**  Removing columns with errors or inconsistencies.
*   **Simplifying DataFrames:**  Making DataFrames smaller and easier to manage.

**Common Methods for Removing Columns:**

*   **`del` keyword:**  Directly delete a column in place.
*   **`.drop()` method:** More flexible method for dropping columns or rows, returning a new DataFrame (or modifying in place).

**Let's start with the `del` keyword for straightforward column removal!**

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `del` Keyword i/p ➖📊🐼

::left::

**Removing Columns: 1. `del` Keyword**

The `del` keyword provides a direct way to *delete* a column from a DataFrame *in place* (modifies the original DataFrame).


**Syntax:**

```python
del df['column_name']
```

- `del df['column_name']`: Directly removes the column named 'column_name' from the DataFrame `df`.
- **In-place modification:** The original DataFrame `df` is altered directly.

::right::

**Example: Removing the 'CityRank' column using `del`**

```python
import pandas as pd

data_list_dicts = [ # Example data
    {'Name': 'Alice', 'Age': 25, 
    'City': 'NY', 'CityRank': 1}, # Assume 'CityRank' exists
    {'Name': 'Bob', 'Age': 30, 
    'City': 'London', 'CityRank': 1},
    {'Name': 'Charlie', 'Age': 22, 
    'City': 'Paris', 'CityRank': 1}
]
df = pd.DataFrame(data_list_dicts)

print("DataFrame *before* removing 'CityRank':\n", df)

del df['CityRank'] # <--- Using del to remove 'CityRank'

print("\nDataFrame *after* removing 'CityRank':\n", df)
```

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `del` Keyword o/p ➖📊🐼

**`del` Keyword Example: Output and Explanation**

Here's the output from the `del` keyword code (Slide 9-5-b):

::left::

**Output:**
```sh
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1

DataFrame after removing 'CityRank':
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
```

::right::


**Explanation:**

*   `del df['CityRank']` directly *removed* the 'CityRank' column from the DataFrame `df`.
*   The 'CityRank' column is no longer present in the DataFrame *after* the `del` operation.
*   `del` modifies the DataFrame *in place*. There is no need to re-assign the DataFrame. Use `del` for direct and immediate column removal.

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Method ➖📊🐼

**Removing Columns: 2. `.drop()` Method**

The `.drop()` method is a more flexible and powerful way to remove columns (and rows) from a DataFrame.

**Key Parameters for Column Removal with `.drop()`:**

*   **`columns`:**  List of column names to remove.  *Required* for column removal.
*   **`axis=1` (or `axis='columns'`):**  Specifies that you are dropping *columns* (not rows - `axis=0` or `axis='index'` for rows).  *Crucial for column removal*.
*   **`inplace=False` (default):** Returns a *new* DataFrame with columns dropped. `inplace=True` modifies the *original* DataFrame.

**`.drop()` is the recommended method for column removal due to its flexibility and clarity! Let's see it in action!**

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Single Column i/p ➖📊🐼

**`.drop()` Example: Removing a Single Column**

Let's remove the 'CityRank' column using `.drop()` with `columns` and `axis=1`.

```python
import pandas as pd

data_list_dicts = [ # Data with 'CityRank'
    {'Name': 'Alice', 'Age': 25, 'City': 'NY', 'CityRank': 1},
    {'Name': 'Bob', 'Age': 30, 'City': 'London', 'CityRank': 1},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris', 'CityRank': 1}
]
df = pd.DataFrame(data_list_dicts)

print("DataFrame *before* .drop('CityRank'):\n", df)

# Remove 'CityRank' column using .drop()
df_dropped_column = df.drop(columns=['CityRank'], axis=1) # <--- .drop() with columns and axis=1

print("\nDataFrame *after* .drop('CityRank'):\n", df_dropped_column)

# (Optional) Verify original DataFrame is unchanged
print("\nOriginal DataFrame (df) - Unchanged:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Single Column o/p ➖📊🐼

**`.drop()` Example: Single Column Output and Explanation**

<!-- Here's the output from the `.drop()` code (Slide 9-6-b): -->

::left::

**Output:**
```sh
DataFrame before .drop('CityRank'):
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1

DataFrame after .drop('CityRank'):
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Original DataFrame (df) - Unchanged:
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1
```

::right::

**Explanation:**

*   `df.drop(columns=['CityRank'], axis=1)` created a *new* DataFrame (`df_dropped_column`) with the 'CityRank' column removed.
*   `columns=['CityRank']` specifies the column to drop as a *list*.
*   `axis=1` (or `axis='columns'`) is *essential* to indicate we are dropping a *column* (not a row).
*   The original DataFrame `df` remains *unchanged* because `inplace=False` is the default for `.drop()`. `.drop()` returns a *new* DataFrame.

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Multiple Columns i/p ➖➖📊🐼

**`.drop()` Example: Removing *Multiple* Columns**

`.drop()` really shines when removing *multiple* columns. Simply provide a *list* of column names to the `columns` parameter.

**Example: Removing both 'CityRank' and 'AgeInMonths' columns in one `.drop()` call**

```python
import pandas as pd

data_list_dicts = [ # Data with extra columns
    {'Name': 'Alice', 'Age': 25, 'City': 'NY', 'CityRank': 1, 'AgeInMonths': 300},
    {'Name': 'Bob', 'Age': 30, 'City': 'London', 'CityRank': 1, 'AgeInMonths': 360},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris', 'CityRank': 1, 'AgeInMonths': 264}
]
df = pd.DataFrame(data_list_dicts)

print("DataFrame *before* .drop(['CityRank', 'AgeInMonths']):\n", df)

# Remove 'CityRank' and 'AgeInMonths' columns using .drop()
df_dropped_multi_cols = df.drop(columns=['CityRank', 'AgeInMonths'], axis=1) # <--- List of columns to drop

print("\nDataFrame *after* .drop(['CityRank', 'AgeInMonths']):\n", df_dropped_multi_cols)
```
---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Multiple Columns o/p ➖➖📊🐼

**`.drop()` Example: Multiple Columns Output and Explanation**

Here's the output from the multi-column `.drop()` code (Slide 9-6-d):

::left:: 
**Output:**
```sh
DataFrame before .drop(['CityRank', 'AgeInMonths']):
Name  Age    City  CityRank  AgeInMonths
0    Alice   25      NY         1          300
1      Bob   30  London         1          360
2  Charlie   22   Paris         1          264

DataFrame after .drop(['CityRank', 'AgeInMonths']):
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
```
::right::


**Explanation:**

*   `df.drop(columns=['CityRank', 'AgeInMonths'], axis=1)` removed *both* 'CityRank' and 'AgeInMonths' columns in a single operation.
*   `columns=['CityRank', 'AgeInMonths']` provides a *list* of column names to be dropped.
*   `.drop()` efficiently handles removing multiple columns simultaneously, streamlining data cleaning and preparation.

---
layout: two-cols-header
transition: fade
---
### Removing Columns - `.drop()` Summary ✅➖📊🐼

**Summary: Removing Columns with `.drop()`**

*   **`df.drop(columns=column_list, axis=1, inplace=False)`**:  Versatile method to remove columns (and rows).
*   **`columns`**: *Required* for column removal. A list of column names to drop.
*   **`axis=1` (or `axis='columns'`)**: *Essential* to specify column removal (not row removal).
*   **`inplace`**: `False` (default) returns a *new* DataFrame, `True` modifies the original DataFrame *in place*.

**`.drop()` is the recommended and flexible method for removing columns, allowing for single or multiple column removal while controlling in-place modification behavior!**

Having covered both `del` and `.drop()` for removing columns, let's now move on to **Renaming Columns!**

---
layout: two-cols-header
transition: fade
---
### Renaming Columns - Introduction ✏️📊🐼

**Renaming Columns: Improving Data Clarity**

Renaming columns is essential for:

*   **Clarity and Readability:**  Making column names more descriptive and understandable.
*   **Consistency:**  Standardizing column names across different datasets.
*   **Data Integration:**  Matching column names for merging or joining DataFrames.
*   **Coding Convenience:**  Using shorter or more Python-friendly column names.

**Primary Method for Renaming Columns:  `.rename()` method.**

Let's learn how to use `.rename()` to effectively rename columns in pandas!

---
layout: two-cols-header
transition: fade
---
### Renaming Columns - `.rename()` Method ✏️📊🐼

**Renaming Columns: Using `.rename()`**

The `.rename()` method is the primary way to rename columns (and rows) in pandas DataFrames.

**Key Parameters for Column Renaming with `.rename()`:**

*   **`columns`:**  A *dictionary* mapping *old column names* to *new column names*.  *Required* for column renaming.
*   **`inplace=False` (default):** Returns a *new* DataFrame with renamed columns. `inplace=True` modifies the *original* DataFrame.

**`.rename()` with the `columns` parameter is the standard way to change column names in pandas! Let's see it in action!**

---
layout: two-cols-header
transition: fade
---
### Renaming Columns - `.rename()` Single Column i/p ✏️📊🐼

**`.rename()` Example: Renaming a Single Column**

Let's rename the 'CityRank' column to 'Rank' using `.rename()`.

```python
import pandas as pd

data_list_dicts = [ # Data with 'CityRank'
    {'Name': 'Alice', 'Age': 25, 'City': 'NY', 'CityRank': 1},
    {'Name': 'Bob', 'Age': 30, 'City': 'London', 'CityRank': 1},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris', 'CityRank': 1}
]
df = pd.DataFrame(data_list_dicts)

print("DataFrame *before* rename:\n", df)

# Rename 'CityRank' column to 'Rank' using .rename()
df_renamed_column = df.rename(columns={'CityRank': 'Rank'}) # <--- .rename() with columns dictionary

print("\nDataFrame *after* rename:\n", df_renamed_column)

# (Optional) Verify original DataFrame is unchanged
print("\nOriginal DataFrame (df) - Unchanged:\n", df)
```
---
layout: two-cols-header
transition: fade
---

### Renaming Columns - `.rename()` Single Column o/p ✏️📊🐼

::left::

**`.rename()` Example: Single Column Output and Explanation**

<!-- Here's the output from the single column `.rename()` code (Slide 9-8-c): -->

**Output:**
```sh
DataFrame *before* rename:
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1

DataFrame *after* rename:
Name  Age    City  Rank
0    Alice   25      NY     1
1      Bob   30  London     1
2  Charlie   22   Paris     1

Original DataFrame (df) - Unchanged:
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1
```

::right::

**Explanation:**

*   `df.rename(columns={'CityRank': 'Rank'})` created a *new* DataFrame (`df_renamed_column`) with the column renamed.
*   `columns={'CityRank': 'Rank'}`:  A *dictionary* is used to specify renames:  `{'old_name': 'new_name'}`.
*   The 'CityRank' column is renamed to 'Rank' in the new DataFrame.
*   The original DataFrame `df` remains *unchanged* as `inplace=False` is the default for `.rename()`.  `.rename()` returns a *new* DataFrame.

---
layout: two-cols-header
transition: fade
---
### Renaming Columns - `.rename()` Multiple Columns i/p ✏️✏️📊🐼

**`.rename()` Example: Renaming *Multiple* Columns**

`.rename()` is efficient for renaming *multiple* columns.  Just add more key-value pairs to the `columns` dictionary!

**Example: Renaming 'CityRank' to 'Rank' and 'Age' to 'AgeYears' in one `.rename()` call**

```python
import pandas as pd

data_list_dicts = [ # Data with 'CityRank' and 'Age'
    {'Name': 'Alice', 'Age': 25, 'City': 'NY', 'CityRank': 1},
    {'Name': 'Bob', 'Age': 30, 'City': 'London', 'CityRank': 1},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris', 'CityRank': 1}
]
df = pd.DataFrame(data_list_dicts)
print("DataFrame *before* rename:\n", df)

# Rename 'CityRank' to 'Rank' AND 'Age' to 'AgeYears' in one .rename() call
df_renamed_multi_cols = df.rename(columns={'CityRank': 'Rank', 'Age': 'AgeYears'}) 
# ^--- Multiple renames in dictionary

print("\nDataFrame *after* rename:\n", df_renamed_multi_cols)
```
---
layout: two-cols-header
transition: fade
---

### Renaming Columns - `.rename()` Multiple Columns o/p ✏️✏️📊🐼
::left::
**`.rename()` Example: Multiple Columns Output and Explanation**

<!-- Here's the output from the multi-column `.rename()` code (Slide 9-8-e): -->

**Output:**
```sh
DataFrame before rename:
Name  Age    City  CityRank
0    Alice   25      NY         1
1      Bob   30  London         1
2  Charlie   22   Paris         1

DataFrame after rename:
Name  AgeYears    City  Rank
0    Alice       25      NY     1
1      Bob       30  London     1
2  Charlie       22   Paris     1
```

::right::


**Explanation:**

*   `df.rename(columns={'CityRank': 'Rank', 'Age': 'AgeYears'})` renamed *two columns* in a single step.
*   `columns={'CityRank': 'Rank', 'Age': 'AgeYears'}`: The dictionary now contains *multiple* mappings for renames.
    *   'CityRank' is renamed to 'Rank'.
    *   'Age' is renamed to 'AgeYears'.
*   `.rename()` is efficient for renaming multiple columns, improving code conciseness and readability when cleaning column names.

---
layout: two-cols-header
transition: fade
---
### Renaming Columns - `.rename()` Summary ✅✏️📊🐼

**Summary: Renaming Columns with `.rename()`**

*   **`df.rename(columns=rename_dict, inplace=False)`**:  Primary method for renaming columns (and rows).
*   **`columns`**: *Required* for column renaming. A *dictionary* mapping old names to new names (`{'old_name1': 'new_name1', 'old_name2': 'new_name2', ...}`).
*   **`inplace`**: `False` (default) returns a *new* DataFrame, `True` modifies the original DataFrame *in place*.

**`.rename()` is the standard and flexible method for renaming columns, allowing for single or multiple renames in a clear and controlled way!**

With `.rename()` covered, we've completed the core Column Renaming techniques for this session! Let's create a Session 9 Summary next!

---
layout: two-cols-header
transition: fade
---

### Column Manipulation - Session Summary ✅📊🐼

**Session 9 Summary: Adding, Removing, and Renaming Columns**

<!-- In this session, we mastered essential DataFrame operations for column manipulation: -->
::left::
*   **Adding Columns:**
    *   **Direct Assignment:**  Simple and quick for basic column additions.
    *   **`.assign()` Method:** Flexible and powerful, especially for multiple columns and chaining.

*   **Removing Columns:**
    *   **`del` Keyword:**  Direct, in-place column deletion.
    *   **`.drop()` Method:**  Flexible and recommended method for column removal (and row removal), offering control over in-place modification.
::right::
*   **Renaming Columns:**
    *   **`.rename()` Method:**  Standard method for renaming columns, using dictionaries for clear mappings.

**You are now equipped with fundamental techniques to reshape and refine your DataFrames by manipulating their columns!**

<!-- **What's next? We can move on to handling Missing Data!** -->


---
layout: two-cols-header
transition: fade

---

### Column Manipulation - What's Next? 🚀📊🐼

**What's Next? Tackling Missing Data!**

With Column Manipulation skills in your toolkit, you're ready to address one of the most common challenges in data analysis: **Missing Data!**

**Logical Next Steps:**

*   **Session 10: Handling Missing Data - Introduction, Identification, and Handling Techniques:**  Learn to identify missing data, understand its impact, and explore various strategies to handle it effectively (filling, dropping, imputation).  This is crucial for real-world data!

*   **Continue Building Data Mastery:** We'll continue to explore more advanced data preprocessing techniques in upcoming sessions, building towards robust data cleaning and preparation pipelines.

**Stay tuned for Session 10 where we'll confront and conquer Missing Data!**

**End of Session 9: DataFrame Operations - Column Manipulation.**

---