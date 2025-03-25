---
layout: two-cols-header
transition: fade
---
### 🔢 Session 19: Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

In this session, we'll review essential NumPy array operations and concepts that are frequently used in pandas workflows. Understanding NumPy is crucial for efficient data manipulation and performance optimization in pandas.

::left::

**Why NumPy for pandas?**

* Pandas is built on top of NumPy.
* NumPy arrays are the underlying data structure in pandas Series and DataFrames.
* NumPy provides powerful tools for numerical operations and data manipulation.

::right::

**Key Concepts:**

* **NumPy Arrays:** Creating and manipulating arrays.
* **Array Indexing and Slicing:** Accessing array elements.
* **Array Operations:** Performing mathematical operations on arrays.
* **Vectorization:** Applying operations to entire arrays.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's start by understanding how to create NumPy arrays.

::left::

**1. Creating NumPy Arrays:**

* NumPy arrays can be created from lists, tuples, or other array-like objects.
* The `np.array()` function is used to create arrays.

::right::

**Example: Creating NumPy Arrays**

```python
import numpy as np

# Create a 1D array from a list
arr1 = np.array([1, 2, 3, 4, 5])
print("1D Array:\n", arr1)

# Create a 2D array from a list of lists
arr2 = np.array([[1, 2, 3], [4, 5, 6]])
print("\n2D Array:\n", arr2)
```

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's see the output of creating NumPy arrays.

::left::

**Output & Explanation (Slide 2):**
```bash
1D Array:
 [1 2 3 4 5]

2D Array:
 [[1 2 3]
 [4 5 6]]

```

::right::

**Explanation:**

* `np.array([1, 2, 3, 4, 5])` creates a 1D NumPy array from the given list.
* `np.array([[1, 2, 3], [4, 5, 6]])` creates a 2D NumPy array from the list of lists.
* NumPy arrays are efficient for numerical operations and data manipulation.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's explore array indexing and slicing.

::left::

**2. Array Indexing and Slicing:**

* You can access array elements using indexing and slicing, similar to Python lists.
* NumPy arrays support multidimensional indexing.

::right::

**Example: Array Indexing and Slicing**

```python
import numpy as np

# Sample 2D array
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Original Array:\n", arr)

# Accessing elements
print("\nElement at [0, 0]:", arr[0, 0])
print("Element at [1, 2]:", arr[1, 2])

# Slicing
print("\nFirst row:", arr[0, :])
print("First column:", arr[:, 0])
```

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's see the output of array indexing and slicing.

::left::

**Output & Explanation (Slide 4):**
```bash
Original Array:
 [[1 2 3]
 [4 5 6]
 [7 8 9]]

Element at [0, 0]: 1
Element at [1, 2]: 6

First row: [1 2 3]
First column: [1 4 7]
```

::right::

**Explanation:**

* `arr[0, 0]` accesses the element at the first row and first column.
* `arr[1, 2]` accesses the element at the second row and third column.
* `arr[0, :]` slices the first row of the array.
* `arr[:, 0]` slices the first column of the array.
* NumPy indexing and slicing are powerful tools for accessing and manipulating array elements.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's explore array operations.

::left::

**3. Array Operations:**

* NumPy arrays support element-wise mathematical operations.
* You can perform addition, subtraction, multiplication, and division on arrays.

::right::

**Example: Array Operations**

```python
import numpy as np

# Sample arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Element-wise addition
print("Addition:", arr1 + arr2)

# Element-wise multiplication
print("Multiplication:", arr1 * arr2)

# Scalar multiplication
print("Scalar Multiplication:", arr1 * 2)
```

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's see the output of array operations.

::left::

**Output & Explanation (Slide 6):**
```bash
Addition: [5 7 9]
Multiplication: [ 4 10 18]
Scalar Multiplication: [2 4 6]
```

::right::

**Explanation:**

* `arr1 + arr2` performs element-wise addition of the two arrays.
* `arr1 * arr2` performs element-wise multiplication of the two arrays.
* `arr1 * 2` multiplies each element of `arr1` by 2.
* NumPy array operations are efficient and perform element-wise operations by default.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's explore vectorization.

::left::

**4. Vectorization:**

