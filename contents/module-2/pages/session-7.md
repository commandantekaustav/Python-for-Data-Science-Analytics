---
theme: seriph
transition: zoom
---

### Session 7: Introduction to pandas DataFrames - Welcome to DataFrames! 📊🐼

**Welcome to Session 7: Introduction to DataFrames!**

In this session, we will explore **pandas DataFrames**, the *core* data structure for data analysis with pandas.

DataFrames are incredibly powerful for working with **tabular data** - data organized in rows and columns, like spreadsheets or SQL tables.

**Key Topics in this DataFrame Introduction:**

*   **What are DataFrames?** Understanding the 2-dimensional structure.
*   **Creating DataFrames:**  From dictionaries, lists, and more.
*   **DataFrame Components:** Index, Columns, and Values.
*   **Basic DataFrame Operations:**  Selection, Inspection.

**Get ready to master pandas DataFrames and unlock even more powerful data analysis capabilities!**

---

### What are DataFrames? - Defining DataFrames ❓📊🐼

**pandas DataFrames: 2-Dimensional Labeled Tables**

A **pandas DataFrame** is a core data structure.  Think of it as a **2-dimensional labeled table** or a **spreadsheet in Python**.

**Key Characteristics of a DataFrame:**

*   **2-Dimensional:** Data arranged in rows and columns.
*   **Labeled Rows and Columns:** Both rows (Index) and columns have labels.
*   **Columnar Structure:**  Columns are Series!  Each column is a pandas Series.
*   **Heterogeneous Data Types (per column):**  Columns can have different data types (e.g., numeric, string, boolean) within the *same* DataFrame.

**DataFrames are designed for efficient and flexible manipulation of tabular data.**

---

### Creating DataFrames - Different Creation Methods 🏗️📊🐼

**Creating pandas DataFrames: Multiple Approaches**

pandas provides various ways to construct DataFrames from different data sources:

**Common DataFrame Creation Methods:**

1.  **From Dictionaries of Series or Lists:**  Keys become column names.
2.  **From Lists of Dictionaries:** Each dictionary represents a row.
3.  **From NumPy Arrays:**  Optionally specify column names and index.
4.  **From CSV Files (and other file types):**  `pd.read_csv()`, `pd.read_excel()`, etc. (covered later)

**We'll start by exploring DataFrame creation from Dictionaries!**

---

### Creating DataFrames - From Dictionaries of Series 🔡📊🐼

**Creating DataFrames from Dictionaries of Series**

You can create a DataFrame from a Python dictionary where:

*   **Dictionary keys become the *column names*** of the DataFrame.
*   **Dictionary values are pandas *Series***, which become the DataFrame columns.

**Example: DataFrame from Dictionary of Series (Name, Age, City)**

```python
import pandas as pd

name_series = pd.Series(['Alice', 'Bob', 'Charlie'], index=['Person 1', 'Person 2', 'Person 3'])
age_series = pd.Series([25, 30, 22], index=['Person 1', 'Person 2', 'Person 3'])
city_series = pd.Series(['NY', 'London', 'Paris'], index=['Person 1', 'Person 2', 'Person 3'])

# Create DataFrame from dictionary of Series
data = {'Name': name_series, 'Age': age_series, 'City': city_series}
df_from_series_dict = pd.DataFrame(data)

print("DataFrame from Dictionary of Series:\n", df_from_series_dict)
```
---

### Creating DataFrames - From Dictionaries of Series - Output & Explanation 🔡📊🐼

**DataFrame from Dictionary of Series: Output and Explanation**

Here's the output from the DataFrame creation code (previous slide):

**Output:**
```sh
DataFrame from Dictionary of Series:
Name  Age    City
Person 1   Alice   25      NY
Person 2     Bob   30  London
Person 3  Charlie   22   Paris
```

**Explanation:**

*   The **dictionary keys ('Name', 'Age', 'City')** became the **column headers**.
*   Each **Series** in the dictionary became a **column** in the DataFrame.
*   The **index of the Series ('Person 1', 'Person 2', 'Person 3')** became the **DataFrame's index (row labels)**, shared by all columns.

---
layout: two-cols-header
---

### Creating DataFrames - From Dictionaries of Lists 📝📊🐼

**Creating DataFrames from Dictionaries of Lists**

A more common way to create DataFrames is from a dictionary where:

*   **Dictionary keys become the *column names***.
*   **Dictionary values are Python *lists*** containing the column data.

**Example: DataFrame from Dictionary of Lists (Name, Age, City)**
::left::
```python
import pandas as pd

# Dictionary of lists for DataFrame creation
data_dict_lists = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 22, 35],
    'City': ['NY', 'London', 'Paris', 'Tokyo']
}
```
::right::
```python
# Create DataFrame from dictionary of lists
df_from_list_dict = pd.DataFrame(data_dict_lists)

print("DataFrame from Dictionary of Lists:\n", df_from_list_dict)
```
---
layout: two-cols-header
---

