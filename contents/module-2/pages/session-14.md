---
theme: seriph
layout: two-cols-header
transition: fade
---

### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

In this session, we'll dive deep into string manipulation using pandas. We'll explore various string methods and functions to clean and transform text data effectively.

::left::

**Why String Manipulation?**

* Text data is often messy and inconsistent.
* Cleaning and transforming text is crucial for accurate analysis.
* String manipulation allows us to extract meaningful information from text data.

::right::

**Key Concepts:**

* **`.str` Methods:** Accessing string methods in pandas.
* **Cleaning Text:** Removing whitespace, punctuation, and special characters.
* **Transforming Text:** Converting case, splitting, and joining strings.
* **Extracting Information:** Using Regex and other methods to extract specific patterns.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's start by understanding how to access string methods using `.str`.

::left::

**1. Accessing String Methods with `.str`:**

* Pandas Series objects have a `.str` attribute that provides access to string methods.
* This allows you to perform string operations on each element of the Series.

::right::

**Example: Using `.str` Methods**

```python
import pandas as pd

# Sample Series
names = pd.Series(['  Alice', 'BOB  ', 'charlie'])
print("Original Series:\n", names)

# Accessing string methods using .str
cleaned_names = names.str.strip().str.lower()
print("\nCleaned Series:\n", cleaned_names)
```

---
layout: two-cols-header
transition: fade
---

### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of using `.str.strip()` and `.str.lower()`.

::left::

**Output & Explanation (Slide 2):**
```
Original Series:
0      Alice
1      BOB  
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

* `names.str.strip()` removes leading and trailing whitespace from each name.
* `names.str.lower()` converts each name to lowercase.
* The result is a cleaned Series with consistent formatting.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's explore common text cleaning tasks.

::left::

**2. Common Text Cleaning Tasks:**

* **Removing Whitespace:** `str.strip()`, `str.lstrip()`, `str.rstrip()`.
* **Removing Punctuation:** `str.replace()` with Regex.
* **Removing Special Characters:** `str.replace()` with Regex.
* **Handling Missing Values:** `str.fillna()`.

::right::

**Example: Removing Punctuation**

```python
import pandas as pd

# Sample Series
text = pd.Series(['Hello!', 'World?', 'This is a test.'])
print("Original Series:\n", text)

# Remove punctuation
cleaned_text = text.str.replace(r'[^\w\s]', '', regex=True)
print("\nCleaned Series:\n", cleaned_text)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of removing punctuation.

::left::

**Output & Explanation (Slide 4):**
```bash
Original Series:
0           Hello!
1           World?
2    This is a test.
dtype: object

Cleaned Series:
0          Hello
1          World
2    This is a test
dtype: object
```

::right::

**Explanation:**

* `text.str.replace(r'[^\w\s]', '', regex=True)` uses a Regex pattern to remove punctuation.
* `[^\w\s]` matches any character that is not a word character (`\w`) or whitespace (`\s`).
* `regex=True` specifies that the pattern is a Regex pattern.
* The result is a Series with punctuation removed.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's explore common text transformation tasks.

::left::

**3. Common Text Transformation Tasks:**

* **Converting Case:** `str.lower()`, `str.upper()`, `str.title()`.
* **Splitting Strings:** `str.split()`.
* **Joining Strings:** `str.join()`.
* **Replacing Substrings:** `str.replace()`.

::right::

**Example: Splitting Strings**

```python
import pandas as pd

# Sample Series
addresses = pd.Series(['123 Main St, Anytown', '456 Oak Ave, Somecity'])
print("Original Series:\n", addresses)

# Split the address into parts
address_parts = addresses.str.split(', ')
print("\nSplit Addresses:\n", address_parts)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of splitting the addresses.

::left::

**Output & Explanation (Slide 6):**
```bash
Original Series:
0    123 Main St, Anytown
1     456 Oak Ave, Somecity
dtype: object

Split Addresses:
0    [123 Main St, Anytown]
1    [456 Oak Ave, Somecity]
dtype: object
```

::right::

**Explanation:**

* `addresses.str.split(', ')` splits each address string into a list of substrings using the delimiter `, `.
* The result is a Series of lists, where each list contains the parts of the address.
* You can further process these lists to extract specific information (e.g., street, city).

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's explore how to extract information using Regex.

::left::

**4. Extracting Information with Regex:**

* Regex allows you to extract specific patterns from text.
* Pandas `.str.extract()` method uses Regex to extract matched patterns.

::right::

**Example: Extracting Phone Numbers**

```python
import pandas as pd

# Sample Series
text = pd.Series(['Contact: 123-456-7890', 'Phone: 987-654-3210'])
print("Original Series:\n", text)

