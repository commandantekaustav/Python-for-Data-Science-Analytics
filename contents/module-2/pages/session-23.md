---
layout: two-cols-header
transition: fade
---
### 🧽 Session 23: pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

In this session, we'll focus on cleaning and standardizing text data using pandas. Text data often requires special attention due to inconsistencies, typos, and variations in formatting. We'll explore techniques to handle these challenges effectively.

::left::

**Why Clean Text Data?**

* **Consistency:** Cleaning ensures that text data is uniform and consistent, which is crucial for analysis.
* **Accuracy:** Removing noise and correcting typos improves the accuracy of text-based analysis.
* **Efficiency:** Clean text data simplifies analysis and processing, leading to more efficient workflows.

::right::

**Key Concepts:**

* **Cleaning and Transforming Text Data:** Using pandas string methods.
* **Removing Noise:** Handling whitespace, punctuation, and special characters.
* **Case Conversion, Splitting, and Joining:** Standardizing text formats.
* **Extracting Information with Regular Expressions:** Powerful pattern matching for text.
* **Typos Correction:** Techniques for detecting and correcting typographical errors.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's start by exploring how to clean and transform text data using pandas string methods.

::left::

**1. Cleaning and Transforming Text Data:**

* pandas provides a set of string methods that can be applied to Series and DataFrames to clean and transform text data.
* These methods are accessed using the `.str` attribute.
* Common string operations include:
    * Case conversion (`lower()`, `upper()`, `title()`)
    * Removing whitespace (`strip()`, `lstrip()`, `rstrip()`)
    * Replacing substrings (`replace()`)
    * Splitting strings (`split()`)
    * Concatenating strings (`cat()`)

::right::

**Example: Cleaning and Transforming Text Data**

```python
import pandas as pd

# Sample Series with text data
data = pd.Series(['  Hello World  ', 'pYTHON is Fun', 
                    'data SCIENCE'])
print("Original Series:\n", data)

# Remove leading and trailing whitespace
cleaned_data = data.str.strip()
print("\nCleaned Series:\n", cleaned_data)

# Convert to lowercase
lowercase_data = cleaned_data.str.lower()
print("\nLowercase Series:\n", lowercase_data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's see the output of cleaning and transforming text data.

::left::

**Output & Explanation (Slide 2):**
```bash
Original Series:
0      Hello World  
1       pYTHON is Fun
2         data SCIENCE
dtype: object

Cleaned Series:
0      Hello World
1       pYTHON is Fun
2         data SCIENCE
dtype: object

Lowercase Series:
0      hello world
1       python is fun
2         data science
dtype: object
```

::right::

**Explanation:**

* `data.str.strip()` removes leading and trailing whitespace from each string in the Series.
* `cleaned_data.str.lower()` converts all characters in the cleaned strings to lowercase.
* These operations help standardize the text data by removing unnecessary whitespace and ensuring consistent case.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore how to remove noise from text data.

::left::

**2. Removing Noise:**

* Text data often contains noise such as extra whitespace, punctuation, and special characters that can interfere with analysis.
* You can use string methods like `strip()`, `replace()`, and regular expressions to remove this noise.

::right::

**Example: Removing Noise**

```python
import pandas as pd

# Sample Series with noisy text data
data = pd.Series(['  Hello! World?  ', 'pYTHON, is. Fun!', 'data SCIENCE  '])
print("Original Series:\n", data)

# Remove punctuation and special characters
cleaned_data = data.str.replace(r'[^\w\s]', '', regex=True)
print("\nCleaned Series (no punctuation):\n", cleaned_data)

