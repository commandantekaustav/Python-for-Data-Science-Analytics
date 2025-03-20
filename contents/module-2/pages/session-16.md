---
layout: two-cols-header
transition: fade
---
### 🤝 Session 16: Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

In this session, we'll explore how to combine DataFrames using merge and join operations. This is essential for integrating data from multiple sources and performing comprehensive analysis.

::left::

**Why Combine DataFrames?**

* Real-world data often comes from various sources.
* Combining DataFrames allows us to integrate and analyze related datasets.
* Merge and join operations are crucial for data integration and analysis.

::right::

**Key Concepts:**

* **Merge Operation:** Combining DataFrames based on common columns.
* **Join Operation:** Combining DataFrames based on index or columns.
* **Join Types:** Inner, outer, left, and right joins.
* **Handling Duplicate Columns:** Resolving naming conflicts.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's start by understanding the basic merge operation.

::left::

**1. Basic Merge Operation:**

* The `pd.merge()` function combines DataFrames based on common columns.
* It uses the `on` parameter to specify the column(s) to merge on.
* By default, it performs an inner join.

::right::

**Example: Basic Merge**

```python
import pandas as pd

# Sample DataFrames
df1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['Alice', 'Bob', 'Charlie']})
df2 = pd.DataFrame({'ID': [2, 3, 4], 'Score': [85, 90, 78]})

# Merge DataFrames
merged_df = pd.merge(df1, df2, on='ID')
print("Merged DataFrame:\n", merged_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of the basic merge operation.

::left::

**Output & Explanation (Slide 2):**
```bash
Merged DataFrame:
   ID     Name  Score
0   2      Bob     85
1   3  Charlie     90
```

::right::

**Explanation:**

* `pd.merge(df1, df2, on='ID')` merges `df1` and `df2` based on the 'ID' column.
* The result includes only the rows where the 'ID' values match in both DataFrames (inner join).
* The 'Name' and 'Score' columns are combined into a single DataFrame.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's explore different join types.

::left::

**2. Join Types:**

* **Inner Join:** Returns only the matching rows.
* **Outer Join:** Returns all rows from both DataFrames, filling missing values with NaN.
* **Left Join:** Returns all rows from the left DataFrame and matching rows from the right.
* **Right Join:** Returns all rows from the right DataFrame and matching rows from the left.

::right::

**Example: Outer Join**

```python
import pandas as pd

# Sample DataFrames
df1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['Alice', 'Bob', 'Charlie']})
df2 = pd.DataFrame({'ID': [2, 3, 4], 'Score': [85, 90, 78]})

