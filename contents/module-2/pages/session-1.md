---
theme: seriph
transition: zoom
---

## Introduction to NumPy 🚀

# Module 2: Data Manipulation with pandas and NumPy

### Introduction to NumPy

**Welcome to Module 2! In this module, we'll embark on a deep dive into data manipulation using two of Python's most powerful libraries: NumPy and pandas.**

**Session 1 kicks off with NumPy, the fundamental package for numerical computing in Python.**
---

## Introduction to NumPy 🚀

<v-clicks> 

### **What is NumPy?** 

</v-clicks>

<v-clicks>

*   **Numerical Python:**  "NumPy" stands for **Numerical Python**. It's the core library for performing efficient numerical computations in Python.
*   **Foundation of Data Science:** NumPy is the bedrock upon which many other scientific and data science libraries in Python are built, including pandas, SciPy, Matplotlib, and Scikit-learn.
*   **Efficiency and Performance:** NumPy is designed for speed. It provides highly optimized data structures and functions for numerical operations, often performing orders of magnitude faster than standard Python lists for numerical tasks.
*   **Core Data Structure: NumPy Array (`ndarray`)**:  NumPy's central feature is the **`ndarray` (N-dimensional array)**.  These arrays are homogeneous, multi-dimensional containers for numerical data, enabling efficient storage and operations.

</v-clicks>
---

## Introduction to NumPy 🚀

<v-click>

### **Why is NumPy Essential?**

</v-click>

<v-clicks>

*   **Speed for Numerical Tasks:**  NumPy arrays and functions are implemented in compiled languages (like C and Fortran) under the hood, making them incredibly fast for numerical computations.
*   **Concise and Expressive Syntax:** NumPy provides a high-level, intuitive syntax for performing complex numerical operations with minimal code.
*   **Foundation for Data Analysis:**  Understanding NumPy is crucial for effectively using pandas and other data analysis tools in Python.
*   **Industry Standard for Data Science:** NumPy is a cornerstone of the Python data science ecosystem and is widely used in industry and academia.

</v-clicks> 
<v-click>

**In this session, we'll start our journey into the world of NumPy and lay the foundation for mastering data manipulation in Python!**

</v-click>

---

## NumPy Arrays (`ndarray`) - Core Data Structure 🧱

<v-click>

**The cornerstone of NumPy is the `ndarray` (N-dimensional array). Let's understand what NumPy arrays are and why they are so important.**

</v-click>

<v-click>

### **What is a NumPy Array (`ndarray`)?**

</v-click>

<v-clicks>

*   **N-dimensional Array:**  `ndarray` stands for N-dimensional array. It can represent arrays of any number of dimensions (1D, 2D, 3D, ... and beyond).
*   **Homogeneous Data:**  All elements in a NumPy array must be of the **same data type** (e.g., all integers, all floats, all booleans). This homogeneity is a key reason for NumPy's efficiency.
*   **Contiguous Memory:** NumPy arrays are stored in **contiguous blocks of memory**. This allows for highly optimized access and processing of array elements, which is significantly faster than accessing elements scattered in memory as with Python lists.
*   **Fixed Size (Usually):**  NumPy arrays typically have a fixed size upon creation (though you can reshape or create new arrays). This fixed size, along with contiguous memory, contributes to performance.
</v-clicks>
---
layout: two-cols-header
---

## NumPy Arrays (`ndarray`) - Core Data Structure 🧱

<v-clicks>

**The cornerstone of NumPy is the `ndarray` (N-dimensional array). Let's understand what NumPy arrays are and why they are so important.**

**Visualizing NumPy Arrays:**
</v-clicks>
::left::

<v-clicks>

*   **1-Dimensional Array (Vector):**  Think of it like a list, but much more powerful.
    ```
    [10, 20, 30, 40, 50]  (Shape: (5,))
    ```
*   **2-Dimensional Array (Matrix):**  Like a table or spreadsheet with rows and columns.
    ```
    [[ 1  2  3]
     [ 4  5  6]
     [ 7  8  9]]       
     
    (Shape: (3, 3)) - 3 rows, 3 columns
    ```
</v-clicks>

::right::

<v-clicks>

*   **3-Dimensional Array (Tensor):**  Imagine a cube or stack of matrices.
    ```
    [[[ 1  2]  [ 3  4]]
     [[ 5  6]  [ 7  8]]
     [[ 9 10]  [11 12]]]  
     
     (Shape: (3, 2, 2)) - 3 "depths", 2 rows, 2 columns
    ```
