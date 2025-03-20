---
theme: seriph
layout: two-cols-header
transition: fade
---

### Session 10: DataFrame Operations - Handling Missing Data (NaNs) ❓📊🐼

**Missing Data: A Real-World Data Challenge**

Missing data is extremely common in real-world datasets. It occurs when values are absent or unknown for some observations.

**Represented as:**

* `NaN` (Not a Number): Standard missing value representation in pandas (and NumPy).
* `None`: Python’s built-in null value (less common in pandas DataFrames).

**Why Handle Missing Data?**

* **Analysis Errors:** Missing data can lead to incorrect or biased analysis results.
* **Model Issues:** Machine learning models often cannot handle missing values directly.
* **Data Integrity:** Understanding and addressing missing data is crucial for data quality.

**Let’s learn how to identify and effectively handle missing data in pandas DataFrames!**

---
# theme: seriph
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Identifying Missing Data (Part 1) ❓📊🐼

**Identifying Missing Data**

pandas provides methods to easily identify missing values within DataFrames.

**1. `isnull()` Method:**

* Detects missing values (NaN or None) and returns a DataFrame of the same shape filled with Boolean values:
    * `True` indicates a missing value.
    * `False` indicates a non-missing value.

::left::

**Syntax:**
```python
df.isnull()
```

* `df.isnull()`: Applies the `isnull()` method to the DataFrame `df`.
* Returns a DataFrame where each element is `True`<br> if it's a missing value, and `False` otherwise.

::right::

**Example: Using `isnull()` to identify missing values**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Identify missing values using isnull()
print("\nMissing values (using isnull()):\n", df.isnull())
```

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Identifying Missing Data (Part 2) - Output & Explanation ❓📊🐼

**Identifying Missing Data: Output and Explanation**

Here's the output from the `isnull()` code (Slide 10-2-b):

::left::

**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

Missing values (using isnull()):
A      B
0  False  False
1  False   True
2   True  False
3  False  False
```

::right::

**Explanation:**

* The `isnull()` method returns a DataFrame with the same dimensions as the original DataFrame.
* Each element in the resulting DataFrame is a Boolean value indicating whether the corresponding element in the original DataFrame is missing (`True`) or not missing (`False`).
* For example, `df.isnull().loc[1, 'B']` is `True` because the value in row 1, column B is `None` (a missing value).

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Identifying Missing Data (Part 3) ❓📊🐼

**Identifying Missing Data**

**2. `notnull()` Method:**

* The `notnull()` method is the *opposite* of `isnull()`\.
* It also returns a DataFrame of the same shape filled with Boolean values:
    * `True` indicates a non-missing value.
    * `False` indicates a missing value.

::left::

**Syntax:**
```py
df.notnull()
```

* `df.notnull()`: Applies the `notnull()` method to the DataFrame `df`.
* Returns a DataFrame where each element is `True` if it's a non-missing value, and `False` otherwise.

::right::

**Example: Using `notnull()` to identify non-missing values**

```python
import pandas as pd
import numpy as np
# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Identify non-missing values using notnull()
print("\nNon-missing values (using notnull()):\n", df.notnull())
```

---
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Identifying Missing Data (Part 4) - Output & Explanation ❓📊🐼

**Identifying Missing Data: Output and Explanation**

::left::

<!-- Here's the output from the `notnull()` code (Slide 10-2-d): -->


**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

Non-missing values (using notnull()):
A      B
0   True   True
1   True  False
2  False   True
3   True   True
```

::right::

**Explanation:**

* The `notnull()` method also returns a DataFrame with the same dimensions as the original DataFrame.
* Each element in the resulting DataFrame is a Boolean value indicating whether the corresponding element in the original DataFrame is non-missing (`True`) or missing (`False`).
* For example, `df.notnull().loc[1, 'B']` is `False` because the value in row 1, column B is `None` (a missing value).
* `notnull()` is useful when you want to filter or select non-missing values directly.

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Handling Missing Data (Part 1) ❓📊🐼

**Handling Missing Data**

pandas provides several methods to handle missing data effectively. The two main approaches are:

1.  **Dropping Missing Values:**
    * Remove rows or columns that contain missing values.
    * Use the `dropna()` method.
2.  **Filling Missing Values (Imputation):**
    * Replace missing values with estimated or calculated values.
    * Use the `fillna()` method.

**Let's start with Dropping Missing Values using the `dropna()` method!**

---
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Dropping Missing Values (Part 1) ❓📊🐼

<!-- **Dropping Missing Values** -->

The `dropna()` method removes rows or columns that contain missing values (NaN or None).

::left:: 

**Key Parameters for `dropna()`:**

* **`axis`:**
    * `axis=0` or `axis='index'` (default): Drop rows that contain missing values.
    * `axis=1` or `axis='columns'`: Drop columns that contain missing values.
* **`how`:**
    * `how='any'` (default): Drop the row/column if *any* missing values are present.
    * `how='all'`: Drop the row/col if *all* values are missing.
* **`inplace=False` (default):** Returns a *new* DataFrame with rows/columns dropped. `inplace=True` modifies the *original* DataFrame.

::right::

**Syntax:**
```py
df.dropna(axis=0, how='any', inplace=False)
```



**Example: Dropping rows with any missing values**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Drop rows with any missing values
df_dropped_rows = df.dropna()  # Default: axis=0, how='any'
print("\nDataFrame after dropping rows with any NaN:\n"
                , df_dropped_rows)
```

