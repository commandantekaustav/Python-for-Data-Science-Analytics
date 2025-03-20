---
layout: two-cols-header
transition: fade
---

### 🐼 Session 12: DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

In this session, we'll explore how to apply custom functions to DataFrames using `apply()`, `map()`, and `applymap()`. These methods are essential for flexible data manipulation and transformation.

::left::

**Why Data Transformation?**

* Data transformation allows us to modify and reshape data to better suit our analysis needs.
* Custom functions enable us to perform complex operations that built-in pandas functions might not cover.
* These methods enhance data cleaning, feature engineering, and overall data preparation.

::right::

**Key Concepts:**

* **`apply()`:** Applies a function along an axis of the DataFrame.
* **`map()`:** Applies a function element-wise to a Series.
* **`applymap()`:** Applies a function element-wise to a DataFrame.
* **Custom Functions:** User-defined functions for specific data manipulations.

---
layout: two-cols-header
transition: fade
---

### 🐼 DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's start by understanding how `apply()` works with DataFrames.

::left::

**1. Using `apply()` with DataFrames:**

* `apply()` applies a function along an axis of the DataFrame (rows or columns).
* It can be used to perform operations on entire rows or columns.
* The axis parameter (0 for rows, 1 for columns) determines the direction of application.

::right::

**Example: Applying a Function to Columns**

```python
import pandas as pd

# Sample DataFrame
data = {
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50]
}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Apply a function to calculate the sum of each column
column_sums = df.apply(sum, axis=0)
print("\nColumn Sums:\n", column_sums)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Now, let's see how `apply()` works with rows.

::left::

**2. Applying a Function to Rows:**

* We can use `apply()` to perform operations on entire rows.
* By setting `axis=1`, the function is applied to each row.

::right::

**Example: Applying a Function to Rows**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50]
}
df = pd.DataFrame(data)

# Apply a function to calculate the sum of each row
row_sums = df.apply(sum, axis=1)
print("Row Sums:\n", row_sums)

# Add the row sums as a new column to the DataFrame
df['Row Sum'] = row_sums
print("\nDataFrame with Row Sums:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of applying the `sum()` function to the rows.

::left::

**Output & Explanation (Slide 3):**
```bash
Row Sums:
0    11
1    22
2    33
3    44
4    55
dtype: int64

DataFrame with Row Sums:
   A   B  Row Sum
0  1  10       11
1  2  20       22
2  3  30       33
3  4  40       44
4  5  50       55
```

::right::

**Explanation:**

* The `df.apply(sum, axis=1)` operation calculates the sum of each row in the DataFrame.
* The `axis=1` parameter specifies that the function should be applied along the rows.
* The result is a Series containing the sum of each row, which is then added as a new column to the DataFrame.

---
layout: two-cols-header
transition: fade
---

### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's explore how to use `apply()` with custom functions.

::left::

**3. Applying Custom Functions with `apply()`:**

* We can define custom functions and use them with `apply()` to perform specific data manipulations.
* This allows for greater flexibility and control over data transformations.


**Example: Applying a Custom Function**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50]
}
df = pd.DataFrame(data)
```
::right::

```python
# Custom function to calculate the difference between columns
def calculate_difference(row):
    return row['B'] - row['A']

# Apply the custom function to each row
differences = df.apply(calculate_difference, axis=1)
print("Differences (B - A):\n", differences)

# Add the differences as a new column to the DataFrame
df['Difference'] = differences
print("\nDataFrame with Differences:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of applying the custom `calculate_difference` function.

::left::

**Output & Explanation (Slide 4):**

```bash
Differences (B - A):
0     9
1    18
2    27
3    36
4    45
dtype: int64

DataFrame with Differences:
   A   B  Difference