</v-clicks>

---

## NumPy Arrays (`ndarray`) - Core Data Structure 🧱

<v-clicks>

**The cornerstone of NumPy is the `ndarray` (N-dimensional array). Let's understand what NumPy arrays are and why they are so important.**

**Key Advantages of NumPy Arrays:**
</v-clicks>

<v-clicks>

*   **Performance:**  Faster numerical operations compared to Python lists due to homogeneity and contiguous memory.
*   **Vectorization:**  NumPy enables vectorized operations, applying operations to entire arrays at once, which is highly efficient.
*   **Broadcasting:**  NumPy's broadcasting rules allow for efficient operations on arrays with different shapes (under certain conditions).
*   **Rich Functionality:**  NumPy provides a vast library of mathematical, statistical, linear algebra, and other functions optimized for arrays.
</v-clicks>

<v-click>

**NumPy arrays are the workhorse for numerical data in Python. Understanding them is fundamental to mastering data manipulation with NumPy and pandas!**

</v-click>


---

## NumPy vs. Python Lists - Why NumPy? 🚀

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

<v-clicks>

### **NumPy vs. Python Lists: Why Choose NumPy?**

**Python lists are versatile, but for numerical computations, NumPy arrays offer significant advantages. Let's explore why NumPy arrays are often the preferred choice for numerical tasks.**

**Key Advantages of NumPy Arrays over Python Lists:**
</v-clicks>

<v-clicks depth="2">

*   **1. Performance (Speed):**
    *   **Compiled Code:** NumPy operations are implemented in highly optimized, compiled languages like C and Fortran, making them significantly faster than equivalent Python list operations (which are interpreted).
    *   **Contiguous Memory:** NumPy arrays store elements in contiguous memory blocks, allowing for efficient access and vectorized operations. Python lists, in contrast, store elements as pointers to objects scattered in memory.
    *   **Homogeneous Data Types:** NumPy arrays enforce homogeneous data types, which allows for further optimizations. Python lists can hold elements of mixed types, adding overhead.

</v-clicks>
---

## NumPy vs. Python Lists - Why NumPy? 🚀

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

### **NumPy vs. Python Lists: Why Choose NumPy?**

**Python lists are versatile, but for numerical computations, NumPy arrays offer significant advantages. Let's explore why NumPy arrays are often the preferred choice for numerical tasks.**

**Key Advantages of NumPy Arrays over Python Lists:**

<v-clicks depth="2">

*   **2. Functionality and Features:**
    *   **Vectorized Operations:** NumPy enables vectorized operations, allowing you to perform element-wise operations on entire arrays with a single, concise syntax (e.g., `array1 + array2`, `array * 2`). Python lists require explicit loops for element-wise operations.
    *   **Broadcasting:** NumPy's broadcasting capabilities allow for efficient operations on arrays of different shapes (under compatible dimensions), simplifying many numerical tasks.
    *   **Rich Library of Functions:** NumPy provides a vast collection of highly optimized mathematical, statistical, linear algebra, and other functions specifically designed for array operations. Python lists have limited built-in numerical functionality.

</v-clicks>
---

## NumPy vs. Python Lists - Why NumPy? 🚀

### **NumPy vs. Python Lists: Why Choose NumPy?**

**Python lists are versatile, but for numerical computations, NumPy arrays offer significant advantages. Let's explore why NumPy arrays are often the preferred choice for numerical tasks.**

**Key Advantages of NumPy Arrays over Python Lists:**

<v-clicks depth="2">

*   **3. Memory Efficiency:**
    *   **Homogeneous Data Storage:** Storing elements of the same data type in contiguous memory can be more memory-efficient than Python lists, especially for large numerical datasets.
    *   **Less Overhead:** NumPy arrays have less per-element overhead compared to Python lists, which store type information and other metadata for each element.
</v-clicks>

<v-click>

**In essence, NumPy arrays are specialized data structures designed and optimized for numerical computations. For tasks involving numerical data and mathematical operations, NumPy arrays provide superior performance, functionality, and often memory efficiency compared to general-purpose Python lists.**

</v-click>


---
layout: two-cols
---

## Creating NumPy Arrays - Various Methods 🛠️

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

### Creating NumPy Arrays

<v-clicks>

**Now, let's explore different ways to create NumPy arrays. NumPy provides a variety of functions for array creation, offering flexibility and control over array initialization.**

**Common Array Creation Methods:**

</v-clicks>

<v-clicks depth="2">

