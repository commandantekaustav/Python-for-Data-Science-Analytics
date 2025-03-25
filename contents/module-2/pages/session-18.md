---
layout: two-cols-header
transition: fade
---
### 🔄 Session 18: Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

In this session, we'll explore how to reshape DataFrames using stack, unstack, pivot, and melt operations. These techniques are essential for transforming data between long and wide formats, which is crucial for analysis and visualization.

::left::

**Why Reshape Data?**

* Data often comes in formats that are not ideal for analysis.
* Reshaping allows us to restructure data for specific tasks.
* Stack, unstack, pivot, and melt provide powerful tools for data transformation.

::right::

**Key Concepts:**

* **Stack Operation:** Moving columns to rows (wide to long format).
* **Unstack Operation:** Moving rows to columns (long to wide format).
* **Pivot Operation:** Reshaping data based on column values.
* **Melt Operation:** Unpivoting data from wide to long format.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's start by understanding the stack operation.

::left::

**1. Stack Operation:**

* The `stack()` method moves columns to rows, transforming data from wide to long format.
* It creates a hierarchical index with the original index and the column names.

::right::

**Example: Stack Operation**

```python
import pandas as pd

# Sample DataFrame
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]}, index=['X', 'Y'])
print("Original DataFrame:\n", df)

# Stack the DataFrame
stacked_df = df.stack()
print("\nStacked DataFrame:\n", stacked_df)
```

---
layout: two-cols-header
transition: fade
---

### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's see the output of the stack operation.

::left::

**Output & Explanation (Slide 2):**
```bash
Original DataFrame:
   A  B
X  1  3
Y  2  4

Stacked DataFrame:
X  A    1
   B    3
Y  A    2
   B    4
dtype: int64
```

::right::

**Explanation:**

* `df.stack()` moves the columns 'A' and 'B' to rows.
* The result is a Series with a hierarchical index ('X', 'Y', 'A', 'B').
* The original DataFrame is transformed from wide to long format.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's explore the unstack operation.

::left::

**2. Unstack Operation:**

* The `unstack()` method moves rows to columns, transforming data from long to wide format.
* It's the inverse of the `stack()` method.

::right::

**Example: Unstack Operation**

```python
import pandas as pd

# Sample Stacked DataFrame
df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]}, index=['X', 'Y'])
stacked_df = df.stack()
print("Stacked DataFrame:\n", stacked_df)

# Unstack the DataFrame
unstacked_df = stacked_df.unstack()
print("\nUnstacked DataFrame:\n", unstacked_df)
```

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's see the output of the unstack operation.

::left::

**Output & Explanation (Slide 4):**
```bash
Stacked DataFrame:
X  A    1
   B    3
Y  A    2
   B    4
dtype: int64

Unstacked DataFrame:
   A  B
X  1  3
Y  2  4
```

::right::

**Explanation:**

* `stacked_df.unstack()` moves the innermost level of the index ('A', 'B') to columns.
* The result is the original DataFrame, transforming the data back from long to wide format.
* `unstack()` is the inverse operation of `stack()`.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's explore the pivot operation.

::left::

**3. Pivot Operation:**

* The `pivot()` method reshapes data based on column values.
* It requires an index, columns, and values to create a new DataFrame.

::right::

**Example: Pivot Operation**

```python
import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    'date': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02'],
    'item': ['A', 'B', 'A', 'B'],
    'value': [10, 20, 30, 40]
})
print("Original DataFrame:\n", df)

# Pivot the DataFrame
pivoted_df = df.pivot(index='date', columns='item', values='value')
print("\nPivoted DataFrame:\n", pivoted_df)
```

---
layout: two-cols-header
transition: fade
---

### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's see the output of the pivot operation.

::left::

**Output & Explanation (Slide 6):**
```bash
Original DataFrame:
         date item  value
0  2023-01-01    A     10
1  2023-01-01    B     20
2  2023-01-02    A     30
3  2023-01-02    B     40

Pivoted DataFrame:
item          A   B
date               
2023-01-01  10  20
2023-01-02  30  40
```

::right::

**Explanation:**

* `df.pivot(index='date', columns='item', values='value')` reshapes the DataFrame.
* It uses 'date' as the index, 'item' as the columns, and 'value' as the values.
* The result is a wide-format DataFrame with dates as rows and items as columns.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's explore the melt operation.

::left::

**4. Melt Operation:**

* The `melt()` method unpivots a DataFrame from wide to long format.
* It transforms columns into rows, creating a long-format DataFrame.

::right::

**Example: Melt Operation**