0  1  10           9
1  2  20          18
2  3  30          27
3  4  40          36
4  5  50          45
```

::right::

**Explanation:**

* The `calculate_difference` function calculates the difference between the values in columns 'B' and 'A' for each row.
* The `df.apply(calculate_difference, axis=1)` operation applies this custom function to each row.
* The result is a Series containing the differences, which is then added as a new column to the DataFrame.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Now, let's move on to using `map()` with Series.

::left::

**4. Using `map()` with Series:**

* `map()` applies a function element-wise to a Series.
* It is used for performing transformations on individual elements of a Series.
* `map()` can also be used with dictionaries or Series for mapping values.

::right::

**Example: Applying a Function with `map()`**

```python
import pandas as pd

# Sample Series
series = pd.Series([1, 2, 3, 4, 5])
print("Original Series:\n", series)

# Apply a function to square each element
squared_series = series.map(lambda x: x**2)
print("\nSquared Series:\n", squared_series)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of applying the `map()` function to square each element.

::left::

**Output & Explanation (Slide 6):**
```bash

Original Series:
0    1
1    2
2    3
3    4
4    5
dtype: int64

Squared Series:
0     1
1     4
2     9
3    16
4    25
dtype: int64
```

::right::

**Explanation:**

* The `series.map(lambda x: x**2)` operation applies the lambda function `x**2` to each element of the Series.
* This function squares each element.
* The result is a new Series containing the squared values.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see an example of using `map()` with a dictionary for value mapping.

::left::

**5. Using `map()` with a Dictionary:**

* `map()` can use a dictionary to map values in a Series to new values.
* This is useful for replacing or recoding values based on a predefined mapping.

::right::

**Example: Mapping Values with a Dictionary**

```python
import pandas as pd

# Sample Series
series = pd.Series(['apple', 'banana', 'cherry', 'apple'])
print("Original Series:\n", series)

# Mapping dictionary
mapping = {'apple': 'red', 'banana': 'yellow', 'cherry': 'purple'}

# Map values using the dictionary
mapped_series = series.map(mapping)
print("\nMapped Series:\n", mapped_series)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of applying the `map()` function with a dictionary.

::left::

**Output & Explanation (Slide 8):**
```bash
Original Series:
0     apple
1    banana
2    cherry
3     apple
dtype: object

Mapped Series:
0       red
1    yellow
2    purple
3       red
dtype: object
```

::right::

**Explanation:**

* The `series.map(mapping)` operation uses the `mapping` dictionary to replace the values in the Series.
* Each value in the Series is replaced with the corresponding value from the dictionary.
* The result is a new Series with the mapped values.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Now, let's explore `applymap()` for element-wise transformations on DataFrames.

::left::

**6. Using `applymap()` with DataFrames:**

* `applymap()` applies a function element-wise to a DataFrame.
* It is used for performing transformations on each individual element of the DataFrame.
* `applymap()` works only on DataFrames and not Series.

::right::

**Example: Applying a Function with `applymap()`**

```python
import pandas as pd

# Sample DataFrame
data = {
    'A': [1, 2, 3],
    'B': [4, 5, 6]
}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Apply a function to double each element
doubled_df = df.applymap(lambda x: x * 2)
print("\nDoubled DataFrame:\n", doubled_df)
```

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of applying the `applymap()` function to double each element.

::left::

**Output & Explanation (Slide 10):**
```sh
Original DataFrame:
   A  B
0  1  4
1  2  5
2  3  6

Doubled DataFrame:
   A   B