* Vectorization is the process of applying operations to entire arrays instead of individual elements.
* It significantly speeds up numerical computations.
* NumPy operations are vectorized by default.

::right::

**Example: Vectorization**

```python
import numpy as np

# Sample array
arr = np.array([1, 2, 3, 4, 5])

# Vectorized operation
squared_arr = arr ** 2
print("Squared Array:", squared_arr)

# Using NumPy functions
sqrt_arr = np.sqrt(arr)
print("Square Root Array:", sqrt_arr)
```

---
layout: two-cols-header
transition: fade
---
###   🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's see the output of vectorization.

::left::

**Output & Explanation (Slide 8):**
```bash
Squared Array: [ 1  4  9 16 25]
Square Root Array: [1.         1.41421356 1.73205081 2.         2.23606798]
```

::right::

**Explanation:**

* `arr ** 2` squares each element of the array without using explicit loops.
* `np.sqrt(arr)` calculates the square root of each element using the NumPy `sqrt` function.
* Vectorization makes NumPy operations much faster than using traditional Python loops.
* Pandas leverages NumPy's vectorization for efficient data manipulation.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's explore NumPy's universal functions (ufuncs).

::left::

**5. Universal Functions (ufuncs):**

* Universal functions are NumPy functions that operate element-wise on arrays.
* They are highly optimized and efficient.
* Examples include `np.sin()`, `np.cos()`, `np.exp()`, and `np.log()`.

::right::

**Example: Universal Functions (ufuncs)**

```python
import numpy as np

# Sample array
arr = np.array([0, np.pi/2, np.pi])

# Using ufuncs
sin_arr = np.sin(arr)
print("Sine Array:", sin_arr)

exp_arr = np.exp(arr)
print("Exponential Array:", exp_arr)
```

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's see the output of using NumPy's universal functions (ufuncs).

::left::

**Output & Explanation (Slide 10):**
```bash
Sine Array: [0. 1. 0.]
Exponential Array: [1.         4.81047738 23.14069263]
```

::right::

**Explanation:**

* `np.sin(arr)` calculates the sine of each element in the array.
* `np.exp(arr)` calculates the exponential of each element.
* Universal functions (ufuncs) are highly optimized for element-wise operations, making them fast and efficient.
* These functions are extensively used within pandas for numerical computations.

---
layout: two-cols-header
transition: fade
---
### 🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's summarize the key concepts of NumPy for pandas users.

::left::

**6. Recap of Key Concepts:**

* **NumPy Arrays:** Creating and manipulating arrays using `np.array()`.
* **Array Indexing and Slicing:** Accessing and modifying array elements.
* **Array Operations:** Performing element-wise mathematical operations.
* **Vectorization:** Applying operations to entire arrays for efficiency.
* **Universal Functions (ufuncs):** Using optimized NumPy functions for element-wise operations.

::right::

**Key Takeaways:**

* NumPy arrays are the foundation of pandas Series and DataFrames.
* Understanding NumPy operations is crucial for efficient data manipulation in pandas.
* Vectorization and ufuncs significantly improve performance.

---
layout: two-cols-header
transition: fade
---
###   🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

1.  Create a 1D NumPy array with values from 10 to 20.
2.  Create a 2D NumPy array with dimensions 3x3 and fill it with zeros.
3.  Access the element at the second row and second column of the 2D array.
4.  Slice the first row and the last column of the 2D array.
5.  Perform element-wise addition of two 1D arrays.
6.  Multiply a 1D array by a scalar value.
7.  Calculate the square root of each element in a 1D array using `np.sqrt()`.

::right::

**Tips:**

* Use `np.array()` to create arrays.
* Practice indexing and slicing with different examples.
* Experiment with various NumPy operations and ufuncs.

---
layout: two-cols-header
transition: fade
---
###   🔢 Introduction to NumPy for pandas Users 🚀

**Essential NumPy Array Operations and Concepts**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we reviewed essential NumPy array operations and concepts that are frequently used in pandas workflows. We covered creating arrays, indexing, slicing, array operations, vectorization, and universal functions.

::right::

**Next Steps:**

* Practice with different NumPy array operations and functions.
* Explore advanced NumPy concepts like broadcasting and array manipulation.
* Apply NumPy techniques to optimize pandas workflows.

Keep practicing and refining your skills!