### Creating DataFrames - From Dictionaries of Lists - Output & Explanation 📝📊🐼

**DataFrame from Dictionary of Lists: Output and Explanation**

Here's the output from the DataFrame creation code (previous slide):

**Output:**
```sh
DataFrame from Dictionary of Lists:
Name  Age    City
0      Alice   25      NY
1        Bob   30  London
2    Charlie   22   Paris
3      David   35   Tokyo
```


**Explanation:**

*   The **dictionary keys ('Name', 'Age', 'City')** became the **column headers**.
*   Each **list** in the dictionary became a **column** in the DataFrame.
*   A **default numeric index (0, 1, 2, 3)** was automatically created by pandas for the rows.

---
layout: two-cols-header
---

### Creating DataFrames - From Lists of Dictionaries 🗂️📊🐼
::left::
**Creating DataFrames from Lists of Dictionaries**

Another common way to create DataFrames is from a list where:

*   The **list is composed of Python *dictionaries***.
*   **Each dictionary in the list represents a *row*** in the DataFrame.
*   **Dictionary keys become the *column names***.
::right::
**Example: DataFrame from List of Dictionaries (Name, Age, City)**

```python
import pandas as pd

# List of dictionaries for DataFrame creation
data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]

# Create DataFrame from list of dictionaries
df_from_dict_list = pd.DataFrame(data_list_dicts)

print("DataFrame from List of Dictionaries:\n", df_from_dict_list)
```
---
layout: two-cols-header
---
### Creating DataFrames - From Lists of Dictionaries - Output & Explanation 🗂️📊🐼

**DataFrame from List of Dictionaries: Output and Explanation**

Here's the output from the DataFrame creation code (previous slide):

**Output:**
```sh
DataFrame from List of Dictionaries:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
```

**Explanation:**

*   The **keys from the *first dictionary*** in the list (`'Name'`, `'Age'`, `'City'`) are used as **column headers**.
*   Each **dictionary in the list becomes a *row*** in the DataFrame.
*   A **default numeric index (0, 1, 2)** is automatically created for the rows.

---
layout: two-cols-header
---
### Creating DataFrames - From NumPy Arrays 🔢📊🐼

**Creating DataFrames from NumPy Arrays**

You can create DataFrames directly from NumPy arrays.

*   **NumPy array data becomes the DataFrame's values.**
*   **You can optionally specify column names** using the `columns` parameter.
*   **Index is numeric by default** but can be customized.

**Example: DataFrame from a 2D NumPy Array (with column names)**

```python
import pandas as pd
import numpy as np

# 2D NumPy array
numpy_array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
column_names = ['Column A', 'Column B', 'Column C']

# Create DataFrame from NumPy array with column names
df_from_numpy = pd.DataFrame(numpy_array_2d, columns=column_names)

print("DataFrame from NumPy Array:\n", df_from_numpy)
```
---
layout: two-cols-header
transition: fade
---

### Creating DataFrames - From NumPy Arrays - Output & Explanation 🔢📊🐼

**DataFrame from NumPy Array: Output and Explanation**

Here's the output from the DataFrame creation code (previous slide):

**Output:**
```sh
DataFrame from NumPy Array:
Column A  Column B  Column C
0         1         2         3
1         4         5         6
2         7         8         9
```

**Explanation:**

*   The **2D NumPy array** provided the **data values** for the DataFrame.
*   The `columns` parameter list (`['Column A', 'Column B', 'Column C']`) became the **column headers**.
*   A **default numeric index (0, 1, 2)** was automatically created for the rows.

---
layout: two-cols-header
transition: fade
---
### Creating DataFrames - Summary ✅📊🐼

**Summary: Ways to Create pandas DataFrames**

You can create pandas DataFrames in various ways:

*   **From Dictionary of Series:** `pd.DataFrame({'Col1': series1, 'Col2': series2})` - Keys as column names, Series as columns.
*   **From Dictionary of Lists:** `pd.DataFrame({'Col1': [list_data], 'Col2': [list_data]})` - Keys as column names, Lists as column data.
*   **From NumPy Array:** `pd.DataFrame(numpy_array, columns=[col_names])` - NumPy array as data, optional column names.

**Choose the creation method that best fits your data source and desired DataFrame structure.**

Let's now understand the *Components* of a DataFrame!

---
layout: two-cols-header
transition: fade
---

### Understanding DataFrame Components - Introduction to Components 🧩📊🐼

**DataFrame Components: Index, Columns, and Values**

Every pandas DataFrame is composed of three fundamental components:

*   **Index:**  The *row labels*.  Similar to the index in pandas Series.  Provides labeled access to rows.
*   **Columns:** The *column labels* (headers).  Identify each column.  Columns are Series!
*   **Values:**  The actual *data* held within the DataFrame.  A 2-dimensional NumPy array.

**Understanding these components is crucial for effectively working with DataFrames.**

Let's explore each component in more detail!

