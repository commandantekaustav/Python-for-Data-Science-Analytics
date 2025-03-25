---
layout: two-cols-header
transition: fade
---

### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

In this session, we'll focus on data validation and quality checks using pandas. Validating data is essential to ensure its accuracy, consistency, and reliability. We'll explore techniques to check data types, ranges, consistency, and handle invalid data effectively.

::left::

**Why Data Validation?**

* **Accuracy:** Validation helps ensure that the data is correct and free from errors.
* **Consistency:** Validation ensures that the data adheres to defined rules and formats.
* **Reliability:** Valid data leads to more trustworthy analysis and decision-making.

::right::

**Key Concepts:**

* **Data Type Validation:** Checking if data types are as expected.
* **Range Checks:** Verifying if values fall within acceptable ranges.
* **Consistency Checks:** Ensuring data is consistent across different columns or tables.
* **Handling Invalid Data:** Strategies for dealing with data that fails validation checks.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's start by understanding how to perform data type validation.

::left::

**1. Data Type Validation:**

* Data type validation involves checking if the data in a DataFrame column is of the expected type.
* You can use the `dtype` attribute of a pandas Series to check its data type.
* Common data types include `int64`, `float64`, `object` (for strings), `bool`, and `datetime64`.

::right::

**Example: Data Type Validation**

```python
import pandas as pd

# Sample DataFrame
data = {'col1': [1, 2, 3, 4, 5],
        'col2': ['a', 'b', 'c', 'd', 'e'],
        'col3':}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Check data types
print("\nData Types:\n", df.dtypes)

# Validate data type of 'col1'
if df['col1'].dtype == 'int64':
    print("\n'col1' is of type int64")
else:
    print("\n'col1' is not of type int64")
```

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's see the output of data type validation.

::left::

**Output & Explanation (Slide 2):**
```bash
Original DataFrame:
  col1 col2  col3
0     1    a   1.1
1     2    b   2.2
2     3    c   3.3
3     4    d   4.4
4     5    e   5.5

Data Types:
 col1      int64
col2     object
col3    float64
dtype: object

'col1' is of type int64
```

::right::

**Explanation:**

* `df.dtypes` displays the data type of each column in the DataFrame.
* `col1` is of type `int64` (integer), `col2` is of type `object` (string), and `col3` is of type `float64` (floating-point).
* The `if` condition checks if the data type of `col1` is `int64`, and since it is, the corresponding message is printed.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's explore how to perform range checks.

::left::

**2. Range Checks:**

* Range checks involve verifying that the values in a column fall within an acceptable range.
* This is important for ensuring data quality and identifying outliers or errors.
* You can use comparison operators (`<`, `>`, `<=`, `>=`) to perform range checks on numerical data.

::right::

**Example: Range Checks**

```python
import pandas as pd

# Sample DataFrame
data = {'col1': [10, 20, 30, 40, 50],
        'col2': [15, 25, 35, 45, 55]}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Check if values in 'col1' are between 20 and 40
valid_col1 = (df['col1'] >= 20) & (df['col1'] <= 40)
print("\nValid values in 'col1':\n", valid_col1)

# Check if values in 'col2' are greater than 30
valid_col2 = df['col2'] > 30
print("\nValid values in 'col2':\n", valid_col2)
```

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's see the output of range checks.

::left::

**Output & Explanation (Slide 4):**
```bash
Original DataFrame:
  col1  col2
0    10    15
1    20    25
2    30    35
3    40    45
4    50    55
Valid values in 'col1':
0    False
1     True
2     True
3     True
4    False
Valid values in 'col2':
0    False
1    False
2     True
3     True
4     True
```

::right::

**Explanation:**

* The first range check `(df['col1'] >= 20) & (df['col1'] <= 40)` checks if the values in `col1` are between 20 and 40 (inclusive). The result is a boolean Series indicating which values satisfy this condition.
* The second range check `df['col2'] > 30` checks if the values in `col2` are greater than 30. The result is again a boolean Series.
* These boolean Series can be used for filtering or further analysis of the data.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's explore how to perform consistency checks.

::left::

**3. Consistency Checks:**

* Consistency checks involve verifying that data is consistent across different columns or tables.
* This is important for identifying contradictions or logical errors in the data.
* Consistency checks often depend on the specific relationships between data fields.

::right::

**Example: Consistency Checks**

```python
import pandas as pd

# Sample DataFrame
data = {'age': [25, 30, 22, 40, 35],
        'city': ['New York', 'Los Angeles', 'New York', 'Chicago', 'Houston'],
        'age_group': ['Adult', 'Adult', 'Teenager', 'Adult', 'Adult']}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Check if 'age_group' is consistent with 'age'
consistent_age_group = ((df['age'] < 18) & (df['age_group'] == 'Teenager')) | \
                        ((df['age'] >= 18) & (df['age_group'] == 'Adult'))
print("\nAge Group Consistency:\n", consistent_age_group)

# Check for contradictions between city and state 
# (example - requires external data or predefined rules)
# This part would need additional data or rules 
# to check against, so it's conceptual here.
```

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's see the output of consistency checks.

