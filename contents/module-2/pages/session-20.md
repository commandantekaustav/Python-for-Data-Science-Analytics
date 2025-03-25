---
layout: two-cols-header
transition: fade
---
### 🚀 Session 20: Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

In this session, we'll delve into advanced NumPy techniques like broadcasting and vectorization, which are crucial for efficient data manipulation and performance optimization in pandas. We'll focus on practical applications to speed up pandas operations.

::left::

**Why Advanced NumPy?**

* NumPy's advanced features significantly enhance pandas performance.
* Vectorization and broadcasting allow for efficient operations on large datasets.
* Mastering these techniques is essential for optimizing pandas workflows.

::right::

**Key Concepts:**

* **Broadcasting:** Performing operations on arrays with different shapes.
* **Vectorization:** Applying operations to entire arrays for speed.
* **Performance Optimization:** Using NumPy for efficient pandas operations.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's begin by understanding broadcasting.

::left::

**1. Broadcasting:**

* Broadcasting allows NumPy to perform arithmetic operations on arrays with different shapes.
* NumPy automatically expands the smaller array to match the shape of the larger array.
* This avoids the need for explicit loops and improves performance.

::right::

**Example: Broadcasting**

```python
import numpy as np

# Sample arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([[10], [20], [30]])

# Broadcasting addition
result = arr1 + arr2
print("Broadcasting Result:\n", result)
```

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's see the output of broadcasting.

::left::

**Output & Explanation (Slide 2):**
```bash
Broadcasting Result:
 [[11 12 13]
 [21 22 23]
 [31 32 33]]
```

::right::

**Explanation:**

* `arr1` (1D array) and `arr2` (2D array) have different shapes.
* NumPy broadcasts `arr1` to match the shape of `arr2`, effectively adding `[1, 2, 3]` to each row of `arr2`.
* Broadcasting simplifies operations on arrays with different shapes and improves performance.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's delve deeper into vectorization.

::left::

**2. Vectorization for Speed:**

* Vectorization applies operations to entire arrays, eliminating the need for explicit loops.
* NumPy operations are vectorized by default, making them much faster than Python loops.
* This is crucial for efficient data manipulation in pandas.

::right::

**Example: Vectorization vs. Loop**

```python
import numpy as np
import time

# Sample array
arr = np.random.rand(1000000)

# Vectorized operation
start_vec = time.time()
squared_arr_vec = arr ** 2
end_vec = time.time()
print("Vectorized Time:", end_vec - start_vec)

# Loop operation
start_loop = time.time()
squared_arr_loop = [x ** 2 for x in arr]
end_loop = time.time()
print("Loop Time:", end_loop - start_loop)
```

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's see the output of the vectorization vs. loop example.

::left::

**Output & Explanation (Slide 4):**
```bash
Vectorized Time: 0.002 seconds (approx.)
Loop Time: 0.3 seconds (approx.)
```

::right::

**Explanation:**

* The vectorized operation (`arr ** 2`) is significantly faster than the loop operation.
* NumPy's vectorization eliminates the overhead of Python loops.
* This demonstrates the performance benefits of using NumPy's vectorized operations in pandas.
* The exact times can vary depending on hardware, but the vectorized version is always much faster.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's explore how to use broadcasting with pandas.

::left::

**3. Broadcasting with pandas:**

* Broadcasting is used internally by pandas for many operations.
* You can leverage broadcasting to perform efficient operations on pandas Series and DataFrames.

::right::

**Example: Broadcasting with pandas Series**

```python
import pandas as pd
import numpy as np

# Sample Series
series = pd.Series([1, 2, 3, 4, 5])

# Broadcasting addition
result = series + 10
print("Broadcasting with Series:\n", result)
```

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's see the output of broadcasting with pandas Series.

::left::

**Output & Explanation (Slide 6):**
```bash
Broadcasting with Series:
 0    11
1    12
2    13
3    14
4    15
dtype: int64
```

::right::

**Explanation:**

* `series + 10` adds the scalar value 10 to each element of the pandas Series.
* This is an example of broadcasting, where the scalar value is effectively broadcasted to match the shape of the Series.
* pandas leverages NumPy's broadcasting capabilities for efficient Series and DataFrame operations.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's explore how to use broadcasting with pandas DataFrames.

::left::

**4. Broadcasting with pandas DataFrames:**

* Broadcasting can be used to perform operations between DataFrames and Series or scalar values.
* This allows for efficient element-wise operations across rows or columns.

::right::

**Example: Broadcasting with pandas DataFrame**