---
layout: two-cols-header
transition: fade
---
### DataFrame Components - The Index 🔑📊🐼

**1. The Index: Row Labels in a DataFrame**

The **Index** in a DataFrame serves as the **row labels**.  It's conceptually very similar to the index in a pandas Series.

**Key Features of the DataFrame Index:**

*   **Row Identification:**  Provides unique labels to identify each row.
*   **Label-based Access:** Enables accessing rows using these labels (similar to Series).
*   **Immutable:** DataFrame Index, like Series Index, is immutable once created.
*   **Default Numeric Index:** If not specified, pandas creates a default numeric index (0, 1, 2...).
*   **Customizable Index:** You can set a custom Index using column(s) from your data or a separate Index object.

**The DataFrame Index is essential for row-level operations and data alignment.**

Let's next explore DataFrame *Columns*!

---
layout: two-cols-header
transition: fade
---
### DataFrame Components - Columns 🗂️📊🐼

**2. Columns: Series in a DataFrame**

**DataFrame Columns** are the vertical structures in a DataFrame.  Crucially, **each column in a pandas DataFrame is itself a pandas Series!**

**Key Features of DataFrame Columns:**

*   **Labeled Series:** Each column is a Series with its own name (column label) and the DataFrame's Index.
*   **Homogeneous Data Type:**  Each column (Series) typically holds data of a single type (but different columns can have different types).
*   **Column Names:**  Columns are identified by their names (string labels).
*   **Accessed by Column Name:** You access DataFrame columns using their names.

**DataFrame Columns are the labeled, Series-based building blocks of tabular data in pandas.**

Let's explore DataFrame *Values* next!

---
layout: two-cols-header
transition: fade
---
### DataFrame Components - Values 📊🐼

**3. Values: The Underlying Data (NumPy Array)**

**DataFrame Values** represent the *actual data* stored within the DataFrame. Under the hood, these values are held in a **2-dimensional NumPy array**.

**Key Features of DataFrame Values:**

*   **NumPy ndarray:**  DataFrame values are a NumPy array for efficient storage and computation.
*   **2-Dimensional:**  Reflects the tabular structure (rows and columns).
*   **Homogeneous Data Type (within a column):** NumPy array enforces consistent data type *within each column* (which is a Series).
*   **Raw Data:**  Contains the numerical, string, or other data that you are working with in your DataFrame.

**DataFrame Values provide the efficient numerical foundation for pandas DataFrames, thanks to NumPy!**

Let's summarize DataFrame Components!

---
layout: two-cols-header
transition: fade
---
### DataFrame Components - Summary ✅🧩📊🐼

**Summary: The Three Components of a DataFrame**

Every pandas DataFrame consists of these essential parts:

*   **Index:**  *Row Labels*.  Provides labeled access to rows. Immutable.
*   **Columns:** *Column Labels (Headers)*.  Each column is a pandas Series.
*   **Values:** *Data Values*.  A 2-dimensional NumPy array.

**Understanding these components is key to manipulating and analyzing data in pandas DataFrames.**

With DataFrame Components understood, let's move on to **Basic DataFrame Operations!**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Introduction to Operations 🛠️📊🐼

**Basic DataFrame Operations: Interacting with Your Data**

Now that we understand DataFrame structure, let's learn how to *work* with DataFrames!

We'll cover essential basic operations for:

*   **Selection and Access:**  Retrieving specific data (columns, rows, cells) from a DataFrame.
*   **Inspection:**  Getting quick summaries and information about your DataFrame.
*   **(Potentially more basic operations in this section, depending on scope and slide count)**

**These operations are the foundation for data manipulation and analysis with pandas DataFrames! Let's start with Selection and Access!**

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Introduction 🖐️📊🐼

**DataFrame Selection and Access: Getting the Data You Need**

One of the most fundamental operations is **selecting and accessing specific parts of your DataFrame.**  You'll often need to extract:

*   **Specific Columns:**  Get one or more columns by name.
*   **Specific Rows:** Get rows based on their index labels or positions.
*   **Individual Cells:** Access a single value at a specific row and column.
*   **(And more advanced selection techniques later)**

**pandas provides powerful and intuitive ways to select and access DataFrame data. Let's start with Column Selection!**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Column Selection 🗂️🖐️📊🐼

**1. Column Selection: Accessing Columns by Name**

You can select one or more columns from a DataFrame using their **column names**.

**Methods for Column Selection:**

*   **Single Column:** Use square brackets `[]` with the column name (string).
    *   Example: `df['Column Name']`  (Returns a pandas Series - the column itself!)
*   **Multiple Columns:** Use double square brackets `[[]]` with a *list* of column names.
    *   Example: `df[['Column Name 1', 'Column Name 2']]` (Returns a DataFrame with the selected columns).

**Let's see examples of both single and multiple column selection!**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Single Column Selection (Part 1) 🗂️🖐️📊🐼

::left::

**Single Column Selection: Using `df['Column Name']`**