*   **1. Using `np.array()` - From Python Lists or Tuples:**
    *   The most basic way to create a NumPy array is from existing Python lists or tuples using `np.array()`.
</v-clicks>

::right::

<v-click>

```python
import numpy as np

# From a Python list
list1 = [1, 2, 3, 4, 5]
array1 = np.array(list1)
print("Array from list:", array1) # Output: [1 2 3 4 5]

# From a nested list (2D array)
list2d = [[1, 2, 3], [4, 5, 6]]
array2d = np.array(list2d)
print("2D array from list:\n", array2d)
# Output:
# [[1 2 3]
#  [4 5 6]]

# From a tuple
tuple1 = (10, 20, 30)
array_tuple = np.array(tuple1)
print("Array from tuple:", array_tuple) 
# Output: [10 20 30]
```
</v-click>
---
layout: two-cols
---

## Creating NumPy Arrays - Various Methods 🛠️

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

### Creating NumPy Arrays

<v-click>

<!-- **Now, let's explore different ways to create NumPy arrays. NumPy provides a variety of functions for array creation, offering flexibility and control over array initialization.** -->

**Common Array Creation Methods:**

</v-click>

<v-clicks depth="2">

*   **2. Using `np.zeros()` - Array of Zeros:**
    Creates an array filled with zeros of a specified shape and data type. Useful for initializing arrays.

    ```python
    # Shape (3 rows, 4 columns), default dtype float
    zeros_array = np.zeros((3, 4)) 
    
    print("Array of zeros:\n", zeros_array)
    # Output:
    # [[0. 0. 0. 0.]
    #  [0. 0. 0. 0.]
    #  [0. 0. 0. 0.]]
    ```
</v-clicks>

::right::

<v-clicks depth="2">

*   **3. Using `np.ones()` - Array of Ones:**
    Creates an array filled with ones, similar to `np.zeros()`.

    ```python
    # Shape (2x2), dtype integer
    ones_array = np.ones((2, 2), dtype=int) 
    print("Array of ones (integers):\n", ones_array)
    # Output:
    # [[1 1]
    #  [1 1]]
    ```

*   **4. Using `np.arange()` - Range-like Array:**
    Similar to Python's `range()`, creates an array with evenly spaced values within a given range.

    ```python
    # Start=0, Stop=10 (exclusive), Step=2
    arange_array = np.arange(0, 10, 2) 

    print("Array using arange:", arange_array) 
    # Output: [0 2 4 6 8]
    ```
</v-clicks>

---

## Creating NumPy Arrays - Various Methods 🛠️

### Creating NumPy Arrays

**Common Array Creation Methods:**

<v-clicks>

*   **5. Using `np.linspace()` - Evenly Spaced Values:**
    *   Creates an array with a specified number of evenly spaced values over a given interval (start and end points are inclusive).

    ```python
    linspace_array = np.linspace(0, 1, 5) # Start=0, Stop=1 (inclusive), 5 values
    print("Array using linspace:", linspace_array) # Output: [0.   0.25 0.5  0.75 1.  ]
    ```

**These are just some of the fundamental ways to create NumPy arrays. NumPy offers many more creation functions for various purposes. Understanding these methods is the first step in working with NumPy!**

</v-clicks>
---

## NumPy Array Attributes - Understanding Array Structure 📐

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

### NumPy Array Attributes: Understanding Structure

**Once you create NumPy arrays, it's important to understand their attributes. Attributes provide information about the array's shape, data type, and other structural properties.**

<v-clicks>

**Key NumPy Array Attributes:**

*   **1. `shape`:**  *(Tuple)* -  The dimensions of the array. It's a tuple indicating the size of the array along each dimension. For a 2D array, it's `(rows, columns)`.

    ```python
    import numpy as np

    array_2d = np.array([[1, 2, 3], [4, 5, 6]])
    print("Array:\n", array_2d)
    print("Shape:", array_2d.shape) # Output: (2, 3) - 2 rows, 3 columns

    array_1d = np.array([1, 2, 3, 4, 5])
    print("Array:", array_1d)
    print("Shape:", array_1d.shape) # Output: (5,) - 1 dimension, 5 elements
    ```
</v-clicks>
---
layout: two-cols
---

### NumPy Array Attributes: Understanding Structure

<!-- **Once you create NumPy arrays, it's important to understand their attributes. Attributes provide information about the array's shape, data type, and other structural properties.** -->

**Key NumPy Array Attributes:**

<v-clicks>