```python
import pandas as pd
import numpy as np

# Sample DataFrame
df = pd.DataFrame(np.arange(12).reshape(3, 4), columns=['A', 'B', 'C', 'D'])
print("Original DataFrame:\n", df)

# Broadcasting addition
result = df + [1, 2, 3, 4]
print("\nBroadcasting with DataFrame:\n", result)
```

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's see the output of broadcasting with pandas DataFrames.

::left::

**Output & Explanation (Slide 8):**
```bash
Original DataFrame:
    A   B   C   D
0   0   1   2   3
1   4   5   6   7
2   8   9  10  11

Broadcasting with DataFrame:
    A   B   C   D
0   1   3   5   7
1   5   7   9  11
2   9  11  13  15
```

::right::

**Explanation:**

* `df + [1, 2, 3, 4]` adds the list `[1, 2, 3, 4]` to each row of the DataFrame.
* This demonstrates how pandas leverages broadcasting to perform efficient operations on DataFrames.
* The list `[1, 2, 3, 4]` is broadcasted to match the shape of the DataFrame, adding each element to the corresponding column.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's explore performance optimization techniques using NumPy.

::left::

**5. Performance Optimization:**

* NumPy's vectorized operations are significantly faster than Python loops.
* Using NumPy functions instead of custom loops improves performance.
* Broadcasting allows for efficient operations on arrays with different shapes.

::right::

**Example: Performance Optimization with NumPy**

```python
import pandas as pd
import numpy as np
import time

# Sample Series
series = pd.Series(np.random.rand(1000000))

# Using NumPy's vectorized operation
start_vec = time.time()
result_vec = np.sin(series)
end_vec = time.time()
print("Vectorized Time:", end_vec - start_vec)

# Using a Python loop (less efficient)
start_loop = time.time()
result_loop = [np.sin(x) for x in series]
end_loop = time.time()
print("Loop Time:", end_loop - start_loop)
```

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's see the output of the performance optimization example.

::left::

**Output & Explanation (Slide 10):**
```bash
Vectorized Time: 0.01 seconds (approx.)
Loop Time: 0.5 seconds (approx.)
```

::right::

**Explanation:**

* The vectorized operation using `np.sin(series)` is significantly faster than the loop implementation.
* NumPy's universal functions (ufuncs) are highly optimized for element-wise operations.
* This demonstrates the performance benefits of using NumPy for efficient pandas operations.
* The exact times can vary depending on hardware, but the vectorized version is always much faster.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's summarize the key concepts of advanced NumPy techniques for pandas.

::left::

**6. Recap of Key Concepts:**

* **Broadcasting:** Performing operations on arrays with different shapes.
* **Vectorization:** Applying operations to entire arrays for speed.
* **Broadcasting with pandas:** Using broadcasting for efficient Series and DataFrame operations.
* **Performance Optimization:** Using NumPy's vectorized operations for faster computations.
* **Universal Functions (ufuncs):** Leveraging NumPy's optimized functions.

::right::

**Key Takeaways:**

* NumPy's broadcasting and vectorization are essential for optimizing pandas workflows.
* Understanding these techniques allows for efficient manipulation of large datasets.
* Leveraging NumPy's capabilities significantly improves the performance of pandas operations.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Let's do a short exercise to solidify your understanding.

::left::

**7. Exercise:**

1.  Create two NumPy arrays with different shapes and perform a broadcasting addition.
2.  Compare the performance of a vectorized operation and a loop operation on a large NumPy array.
3.  Perform a broadcasting operation between a pandas DataFrame and a pandas Series.
4.  Use a NumPy universal function (ufunc) to perform an element-wise operation on a pandas Series.
5.  Optimize a pandas operation using NumPy's vectorized functions.

::right::

**Tips:**

* Experiment with different array shapes and broadcasting operations.
* Use `time.time()` to measure the performance of vectorized and loop operations.
* Practice using NumPy ufuncs with pandas Series and DataFrames.
* Identify and optimize slow pandas operations using NumPy techniques.

---
layout: two-cols-header
transition: fade
---
### 🚀 Advanced NumPy Techniques for pandas - Vectorization and Broadcasting ⚡

**Efficient Data Manipulation and Performance Optimization**

Congratulations! You've reached the end of this session.

::left::

**8. Conclusion:**

In this session, we explored advanced NumPy techniques like broadcasting and vectorization, which are crucial for efficient data manipulation and performance optimization in pandas. We covered practical applications and performance optimization techniques.

::right::

**Next Steps:**

* Practice with different broadcasting and vectorization scenarios.
* Apply these techniques to optimize your pandas workflows.
* Explore advanced NumPy features like array manipulation and linear algebra.

Keep practicing and refining your skills!