To select a *single* column, use square brackets `[]` with the column name (as a string).  This returns a pandas **Series**.

::right::

**Example: Selecting the 'City' column**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("Original DataFrame:\n", df) # Display original DataFrame

# Select the 'City' column
city_column_series = df['City'] # <--- Single bracket for single column

print("\nSelected 'City' Column (as Series):\n", city_column_series)
```
---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Single Column Selection (Part 2) 🗂️🖐️📊🐼

**Single Column Selection: Output and Explanation**

Here's the output from the single column selection code (previous slide):
::left::
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Selected 'City' Column (as Series):
0        NY
1    London
2     Paris
Name: City, dtype: object # <--- It's a Series!
```
::right::

**Explanation:**

*   `df['City']` selected the **'City' column**.
*   The result `city_column_series` is a pandas **Series**, as indicated by `Name: City` and `dtype: object`.
*   The **index (0, 1, 2)** of the Series is the same as the DataFrame's index.

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Multiple Column Selection (Part 1) 🗂️🖐️🖐️📊🐼
::left::
**Multiple Column Selection: Using `df[['Col1', 'Col2']]`**

To select *multiple* columns, <br> use *double* square brackets `[[]]` <br> and provide a *list* of column names inside the inner brackets. <br> This returns a pandas **DataFrame** containing only the selected columns.
::right::
**Example: Selecting the 'Name' and 'Age' columns**

```python
import pandas as pd
data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame
print("Original DataFrame:\n", df) # Display original DataFrame

# Select the 'Name' and 'Age' columns
name_age_df = df[['Name', 'Age']] # <--- Double brackets for multiple columns

print("\nSelected 'Name' and 'Age' Columns (as DataFrame):\n", name_age_df)
```

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Multiple Column Selection (Part 2) 🗂️🖐️🖐️📊🐼
::left::
**Multiple Column Selection: Output and Explanation**

Here's the output from the multiple column selection code (previous slide):

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Selected 'Name' and 'Age' Columns (as DataFrame):
Name  Age
0    Alice   25
1      Bob   30
2  Charlie   22
```

::right::
**Explanation:**

*   `df[['Name', 'Age']]` selected the **'Name' and 'Age' columns**.
*   The result `name_age_df` is a pandas **DataFrame**, now containing *only* the selected columns.
*   The **index (0, 1, 2)** of the DataFrame is preserved from the original DataFrame.
*   **Double square brackets `[[]]` are key for selecting multiple columns as a DataFrame.**

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Column Selection Summary ✅🗂️🖐️📊🐼

**Summary: DataFrame Column Selection**

You can select columns from a DataFrame using column names:

*   **Single Column (as Series):**  `df['Column Name']` - Returns a pandas Series.
*   **Multiple Columns (as DataFrame):** `df[['Col1', 'Col2']]` - Returns a pandas DataFrame.

**Key takeaway: Use single brackets `[]` for one column (Series), double brackets `[[]]` for multiple columns (DataFrame).**

With Column Selection covered, let's explore **Row Selection** next!

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Row Selection ➡️🖐️📊🐼

**2. Row Selection: Accessing Rows**

Besides columns, you often need to select *rows* in a DataFrame.

You can select rows based on:

*   **Index Labels:** If your DataFrame has labeled index (like 'Person 1', 'Person 2', 'Dates', etc.).
*   **Numeric Positions:** Using row numbers (0, 1, 2, ...), similar to list slicing.

**pandas offers flexible ways to select rows. Let's start with Row Selection by *Label* (Index Label).**

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Row Selection by Label (Part 1) ➡️🏷️🖐️📊🐼
::right::
**Row Selection by Label: Using `.loc[]`**

To select rows based on their *index labels*, use the `.loc[]` accessor, followed by the index label(s) you want to select.

*   **Single Row by Label:** `df.loc['index_label']` (Returns a pandas Series - the row itself!)
*   **Multiple Rows by Labels:** `df.loc[['label1', 'label2']]` (Returns a DataFrame with selected rows)

::left::

**Example: Selecting rows by index label using `.loc[]`**
```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # DataFrame with default numeric index

print("Original DataFrame:\n", df) # Display original DataFrame

# Select the row with index label '1' using .loc[]
row_label_1 = df.loc[1] # <--- .loc[] for label-based access

print("\nRow with Index Label '1' (using .loc[1]):\n", row_label_1)
```

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Row Selection by Label Example (Part 2) ➡️🏷️🖐️📊🐼

**Row Selection by Label: Output and Explanation**

Here's the output from the row selection by label code (previous slide):
::left::
**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Row with Index Label '1' (using .loc[1]):
Name          Bob
Age            30
City       London
Name: 1, dtype: object # <--- It's a Series!
```

::right::

**Explanation:**

*   `df.loc[1]` selected the row with **index label `1`**.
*   The result `row_label_1` is a pandas **Series**, representing the row.  Notice the column names ('Name', 'Age', 'City') become the *index* of this Series.
*   Data values for that row ('Bob', 30, 'London') become the *values* of the Series.

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Row Selection by Position (Part 1) ➡️🔢🖐️📊🐼