*   **2. `dtype`:** *(NumPy data type object)* -  Describes the data type of the elements in the array (e.g., `int64`, `float64`, `object`). All elements in a NumPy array have the same `dtype`.

    ```python
    int_array = np.array([1, 2, 3], dtype=np.int32)
    print("Array:", int_array)
    print("Data type:", int_array.dtype) 
    # Output: int32

    float_array = np.array([1.0, 2.5, 3.7])
    print("Array:", float_array)
    print("Data type:", float_array.dtype) 
    # Output: float64
    ```
</v-clicks>

::right::

<v-clicks>

*   **3. `ndim`:** *(Integer)* - The number of dimensions (axes) of the array. 1 for 1D arrays, 2 for 2D arrays, etc.

    ```python
    # 3D array
    array_3d = np.array([   [[1, 2], [3, 4]], 
                            [[5, 6], [7, 8]]]) 
    print("Array (3D):\n", array_3d)
    print("Number of dimensions:", array_3d.ndim) # : 3

    print("Dimensions of array_2d:", array_2d.ndim) # : 2
    print("Dimensions of array_1d:", array_1d.ndim) # : 1
    ```

*   **4. `size`:** *(Integer)* - The total number of elements in the array (product of the elements in `shape`).

    ```python
    print("Size of array_2d:", array_2d.size) # : 2 * 3
    print("Size of array_1d:", array_1d.size) # : 5
    print("Size of array_3d:", array_3d.size) # 2 * 2 * 2
    ```
</v-clicks>

---

### NumPy Array Attributes: Understanding Structure

<!-- **Once you create NumPy arrays, it's important to understand their attributes. Attributes provide information about the array's shape, data type, and other structural properties.** -->

**Key NumPy Array Attributes:**

<v-clicks>

*   **5. `itemsize`:** *(Integer)* - The size (in bytes) of each element in the array.  This depends on the `dtype`.

    ```python
    print("Item size of int_array (int32):", int_array.itemsize, "bytes") # Output: 4 bytes (for int32)
    print("Item size of float_array (float64):", float_array.itemsize, "bytes") # Output: 8 bytes (for float64)
    ```

**Understanding these attributes is essential for inspecting and manipulating NumPy arrays effectively. They provide key information about the array's structure and data organization!**

</v-clicks>

---

## NumPy Data Types (`dtype`) - Specifying and Understanding 🗂️

### **NumPy Data Types (`dtype`)**

<v-clicks>

**The `dtype` attribute of a NumPy array is crucial. It specifies the data type of the elements stored in the array. NumPy offers a rich set of data types, allowing you to efficiently represent various kinds of numerical and other data.**

**Why `dtype` Matters:**

</v-clicks>

<v-clicks>

*   **Homogeneity:** NumPy arrays are *homogeneous*, meaning all elements in an array must be of the same `dtype`.
*   **Memory Efficiency:** Choosing the appropriate `dtype` can significantly impact memory usage, especially for large arrays. Using smaller integer types (e.g., `int8`) when possible saves memory.
*   **Performance:** NumPy operations are optimized for specific data types. Using the correct `dtype` can improve performance.
*   **Data Interpretation:** `dtype` determines how the data in the array is interpreted (e.g., as integers, floating-point numbers, booleans, strings).
</v-clicks>
---

## NumPy Data Types (`dtype`) - Specifying and Understanding 🗂️

**Common NumPy Data Types (`dtype` options):**

*   **Integers:**
    *   `int8`, `int16`, `int32`, `int64`: Signed integers of different bit sizes (8, 16, 32, 64 bits).
    *   `uint8`, `uint16`, `uint32`, `uint64`: Unsigned integers (non-negative).
    ```python
    import numpy as np
    int_array_32 = np.array([1, 2, 3], dtype=np.int32)
    print("int32 array:", int_array_32, ", dtype:", int_array_32.dtype) # dtype: int32
    uint_array_8 = np.array([0, 255], dtype=np.uint8) # 0 to 255 range
    print("uint8 array:", uint_array_8, ", dtype:", uint_array_8.dtype)   # dtype: uint8
    ```
---

## NumPy Data Types (`dtype`) - Specifying and Understanding 🗂️

**Common NumPy Data Types (`dtype` options):**