---
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Dropping Missing Values (Part 2) - O/p & Explanation ❓📊🐼


**Dropping Missing Values: O/p and Explanation**

Here's the output from the `dropna()` code for dropping rows (Slide 10-3-b):

::left::


**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

DataFrame after dropping rows with any NaN:
A    B
0  1.0  5.0
3  4.0  8.0
```

::right::

**Explanation:**

* `df.dropna()` (or `df.dropna(axis=0, how='any')`) removes any row that contains at least one missing value.
* Rows 1 and 2 are removed because they contain missing values in columns 'B' and 'A', respectively.
* The original DataFrame `df` is not modified because `inplace=False` is the default for `dropna()`\.

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Dropping Missing Values (Part 3) ❓📊🐼

**Dropping Missing Values**

**Example: Dropping columns with any missing values**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Drop columns with any missing values
df_dropped_cols = df.dropna(axis=1)  # axis=1 or axis='columns'
print("\nDataFrame after dropping columns with any NaN:\n", df_dropped_cols)
```

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Dropping Missing Values (Part 4) - Output & Explanation ❓📊🐼

**Dropping Missing Values: Output and Explanation**

Here's the output from the `dropna()` code for dropping columns (Slide 10-3-d):

::left::

**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

DataFrame after dropping columns with any NaN:
Empty DataFrame
Columns:
Index: [0, 1, 2, 3]
```

::right::

**Explanation:**

* `df.dropna(axis=1)` (or `df.dropna(axis='columns')`) removes any column that contains at least one missing value.
* In this case, both columns 'A' and 'B' contain missing values, so both columns are dropped.
* The resulting DataFrame is empty because all columns were dropped.
* The original DataFrame `df` is not modified.

---
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Filling Missing Values (Part 1) ❓📊🐼

**Filling Missing Values (Imputation)**

The `fillna()` method fills missing values (NaN or None) with specified values.
::left::
**Key Parameters for `fillna()`:**

* **`value`:** The value to use to fill missing values. It can be a scalar value, a Series, or a dictionary.
* **`method`:** The method to use for filling missing values.
    * `method='ffill'` or `method='pad'`: Fill missing values with the *previous* valid value (forward fill).
    * `method='bfill'` or `method='backfill'`: Fill missing values with the *next* valid value (backward fill).
* **`inplace=False` (default):** Returns a *new* DataFrame with missing values filled. `inplace=True` modifies the *original* DataFrame.

::right::

**Syntax:**
```python
df.fillna(value=0, method=None, inplace=False)
```

**Example: Filling missing values with a constant value**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Fill missing values with 0
df_filled_zero = df.fillna(value=0)
print("\nDataFrame after filling NaN with 0:\n", df_filled_zero)
```

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Filling Missing Values (Part 2) - Output & Explanation ❓📊🐼

**Filling Missing Values: Output and Explanation**

Here's the output from the `fillna()` code for filling with a constant value (Slide 10-4-b):

::left::

**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

DataFrame after filling NaN with 0:
A    B
0  1.0  5.0
1  2.0  0.0
2  0.0  7.0
3  4.0  8.0
```

::right::

**Explanation:**

* `df.fillna(value=0)` replaces all missing values (NaN and None) in the DataFrame with the value `0`.
* The missing value in `df.loc[1, 'B']` (originally `None`) is replaced with `0`.
* The missing value in `df.loc[2, 'A']` (originally `NaN`) is also replaced with `0`.
* The original DataFrame `df` is not modified.

---
layout: two-cols-header
transition: fade
---
### Handling Missing Data - Filling Missing Values (Part 3) ❓📊🐼

**Filling Missing Values (Imputation)**

**Example: Filling missing values with the mean of each column**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with missing values
data = {'A': [1, 2, np.nan, 4], 'B': [5, None, 7, 8]}
df = pd.DataFrame(data)

print("Original DataFrame:\n", df)

# Fill missing values with the mean of each column
df_filled_mean = df.fillna(df.mean())
print("\nDataFrame after filling NaN with column means:\n", df_filled_mean)
```