::right::

**Row Selection by Position: Using `.iloc[]`**

To select rows based on their *numeric position*, use the `.iloc[]` accessor, followed by the integer position(s) you want to select.

*   **Single Row by Position:** `df.iloc[position]` (Returns a pandas Series - the row itself!)
*   **Multiple Rows by Positions:** `df.iloc[[pos1, pos2]]` (Returns a DataFrame with selected rows) - *Similar to `.loc[]` for multiple labels*

::left::

**Example: Selecting rows by numeric position using `.iloc[]`**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # DataFrame with default numeric index

print("Original DataFrame:\n", df) # Display original DataFrame

# Select the row at *position* 2 (third row) using .iloc[]
row_position_2 = df.iloc[2] # <--- .iloc[] for position-based access

print("\nRow at Position 2 (using .iloc[2]):\n", row_position_2)
```

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Row Selection by Position Example (Part 2) ➡️🔢🖐️📊🐼
**Row Selection by Position: Output and Explanation**

::left::

Here's the output from the row selection by position code (previous slide):

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Row at Position 2 (using .iloc[2]):
Name      Charlie
Age           22
City       Paris
Name: 2, dtype: object # <--- It's a Series!
```

::right:: 

**Explanation:**

*   `df.iloc[2]` selected the row at **numeric position `2`** (the *third* row).
*   The result `row_position_2` is a pandas **Series**, representing the row. Column names ('Name', 'Age', 'City') become the Series index.
*   Data values for that row ('Charlie', 22, 'Paris') become the Series values.
*   **`.iloc[]` is used for integer position-based row access.**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Row Selection Summary ✅➡️🖐️📊🐼

**Summary: DataFrame Row Selection**

You can select rows from a DataFrame using:

*   **Row Selection by Label (Index):**  `df.loc['index_label']` or `df.loc[['label1', 'label2']]` - Use `.loc[]` for label-based row access.
*   **Row Selection by Position:** `df.iloc[position]` or `df.iloc[[pos1, pos2]]` - Use `.iloc[]` for integer position-based row access.

**Key takeaway: Use `.loc[]` for labels, `.iloc[]` for positions when selecting rows.**

With Row Selection covered, let's explore **Cell Selection** next!

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Cell Selection 🎯🖐️📊🐼

**3. Cell Selection: Accessing Individual Values**

Sometimes you need to access a *specific individual value* within a DataFrame - a single cell.

You can access DataFrame cells by specifying both:

*   **Row identifier:**  Either Index Label (using `.loc[]`) or Position (using `.iloc[]`).
*   **Column identifier:** Column Name.

**pandas provides combined indexing to pinpoint and retrieve individual cell values. Let's see how it works!**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Cell Selection Example (Part 1) 🎯🖐️📊🐼

::left::

**Cell Selection: Accessing a Single Value**

To access a single cell, combine row and column selection.


**Methods for Cell Selection:**

*   **Using `.loc[]` (Label-based):** `df.loc['row_label', 'column_name']`
*   **Using `.iloc[]` (Position-based):** `df.iloc[row_position, column_position]`

::right:: 

**Ex: Selecting the 'Age' of 'Bob' (row label '1', column 'Age') using both methods**

```python
import pandas as pd
data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame
print("Original DataFrame:\n", df) # Display original DataFrame

# Cell selection using .loc[] (label-based)
bob_age_loc = df.loc[1, 'Age'] # <--- .loc[row_label, col_name]
print("\nBob's Age (using .loc[1, 'Age']):\n", bob_age_loc)

# Cell selection using .iloc[] (position-based)
bob_age_iloc = df.iloc[1, 1] # <--- .iloc[row_position, col_position] 
                             #(position of 'Age' is 1)
print("\nBob's Age (using .iloc[1, 1]):\n", bob_age_iloc)
```

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - Selection & Access - Cell Selection Example (Part 2) 🎯🖐️📊🐼

::left:: 
**Cell Selection: Output and Explanation**

Here's the output from the cell selection code <br> (previous slide):

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris

Bob's Age (using .loc[1, 'Age']):
30