*   **Floating-Point Numbers (Floats):**
    *   `float16`, `float32`, `float64`, `float128`: Floating-point numbers of different precision (and memory usage). `float64` is the standard double-precision float in Python.
    ```python
    float_array_32 = np.array([1.5, 2.7], dtype=np.float32)
    print("float32 array:", float_array_32, ", dtype:", float_array_32.dtype) # dtype: float32
    float_array_64 = np.array([1.5, 2.7], dtype=np.float64) # Default float
    print("float64 array:", float_array_64, ", dtype:", float_array_64.dtype) # dtype: float64
    ```

*   **Booleans:**
    *   `bool_` or `bool`: Represents boolean values (True or False).
    ```python
    bool_array = np.array([True, False, True], dtype=bool)
    print("Boolean array:", bool_array, ", dtype:", bool_array.dtype) # dtype: bool
    ```
---

## NumPy Data Types (`dtype`) - Specifying and Understanding 🗂️

**Common NumPy Data Types (`dtype` options):**

*   **Strings (Unicode):**
    *   `str_` or `U<number>` (e.g., `U3`, `U10`): Fixed-length strings. `U` followed by a number indicates the maximum length of the string (in Unicode characters).
    ```python
    string_array_U3 = np.array(['apple', 'banana', 'kiwi'], dtype='U3') # Max length 3 chars
    print("String array (U3):", string_array_U3, ", dtype:", string_array_U3.dtype) # dtype: <U3, truncates!
    string_array_str = np.array(['apple', 'banana', 'kiwi'], dtype=str)   # Variable length strings
    
    # dtype: <U6 (adjusts to longest string)
    print("String array (str):", string_array_str, ", dtype:", string_array_str.dtype) 
    ```

*   **Object Type:**
    *   `object`: Can hold arbitrary Python objects (like lists, dictionaries, mixed types). Using `object` dtype sacrifices some of NumPy's performance benefits and homogeneity. Use sparingly if possible.
---

## NumPy Data Types (`dtype`) - Specifying and Understanding 🗂️

**Specifying `dtype` During Array Creation:**

You can explicitly specify the `dtype` when creating arrays using `np.array()`, `np.zeros()`, `np.ones()`, etc., using the `dtype` argument:

```python
zeros_int_array = np.zeros((2, 3), dtype=int) # Array of zeros with integer dtype
ones_bool_array = np.ones(5, dtype=bool)      # Array of ones with boolean dtype
arange_float_array = np.arange(5, dtype=float) # arange with float dtype
```

<v-click>

**Choosing the Right `dtype`:**
</v-click>

<v-clicks>

- Consider the type of data you need to store (integers, floats, text, booleans).
- Think about memory usage - use smaller types (e.g., int8, float32) when appropriate for large datasets.
- NumPy will often infer a suitable dtype if you don't specify it, but it's good practice to be explicit for clarity and control, especially for performance-critical applications.
</v-clicks>

<v-click>

**Understanding and correctly specifying dtype is fundamental for efficient and accurate numerical computing with NumPy!**

</v-click>

---
layout: two-cols
---

## NumPy Array Operations - Basic Arithmetic ➕

<!-- # Data Manipulation with pandas and NumPy -->

<!-- ### NumPy Array Operations: Basic Arithmetic -->

**NumPy arrays enable element-wise arithmetic operations, making numerical computations concise and efficient. Basic arithmetic operations work intuitively on NumPy arrays.**

**Element-wise Arithmetic Operations:**

NumPy allows you to perform arithmetic operations directly on arrays. These operations are applied *element-wise*.
::right::
*   **Addition (`+`)**: Adds corresponding elements of two arrays (or array and scalar).

    ```python
    import numpy as np

    array1 = np.array([1, 2, 3])
    array2 = np.array([4, 5, 6])

    # Element-wise addition
    sum_array = array1 + array2  
    
    # Output: [5 7 9]
    print("Array Addition (array1 + array2):", sum_array) 

    # Scalar addition (broadcasts 10 to each element)
    scalar_add = array1 + 10     
    
    # Output: [11 12 13]
    print("Scalar Addition (array1 + 10):", scalar_add)    
    ```
---
layout: two-cols
---

## NumPy Array Operations - Basic Arithmetic ➕

*   **Subtraction (`-`)**: Subtracts elements (element-wise).

    ```python
    # Element-wise subtraction
    diff_array = array2 - array1  

    # [3 3 3]
    print("Array Subtraction (array2 - array1):", 
                                    diff_array) 

    scalar_sub = array2 - 2      # Scalar subtraction
    print("Scalar Subtraction (array2 - 2):", 
                                    scalar_sub) #  [2 3 4]
    ```
