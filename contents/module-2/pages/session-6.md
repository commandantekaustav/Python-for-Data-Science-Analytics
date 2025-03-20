---
theme: seriph
transition: fade
---

### Session 6: Introduction to pandas and Series 🐼📊

**Welcome to Session 6: Introduction to pandas!**

In this session, we will begin our exploration of **pandas**, a *must-know* library for data analysis and manipulation in Python.

We'll start with **pandas Series**, the fundamental building block of pandas.

**Key Topics in Session 6:**

*   **What is pandas?**  Why pandas is essential for data science and analysis.
*   **Introducing pandas Series:** 1-dimensional labeled arrays.
*   **Creating pandas Series:** From lists, NumPy arrays, dictionaries, and scalars.
*   **Understanding Series Index:** Labels and accessing data using the index.

**pandas is a game-changer for working with structured data! Let's dive in and discover pandas Series!**

---

### What is pandas? - Introduction to pandas ❓🐼

**pandas: Your Powerful Data Analysis Tool in Python**

**pandas** is a Python library specifically designed for **efficient data manipulation and analysis**. It's built upon NumPy and is *essential* for data scientists and analysts.

**Why is pandas so important?**

*   **Easy Data Manipulation:** Provides intuitive data structures (like DataFrames) to handle and clean messy, real-world data.
*   **Powerful Data Analysis:** Offers tools for data filtering, cleaning, transformation, aggregation, and visualization.
*   **Industry Standard:**  The *de facto* standard library for data analysis in Python. Used extensively in industry and academia.
*   **Built on NumPy:** Leverages NumPy's speed and efficiency for numerical operations.

**pandas makes working with data in Python *easy* and *powerful*! Let's explore further!**

---

### Introducing pandas Series - What is a Series? 📊🐼

**pandas Series: The 1-Dimensional Labeled Array**

A **pandas Series** is a fundamental data structure in pandas.  Think of it as a **1-dimensional labeled array**.

**Key Characteristics of a Series:**

*   **1-Dimensional:** Like a single column of data.
*   **Labeled Index:**  Each element has a *label* (index), not just a numerical position.
*   **Homogeneous Data Type:**  Typically holds data of the same type (like a NumPy array).
*   **Built on NumPy:**  Internally uses NumPy arrays for efficiency.

**Think of a Series as an enhanced NumPy array with *meaningful labels* for each data point!**

**Let's see how to create pandas Series!**

---

### Creating pandas Series - Different Ways to Create 🏗️🐼

**Creating pandas Series: Multiple Options**

pandas provides flexible ways to create Series from various Python data structures:

**Common Ways to Create a Series:**

1.  **From a Python List:**  Simplest way, index is automatically created (numeric).
2.  **From a NumPy Array:**  Leverages existing NumPy arrays.
3.  **From a Python Dictionary:** Keys become the index labels, values become Series data.
4.  **From a Scalar Value:**  Create a Series with a single value, repeated across an index.

**Let's explore each of these methods with code examples! We'll start with creating Series from Python Lists.**

---

### Creating pandas Series - From Python Lists 📝🐼

**Creating Series from Python Lists**

The simplest way to create a pandas Series is from a Python list.  pandas automatically creates a default **numeric index** (0, 1, 2, ...).

**Example: Creating a Series from a list of colors**

```python
import pandas as pd

color_list = ['Red', 'Green', 'Blue']

# Create a Series from the list
color_series = pd.Series(color_list)

print("Pandas Series from List:\n", color_series)
# Pandas Series from List:
# 0      Red
# 1    Green
# 2     Blue
# dtype: object # Data type is 'object' (string)
```

**Notice the automatic numeric index (0, 1, 2) created by pandas.**
---

### Creating pandas Series - From NumPy Arrays 🔢🐼

**Creating Series from NumPy Arrays**

You can easily create a pandas Series from an existing NumPy array.  The index is again automatically generated as numeric by default.

**Example: Creating a Series from a NumPy array**

```python
import pandas as pd
import numpy as np
numpy_array = np.array([10, 20, 30, 40])

# Create a Series from the NumPy array
numpy_series = pd.Series(numpy_array)

print("Pandas Series from NumPy Array:\n", numpy_series)
# Pandas Series from NumPy Array:
# 0    10
# 1    20
# 2    30
# 3    40
# dtype: int64 # Data type is inferred from NumPy array
```

**Creating a Series from a NumPy array is straightforward and efficient!**
---

### Creating pandas Series - From Python Dictionaries 🔡🐼

**Creating Series from Python Dictionaries**

When you create a Series from a Python dictionary, the **dictionary keys become the *index labels*** of the Series, and the **dictionary values become the Series *data values***.

**Example: Creating a Series from a dictionary of population data**