Bob's Age (using .iloc[1, 1]):
30
```

::right::

**Explanation:**

*   `df.loc[1, 'Age']` and `df.iloc[1, 1]` both accessed the same cell: the value at **row with index label `1` and column 'Age'**, and **row at position `1` and column at position `1` ('Age')**.
*   Both methods return the **individual value `30`**.
*   `.loc[]` uses *labels*, `.iloc[]` uses *positions* for cell selection as well.

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - Selection & Access - Cell Selection Summary ✅🎯🖐️📊🐼

**Summary: DataFrame Cell Selection**

You can select individual cells in a DataFrame using:

*   **Label-based Cell Access:** `df.loc['row_label', 'column_name']` - Uses `.loc[]` with row *label* and column *name*.
*   **Position-based Cell Access:** `df.iloc[row_position, column_position]` - Uses `.iloc[]` with row *position* and column *position*.

**Key takeaway: Cell selection combines row and column access using `.loc[]` for labels and `.iloc[]` for positions.**

With Column, Row, and Cell Selection covered, we've completed the core **DataFrame Selection and Access** techniques!

Let's move on to **DataFrame Inspection** next to quickly understand DataFrames!

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - Introduction to Inspection 🔍📊🐼

**DataFrame Inspection: Getting to Know Your Data Quickly**

DataFrame Inspection involves using methods to get a quick overview and summary of your DataFrame's:

*   **Structure:**  Shape, index, columns.
*   **Data Types:**  Data type of each column.
*   **Summary Statistics:**  Descriptive stats like mean, median, etc.
*   **Sample Data:**  View the first/last few rows.

**Inspection methods are essential for quickly understanding and exploring your DataFrames! Let's start with `.head()`!**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.head()` 🔍📊🐼

::left::

**1. `.head()`: View the First Few Rows**

The `.head()` method is used to display the **first *n* rows** of a DataFrame.  It's very useful for quickly inspecting the data and structure of your DataFrame.

*   **Default:** `df.head()` displays the *first 5 rows*.
*   **Specify Number:** `df.head(n)` displays the first *n* rows (e.g., `df.head(10)` for the first 10 rows).

::right::

**Example: Using `.head()` to view the first 3 rows**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'Tokyo'},
    {'Name': 'Eve', 'Age': 28, 'City': 'Sydney'},
    {'Name': 'Frank', 'Age': 40, 'City': 'Berlin'} 
    # Added more rows for better .head() demo
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("DataFrame using .head(3):\n", df.head(3)) 
# ^--- .head(3) to view first 3 rows
```
---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.head()` Output & Explanation 🔍📊🐼

**`.head()`: Output and Explanation**

Here's the output from the `.head(3)` code (previous slide):

**Output:**
```sh
DataFrame using .head(3):
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
```

**Explanation:**

*   `df.head(3)` displayed the **first 3 rows** of the DataFrame.
*   Without any argument, `df.head()` would display the **first 5 rows** by default.
*   `.head()` is a quick way to **preview the top portion** of your DataFrame and check its structure and data.

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.info()` 🔍📊🐼

::left::
**2. `.info()`: Get DataFrame Information**

The `.info()` method provides a concise summary of a DataFrame, including:

*   **DataFrame size:** Number of rows and columns.
*   **Column names:** List of column labels.
*   **Data types:** Data type of each column (e.g., int64, object, float64).
*   **Non-null values:** Count of non-missing values in each column.
*   **Memory usage:**  Amount of memory used by the DataFrame.

**`.info()` is essential for quickly understanding your DataFrame's structure and data types.**

::right:: 

**Example: Using `.info()` to inspect the DataFrame**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("DataFrame .info():")
df.info() # <--- Calling .info() method 
# ^--no output to print here, it prints directly
```

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.info()` Output & Explanation (Part: 1)🔍📊🐼

::left:: 

**`.info()`: Output and Explanation**

Here's the output from the `.info()` code (previous slide):

**Output:**
```sh
DataFrame .info():
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 3 entries, 0 to 2
Data columns (total 3 columns):

# Column Non-Null Count Dtype
---
0   Name    3 non-null      object
1   Age     3 non-null      int64
2   City    3 non-null      object
dtypes: int64(1), object(2)
memory usage: 172.0 bytes
```

::right::

**Explanation:**

*   `.info()` provides metadata about the DataFrame:
    *   **`<class 'pandas.core.frame.DataFrame'>`**:  Confirms it's a DataFrame.
    *   **`RangeIndex: 3 entries, 0 to 2`**:  Index type and number of rows (3 rows, indexed 0 to 2).
    *   **`Data columns (total 3 columns)`**: Number of columns (3 columns).
    
---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.info()` Output & Explanation ( Part: 2) 🔍📊🐼

::left:: 

**`.info()`: Output and Explanation**

Here's the output from the `.info()` code (previous slide):

**Output:**
```sh
DataFrame .info():
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 3 entries, 0 to 2
Data columns (total 3 columns):

# Column Non-Null Count Dtype
---
0   Name    3 non-null      object
1   Age     3 non-null      int64
2   City    3 non-null      object
dtypes: int64(1), object(2)
memory usage: 172.0 bytes
```

::right::

**Explanation:**

*   `.info()` provides metadata about the DataFrame:
    *   **Column-wise information**: For each column ('Name', 'Age', 'City'):
        *   `#`: Column index (starting from 0).
        *   `Column`: Column name.
        *   `Non-Null Count`: Number of non-missing values (all 3 are non-null here).
        *   `Dtype`: Data type of the column (e.g., `object` for strings, `int64` for integers).