# Outer Join
outer_merged_df = pd.merge(df1, df2, on='ID', how='outer')
print("Outer Merged DataFrame:\n", outer_merged_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of the outer join.

::left::

**Output & Explanation (Slide 4):**
```bash
Outer Merged DataFrame:
   ID     Name  Score
0   1    Alice    NaN
1   2      Bob   85.0
2   3  Charlie   90.0
3   4      NaN   78.0
```

::right::

**Explanation:**

* `pd.merge(df1, df2, on='ID', how='outer')` performs an outer join.
* It includes all rows from both `df1` and `df2`.
* Missing values are filled with `NaN`.
* This ensures that all data from both DataFrames is retained.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's explore how to handle duplicate columns during merge.

::left::

**3. Handling Duplicate Columns:**

* When merging DataFrames, duplicate column names may arise.
* Pandas automatically suffixes duplicate column names with `_x` and `_y`.
* You can customize the suffixes using the `suffixes` parameter.

::right::

**Example: Handling Duplicate Columns**

```python
import pandas as pd

# Sample DataFrames with duplicate columns
df1 = pd.DataFrame({'ID': [1, 2], 'Value': [10, 20]})
df2 = pd.DataFrame({'ID': [2, 3], 'Value': [30, 40]})

# Merge with custom suffixes
merged_df = pd.merge(df1, df2, on='ID', suffixes=('_left', '_right'))
print("Merged DataFrame with Suffixes:\n", merged_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of handling duplicate columns.

::left::

**Output & Explanation (Slide 6):**
```bash
Merged DataFrame with Suffixes:
   ID  Value_left  Value_right
0   2          20           30
```

::right::

**Explanation:**

* `pd.merge(df1, df2, on='ID', suffixes=('_left', '_right'))` merges `df1` and `df2` based on the 'ID' column.
* The duplicate 'Value' columns are renamed to 'Value_left' and 'Value_right' using the `suffixes` parameter.
* This avoids naming conflicts and allows you to differentiate between the original columns.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's explore how to use the `join()` method.

::left::

**4. Using the `join()` Method:**

* The `join()` method is similar to `merge()`, but it primarily joins DataFrames based on their index.
* You can also join on columns by specifying the `on` parameter.
* It defaults to a left join.

::right::

**Example: Join on Index**

```python
import pandas as pd

# Sample DataFrames with index
df1 = pd.DataFrame({'Value1': [10, 20, 30]}, index=[1, 2, 3])
df2 = pd.DataFrame({'Value2': [40, 50, 60]}, index=[2, 3, 4])

# Join DataFrames on index
joined_df = df1.join(df2, how='outer')
print("Joined DataFrame:\n", joined_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of the `join()` method.

::left::

**Output & Explanation (Slide 8):**
```bash
Joined DataFrame:
   Value1  Value2
1    10.0     NaN
2    20.0    40.0
3    30.0    50.0
4     NaN    60.0
```

::right::

**Explanation:**

* `df1.join(df2, how='outer')` joins `df1` and `df2` based on their index.
* It performs an outer join, including all rows from both DataFrames.
* Missing values are filled with `NaN`.
* The `join()` method is convenient for joining DataFrames with matching index values.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's explore how to join on columns using the `join()` method.

::left::

**5. Join on Columns:**

* You can use the `on` parameter to join DataFrames based on columns.
* This is similar to merging with `pd.merge()`, but the syntax is slightly different.

::right::

**Example: Join on Columns**

```python
import pandas as pd

# Sample DataFrames
df1 = pd.DataFrame({'ID': [1, 2, 3], 'Name': ['Alice', 'Bob', 'Charlie']}).set_index('ID')
df2 = pd.DataFrame({'ID': [2, 3, 4], 'Score': [85, 90, 78]}).set_index('ID')

# Join DataFrames on columns
joined_df = df1.join(df2, how='outer')
print("Joined DataFrame on Columns:\n", joined_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of joining on columns.

::left::

**Output & Explanation (Slide 10):**
```bash
Joined DataFrame on Columns:
        Name  Score
ID                   
1      Alice    NaN
2        Bob   85.0
3    Charlie   90.0
4        NaN   78.0
```

::right::

**Explanation:**

* We first set the 'ID' column as the index for both `df1` and `df2` using `.set_index('ID')`.
* `df1.join(df2, how='outer')` joins `df1` and `df2` based on the common index ('ID'), which effectively joins them on the original 'ID' columns.
* This demonstrates how to use the `join()` method to join DataFrames based on columns by setting them as the index.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's explore how to use `merge()` with different columns names.

::left::

**6. Merge with Different Column Names:**

* When the columns to merge have different names in the two DataFrames, use `left_on` and `right_on` parameters in `pd.merge()`.

::right::

**Example: Merge with Different Column Names**

```python
import pandas as pd

# Sample DataFrames
df1 = pd.DataFrame({'customer_id': [1, 2, 3], 'Name': ['Alice', 'Bob', 'Charlie']})
df2 = pd.DataFrame({'ID': [2, 3, 4], 'Score': [85, 90, 78]})

# Merge DataFrames with different column names
merged_df = pd.merge(df1, df2, left_on='customer_id', right_on='ID')
print("Merged DataFrame with Different Column Names:\n", merged_df)
```

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's see the output of using `merge()` with different columns names.

::left::

**Output & Explanation (Slide 12):**
```bash
Merged DataFrame with Different Column Names:
   customer_id     Name  ID  Score
0            2      Bob   2     85
1            3  Charlie   3     90
```

::right::

**Explanation:**

* `pd.merge(df1, df2, left_on='customer_id', right_on='ID')` merges `df1` and `df2`.
* It uses 'customer_id' from `df1` and 'ID' from `df2` as the merge keys.
* This allows you to merge DataFrames even when the relevant columns have different names.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's summarize the key concepts of combining DataFrames.

::left::

**7. Recap of Key Concepts:**

* **Merge Operation:** Combining DataFrames based on columns using `pd.merge()`.
* **Join Operation:** Combining DataFrames based on index or columns using `df.join()`.
* **Join Types:** Inner, outer, left, and right joins for different combination results.
* **Handling Duplicate Columns:** Using `suffixes` to resolve naming conflicts.
* **Merging with different column names:** Using `left_on` and `right_on` in `pd.merge()`.

::right::

**Key Takeaways:**

* `merge()` and `join()` are essential tools for integrating data from multiple sources.
* Understanding join types allows you to control the data included in the combined DataFrame.
* Properly handling duplicate columns ensures data integrity.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Let's do a short exercise to solidify your understanding.

::left::

**8. Exercise:**

Using two DataFrames with related data, perform the following:

1.  Merge the DataFrames using an inner join on a common column.
2.  Perform an outer join to include all rows from both DataFrames.
3.  Use a left join to include all rows from the left DataFrame and matching rows from the right.
4.  Handle duplicate columns by adding suffixes.
5.  Join the DataFrames using the `join()` method on their index.
6.  Join the DataFrames using the `join()` method on a specific column.
7.  Merge two dataframes using `left_on` and `right_on` parameters.

::right::

**Tips:**

* Choose DataFrames with related columns or indices.
* Experiment with different join types and parameters.
* Use the pandas documentation for reference.

---
layout: two-cols-header
transition: fade
---
### 🤝 Combining DataFrames - Merging and Joining 🧩

**Data Integration from Multiple Sources**

Congratulations! You've reached the end of this session.

::left::

**9. Conclusion:**

In this session, we explored how to combine DataFrames using merge and join operations. We covered different join types, handling duplicate columns, and joining on indices or columns.

::right::

**Next Steps:**

* Practice with different datasets and combination scenarios.
* Explore advanced merge and join techniques.
* Combine DataFrame combination with other pandas functionalities for comprehensive data integration and analysis.

Keep practicing and refining your skills!