---
layout: two-cols-header
transition: fade
---

### Handling Missing Data - Filling Missing Values (Part 4) - Output & Explanation ❓📊🐼

**Filling Missing Values: Output and Explanation**

Here's the output from the `fillna()` code for filling with column means (Slide 10-4-d):

::left::

**Output:**
```sh
Original DataFrame:
A    B
0  1.0  5.0
1  2.0  NaN
2  NaN  7.0
3  4.0  8.0

DataFrame after filling NaN with column means:
A    B
0  1.0  5.0
1  2.0  6.666667
2  2.333333  7.0
3  4.0  8.0
```

::right::

**Explanation:**

* `df.fillna(df.mean())` fills the missing values with the mean of each column.
* The mean of column 'A' is calculated as (1 + 2 + 4) / 3 = 2.333333, and the missing value in `df.loc[2, 'A']` is replaced with

---
layout: two-cols-header
transition: fade
---

### 🐼 Missing Data: Filling Values - Forward & Backward Fill ➡️⬅️

**Filling Missing Values (Imputation) - Advanced Methods**

Besides filling with a constant value or the mean, pandas offers more sophisticated ways to impute missing data.

::left:: 

**1. Forward Fill (`ffill`):**

* Fills missing values with the *previous* valid value in the same column.
* Useful when data has a temporal or sequential nature.

::right::

**Syntax:**

```python
df.fillna(method='ffill')
```

**Example: Forward Fill**
```py
import pandas as pd
import numpy as np

# Sample DataFrame
data = {'A': [1, np.nan, 3, np.nan, 5]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Forward fill
df_ffill = df.fillna(method='ffill')
print("\nDataFrame after Forward Fill:\n", df_ffill)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Filling Values - Forward & Backward Fill ➡️⬅️

**Filling Missing Values (Imputation) - Advanced Methods**

Building on `ffill`, let's explore another useful imputation technique.

::left::

**2. Backward Fill (`bfill`):**

* Fills missing values with the *next* valid value in the same column.
* Also useful for time-series data, but fills in the opposite direction of `ffill`.

::right::

**Syntax:**

```python
df.fillna(method='bfill')
```

**Example: Backward Fill**

```python
import pandas as pd
import numpy as np