---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.info()` Output & Explanation ( Part: 3) 🔍📊🐼

::left:: 

**`.info()`: Output and Explanation**

Here's the output from the `.info()` code (previous slide):

**Output:**
```sh
DataFrame .info():
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 3 entries, 0 to 2
Data columns (total 3 columns):

# Column Non-Null Count Dtype
---
0   Name    3 non-null      object
1   Age     3 non-null      int64
2   City    3 non-null      object
dtypes: int64(1), object(2)
memory usage: 172.0 bytes
```

::right::

**Explanation:**

*   `.info()` provides metadata about the DataFrame:
    *   **`dtypes: int64(1), object(2)`**: Summary of data types (1 integer column, 2 object columns).
    *   **`memory usage: 172.0 bytes`**:  Memory used by the DataFrame.

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.describe()` 🔍📊🐼

**3. `.describe()`: Descriptive Statistics**

The `.describe()` method generates descriptive statistics for **numerical columns** in a DataFrame.  It provides insights into the distribution and central tendency of your numerical data.
::left::
**Key Statistics provided by `.describe()`:**

*   **count:** Number of non-missing values.
*   **mean:** Average value.
*   **std:** Standard deviation (spread of data).
*   **min:** Minimum value.
*   **25%:** 25th percentile (1st quartile).
*   **50%:** 50th percentile (median, 2nd quartile).
*   **75%:** 75th percentile (3rd quartile).
*   **max:** Maximum value.

::right::

**.describe() is powerful for understanding the statistical properties of your numerical DataFrame columns.**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.describe()` (Part - 2) 🔍📊🐼


**Example: Using `.describe()` on a DataFrame with 'Age' as a numerical column**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'Tokyo'},
    {'Name': 'Eve', 'Age': 28, 'City': 'Sydney'} # Added more rows for more meaningful stats
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("DataFrame .describe():\n", df.describe()) # <--- Calling .describe() - output to print
```
---
layout: two-cols
transition: fade
---

### Basic DataFrame Operations - DataFrame Inspection - `.describe()` Output & Explanation 🔍📊🐼
<!-- ::left:: -->
**`.describe()`: Output and Explanation**

Here's the output from the `.describe()` code (previous slide):

**Output:**
```sh
DataFrame .describe():
Age
count   5.000000
mean   28.000000
std     4.949747
min    22.000000
25%    25.000000
50%    28.000000
75%    30.000000
max    35.000000
```

::right::


**Explanation:**

*   `.describe()` calculated descriptive statistics **only for the numerical column 'Age'**.
*   For 'Age', it provides key stats:
    *   `count`: 5 non-missing values.
    *   `mean`: Average age is 28.
    *   `std`: Standard deviation of ages (spread).
    *   `min`: Minimum age is 22.
    *   `25%`, `50%`, `75%`: Percentiles/quartiles showing age distribution.
    *   `max`: Maximum age is 35.
*   Non-numerical columns ('Name', 'City') are **excluded** from `.describe()`'s default output.

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - DataFrame Inspection - Summary ✅🔍📊🐼

**Summary: DataFrame Inspection Methods**

pandas provides several methods for quick DataFrame inspection:

*   **`.head(n)`:**  View the *first n rows* (default n=5). Preview data.
*   **`.info()`:** Get a *concise summary* of DataFrame structure, data types, and memory usage.
*   **`.describe()`:** Generate *descriptive statistics* for numerical columns.

**Use these methods to quickly understand and explore your DataFrames!**

We have covered essential **DataFrame Inspection** techniques!  Let's move on to explore DataFrame **Shape and Size** next!

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - DataFrame Shape & Size - Getting Dimensions 📐📊🐼

**4. DataFrame Shape and Size: Understanding Dimensions**

DataFrames have attributes to quickly get their dimensions:

*   **`.shape`:** Returns a **tuple** representing the dimensions `(rows, columns)`.
*   **`.size`:** Returns an **integer** representing the *total number of elements* in the DataFrame (rows * columns).

**`.shape` and `.size` are useful for understanding the scale and structure of your DataFrames.**

**Example:** For a DataFrame with 5 rows and 3 columns:
*   `df.shape` would be `(5, 3)`
*   `df.size` would be `15` (5 * 3)

Let's quickly see DataFrame Shape and Size in action next!

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Shape & Size - Example (Part 1) 📐📊🐼

::left::

**DataFrame Shape and Size: Code Example**

Let's see how to get the shape and size of a DataFrame using `.shape` and `.size`.

::right::

**Example: Getting DataFrame shape and size**

```python
import pandas as pd

data_list_dicts = [ # (DataFrame creation - as used before)
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'},
    {'Name': 'David', 'Age': 35, 'City': 'Tokyo'},
    {'Name': 'Eve', 'Age': 28, 'City': 'Sydney'} 
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("Original DataFrame:\n", df) # Display DataFrame

# Get DataFrame shape
df_shape = df.shape # <--- Accessing .shape attribute
print("\nDataFrame Shape (df.shape):\n", df_shape)

# Get DataFrame size
df_size = df.size   # <--- Accessing .size attribute
print("\nDataFrame Size (df.size):\n", df_size)
```

