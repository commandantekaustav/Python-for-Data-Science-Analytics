---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

In this session, we'll focus on handling duplicate data within pandas DataFrames. Duplicate data can skew analysis results and lead to incorrect conclusions. We'll explore techniques to identify, remove, and manage duplicates effectively.

::left::

**Why Handle Duplicate Data?**

* **Data Integrity:** Duplicates can compromise the accuracy and reliability of data.
* **Analysis Accuracy:** Duplicates can bias statistical measures and distort analysis outcomes.
* **Performance:** Removing duplicates can improve the efficiency of data processing and analysis.

::right::

**Key Concepts:**

* **Identifying Duplicates:** Using `duplicated()`
* **Removing Duplicates:** Using `drop_duplicates()`
* **Keeping Specific Duplicates:** Controlling which duplicates to keep or remove.
* **Detecting duplicates using hashing**

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's begin by understanding how to identify duplicate rows.

::left::

**1. Identifying Duplicate Rows:**

* The `duplicated()` method returns a boolean Series that indicates which rows are duplicates.
* `True` indicates a duplicate row, while `False` indicates a unique row.
* By default, it marks all occurrences of a duplicate as `True` except for the first one.

::right::

**Example: Identifying Duplicate Rows**

```python
import pandas as pd

# Sample DataFrame with duplicate rows
data = {'col1': ['A', 'A', 'B', 'B', 'C'],
        'col2': [1, 1, 2, 2, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Identify duplicate rows
print("\nDuplicate Rows:\n", df.duplicated())
```

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's see the output of identifying duplicate rows.

::left::

**Output & Explanation (Slide 2):**
```bash
Original DataFrame:
  col1  col2
0    A     1
1    A     1
2    B     2
3    B     2
4    C     3

Duplicate Rows:
0    False
1     True
2    False
3     True
4    False
```

::right::

**Explanation:**

* The `duplicated()` method identifies the second occurrence of duplicate rows.
* Row 1 is marked as `True` because it's a duplicate of row 0.
* Row 3 is marked as `True` because it's a duplicate of row 2.
* Rows 0, 2, and 4 are marked as `False` because they are unique.

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Next, let's explore how to remove duplicate rows.

::left::

**2. Removing Duplicates:**

* The `drop_duplicates()` method removes duplicate rows from the DataFrame.
* By default, it removes all duplicate rows, keeping only the first occurrence.

::right::

**Example: Removing Duplicate Rows**

```python
import pandas as pd

# Sample DataFrame with duplicate rows
data = {'col1': ['A', 'A', 'B', 'B', 'C'],
        'col2': [1, 1, 2, 2, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Remove duplicate rows
df_no_duplicates = df.drop_duplicates()
print("\nDataFrame after removing duplicates:\n", df_no_duplicates)
```

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's see the output of removing duplicate rows.

::left::

**Output & Explanation (Slide 4):**
```bash
Original DataFrame:
  col1  col2
0    A     1
1    A     1
2    B     2
3    B     2
4    C     3

DataFrame after removing duplicates:
  col1  col2
0    A     1
2    B     2
4    C     3
```

::right::

**Explanation:**

* The `drop_duplicates()` method removes the second occurrence of duplicate rows.
* Row 1, which is a duplicate of row 0, is removed.
* Row 3, which is a duplicate of row 2, is removed.
* The resulting DataFrame `df_no_duplicates` contains only the unique rows.

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's explore how to remove duplicates based on specific columns.

::left::

**3. Removing Duplicates Based on Specific Columns:**

* The `drop_duplicates()` method allows you to specify which columns to consider when identifying duplicates using the `subset` parameter.
* This is useful when you want to remove duplicates based on a subset of columns rather than the entire row.

::right::

**Example: Removing Duplicates Based on Specific Columns**

```python
import pandas as pd

# Sample DataFrame with potential duplicates
data = {'col1': ['A', 'A', 'B', 'B', 'C'],
        'col2': [1, 2, 2, 2, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Remove duplicates based on 'col2'
df_no_duplicates_col2 = df.drop_duplicates(subset=['col2'])
print("\nDataFrame after removing duplicates based on 'col2':\n", df_no_duplicates_col2)
```

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's see the output of removing duplicates based on specific columns.

::left::

**Output & Explanation (Slide 6):**
```bash
Original DataFrame:
  col1  col2
0    A     1
1    A     2
2    B     2
3    B     2
4    C     3

DataFrame after removing duplicates based on 'col2':
  col1  col2
0    A     1
1    A     2
4    C     3
```

::right::

**Explanation:**

* `drop_duplicates(subset=['col2'])` removes rows where the values in 'col2' are duplicates.
* The first occurrence of each unique value in 'col2' is kept.
* Row 2 is removed because 'col2' has a duplicate value (2) that already appeared in row 1.

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's explore how to control which duplicates to keep or remove.

::left::

**4. Keeping Specific Duplicates:**

* The `keep` parameter in `drop_duplicates()` allows you to control which duplicates are kept or removed.
* Options for `keep` include:
    * `'first'` (default): Keep the first occurrence and remove others.
    * `'last'`: Keep the last occurrence and remove others.
    * `False`: Remove all duplicates.

::right::

**Example: Keeping Specific Duplicates**