```python
import pandas as pd
population_dict = {'USA': 330, 'China': 1441, 'India': 1380, 'Brazil': 212} # Millions

# Create a Series from the dictionary
population_series = pd.Series(population_dict)

print("Pandas Series from Dictionary:\n", population_series)
# Output:
# Pandas Series from Dictionary:
# USA       330
# China    1441
# India    1380
# Brazil    212
# dtype: int64 # Data type is integer
```

**Dictionary keys are now the labeled index of the Series - very powerful!**
---

### Creating pandas Series - From Scalar Values 🔢🐼

**Creating Series from Scalar Values**

You can create a Series from a single scalar value.  You must also specify an *index* so pandas knows how many times to repeat the scalar value.

**Example: Creating a Series from a scalar value (price), with a list of index labels**

```python
import pandas as pd
price = 9.99
index_labels = ['Item A', 'Item B', 'Item C']

# Create a Series from the scalar value, using the specified index
price_series = pd.Series(price, index=index_labels)

print("Pandas Series from Scalar Value:\n", price_series)
# Pandas Series from Scalar Value:
# Item A    9.99
# Item B    9.99
# Item C    9.99
# dtype: float64 # Data type is float
```

**Scalar values are repeated across all index labels when creating a Series.**
---

### Creating pandas Series - Summary ✅🐼

**Summary: Ways to Create pandas Series**

You can create pandas Series in several ways:

*   **From Python List:** `pd.Series([list_data])` - Automatic numeric index.
*   **From NumPy Array:** `pd.Series(numpy_array)` - Automatic numeric index, inherits data type.
*   **From Dictionary:** `pd.Series({key: value})` - Dictionary keys become index labels.
*   **From Scalar Value:** `pd.Series(scalar_value, index=[index_labels])` - Value repeated for each index label.

**Choose the method that best suits your data source and desired Series structure.**

Let's now explore the *Index* in pandas Series!
---

### Understanding pandas Series Index - Introduction to Index 🔑🐼

**The pandas Series Index: Labels for Your Data**

The **Index** is a key feature of pandas Series. It provides **labels** for each element in the Series, allowing you to access data not just by position, but also by these meaningful labels.

**Key Aspects of the Series Index:**

*   **Labels, not just positions:**  Index provides explicit labels for each value.
*   **Immutable:**  Once created, the Index labels cannot be changed directly.
*   **Allows for flexible data access:**  Retrieve data by label or numeric position.
*   **Can be explicitly defined:** You can customize the index when creating a Series.

**The Index makes pandas Series powerful for data retrieval and alignment! Let's learn more!**
---

### Understanding pandas Series Index - Accessing Data by Label and Position 📍🐼

**Accessing Series Elements: By Label and Position**

You can access elements in a pandas Series using two main methods:

1.  **Label-based Indexing (using labels from the Index):**
    *   Use square brackets `[]` with the *label* name.
    *   Example: `series['label_name']`

2.  **Position-based Indexing (using numeric position, like lists/NumPy):**
    *   Use square brackets `[]` with the *numeric position* (starting from 0).
    *   Example: `series[0]`

**Both label and position access provide flexible ways to retrieve data from a Series!**

**Let's see examples of both label-based and position-based indexing!**
---

### Series Index: Label-based Indexing Example (Part 1) 🏷️📍🐼

**1. Label-based Indexing: Access by Label Name**

Use the index labels (keys) to directly access Series elements using square brackets `[]`.

**Example: Accessing population data by country name (label)**

```python
import pandas as pd

population_dict = {'USA': 330, 'China': 1441, 'India': 1380, 'Brazil': 212}
population_series = pd.Series(population_dict) # Series with country names as index labels

print("Population Series:\n", population_series) # Display the Series
# Output: (Series will be displayed)

# Access population of 'USA' using label-based indexing
usa_population = population_series['USA']
print("\nPopulation of USA (label-based access):\n", usa_population)
# Output: Population of USA (label-based access): 330
```
---

### Series Index: Label-based Indexing Example (Part 2) 🏷️📍🐼

**Label-based Indexing: Accessing Multiple Labels**

You can access elements for *different* labels in the Series using label-based indexing.

**Continuing the population Series example:**

```python
import pandas as pd # (Code continued from previous slide - Slide 1D-3-a)
population_dict = {'USA': 330, 'China': 1441, 'India': 1380, 'Brazil': 212}
population_series = pd.Series(population_dict)

# Access population of 'China' and 'Brazil' using label-based indexing
china_population = population_series['China']
brazil_population = population_series['Brazil']

print("\nPopulation of China (label-based access):\n", china_population)
# Output: Population of China (label-based access): 1441
print("\nPopulation of Brazil (label-based access):\n", brazil_population)
# Output: Population of Brazil (label-based access): 212
```