::left::

**Output & Explanation (Slide 6):**
```bash
Original DataFrame:
    age         city age_group
0   25      New York     Adult
1   30   Los Angeles     Adult
2   22      New York   Teenager
3   40       Chicago     Adult
4   35       Houston     Adult

Age Group Consistency:
0     True
1     True
2    False
3     True
4     True
dtype: bool
```

::right::

**Explanation:**

* The consistency check `consistent_age_group` verifies if the `age_group` is consistent with the `age`.
* It checks if individuals younger than 18 are labeled as 'Teenager' and those 18 or older are labeled as 'Adult'.
* In this case, row 2 has an inconsistency because an individual aged 22 is labeled as 'Teenager', resulting in `False` for that row.
* The other rows are consistent with the age group criteria.
* The city and state consistency check is conceptual and would require an external data source or a predefined set of rules to validate against.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's explore strategies for handling invalid data.

::left::

**4. Handling Invalid Data:**

* Handling invalid data involves deciding what to do with data that fails validation checks.
* Common strategies include:
    * **Filtering:** Removing rows or columns with invalid data.
    * **Imputation:** Replacing invalid values with estimated or default values.
    * **Error Reporting:** Logging or reporting the occurrence of invalid data for further investigation.
    * **Transformation:** Correcting invalid values through transformation or conversion.

::right::

**Example: Handling Invalid Data**

```python
import pandas as pd
import numpy as np

# Sample DataFrame with potential invalid data
data = {'age': [25, -5, 30, 120, 35],
        'city': ['New York', 'Invalid City', 
        'Los Angeles', 'Chicago', 'Houston']}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Filter out invalid ages (age < 0 or age > 100)
valid_age_df = df[(df['age'] >= 0) & (df['age'] <= 100)]
print("\nDataFrame with valid ages:\n", valid_age_df)

# Replace invalid city names with 'Unknown'
df['city'] = df['city'].replace('Invalid City', 'Unknown')
print("\nDataFrame with corrected cities:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's see the output of handling invalid data.

::left::

**Output & Explanation (Slide 8):**
```bash
Original DataFrame:
    age          city
0   25      New York
1   -5  Invalid City
2   30   Los Angeles
3  120       Chicago
4   35       Houston

DataFrame with valid ages:
   age         city
0   25      New York
2   30   Los Angeles
4   35       Houston

DataFrame with corrected cities:
    age       city
0   25   New York
1   -5    Unknown
2   30  Los Angeles
3  120    Chicago
4   35    Houston
```

::right::

**Explanation:**

* The first part filters the DataFrame to keep only rows where the `age` is between 0 and 100 (inclusive). Rows with ages -5 and 120 are removed.
* The second part replaces the invalid city name "Invalid City" with "Unknown" in the `city` column using the `replace()` method.
* These examples demonstrate how to handle invalid data by either filtering it out or correcting it through replacement.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's summarize the key concepts of data validation and quality checks.

::left::

**5. Recap of Key Concepts:**

* **Data Type Validation:** Checking the data type of columns using `df.dtypes`.
* **Range Checks:** Verifying if values fall within acceptable ranges using comparison operators.
* **Consistency Checks:** Ensuring data consistency across columns or tables by defining logical conditions.
* **Handling Invalid Data:** Strategies like filtering, imputation, error reporting, and transformation to manage invalid data.

::right::

**Key Takeaways:**

* Data validation is crucial for ensuring data quality, accuracy, and reliability.
* pandas provides tools and techniques for performing various types of validation checks.
* Handling invalid data appropriately is essential for robust data analysis.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Let's do a short exercise to solidify your understanding.

::left::

**6. Exercise:**

1.  Create a DataFrame with columns of different data types (e.g., integer, float, string, boolean).
2.  Use `df.dtypes` to check the data types of each column.
3.  Perform range checks on numerical columns to ensure values fall within specified ranges.
4.  Implement consistency checks to verify relationships between different columns (e.g., if age is less than 18, the status should be "Minor").
5.  Handle invalid data by either filtering out rows with invalid values or replacing them with appropriate values.

::right::

**Tips:**

* Experiment with different validation checks and data types.
* Use boolean indexing to filter rows based on validation conditions.
* Practice different strategies for handling invalid data based on the context of your data.

---
layout: two-cols-header
transition: fade
---
### 🔍 Session 22: Data Validation and Quality Checks in pandas 🧐

**Ensuring Data Integrity and Reliability Through Validation**

Congratulations! You've reached the end of this session.

::left::

**7. Conclusion:**

In this session, we covered data validation and quality checks in pandas. We explored techniques for checking data types, ranges, consistency, and handling invalid data.

::right::

**Next Steps:**

* Practice implementing different validation checks on various datasets.
* Explore advanced validation techniques and tools for more complex data scenarios.
* Consider integrating data validation into your data processing pipelines for continuous data quality assurance.

Keep practicing and refining your skills!