# Extract phone numbers using Regex
phone_numbers = text.str.extract(r'(\d{3}-\d{3}-\d{4})')
print("\nExtracted Phone Numbers:\n", phone_numbers)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of extracting phone numbers using Regex.

::left::

**Output & Explanation (Slide 8):**
```bash
Original Series:
0    Contact: 123-456-7890
1      Phone: 987-654-3210
dtype: object

Extracted Phone Numbers:
               0
0  123-456-7890
1  987-654-3210
```

::right::

**Explanation:**

* `text.str.extract(r'(\d{3}-\d{3}-\d{4})')` uses the Regex pattern `(\d{3}-\d{3}-\d{4})` to extract phone numbers.
* `\d{3}` matches three digits.
* `-` matches a hyphen.
* `()` creates a capturing group to extract the matched pattern.
* The result is a DataFrame containing the extracted phone numbers.

---
layout: two-cols-header
transition: fade
---

### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of handling missing values.

::left::

**Output & Explanation (Slide 10):**
```bash
Original Series:
0     apple
1       NaN
2    banana
3      None
4    cherry
dtype: object

Filled Series:
0     apple
1   unknown
2    banana
3   unknown
4    cherry
dtype: object
```

::right::

**Explanation:**

* `text.str.fillna('unknown')` replaces missing values (NaN and None) with the string 'unknown'.
* This ensures that all elements in the Series have a string value, making it easier to perform further string operations.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's explore how to use `.str.contains()` for filtering.

::left::

**6. Filtering with `.str.contains()`:**

* `.str.contains()` checks if a substring or Regex pattern is present in each element of a Series.
* It returns a boolean Series, which can be used for filtering.

::right::

**Example: Filtering with `.str.contains()`**

```python
import pandas as pd

# Sample Series
text = pd.Series(['apple pie', 'banana bread', 'cherry cake', 'apple juice'])
print("Original Series:\n", text)

# Filter for items containing 'apple'
apple_items = text[text.str.contains('apple')]
print("\nItems Containing 'apple':\n", apple_items)
```


---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's see the output of filtering with `.str.contains()`.

::left::

**Output & Explanation (Slide 12):**
```bash
Original Series:
0     apple pie
1  banana bread
2   cherry cake
3   apple juice
dtype: object

Items Containing 'apple':
0    apple pie
3  apple juice
dtype: object
```

::right::

**Explanation:**

* `text.str.contains('apple')` returns a boolean Series indicating whether each element contains the substring 'apple'.
* `text[text.str.contains('apple')]` uses this boolean Series to filter the original Series, selecting only the elements that contain 'apple'.

---
layout: two-cols-header
transition: fade
---

### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's summarize the key concepts of string manipulation in pandas.

::left::

**7. Recap of Key Concepts:**

* **`.str` Methods:** Accessing string methods for element-wise operations.
* **Cleaning Text:** Removing whitespace, punctuation, and special characters.
* **Transforming Text:** Converting case, splitting, and joining strings.
* **Extracting Information:** Using Regex to extract specific patterns.
* **Handling Missing Values:** Using `str.fillna()` to replace missing values.
* **Filtering:** Using `.str.contains()` to filter based on string patterns.

::right::

**Key Takeaways:**

* `.str` methods provide powerful tools for text manipulation in pandas.
* Regex is essential for advanced pattern matching and extraction.
* Cleaning and transforming text data is crucial for accurate analysis.
* Understanding string manipulation techniques enables you to extract meaningful insights from text data.

---
layout: two-cols-header
transition: fade
---

### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Let's do a short exercise to solidify your understanding.

::left::

**8. Exercise:**

Using a DataFrame with text data, perform the following:

1.  Clean a column by removing leading/trailing whitespace and converting to lowercase.
2.  Remove punctuation from another text column.
3.  Split a column containing comma-separated values into multiple columns.
4.  Extract email addresses from a text column using Regex.
5.  Fill missing values in a text column with a default string.
6.  Filter the DataFrame to include only rows where a text column contains a specific keyword.

::right::

**Tips:**

* Choose a dataset with diverse text data.
* Experiment with different `.str` methods and Regex patterns.
* Use online Regex testers to help you create and test Regex patterns.

---
layout: two-cols-header
transition: fade
---
### 🐼 Session 14: String Manipulation in pandas Series and DataFrames 📝

**Cleaning and Transforming Text Data**

Congratulations! You've reached the end of this session.

::left::

**9. Conclusion:**

In this session, we explored various string manipulation techniques in pandas, including cleaning, transforming, extracting, and filtering text data. We covered essential `.str` methods and the use of Regular Expressions (Regex).

::right::

**Next Steps:**

* Practice with different datasets and text manipulation tasks.
* Explore advanced Regex patterns and string operations.
* Combine string manipulation with other pandas functionalities for comprehensive data analysis.

Keep practicing and refining your skills!