**Label-based indexing provides direct and readable access to data using meaningful labels!**

---

### Series Index: Position-based Indexing Example (Part 1) 🔢📍🐼

**2. Position-based Indexing: Access by Numeric Position**

You can also access Series elements using their numeric position (starting from 0), just like with lists or NumPy arrays. Use square brackets `[]` with the *position index*.

**Example: Accessing population data by numeric position**

```python
import pandas as pd

population_dict = {'USA': 330, 'China': 1441, 'India': 1380, 'Brazil': 212}
population_series = pd.Series(population_dict) # Series with country names as index labels

print("Population Series:\n", population_series) # Display the Series
# Output: (Series will be displayed - see next slide)

# Access the *first* element (position 0) using position-based indexing
first_country_population = population_series[0] # Position 0 is 'USA'
print("\nPopulation of first country (position-based access):\n", first_country_population)
# Output: Population of first country (position-based access): 330
```
---

### Series Index: Position-based Indexing Example (Part 2) 🔢📍🐼

**Position-based Indexing: Accessing by Different Positions**

You can access elements at *different positions* in the Series using position-based indexing.

**Continuing the population Series example:**

```python
import pandas as pd # (Code continued from previous slide - Slide 1D-4-a)
population_dict = {'USA': 330, 'China': 1441, 'India': 1380, 'Brazil': 212}
population_series = pd.Series(population_dict)

# Access the *second* element (position 1) and *last* element (position -1)
second_country_population = population_series[1] # Position 1 is 'China'
last_country_population = population_series[-1]  # Position -1 is 'Brazil' (last)

print("\nPopulation of second country (position-based access):\n", second_country_population)
# Output: Population of second country (position-based access): 1441
print("\nPopulation of last country (position-based access):\n", last_country_population)
# Output: Population of last country (position-based access): 212
```

**Position-based indexing is similar to list/NumPy access, using numeric positions!**
---

### Series Index: Summary of Index Access ✅📍🐼

**Summary: Accessing Series Elements**

pandas Series offer two primary ways to access data:

*   **Label-based Access:**  `series['label']` - Use the *index labels* to access elements directly.  Highly readable and intuitive for labeled data.
*   **Position-based Access:** `series[position]` - Use *numeric positions* (0-indexed) to access elements, similar to lists and NumPy arrays.

**Choose the access method that best suits your needs: labels for clarity, positions for numeric indexing.**

Let's now consider basic operations on pandas Series!
---

### Basic Operations on pandas Series - Introduction to Operations ➕➖✖️➗🐼

**Basic Operations on pandas Series: Similar to NumPy**

pandas Series support many of the same element-wise operations as NumPy arrays. You can perform:

*   **Arithmetic Operations:** `+, -, *, /, **` (addition, subtraction, multiplication, division, exponentiation)
*   **Comparison Operations:** `==, !=, >, <, >=, <=` (element-wise comparisons)
*   **Mathematical Functions:**  `np.sin(), np.sqrt(), np.abs()`, etc. (NumPy functions work with Series)

**These operations are performed *element-wise* on the Series values, often preserving the Index.**

**Let's explore examples of these basic operations on pandas Series!**
---

### Basic Operations on pandas Series - Arithmetic Operations Example ➕➖✖️🐼

**Arithmetic Operations: Element-wise Calculations**

You can perform element-wise arithmetic operations directly on pandas Series using `+, -, *, /`.

**Example: Arithmetic operations on a Series of prices**

```python
import pandas as pd

prices_series = pd.Series([10, 15, 20], index=['Item A', 'Item B', 'Item C'])
print("Original Prices Series:\n", prices_series) # Display original Series

# Add 5 to each price
increased_prices = prices_series + 5
print("\nPrices + 5:\n", increased_prices)

# Multiply each price by 2
doubled_prices = prices_series * 2
print("\nPrices * 2:\n", doubled_prices)
```
---
layout: two-cols-header
---

### Basic Operations on pandas Series - Arithmetic Operations Output & Explanation ➕➖✖️🐼

**Arithmetic Operations: Output and Explanation**

Here's the output from the arithmetic operations code (previous slide):
::left::
<!-- **Output:** -->
```sh
Original Prices Series:
Item A    10
Item B    15
Item C    20
dtype: int64

Prices + 5:
Item A    15
Item B    20
Item C    25
dtype: int64

Prices * 2:
Item A    20
Item B    30
Item C    40
dtype: int64
```

::right::

**Explanation:**

*   Arithmetic operations (`+`, `*`) are applied **element-wise** to each value in the `prices_series`.
*   The **Index (Item A, Item B, Item C)** is **preserved** in the resulting Series.
*   Data type (`dtype`) remains consistent after operations in these examples.
---