```python
import pandas as pd

# Sample Pivoted DataFrame
df = pd.DataFrame({
    'date': ['2023-01-01', '2023-01-02'],
    'A': [10, 30],
    'B': [20, 40]
})
print("Original DataFrame:\n", df)

# Melt the DataFrame
melted_df = pd.melt(df, id_vars=['date'], value_vars=['A', 'B'], var_name='item', value_name='value')
print("\nMelted DataFrame:\n", melted_df)
```

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's see the output of the melt operation.

::left::

**Output & Explanation (Slide 8):**
```bash
Original DataFrame:
         date   A   B
0  2023-01-01  10  20
1  2023-01-02  30  40

Melted DataFrame:
         date item  value
0  2023-01-01    A     10
1  2023-01-02    A     30
2  2023-01-01    B     20
3  2023-01-02    B     40
```

::right::

**Explanation:**

* `pd.melt(df, id_vars=['date'], value_vars=['A', 'B'], var_name='item', value_name='value')` unpivots the DataFrame.
* `id_vars` specifies the columns to keep as identifiers ('date').
* `value_vars` specifies the columns to unpivot ('A', 'B').
* `var_name` and `value_name` specify the names of the new columns.
* The result is a long-format DataFrame with 'date', 'item', and 'value' columns.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's explore how to use multiple index levels with stack and unstack.

::left::

**5. Multiple Index Levels:**

* `stack()` and `unstack()` can handle DataFrames with multiple index levels.
* You can specify the level to stack or unstack.

::right::

**Example: Multiple Index Levels**

```python
import pandas as pd

# Sample DataFrame with MultiIndex
index = pd.MultiIndex.from_tuples([('A', 1), ('A', 2), ('B', 1), ('B', 2)], names=['level1', 'level2'])
df = pd.DataFrame({'value': [10, 20, 30, 40]}, index=index)
print("Original DataFrame:\n", df)

# Unstack level 'level2'
unstacked_df = df.unstack(level='level2')
print("\nUnstacked DataFrame:\n", unstacked_df)
```

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's see the output of using multiple index levels with stack and unstack.

::left::

**Output & Explanation (Slide 10):**
```bash
Original DataFrame:
             value
level1 level2     
A      1        10
       2        20
B      1        30
       2        40

Unstacked DataFrame:
        value   
level2    1   2
level1         
A        10  20
B        30  40
```

::right::

**Explanation:**

* `df.unstack(level='level2')` unstacks the DataFrame based on the 'level2' index.
* The 'level2' index is moved to the columns, creating a wide-format DataFrame.
* This demonstrates how `unstack()` can handle DataFrames with multiple index levels, allowing for more complex data reshaping.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's summarize the key concepts of stack, unstack, pivot, and melt.

::left::

**6. Recap of Key Concepts:**

* **Stack Operation:** Moving columns to rows with `df.stack()`.
* **Unstack Operation:** Moving rows to columns with `df.unstack()`.
* **Pivot Operation:** Reshaping data based on column values with `df.pivot()`.
* **Melt Operation:** Unpivoting data from wide to long format with `pd.melt()`.
* **Multiple Index Levels:** Using `stack()` and `unstack()` with hierarchical indices.

::right::

**Key Takeaways:**

* Stack and unstack are inverse operations for transforming between wide and long formats.
* Pivot and melt provide powerful tools for reshaping data based on column values.
* Understanding these operations is crucial for preparing data for analysis and visualization.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

Using a DataFrame with data in a wide format, perform the following:

1.  Stack the DataFrame to transform it into long format.
2.  Unstack the stacked DataFrame to revert to the original wide format.
3.  Pivot the DataFrame to reshape it based on specific columns.
4.  Melt the pivoted DataFrame to transform it back into long format.
5.  Use stack/unstack with DataFrames with multiple index levels.

::right::

**Tips:**

* Create or use sample DataFrames with data in different formats.
* Experiment with different parameters for `pivot()` and `melt()`.
* Use DataFrames with multiple index levels to practice `stack()` and `unstack()`.

---
layout: two-cols-header
transition: fade
---
### 🔄 Data Reshaping - Stack, Unstack, Pivot, and Melt 📐

**Transforming Data Between Long and Wide Formats**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we explored how to reshape DataFrames using stack, unstack, pivot, and melt operations. We covered transforming data between long and wide formats and handling multiple index levels.

::right::

**Next Steps:**

* Practice with different datasets and reshaping scenarios.
* Explore advanced reshaping techniques.
* Combine DataFrame reshaping with other pandas functionalities for comprehensive data transformation and analysis.

Keep practicing and refining your skills!