```python
import pandas as pd

# Sample DataFrame with duplicate rows
data = {'col1': ['A', 'A', 'B', 'B', 'C'],
        'col2': [1, 1, 2, 2, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Keep the last occurrence
df_keep_last = df.drop_duplicates(keep='last')
print("\nDataFrame after keeping last occurrences:\n", df_keep_last)

# Remove all duplicates
df_remove_all = df.drop_duplicates(keep=False)
print("\nDataFrame after removing all duplicates:\n", df_remove_all)
```

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's see the output of keeping specific duplicates.

::left::

**Output & Explanation (Slide 8):**
```bash
Original DataFrame:
  col1  col2
0    A     1
1    A     1
2    B     2
3    B     2
4    C     3

DataFrame after keeping last occurrences:
  col1  col2
1    A     1
3    B     2
4    C     3

DataFrame after removing all duplicates:
  col1  col2
4    C     3
```

::right::

**Explanation:**

* `df.drop_duplicates(keep='last')` keeps the last occurrence of each duplicate, removing the first. Thus, row 1 and row 3 are kept, while row 0 and row 2 are removed.
* `df.drop_duplicates(keep=False)` removes all rows that have duplicates. Only row 4 remains, as it's the only row with a unique combination of 'col1' and 'col2' values.

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's explore how to detect duplicates using hashing.

::left::

**5. Detecting Duplicates Using Hashing:**

* Hashing can be an efficient way to detect duplicates, especially in large datasets.
* pandas doesn't have a built-in function for hashing-based duplicate detection, but you can implement it using Python's `hash()` function.
* This involves creating a hash value for each row and then identifying duplicates based on the hash values.
* **Caution:** Hash collisions can occur, where different rows might have the same hash value, but this is relatively rare.

::right::

**Example: Detecting Duplicates Using Hashing**

```python
import pandas as pd

# Sample DataFrame
data = {'col1': ['A', 'A', 'B', 'B', 'C'],
        'col2': [1, 1, 2, 2, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Create a hash column
df['hash_value'] = df.apply(lambda x: hash(tuple(x)), axis=1)
print("\nDataFrame with Hash Values:\n", df)

# Identify duplicates based on hash values
print("\nDuplicate Hash Values:\n", df['hash_value'].duplicated())
```

---
layout: two-cols-header
transition: fade
---

### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

::left::

Let's see the output of detecting duplicates using hashing.

**Output & Explanation (Slide 10):**
```bash
Original DataFrame:
  col1  col2
0    A     1
1    A     1
2    B     2
3    B     2
4    C     3
DataFrame with Hash Values:
  col1  col2     hash_value
0    A     1   206841273684
1    A     1   206841273684
2    B     2   174277551063
3    B     2   174277551063
4    C     3  -212757287714
Duplicate Hash Values:
0    False
1     True
2    False
3     True
4    False
```

::right::

**Explanation:**

* A new column `hash_value` is created by applying the `hash()` function to each row. The `apply(lambda x: hash(tuple(x)), axis=1)` part converts each row into a tuple and then calculates its hash value.
* The `duplicated()` method is then used on the `hash_value` column.
* Rows 0 and 1 have the same hash value, so row 1 is identified as a duplicate.
* Rows 2 and 3 also have the same hash value, so row 3 is identified as a duplicate.
* While hash collisions are possible, in this simple example, the hash values accurately reflect the duplicate rows.

---
layout: two-cols-header
transition: fade
---

### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's summarize the key concepts of handling duplicate data.

::left::

**6. Recap of Key Concepts:**

* **Identifying Duplicates:** Using `duplicated()` to detect duplicate rows.
* **Removing Duplicates:** Using `drop_duplicates()` to remove duplicate rows.
* **Removing Duplicates Based on Specific Columns:** Using the `subset` parameter in `drop_duplicates()`.

* **Keeping Specific Duplicates:** Controlling which duplicates to keep with the `keep` parameter in `drop_duplicates()`.

::right::

* **Detecting Duplicates Using Hashing:** An efficient method for large datasets, with a caution for hash collisions.


**Key Takeaways:**

* Handling duplicate data is crucial for data integrity and accurate analysis.
* pandas provides powerful tools like `duplicated()` and `drop_duplicates()` for efficient duplicate management.
* Understanding the different options and parameters allows for flexible control over duplicate handling.


---
layout: two-cols-header
transition: fade
---

### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

1.  Create a DataFrame with a few duplicate rows and columns.
2.  Use `duplicated()` to identify the duplicate rows.
3.  Remove the duplicate rows using `drop_duplicates()`.
4.  Remove duplicates based on a specific column in the DataFrame.
5.  Use the `keep` parameter to keep the last duplicate occurrence.
6.  Implement duplicate detection using hashing for the created DataFrame.

::right::

**Tips:**

* Experiment with different datasets and duplicate scenarios.
* Pay attention to how the `subset` and `keep` parameters affect the results of `drop_duplicates()`.
* Explore the performance differences between `drop_duplicates()` and hashing for large DataFrames.

---
layout: two-cols-header
transition: fade
---
### 🧹 Session 21: Handling Duplicate Data in DataFrames 👯

**Identifying and Removing Duplicate Data for Clean Analysis**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we covered how to handle duplicate data in pandas DataFrames. We explored methods for identifying and removing duplicates, controlling which duplicates to keep, and even detecting duplicates using hashing.

::right::

**Next Steps:**

* Practice handling duplicates in various datasets.
* Explore advanced techniques for dealing with duplicates in complex data structures.
* Consider the implications of duplicate data on your specific data analysis tasks.

Keep practicing and refining your skills!