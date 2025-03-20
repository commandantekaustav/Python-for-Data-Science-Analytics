---
layout: two-cols-header
transition: fade
---
### 🐼 Session 13: Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

In this session, we'll explore how to work with different data types in pandas DataFrames, including numeric, string, and categorical data. We'll also cover data type conversion and manipulation, along with a brief introduction to Regular Expressions (Regex).

::left::

**Why Data Types Matter?**

* Data types determine how data is stored and processed.
* Correct data types are crucial for accurate analysis and efficient operations.
* Understanding data types allows for effective data cleaning and preparation.

::right::

**Key Concepts:**

* **Data Types:** Numeric (int, float), String (object), Categorical, Datetime, etc.
* **Type Conversion:** Using `astype()` to change data types.
* **String Manipulation:** Using `.str` methods for string operations.
* **Categorical Data:** Using `Categorical` type for memory efficiency and performance.
* **Regular Expressions (Regex):** Pattern matching for text processing.

---
layout: two-cols-header
transition: fade
---
### 🐼 Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's start by understanding the different data types in pandas.

::left::

**1. Understanding Data Types:**

* Pandas supports various data types, including:
    * **Numeric:** `int`, `float`
    * **String:** `object` (or `string` in newer pandas versions)
    * **Categorical:** `category`
    * **Datetime:** `datetime64`
    * **Boolean:** `bool`
* You can check the data type of a column using `df.dtypes`.

::right::

**Example: Checking Data Types**

```python
import pandas as pd

# Sample DataFrame
data = {
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Score': [85.5, 90.0, 78.5],
    'Passed': [True, True, False]
}
df = pd.DataFrame(data)
print("DataFrame:\n", df)
print("\nData Types:\n", df.dtypes)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see the output of checking the data types.

::left::

**Output & Explanation (Slide 2):**
```bash
DataFrame:
   ID     Name  Score  Passed
0   1    Alice   85.5    True
1   2      Bob   90.0    True
2   3  Charlie   78.5   False

Data Types:
ID          int64
Name       object
Score     float64
Passed     boolean
dtype: object
```

::right::

**Explanation:**

* The `df.dtypes` attribute returns a Series with the data type of each column.
* 'ID' is an integer (`int64`), 'Name' is a string (`object`), 'Score' is a float (`float64`), and 'Passed' is a boolean (`boolean`).
* Understanding the data types is crucial for performing appropriate operations.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 13: Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's explore how to convert data types using `astype()`.

::left::

**2. Data Type Conversion with `astype()`:**

* The `astype()` method allows you to convert a column to a different data type.
* This is useful for changing data types to perform specific operations or to save memory.

::right::

**Example: Converting Data Types**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'ID': [1, 2, 3],
    'Score': [85.5, 90.0, 78.5]
}
df = pd.DataFrame(data)
print("Original Data Types:\n", df.dtypes)

# Convert 'ID' to float and 'Score' to integer
df['ID'] = df['ID'].astype(float)
df['Score'] = df['Score'].astype(int)
print("\nConverted DataFrame:\n", df)
print("\nConverted Data Types:\n", df.dtypes)
```

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see the output of converting the data types.

::left::

**Output & Explanation (Slide 4):**
```
Original Data Types:
ID       int64
Score    float64
dtype: object

Converted DataFrame:
    ID  Score
0  1.0     85
1  2.0     90
2  3.0     78

Converted Data Types:
ID       float64
Score      int64
dtype: object
```

::right::

**Explanation:**

* The 'ID' column is converted from integer to float.
* The 'Score' column is converted from float to integer (truncating the decimal part).
* The `df.dtypes` attribute shows the updated data types after conversion.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's explore how to manipulate string data using `.str` methods.

::left::

**3. String Manipulation with `.str` Methods:**

* Pandas provides `.str` methods for performing string operations on Series.
* These methods allow you to perform tasks such as:
    * `str.lower()`: Convert to lowercase.
    * `str.upper()`: Convert to uppercase.
    * `str.strip()`: Remove leading/trailing whitespace.
    * `str.replace()`: Replace substrings.
    * `str.contains()`: Check for substring presence.

::right::

**Example: String Manipulation**

```python
import pandas as pd

# Sample Series
names = pd.Series(['  Alice ', 'BOB', 'charlie  '])
print("Original Series:\n", names)

# Convert to lowercase and remove whitespace
cleaned_names = names.str.lower().str.strip()
print("\nCleaned Series:\n", cleaned_names)
```

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see the output of the string manipulation.

::left::

**Output & Explanation (Slide 6):**
```bash
Original Series:
0      Alice 
1          BOB
2    charlie  
dtype: object

Cleaned Series:
0      alice
1        bob
2    charlie
dtype: object
```

::right::

**Explanation:**

* The `names.str.lower()` method converts all names to lowercase.
* The `names.str.strip()` method removes leading and trailing whitespace from each name.
* The result is a cleaned Series with consistent formatting.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's explore categorical data and its benefits.

::left::

**4. Categorical Data:**

* Categorical data represents variables with a limited number of possible values.
* Using the `category` data type can save memory and improve performance.
* You can convert a column to categorical using `astype('category')`.

::right::

**Example: Categorical Data**

```python
import pandas as pd

# Sample Series
colors = pd.Series(['red', 'blue', 'green', 'red', 'blue'])
print("Original Series:\n", colors)

# Convert to categorical
categorical_colors = colors.astype('category')
print("\nCategorical Series:\n", categorical_colors)
print("\nCategories:\n", categorical_colors.cat.categories)
```

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see the output of converting the Series to categorical.