0  2   8
1  4  10
2  6  12
```

::right::

**Explanation:**

* The `df.applymap(lambda x: x * 2)` operation applies the lambda function `x * 2` to each element of the DataFrame.
* This function doubles each element.
* The result is a new DataFrame with the doubled values.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's compare `apply()`, `map()`, and `applymap()` to understand their differences.

::left::

**7. Comparing `apply()`, `map()`, and `applymap()`:**

* `apply()`:
    * Applies a function along an axis of a DataFrame (rows or columns).
    * Works on both DataFrames and Series.
    * Can perform complex operations on entire rows or columns.
* `map()`:
    * Applies a function element-wise to a Series.
    * Works only on Series.
    * Used for element-wise transformations and value mapping.
* `applymap()`:
    * Applies a function element-wise to a DataFrame.
    * Works only on DataFrames.
    * Used for element-wise transformations on the entire DataFrame.

::right::

**When to Use Which:**

* Use `apply()` when you need to apply a function to rows or columns or perform complex operations.
* Use `map()` when you need to transform individual elements in a Series.
* Use `applymap()` when you need to transform individual elements in an entire DataFrame.

---
layout: two-cols-header
transition: fade
---

### DataFrame Operations - Data Transformation and Function Application 🛠️
::left::

**Applying Custom Functions for Data Manipulation**

Let's look at a practical example using a real-world dataset.


**8. Practical Example with a Dataset:**

* We will use a sample dataset to demonstrate the application of `apply()`, `map()`, and `applymap()`.
* We'll focus on data cleaning and feature engineering using custom functions.

::right::

**Example: Cleaning and Transforming Data**

```python
import pandas as pd

# Sample DataFrame (replace with your dataset)
import pandas as pd

# Sample DataFrame (replace with your dataset)
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': ['25', '30', '35'],
    'Salary': ['$50,000', '$60,000', '$70,000']
}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Clean 'Age' column
df['Age'] = df['Age'].astype(int)

# Clean and transform 'Salary' column
df['Salary'] = df['Salary'].str.replace('$', '').str.replace(',', '').astype(int)

print("\nCleaned DataFrame:\n", df)
```
---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's see the output of the data cleaning and transformation.

::left::

**Output & Explanation (Slide 13):**
```bash
Original DataFrame:
      Name   Age    Salary
0    Alice    25  $50,000
1      Bob    30  $60,000
2  Charlie    35  $70,000

Cleaned DataFrame:
      Name  Age  Salary
0    Alice   25   50000
1      Bob   30   60000
2  Charlie   35   70000
```

::right::

**Explanation:**

* The 'Age' column is converted from string to integer.
* The 'Salary' column is cleaned by removing the dollar sign and comma, and then converted to integer.
* The resulting DataFrame has clean and transformed data, ready for further analysis.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's summarize the key concepts of data transformation and function application.

::left::

**9. Recap of Key Concepts:**

* `apply()`: Applies a function along an axis of a DataFrame (rows or columns).
* `map()`: Applies a function element-wise to a Series.
* `applymap()`: Applies a function element-wise to a DataFrame.
* Custom functions allow for flexible and powerful data manipulation.

::right::

**Key Takeaways:**

* Choose the right method (`apply()`, `map()`, `applymap()`) based on your specific transformation needs.
* Custom functions enable you to perform complex operations beyond built-in pandas functions.
* Data transformation is crucial for data cleaning, feature engineering, and preparing data for analysis.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Let's do a short exercise to solidify your understanding.

::left::

**10. Exercise:**

Using a DataFrame of your choice, perform the following:

1.  Create a custom function to calculate the square root of a numerical column.
2.  Apply this function using `apply()` to create a new column with the square root values.
3.  Use `map()` to replace specific string values in a categorical column with new values.
4.  Use `applymap()` to convert all numerical values in the DataFrame to their absolute values.

::right::

**Tips:**

* Remember to load your dataset first.
* Experiment with different custom functions and data types.
* Try combining these methods with other pandas operations for more complex transformations.

---
layout: two-cols-header
transition: fade
---
### DataFrame Operations - Data Transformation and Function Application 🛠️

**Applying Custom Functions for Data Manipulation**

Congratulations! You've reached the end of this session.

::left::

**11. Conclusion:**

In this session, we explored how to apply custom functions to DataFrames using `apply()`, `map()`, and `applymap()`. We covered various techniques for data transformation and manipulation.

::right::

**Next Steps:**

* Practice with different datasets and custom functions.
* Explore advanced data transformation techniques (e.g., lambda functions, vectorization).
* Combine these methods with other pandas operations for more complex data manipulation.

Keep exploring and happy coding!

---