::right::
*   **Multiplication (`*`)**: Element-wise multiplication.

    ```python
    # Element-wise multiplication
    product_array = array1 * array2 
    # Output: [ 4 10 18]
    print("Array Multiplication (array1 * array2):", 
                                product_array) 

    scalar_mult = array1 * 3       # Scalar multiplication
    print("Scalar Multiplication (array1 * 3):", 
                                scalar_mult) # : [3 6 9]
    ```
---
layout: two-cols
---

## NumPy Array Operations - Basic Arithmetic ➕

*   **Division (`/`)**: Element-wise division.

    ```python
    # Element-wise division (float result)
    division_array = array2 / array1 

    # Output: [4.         2.5        2.        ]
    print("Array Division (array2 / array1):", 
                            division_array) 

    # Scalar division
    scalar_div = array2 / 2        
    
    # Output: [2.5 3.  3.5]
    print("Scalar Division (array2 / 2):", scalar_div)       
    ```
::right::
<br><br>

*   **Exponentiation (`**`)**: Element-wise exponentiation.

    ```python
    # Element-wise square (array1 to the power of 2)
    power_array = array1 ** 2      
    print("Array Exponentiation (array1 ** 2):", 
                            power_array) # Output: [1 4 9]
    ```
<br> <br>

**These basic arithmetic operations are fundamental building blocks for more complex numerical computations with NumPy. They are applied very efficiently to entire arrays without explicit loops, thanks to NumPy's vectorized nature!**

---

## NumPy Mathematical Functions 🧮

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

<!-- ### NumPy Mathematical Functions -->

**NumPy provides a wide range of built-in mathematical functions that operate element-wise on arrays. These functions are highly optimized and cover various mathematical operations.**

**Common Mathematical Functions in NumPy:**

*   **1. Trigonometric Functions:** (`np.sin()`, `np.cos()`, `np.tan()`, etc.)
    *   Calculate trigonometric values element-wise (sine, cosine, tangent, etc.).

    ```python
    import numpy as np

    angles = np.array([0, np.pi/2, np.pi]) # Angles in radians (0, 90, 180 degrees)

    sin_values = np.sin(angles)
    print("Sine values:", sin_values) # Output: [0.000e+00 1.000e+00 1.225e-16] (approx. [0, 1, 0])

    cos_values = np.cos(angles)
    print("Cosine values:", cos_values) # Output: [ 1.000e+00  6.123e-17 -1.000e+00] (approx. [1, 0, -1])
    ```
---

## NumPy Mathematical Functions 🧮

**NumPy provides a wide range of built-in mathematical functions that operate element-wise on arrays. These functions are highly optimized and cover various mathematical operations.**

**Common Mathematical Functions in NumPy:**

*   **2. Exponential and Logarithmic Functions:** (`np.exp()`, `np.log()`, `np.log10()`, etc.)
    *   Calculate exponentials, natural logarithms, base-10 logarithms, etc., element-wise.

    ```python
    exp_array = np.array([0, 1, 2])
    exp_values = np.exp(exp_array) # e^0, e^1, e^2
    print("Exponential values (exp):", exp_values) # Output: [1.         2.718...  7.389...]

    log_array = np.array([1, np.e, 10]) # np.e is Euler's number (base of natural log)
    log_values = np.log(log_array)       # Natural logarithm (base e)
    print("Natural Log values (log):", log_values)   # Output: [0. 1. 2.302...] (approx. [0, 1, log(10)])
    ```
---

## NumPy Mathematical Functions 🧮

**NumPy provides a wide range of built-in mathematical functions that operate element-wise on arrays. These functions are highly optimized and cover various mathematical operations.**

**Common Mathematical Functions in NumPy:**

*   **3. Aggregation Functions (discussed in detail later):** (`np.sum()`, `np.mean()`, `np.median()`, `np.std()`, etc.)
    *   Calculate sums, means, medians, standard deviations, etc., over array elements.  *(We'll cover these more in a dedicated session, but mentioning them here as part of NumPy's math toolkit).*

    ```python
    data_array = np.array([1, 2, 3, 4, 5])

    array_sum = np.sum(data_array)
    print("Sum of array:", array_sum)       # Output: 15

    array_mean = np.mean(data_array)
    print("Mean of array:", array_mean)      # Output: 3.0
    ```
---

## NumPy Mathematical Functions 🧮

**NumPy provides a wide range of built-in mathematical functions that operate element-wise on arrays. These functions are highly optimized and cover various mathematical operations.**

**Common Mathematical Functions in NumPy:**