# Remove extra whitespace
cleaned_data = cleaned_data.str.replace(r'\s+', ' ', regex=True).str.strip()
print("\nCleaned Series (no extra whitespace):\n", cleaned_data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's see the output of removing noise from text data.

::left::

**Output & Explanation (Slide 4):**
```bash
Original Series:
0      Hello! World?  
1       pYTHON, is. Fun!
2         data SCIENCE  
dtype: object

Cleaned Series (no punctuation):
0       Hello World  
1       pYTHON is Fun 
2         data SCIENCE  
dtype: object

Cleaned Series (no extra whitespace):
0    Hello World
1    pYTHON is Fun
2    data SCIENCE
dtype: object
```

::right::

**Explanation:**

* `data.str.replace(r'[^\w\s]', '', regex=True)` removes punctuation and special characters from the strings. The regular expression `[^\w\s]` matches any character that is not a word character (`\w`) or a whitespace character (`\s`).
* `cleaned_data.str.replace(r'\s+', ' ', regex=True).str.strip()` removes extra whitespace. The regular expression `\s+` matches one or more whitespace characters, which are then replaced with a single space. Finally, `.str.strip()` removes any leading or trailing whitespace.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore how to convert case, split, and join strings.

::left::

**3. Case Conversion, Splitting, and Joining:**

* Case conversion, splitting, and joining are common text manipulation tasks used to standardize and structure text data.
* pandas provides methods for these operations:
    * Case conversion: `lower()`, `upper()`, `title()`
    * Splitting: `split()`
    * Joining: `join()`

::right::

**Example: Case Conversion, Splitting, and Joining**

```python
import pandas as pd

# Sample Series with text data
data = pd.Series(['Hello World', 'Python is Fun', 'Data Science'])
print("Original Series:\n", data)

# Convert to title case
title_case_data = data.str.title()
print("\nTitle Case Series:\n", title_case_data)

# Split strings into words
split_data = data.str.split()
print("\nSplit Series:\n", split_data)

# Join words back into a string
joined_data = split_data.str.join(' ')
print("\nJoined Series:\n", joined_data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

::left::

**Cleaning and Standardizing Text Data in pandas**


Let's see the output of case conversion, splitting, and joining strings.

**Explanation:**

* `data.str.title()` converts the first character of each word to uppercase and the rest to lowercase.
* `data.str.split()` splits each string into a list of words, using whitespace as the delimiter.
* `split_data.str.join(' ')` joins the list of words back into a single string, using a space as the separator. In this case, it effectively reverses the split operation, resulting in the original strings.

::right::

**Output & Explanation (Slide 6):**
```bash
Original Series:
0      Hello World
1     Python is Fun
2       Data Science
dtype: object

Title Case Series:
0      Hello World
1     Python Is Fun
2       Data Science
dtype: object

Split Series:
0        [Hello, World]
1       [Python, is, Fun]
2         [Data, Science]
dtype: object

Joined Series:
0      Hello World
1     Python is Fun
2       Data Science
dtype: object
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore how to extract information with regular expressions.

::left::

**4. Extracting Information with Regular Expressions:**

* Regular expressions (regex) are powerful tools for pattern matching and text manipulation.
* pandas integrates with Python's `re` module to allow you to apply regular expressions to Series and DataFrames using the `.str.extract()` and `.str.extractall()` methods.

::right::

**Example: Extracting Information with Regular Expressions**

```python
import pandas as pd

# Sample Series with text data
data = pd.Series(['Name: John, Age: 25', 'Name: Alice, Age: 30', 'Name: Bob, Age: 28'])
print("Original Series:\n", data)

# Extract names and ages using regular expressions
extracted_data = data.str.extract(r'Name: (\w+), Age: (\d+)')
print("\nExtracted Data:\n", extracted_data)

# Name the extracted columns
extracted_data.columns = ['Name', 'Age']
print("\nExtracted Data with Column Names:\n", extracted_data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

::left::

**Cleaning and Standardizing Text Data in pandas**

Let's see the output of extracting information with regular expressions.

**Output & Explanation (Slide 8):**
```bash
Original Series:
0      Name: John, Age: 25
1     Name: Alice, Age: 30
2       Name: Bob, Age: 28
dtype: object

Extracted Data:
      0   1
0  John  25
1  Alice  30
2    Bob  28

Extracted Data with Column Names:
    Name Age
0   John  25
1  Alice  30
2    Bob  28
```

::right::

**Explanation:**

* `data.str.extract(r'Name: (\w+), Age: (\d+)')` extracts the name and age from each string using a regular expression.
* The regular expression `Name: (\w+), Age: (\d+)` defines two capturing groups:
    * `(\w+)` captures one or more word characters (letters, digits, or underscores) for the name.
    * `(\d+)` captures one or more digits for the age.
* The extracted data is returned as a DataFrame, where each capturing group becomes a column.
* `extracted_data.columns = ['Name', 'Age']` assigns column names 'Name' and 'Age' to the extracted data DataFrame for better readability and usability.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore techniques for detecting and correcting typographical errors.

::left::

**5. Typos Correction:**

* Typos are common in text data and can lead to inconsistencies and errors in analysis.
* Techniques for detecting and correcting typos include:
    * **Fuzzy Matching:** Using algorithms to measure the similarity between strings and identify potential typos.
    * **Dictionary Lookup:** Comparing words to a predefined dictionary to identify and correct misspelled words.

::right::

**Fuzzy Matching in Detail:**

* Fuzzy matching algorithms calculate the "distance" between two strings.
* This distance represents how many changes (insertions, deletions, substitutions) are needed to transform one string into another.
* Common algorithms include:
    * **Levenshtein Distance:** Measures the minimum number of single-character edits required to change one word into the other.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore techniques for detecting and correcting typographical errors.

::left::

**5. Typos Correction:**

* Typos are common in text data and can lead to inconsistencies and errors in analysis.
* Techniques for detecting and correcting typos include:
    * **Fuzzy Matching:** Using algorithms to measure the similarity between strings and identify potential typos.
    * **Dictionary Lookup:** Comparing words to a predefined dictionary to identify and correct misspelled words.

::right::

**Example: Typos Correction using Fuzzy Matching**

```python
import pandas as pd
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

# Sample Series with typos
data = pd.Series(['apple', 'aple', 'banana', 'bananna', 'orange', 'ornge'])
print("Original Series:\n", data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's explore techniques for detecting and correcting typographical errors.

::left::

**5. Typos Correction:**

* Typos are common in text data and can lead to inconsistencies and errors in analysis.
* Techniques for detecting and correcting typos include:
    * **Fuzzy Matching:** Using algorithms to measure the similarity between strings and identify potential typos.
    * **Dictionary Lookup:** Comparing words to a predefined dictionary to identify and correct misspelled words.

::right::

**Example: Typos Correction using Fuzzy Matching (Continued)**

```python
# Function to correct typos using fuzzy matching
def correct_typo(word, word_list, threshold=80):
    match, score = process.extractOne(word, word_list, scorer=fuzz.token_sort_ratio)
    if score >= threshold:
        return match
    return word

# Define a correct word list
correct_words = ['apple', 'banana', 'orange']

# Correct typos in the Series
corrected_data = data.apply(lambda x: correct_typo(x, correct_words))
print("\nCorrected Series:\n", corrected_data)
```

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**
::left::
Let's explore techniques for detecting and correcting typographical errors.


**Output & Explanation (Slide 10.2 & 10.3):**
```bash
Original Series:
0      apple
1       aple
2     banana
3    bananna
4     orange
5      ornge
dtype: object

Corrected Series:
0     apple
1     apple
2    banana
3    banana
4    orange
5    orange
dtype: object
```

::right::

**Explanation:**

* The code uses the `fuzzywuzzy` library for fuzzy matching.
* The `correct_typo` function takes a word, a list of correct words, and a threshold as input.
* It uses `process.extractOne` to find the closest match in the word list based on the `fuzz.token_sort_ratio` score.
* If the score is above the threshold (80 in this case), the function returns the matched correct word; otherwise, it returns the original word.
* The `apply` method is used to apply the `correct_typo` function to each word in the Series, correcting any typos.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

::left::

**Cleaning and Standardizing Text Data in pandas**

Let's summarize the key concepts of string operations and typos correction.

**6. Recap of Key Concepts:**

* **Cleaning and Transforming Text Data:** Using pandas string methods like `lower()`, `upper()`, `strip()`, `replace()`, `split()`, and `join()`.
* **Removing Noise:** Handling whitespace, punctuation, and special characters with string methods and regular expressions.
* **Case Conversion, Splitting, and Joining:** Standardizing text formats using methods like `lower()`, `upper()`, `title()`, `split()`, and `join()`.

::right::

* **Extracting Information with Regular Expressions:** Using `.str.extract()` to extract specific patterns from text data.
* **Typos Correction:** Techniques for detecting and correcting typographical errors, including fuzzy matching.



**Key Takeaways:**

* Cleaning text data is essential for ensuring consistency, accuracy, and efficiency in text-based analysis.
* pandas provides a rich set of string methods and integrates with regular expressions for powerful text manipulation.
* Typos correction techniques like fuzzy matching can help improve the quality of text data by addressing typographical errors.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

1.  Create a pandas Series with messy text data containing extra whitespace, punctuation, and mixed case.
2.  Clean the text data by removing extra whitespace and punctuation, and converting all text to lowercase.
3.  Split the cleaned text data into individual words.
4.  Extract specific information (e.g., phone numbers, email addresses) from the text data using regular expressions.
5.  Implement a typos correction function using fuzzy matching to correct misspelled words in the text data.

::right::

**Tips:**

* Experiment with different string methods and regular expressions to clean and transform text data.
* Use online regex testers to help you develop and test your regular expressions.
* Explore different fuzzy matching libraries and algorithms for typos correction.

---
layout: two-cols-header
transition: fade
---
### 🧽 pandas Data Cleaning - String Operations and Typos Correction ✍️

**Cleaning and Standardizing Text Data in pandas**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we covered string operations and typos correction in pandas. We explored techniques for cleaning and transforming text data, removing noise, converting case, splitting and joining strings, extracting information with regular expressions, and correcting typographical errors.

::right::

**Next Steps:**

* Practice cleaning and standardizing text data from various sources.
* Explore advanced regular expression techniques for complex text manipulation tasks.
* Investigate different fuzzy matching algorithms and libraries for typos correction.
* Consider integrating text cleaning and standardization into your data preprocessing pipelines.

Keep practicing and refining your skills!