# Sample DataFrame
data = {'A': [1, np.nan, 3, np.nan, 5]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Backward fill
df_bfill = df.fillna(method='bfill')
print("\nDataFrame after Backward Fill:\n", df_bfill)
```
---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Imputation Methods - Mean, Median, Mode 📊

**Filling Missing Values (Imputation) - Statistical Measures**

Beyond forward and backward fill, we can use statistical measures for imputation.

::left::

**1. Mean Imputation:**

* Replaces missing values with the *mean* of the column.
* Suitable for numerical data with a relatively symmetrical distribution.
* Can be sensitive to outliers.

::right::

**Example: Mean Imputation**

```python
import pandas as pd
import numpy as np

# Sample DataFrame
data = {'A': [1, 2, np.nan, 4, 5]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Mean imputation
df_mean = df.fillna(df['A'].mean())
print("\nDataFrame after Mean Imputation:\n", df_mean)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Imputation Methods - Mean, Median, Mode 📊

**Filling Missing Values (Imputation) - Statistical Measures**

Completing our look at common statistical imputation methods...

::left::

**3. Mode Imputation:**

* Replaces missing values with the *mode* (most frequent value) of the column.
* Suitable for categorical data.
* Can also be used for numerical data in some cases.

::right::

**Example: Mode Imputation**

```python
import pandas as pd
import numpy as np

# Sample DataFrame
data = {'A': [1, 2, 2, np.nan, 3]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Mode imputation
df_mode = df.fillna(df['A'].mode()[0])
print("\nDataFrame after Mode Imputation:\n", df_mode)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Imputation - Practical Considerations 🧐

**Filling Missing Values (Imputation) - Making Informed Choices**

Now, let's consider some practical aspects of choosing an imputation method.

::left::

**Practical Considerations:**

* **Data Type:**
    * Numerical data: Mean, median.
    * Categorical data: Mode.
* **Data Distribution:**
    * Symmetrical: Mean.
    * Skewed: Median.
* **Outliers:**
    * Sensitive: Mean.
    * Robust: Median.

::right::
* **Context:**
    * Temporal: Forward/Backward fill.
    * No clear pattern: Statistical measures.

**Example: Choosing Imputation**

```python
import pandas as pd
import numpy as np

# Sample DataFrame (mixed types)
data = {'A': [1, 2, np.nan, 4],
        'B': ['cat1', 'cat2', np.nan, 'cat1']}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Impute 'A' with median, 'B' with mode
df['A'] = df['A'].fillna(df['A'].median())
df['B'] = df['B'].fillna(df['B'].mode()[0])
print("\nDataFrame after Imputation:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Practice - Imputation Solutions & Insights 💡

**Hands-on Exercises: Solutions and Key Takeaways**

Let's review the exercises and discuss some important insights.

::left::

**Exercise 1: Mean vs. Median - Solutions & Insights**

```python
# Exercise 1 Solution:
import pandas as pd
import numpy as np

data_ex1 = {'A': [10, 12, 15, np.nan, 20, 50]}
df_ex1 = pd.DataFrame(data_ex1)

mean_imputed = df_ex1['A'].fillna(df_ex1['A'].mean())
median_imputed = df_ex1['A'].fillna(df_ex1['A'].median())

print("Mean Imputed:\n", mean_imputed)
print("\nMedian Imputed:\n", median_imputed)
```

- **Insight:** The median imputation is less affected by the outlier (50) compared to the mean imputation.

::right::

**Exercise 2: Forward/Backward Fill - Solutions & Insights**

```py
# Exercise 2 Solution:
import pandas as pd
import numpy as np

data_ex2 = {'B': [100, np.nan, 102, np.nan, 105]}
df_ex2 = pd.DataFrame(data_ex2)

ffill_imputed = df_ex2['B'].fillna(method='ffill')
bfill_imputed = df_ex2['B'].fillna(method='bfill')

print("Forward Fill Imputed:\n", ffill_imputed)
print("\nBackward Fill Imputed:\n", bfill_imputed)
```

- **Insight:** Forward fill uses the previous valid value, while backward fill uses the next valid value. The choice depends on the context of the data and whether you want to propagate past or future values.

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Advanced Imputation - When to Go Beyond? 🚀

::left::
**Filling Missing Values (Imputation) - Advanced Considerations**

Sometimes, simple imputation methods might not be sufficient. So, when and why you might need advanced techniques?



**When to Consider Advanced Imputation:**

* **Complex Patterns:** When missing data has intricate dependencies on other variables.
* **Large Datasets:** When the impact of simple imputation on the overall data distribution is significant.
* **Improved Accuracy:** When you need to minimize bias and maximize the accuracy of your analysis or models.


**Advanced Imputation Techniques (Examples):**

* **K-Nearest Neighbors (KNN) Imputation:** Imputes missing values based on the values of similar data points.
::right::
* **Multiple Imputation:** Creates multiple complete datasets by imputing missing values multiple times, capturing the uncertainty associated with imputation.

**Example: Limitations of Simple Imputation**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with a potential dependency
data = {'A': [1, 2, np.nan, 4, 5],
        'B': [10, 20, 30, np.nan, 50]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Simple mean imputation on 'B' might not be ideal
df['B_mean_imputed'] = df['B'].fillna(df['B'].mean())
print("\nDataFrame after Mean Imputation on B:\n", df)
```

- **Note:** In this example, there might be a relationship between 'A' and 'B'. Simple mean imputation on 'B' ignores this potential dependency.

---
layout: two-cols-header
transition: fade
---
### 🐼 Missing Data: Session Summary 📝

::left::

**Handling Missing Data: Key Takeaways**

Let's summarize the key points we've covered in this session.

**Key Takeaways:**

* Missing data is a common problem in real-world datasets.
* pandas provides methods to identify missing data: `isnull()` and `notnull()`.
* Missing data can be handled by:
    * Dropping values with `dropna()`
    * Filling (imputing) values with `fillna()`
* Imputation methods include:
    * Constant value
    * Mean, median, mode
    * Forward fill (`ffill`) and backward fill (`bfill`)
* The choice of imputation method depends on the data type, distribution, outliers, and context.
::right::

* Advanced imputation techniques may be necessary for complex cases.


**This Session's Highlights:**

* **Understanding the importance of handling missing data.**
* **Learning how to identify missing values in pandas DataFrames.**
* **Exploring various techniques for handling missing data, including dropping and imputation.**
* **Gaining insights into choosing the appropriate imputation method for different scenarios.**

**Next Steps:**

This slide summarizes the key takeaways from the session. It's a good way to reinforce the important concepts we've covered.

<!-- I'm here to answer any remaining questions you have about handling missing data. -->