*   **4. Rounding Functions:** (`np.round()`, `np.floor()`, `np.ceil()`, etc.)
    *   Round array elements to the nearest integer, floor (round down), ceil (round up), etc.

    ```python
    float_data = np.array([1.2, 2.5, 3.8, -1.5])

    rounded_array = np.round(float_data) # Round to nearest integer
    print("Rounded array:", rounded_array)   # Output: [ 1.  2.  4. -2.]

    floor_array = np.floor(float_data)   # Floor (round down)
    print("Floor array:", floor_array)     # Output: [ 1.  2.  3. -2.]
    ```
---

## NumPy Mathematical Functions 🧮

**NumPy provides a wide range of built-in mathematical functions that operate element-wise on arrays. These functions are highly optimized and cover various mathematical operations.**

**Common Mathematical Functions in NumPy:**

*   **5. Absolute Value:** (`np.abs()`)
    *   Calculate the absolute value of each element.

    ```python
    negative_array = np.array([-1, 2, -3, 4])
    abs_array = np.abs(negative_array)
    print("Absolute values:", abs_array)    # Output: [1 2 3 4]
    ```

**NumPy's mathematical functions are highly versatile and efficient. They are essential tools for performing numerical analysis, scientific computing, and data transformations using NumPy arrays!**

---
layout: two-cols-header
---

## NumPy Comparison and Logical Operations 🚦

<!-- ### NumPy Comparison and Logical Operations -->

**NumPy allows for element-wise comparison and logical operations on arrays. These operations are crucial for filtering data, creating masks, and implementing conditional logic in numerical computations.**
::left::
**Comparison Operations (Element-wise):**

NumPy comparison operators (`>`, `<`, `>=`, `<=`, `==`, `!=`) perform element-wise comparisons between arrays (or array and scalar) and return boolean arrays.
::right::
*   **Greater than (`>`)**:

    ```python
    import numpy as np

    array1 = np.array([1, 5, 3, 8])
    array2 = np.array([2, 4, 3, 5])

    greater_than = array1 > array2
    print("array1 > array2:", greater_than) 
    # Output: [False  True False  True]

    greater_than_scalar = array1 > 3
    print("array1 > 3:", greater_than_scalar) 
    # Output: [False  True False  True]
    ```
---
layout: two-cols-header
---

## NumPy Comparison and Logical Operations 🚦

::left::

*   **Less than (`<`)**:

    ```python
    less_than = array1 < array2
    print("array1 < array2:", less_than) 
    # Output: [ True False False False]

    less_than_scalar = array1 < 4
    print("array1 < 4:", less_than_scalar) 
    # Output: [ True False  True False]
    ```

*   **Equal to (`==`)**:

    ```python
    equal_to = array1 == array2
    print("array1 == array2:", equal_to) 
    # Output: [False False  True False]

    equal_to_scalar = array1 == 3
    print("array1 == 3:", equal_to_scalar) 
    # Output: [False False  True False]
    ```

::right::

*   **Not equal to (`!=`)**:

    ```python
    not_equal_to = array1 != array2
    print("array1 != array2:", not_equal_to) 
    # Output: [ True  True False  True]
    ```
---

## NumPy Comparison and Logical Operations 🚦

**Logical Operations (Element-wise):**

NumPy provides logical operators (`np.logical_and()`, `np.logical_or()`, `np.logical_not()`) to perform element-wise logical operations on boolean arrays.

*   **Logical AND (`np.logical_and()` or `&`)**:

    ```python
    bool_array1 = np.array([True, False, True])
    bool_array2 = np.array([False, True, True])

    logical_and_array = np.logical_and(bool_array1, bool_array2) # Element-wise AND
    print("Logical AND:", logical_and_array) # Output: [False False  True]
    # Alternatively, using '&' operator:
    logical_and_op = bool_array1 & bool_array2
    print("Logical AND (& operator):", logical_and_op) # Output: [False False  True]
    ```
---

## NumPy Comparison and Logical Operations 🚦

*   **Logical OR (`np.logical_or()` or `|`)**:

    ```python
    logical_or_array = np.logical_or(bool_array1, bool_array2)  # Element-wise OR
    print("Logical OR:", logical_or_array)  # Output: [ True  True  True]
    # Alternatively, using '|' operator:
    logical_or_op = bool_array1 | bool_array2
    print("Logical OR (| operator):", logical_or_op)  # Output: [ True  True  True]
    ```