### Basic Operations on pandas Series - Comparison Operations Example (Part 1) == != 🐼

**Comparison Operations: Element-wise Comparisons**

You can perform element-wise comparison operations on pandas Series using `==, !=, >, <, >=, <=`.  These return a Series of boolean values (`True` or `False`).

**Example: Comparison operations on a Series of scores - Code**

```python
import pandas as pd

scores_series = pd.Series([60, 75, 90, 85], index=['Student A', 'Student B', 'Student C', 'Student D'])
print("Original Scores Series:\n", scores_series) # Display original Series

# Check which scores are greater than or equal to 80
above_80 = scores_series >= 80
print("\nScores >= 80:\n", above_80)

# Check which scores are equal to 75
is_75 = scores_series == 75
print("\nScores == 75:\n", is_75)
```
---
layout: two-cols-header
---

### Basic Operations: Comparison Output & Explanation (Part 2) == != 🐼 (Revised)

**Comparison Operations: Output and Key Points**

Here's the output of the comparison operations (from previous slide):

::left::
**Output:**
```sh
Scores >= 80:
Student A    False
Student B    False
Student C     True
Student D     True
dtype: bool  # <--- Boolean Series!

Scores == 75:
Student A    False
Student B     True
Student C    False
Student D    False
dtype: bool  # <--- Boolean Series!
```
::right::

**Key Points:**

*   Comparisons are **element-wise**.
*   Result is a **Boolean Series** (`True`/`False`).
*   **Index is preserved.**
---

### Basic Operations: Mathematical Functions Example (Part 1) 📐∛🐼

**Mathematical Functions: Using NumPy with Series**

You can apply NumPy's mathematical functions directly to pandas Series.  These functions operate element-wise and return a new Series with the results.

**Example: Mathematical functions on a Series of numbers - Code**

```python
import pandas as pd
import numpy as np

numbers_series = pd.Series([1, 4, 9, 16], index=['A', 'B', 'C', 'D'])
print("Original Numbers Series:\n", numbers_series) # Display original Series

# Calculate the square root of each number using np.sqrt()
sqrt_series = np.sqrt(numbers_series)
print("\nSquare Root of Series (np.sqrt):\n", sqrt_series)

# Calculate the sine of each number (radians) using np.sin()
sin_series = np.sin(numbers_series)
print("\nSine of Series (np.sin):\n", sin_series)
```
---
layout: two-cols-header
---

### Basic Operations: Math Functions Output & Explanation (Part 2) 📐∛🐼

**Mathematical Functions: Output and Key Points**
::left::
Here's the output of the mathematical functions code (from previous Slide ):

**Output:**
```sh
Original Numbers Series:
A     1
B     4
C     9
D    16
dtype: int64

Square Root of Series (np.sqrt):
A    1.0
B    2.0
C    3.0
D    4.0
dtype: float64 # <--- Data type changed to float
```

::right::

```sh
Sine of Series (np.sin):
A    0.841471
B   -0.756802
C    0.412118
D   -0.287903
dtype: float64 # <--- Data type changed to float
```

**Key Points:**

*   NumPy functions (`np.sqrt`, `np.sin`) are applied **element-wise**.
*   Result is a new **Series with transformed values**.
*   **Index is preserved.**
*   `dtype` may change based on the function (e.g., to `float64` for `sqrt` and `sin`).
---

### Basic Operations on pandas Series - Summary ✅🐼

**Summary: Basic Operations on pandas Series**

pandas Series support element-wise operations, similar to NumPy:

*   **Arithmetic:** `+, -, *, /, **`  (element-wise math)
*   **Comparison:** `==, !=, >, <, >=, <=` (returns Boolean Series)
*   **Mathematical Functions:** `np.sqrt(), np.sin(), etc.` (NumPy functions applied element-wise)

**Key Feature: Operations are element-wise and preserve the Series Index.**

**With Basic Series Operations covered, we've explored the fundamentals of pandas Series!**

**Next, we can delve deeper into more advanced Series functionalities, or transition to pandas DataFrames!**
---

### Transitioning to pandas DataFrames - Introduction to DataFrames 📊🐼

**From Series to DataFrames: Expanding to 2 Dimensions**

We've learned about pandas **Series**: 1-dimensional labeled arrays.

Now, let's introduce **pandas DataFrames**:  **2-dimensional labeled *tables***.

**Think of a DataFrame as:**

*   **Multiple Series aligned together**, sharing the same index.
*   A table with **rows and columns**, both with labels (index and column names).
*   The *workhorse* of pandas for real-world data manipulation and analysis.

**DataFrames are incredibly powerful for working with structured, tabular data! Let's begin exploring DataFrames in our next session!**

**End of Session 6 Introduction to pandas Series.**

**Next: Session 7 - Introduction to pandas DataFrames**