::left::

**Output & Explanation (Slide 8):**
```bash
Original Series:
0      red
1     blue
2    green
3      red
4     blue
dtype: object

Categorical Series:
0      red
1     blue
2    green
3      red
4     blue
dtype: category
Categories (3, object): ['blue', 'green', 'red']

Categories:
Index(['blue', 'green', 'red'], dtype='object')
```

::right::

**Explanation:**

* The `colors.astype('category')` operation converts the Series to a categorical data type.
* The output shows the categorical Series and the unique categories.
* Using categorical data can save memory, especially for columns with many repeated values.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's introduce Regular Expressions (Regex) and its basic usage.

::left::

**5. Introduction to Regular Expressions (Regex):**

* Regex is a powerful tool for pattern matching and text manipulation.
* It allows you to search, replace, and extract text based on specific patterns.
* Pandas integrates Regex through `.str` methods, enabling advanced string operations.

::right::

**Basic Regex Patterns:**

* `.` (dot): Matches any single character except a newline.
* `*` (asterisk): Matches zero or more occurrences of the preceding character.
* `+` (plus): Matches one or more occurrences of the preceding character.
* `?` (question mark): Matches zero or one occurrence of the preceding character.
* `[]` (square brackets): Matches any character within the brackets.
* `()` (parentheses): Groups characters or patterns.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see a practical example of using Regex with pandas.

::left::

**6. Using Regex with Pandas `.str` Methods:**

* Pandas `.str` methods can use Regex patterns for advanced string operations.
* This allows for powerful text processing and data cleaning.

::right::

**Example: Using Regex with `str.extract()`**

```python
import pandas as pd

# Sample Series
text = pd.Series(['apple 123', 'banana 456', 'cherry 789'])
print("Original Series:\n", text)

# Extract numbers using Regex
numbers = text.str.extract(r'(\d+)')
print("\nExtracted Numbers:\n", numbers)
```

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's see the output of extracting numbers using Regex.

::left::

**Output & Explanation (Slide 11):**
```bash
Original Series:
0    apple 123
1   banana 456
2   cherry 789
dtype: object

Extracted Numbers:
     0
0  123
1  456
2  789
```

::right::

**Explanation:**

* The `text.str.extract(r'(\d+)')` operation uses the Regex pattern `(\d+)` to extract numbers from the Series.
* `\d+` matches one or more digits.
* The parentheses `()` create a capturing group, which extracts the matched numbers.
* The result is a DataFrame containing the extracted numbers.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's summarize the key concepts of data type manipulation and Regex.

::left::

**7. Recap of Key Concepts:**

* **Data Types:** Understanding and checking data types using `df.dtypes`.
* **Type Conversion:** Using `astype()` to change data types.
* **String Manipulation:** Using `.str` methods for string operations.
* **Categorical Data:** Using `category` type for memory efficiency.
* **Regex:** Powerful pattern matching for text processing with `.str` methods.

::right::

**Key Takeaways:**

* Choose the right data type for efficient data storage and analysis.
* Use `astype()` to convert data types as needed.
* Leverage `.str` methods for string manipulation and cleaning.
* Use categorical data for memory efficiency and performance gains.
* Regex provides advanced text processing capabilities within pandas.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Let's do a short exercise to solidify your understanding.

::left::

**8. Exercise:**

Using a DataFrame of your choice, perform the following:

1.  Check the data types of each column using `df.dtypes`.
2.  Convert a numeric column to a different data type (e.g., `int` to `float`).
3.  Clean a string column by removing leading/trailing whitespace and converting to lowercase.
4.  Convert a column with repeated values to categorical data.
5.  Use Regex to extract specific patterns from a string column (e.g., phone numbers, email addresses).

::right::

**Tips:**

* Remember to load your dataset first.
* Experiment with different data types and string manipulation techniques.
* Use online Regex testers to help you create and test Regex patterns.

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

**Data Type Conversion & Manipulation**

Congratulations! You've reached the end of this session.

::left::

**9. Conclusion:**

In this session, we explored how to work with different data types in pandas DataFrames, including numeric, string, and categorical data. We also covered data type conversion, string manipulation, and a brief introduction to Regular Expressions (Regex).

::right::

**Next Steps:**

* Practice with different datasets and data types.
* Explore advanced Regex patterns and string manipulation techniques.
* Combine data type manipulation with other pandas operations for more complex data cleaning and transformation.

Keep exploring and happy coding!

---
layout: two-cols-header
transition: fade
---
### Working with Different Data Types in DataFrames 📊

::left::

**Data Type Conversion & Manipulation**

Here's a quick cheatsheet to summarize the key concepts:


**Data Type Quick Reference:**

* **`df.dtypes`**: Check data types.
* **`df['col'].astype(dtype)`**: Convert column to `dtype`.
    * `int`, `float`, `str`, `category`, `bool`, `datetime64`.
* **`.str` Methods:**
    * `lower()`, `upper()`, `strip()`, `replace()`, `contains()`, `extract()`.
* **Categorical:**
    * `df['col'].astype('category')`.
    * `df['col'].cat.categories`.

::right::

**Regex Basics:**

* `.` : Any single character.
* `*` : Zero or more occurrences.
* `+` : One or more occurrences.
* `?` : Zero or one occurrence.
* `[abc]` : Any character in the set.
* `[a-z]` : Any character in the range.
* `\d` : Digit.
* `\w` : Word character.
* `\s` : Whitespace.
* `()` : Grouping.
* `|` : Or.
* `^` : Start of string.
* `$` : End of string.