*   **Logical NOT (`np.logical_not()` or `~`)**:

    ```python
    logical_not_array = np.logical_not(bool_array1) # Element-wise NOT
    print("Logical NOT:", logical_not_array)   # Output: [False  True False]
    # Alternatively, using '~' operator:
    logical_not_op = ~bool_array1
    print("Logical NOT (~ operator):", logical_not_op)   # Output: [False  True False]
    ```

**Comparison and logical operations are fundamental for data filtering, conditional selection, and implementing complex logic when working with NumPy arrays!**

---
layout: two-cols-header
---

## Session 1 Summary - Introduction to NumPy ✅

# Module 2: Data Manipulation with pandas and NumPy

### Session 1 Summary: Introduction to NumPy

**Congratulations on completing Session 1: "Introduction to NumPy"!** 🎉 You've taken your first steps into the world of numerical computing with NumPy.

**Key Concepts Covered in Session 1:**
::left::
*   **What is NumPy?**
    *   Numerical Python - the core library for numerical computing in Python.
    *   Foundation for data science libraries like pandas.
    *   Designed for efficiency and performance in numerical tasks.
::right::
*   **NumPy Arrays (`ndarray`)**:
    *   NumPy's central data structure - N-dimensional arrays.
    *   Homogeneous data type - all elements of the same type.
    *   Contiguous memory storage - for efficient access and operations.
---
layout: two-cols-header
---

## Summary - Introduction to NumPy ✅
**Key Concepts Covered in Session 1:**

::left::
<br>

*   **Advantages of NumPy Arrays over Python Lists:**
    *   **Performance:** Significantly faster for numerical operations.
    *   **Functionality:** Vectorized operations, broadcasting, rich mathematical function library.
    *   **Memory Efficiency:** Often more memory-efficient for numerical data.
::right::
*   **Creating NumPy Arrays:**
    *   `np.array()`: From Python lists or tuples.
    *   `np.zeros()`, `np.ones()`: Arrays filled with zeros or ones.
    *   `np.arange()`, `np.linspace()`: Arrays with ranges of values.
---
layout: two-cols-header
---

## Summary - Introduction to NumPy ✅
**Key Concepts Covered in Session 1:**

::left::

*   **NumPy Array Attributes:**
    *   `shape`: Dimensions of the array.
    *   `dtype`: Data type of array elements.
    *   `ndim`: Number of dimensions.
    *   `size`: Total number of elements.
    *   `itemsize`: Size of each element in bytes.

::right::

*   **Basic Array Operations:**
    *   Element-wise arithmetic operations (`+`, `-`, `*`, `/`, `**`).
    *   Mathematical functions (`np.sin()`, `np.exp()`, `np.sum()`, etc.).
    *   Comparison operations (`>`, `<`, `==`, etc.) - returning boolean arrays.
    *   Logical operations (`np.logical_and()`, `np.logical_or()`, `np.logical_not()`).

<!-- **Next Steps:**

*   Practice creating NumPy arrays using different methods.
*   Experiment with basic arithmetic, mathematical, comparison, and logical operations on arrays in your Jupyter Notebook.
*   In the next sessions, we'll dive deeper into NumPy array indexing, slicing, and more advanced operations! -->

**You've now built a solid foundation in NumPy basics! Keep practicing and exploring!** 💪

---

## Session End 🎉

<!-- # Module 2: Data Manipulation with pandas and NumPy

### Session 1 Complete! Introduction to NumPy ✅

**You have reached the end of Session 1: "Introduction to NumPy"!**

**Congratulations!** 🥳 You've successfully completed the first session of Module 2 and have learned the fundamental concepts of NumPy! -->

**Key accomplishments in Session 1:**

*   You now understand what NumPy is, why it's essential, and its importance in the Python data science ecosystem.
*   You can explain the core characteristics of NumPy arrays (`ndarray`) and their advantages over Python lists for numerical tasks.
*   You are able to create NumPy arrays using various methods (`np.array()`, `np.zeros()`, `np.arange()`, etc.).
*   You can inspect and understand key NumPy array attributes (`shape`, `dtype`, `ndim`, `size`, `itemsize`).
*   You can perform basic arithmetic, mathematical, comparison, and logical operations on NumPy arrays.

**You've built a strong foundation to move forward with more advanced NumPy and pandas topics in Module 2!** 💪

<!-- **Ready to continue your NumPy journey in Session 2?** -->

**Up Next: Session 2 - NumPy Array Operations - Basic Operations!** 🚀

<!-- **(Module 2, Session 1: Introduction to NumPy - Session End)** -->

---