---
layout: two-cols-header
transition: fade
---
### Basic DataFrame Operations - DataFrame Shape & Size - Example (Part 2) 📐📊🐼

**DataFrame Shape and Size: Output and Explanation**

Here's the output from the `.shape` and `.size` code (previous slide):

::left::

**Output:**
```sh
Original DataFrame:
Name  Age    City
0    Alice   25      NY
1      Bob   30  London
2  Charlie   22   Paris
3    David   35   Tokyo
4      Eve   28   Sydney

DataFrame Shape (df.shape):
(5, 3)

DataFrame Size (df.size):
15
```

::right::

**Explanation:**

*   `df.shape` returns **`(5, 3)`**, indicating:
    *   **5 rows** in the DataFrame.
    *   **3 columns** in the DataFrame.
*   `df.size` returns **`15`**, which is the total number of elements (5 rows * 3 columns).

**`.shape` and `.size` provide quick insights into the dimensions of your DataFrame.**

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Data Types - `.dtypes` 🎨📊🐼

::left::

**5. DataFrame Data Types: Checking Column Types with `.dtypes`**

The `.dtypes` attribute is used to check the **data type of each column** in a DataFrame.  DataFrames can hold columns with *different* data types.

*   **.dtypes:** Returns a pandas **Series** where:
    *   **Index** is the column names.
    *   **Values** are the data types of each column (e.g., `int64`, `object`, `float64`).

**`.dtypes` is crucial for understanding the data type of each column for appropriate analysis.**

::right::

**Example: Using `.dtypes` to check column data types**

```python
import pandas as pd

data_list_dicts = [
    {'Name': 'Alice', 'Age': 25, 'City': 'NY'},
    {'Name': 'Bob', 'Age': 30, 'City': 'London'},
    {'Name': 'Charlie', 'Age': 22, 'City': 'Paris'}
]
df = pd.DataFrame(data_list_dicts) # Create DataFrame

print("DataFrame Data Types (df.dtypes):\n", df.dtypes) 
# ^--- Accessing .dtypes attribute
```

---
layout: two-cols-header
transition: fade
---

### Basic DataFrame Operations - DataFrame Data Types - `.dtypes` Output & Explanation 🎨📊🐼

::left:: 

**`.dtypes`: Output and Explanation**

Here's the output from the `.dtypes` code (previous slide):

**Output:**
```sh
DataFrame   Data Types (df.dtypes):
Name        object
Age         int64
City        object
dtype:      object
```

::right::

**Explanation:**

*   `df.dtypes` returns a pandas **Series** where the:
    *   **Index** is the column names (`Name`, `Age`, `City`).
    *   **Values** are the data types of each column.
*   **`object`**:  Indicates columns 'Name' and 'City' contain strings (or mixed data types, but here it's strings).
*   **`int64`**: Indicates the 'Age' column contains integer numbers (64-bit integers).

**.dtypes helps you understand the data type of each DataFrame column, which is crucial for data processing!**

---
layout: two-cols-header
transition: fade
---
### Session 7: Introduction to pandas DataFrames - Session Summary ✅📊🐼

**Session 7 Summary: Introduction to pandas DataFrames**

In this session, we covered the fundamentals of pandas DataFrames:

*   **What are DataFrames?** 2D labeled tables, composed of Series.
*   **Creating DataFrames:** From dictionaries of Series/Lists, NumPy arrays.
*   **DataFrame Components:** Index (row labels), Columns (Series), Values (NumPy array).
*   **Basic DataFrame Operations:**
    *   **Selection & Access:** Column, Row, and Cell selection using labels and positions (`.loc[]`, `.iloc[]`).
    *   **Inspection:** `.head()`, `.info()`, `.describe()`, `.shape`, `.size`, `.dtypes`.

**You now have a solid foundation in pandas DataFrames!**

**Next, we can explore more advanced DataFrame operations, data manipulation, and analysis techniques!**

---
layout: two-cols-header
transition: fade
---
### Session 7: Introduction to pandas DataFrames - What's Next? 🚀📊🐼

**What's Next?  Expanding Your pandas DataFrame Skills!**

With a solid introduction to pandas DataFrames, you're ready to explore more advanced topics:

**Possible Next Steps:**

*   **More DataFrame Operations:** Filtering, Sorting, Adding/Removing Columns, Renaming.
*   **Data Manipulation:**  Cleaning, Transforming, and Aggregating Data.
*   **Data Analysis:**  Using DataFrames for real-world data exploration and insights.
*   **Data Visualization:**  Plotting data directly from DataFrames.
*   **Working with Different Data Sources:**  Reading from/writing to CSV, Excel, databases, etc.

**The pandas DataFrame world is vast!  Keep practicing and exploring to become a pandas power user!**

**End of Session 7: Introduction to pandas DataFrames.**

---