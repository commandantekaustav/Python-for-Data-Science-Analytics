---
theme: seriph
transition: zoom
---

## NumPy Array Operations - Introduction 🚀

# Module 2: Data Manipulation with pandas and NumPy

### Session 2: NumPy Array Operations - Basic Operations

**Welcome to Session 2 of Module 2! In this session, we will delve into the fundamental operations you can perform with NumPy arrays.**

**Building upon Session 1, we will now explore how to manipulate and compute with NumPy arrays effectively.**
---

## NumPy Array Operations - Introduction 🚀

### **What are Array Operations in NumPy?**

*   **Element-wise Operations:**  Most operations in NumPy are performed **element-wise**. This means that when you apply an operation between two arrays (or between an array and a scalar), the operation is carried out on corresponding elements.
*   **Vectorized Computations:** NumPy's array operations are **vectorized**, which is a key concept for performance. Vectorization allows operations to be performed on entire arrays efficiently, without explicit loops in Python, leveraging optimized low-level implementations.
*   **Broadcasting (Coming Soon):**  NumPy also features powerful **broadcasting** rules that enable operations on arrays with different shapes (under certain conditions). We'll explore broadcasting in more detail shortly.
*   **Foundation for Data Manipulation:** Understanding array operations is crucial for performing complex data transformations, calculations, and analyses using NumPy and pandas.
---

## NumPy Array Operations - Introduction 🚀

**In this session, we'll focus on basic arithmetic operations and lay the groundwork for more advanced array manipulations in NumPy!**

**Topics Covered in Session 2:**

*   **Element-wise Arithmetic:**  Addition, Subtraction, Multiplication, Division, Exponentiation.
*   **Broadcasting Basics:** Introduction to the concept of broadcasting in NumPy.
*   **Practical Examples:**  Illustrative code examples to demonstrate array operations.

Let's begin exploring basic NumPy array operations!

---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Addition ➕

**Element-wise addition is a fundamental operation in NumPy. It allows you to add corresponding elements of two arrays or add a scalar to each element of an array.**
::left::
**1. Array + Array (Element-wise Addition):**

When you add two NumPy arrays of the **same shape**,<br> the addition is performed element by element.

```python
import numpy as np

array1 = np.array([1, 2, 3])
array2 = np.array([4, 5, 6])
sum_array = array1 + array2

print("Array 1:", array1)    # Output: [1 2 3]
print("Array 2:", array2)    # Output: [4 5 6]
print("Sum (array1 + array2):", sum_array) # [5 7 9]
# Explanation:
# 1 + 4 = 5
# 2 + 5 = 7
# 3 + 6 = 9
```
::right::
**Visual Representation:**

Imagine adding elements at the same positions:

```
Array 1:  [1, 2, 3]
         +  +  +
Array 2:  [4, 5, 6]
         =  =  =
Result:   [5, 7, 9]
```


**Important:** For element-wise addition between two arrays, they **must have compatible shapes.**  Generally, this means they should have the same shape, or their shapes should be compatible according to NumPy's broadcasting rules (which we'll discuss later).
---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Addition ➕

<!-- **Element-wise addition is a fundamental operation in NumPy. It allows you to add corresponding elements of two arrays or add a scalar to each element of an array.** -->
::left::
**2. Array + Scalar (Scalar Addition - Broadcasting):**

You can also add a **scalar value** to a NumPy array. In this case, the scalar is **broadcast** (conceptually "stretched" or repeated) to match the shape of the array, and then element-wise addition is performed.

```python
scalar_value = 10
scalar_sum_array = array1 + scalar_value
print("Array 1:", array1)          # [1 2 3]
print("Scalar value:", scalar_value) 
# Output: 10
print("Sum (array1 + scalar):", scalar_sum_array) 
# [11 12 13]
# Explanation:
# 1 + 10 = 11
# 2 + 10 = 12
# 3 + 10 = 13
```
::right::
**Visual Representation (Broadcasting Scalar):**
```
Array 1:  [1, 2, 3]
         +  +  +
Scalar:   10,10,10  (Scalar is effectively broadcast to [10, 10, 10])
         =  =  =
Result:   [11,12,13]
```

**Element-wise addition is a foundational operation. NumPy makes it simple and highly efficient to add arrays and scalars!**

---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Subtraction ➖

**Element-wise subtraction, like addition, is a fundamental operation in NumPy. It allows you to subtract corresponding elements of two arrays or subtract a scalar from each element of an array.**

::left::

**1. Array - Array (Element-wise Subtraction):**

When you subtract two NumPy arrays of the **same shape**, the subtraction is performed element by element.

```python
import numpy as np

array1 = np.array([10, 20, 30])
array2 = np.array([3, 5, 10])
diff_array = array1 - array2

print("Array 1:", array1)       # Output: [10 20 30]
print("Array 2:", array2)       # Output: [ 3  5 10]
print("Difference (array1 - array2):", diff_array) # Output: [ 7 15 20]
# Explanation:
# 10 - 3 = 7
# 20 - 5 = 15
# 30 - 10 = 20
```
::right::
**Important:**  Similar to addition, for element-wise subtraction between two arrays, they **must have compatible shapes.**
---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Subtraction ➖

<!-- ### Element-wise Array Subtraction -->

<!-- **Element-wise subtraction, like addition, is a fundamental operation in NumPy. It allows you to subtract corresponding elements of two arrays or subtract a scalar from each element of an array.** -->

**2. Array - Scalar (Scalar Subtraction - Broadcasting):**

You can also subtract a **scalar value** from a NumPy array. The scalar is broadcast to match the array's shape, and element-wise subtraction is performed.

```python
scalar_value = 5
scalar_diff_array = array1 - scalar_value

print("Array 1:", array1)          # Output: [10 20 30]
print("Scalar value:", scalar_value) # Output: 5
print("Difference (array1 - scalar):", scalar_diff_array) # Output: [ 5 15 25]
# Explanation:
# 10 - 5 = 5
# 20 - 5 = 15
# 30 - 5 = 25
```
::right::
**Element-wise subtraction is another core operation for numerical computations with NumPy arrays. Just like addition, it's efficient and straightforward!**

---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Multiplication ✖️
### Element-wise Array Multiplication

**Element-wise multiplication allows you to multiply corresponding elements of two arrays or multiply each element of an array by a scalar.**
::left::
**1. Array * Array (Element-wise Multiplication):**

When you multiply two NumPy arrays of the **same shape**, the multiplication is performed element by element.

```python
import numpy as np

array1 = np.array([1, 2, 3])
array2 = np.array([4, 5, 6])
product_array = array1 * array2
print("Array 1:", array1)       # [1 2 3]
print("Array 2:", array2)       # [4 5 6]
print("Product (array1 * array2):", product_array) # [ 4 10 18]
# Explanation:
# 1 * 4 = 4
# 2 * 5 = 10
# 3 * 6 = 18
```
::right::
**Important:** For element-wise multiplication between two arrays, they **must have compatible shapes.**
---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Multiplication ✖️
### Element-wise Array Multiplication

<!-- ::left:: -->
**2. Array * Scalar (Scalar Multiplication - Broadcasting):**

You can also multiply a NumPy array by a **scalar value.** The scalar is broadcast, and element-wise multiplication is performed.

```python
scalar_value = 3
scalar_product_array = array1 * scalar_value

print("Array 1:", array1)          # Output: [1 2 3]
print("Scalar value:", scalar_value) # Output: 3
print("Product (array1 * scalar):", scalar_product_array) # Output: [3 6 9]
# Explanation:
# 1 * 3 = 3
# 2 * 3 = 6
# 3 * 3 = 9
```
::right::
**Element-wise multiplication is a fundamental array operation, efficiently handled by NumPy!**

---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Division ➗


### Element-wise Array Division

**Element-wise division allows you to divide corresponding elements of two arrays or divide each element of an array by a scalar.**

**1. Array / Array (Element-wise Division):**

When you divide two NumPy arrays of the **same shape**, the division is performed element by element.

```python
import numpy as np

array1 = np.array([10, 20, 30])
array2 = np.array([2, 5, 6])

division_array = array1 / array2

print("Array 1:", array1)          # Output: [10 20 30]
print("Array 2:", array2)          # Output: [2 5 6]
print("Division (array1 / array2):", division_array) # Output: [5.         4.         5.        ]
# Explanation:
# 10 / 2 = 5
# 20 / 5 = 4
# 30 / 6 = 5
```

**Important:** For element-wise division between two arrays, they **must have compatible shapes.** Be mindful of division by zero, which can result in `inf` or `NaN` (Not a Number) values.

**2. Array / Scalar (Scalar Division - Broadcasting):**

You can also divide a NumPy array by a **scalar value.** The scalar is broadcast, and element-wise division is performed.

```python
scalar_value = 2
scalar_division_array = array1 / scalar_value

print("Array 1:", array1)          # Output: [10 20 30]
print("Scalar value:", scalar_value) # Output: 2
print("Division (array1 / scalar):", scalar_division_array) # Output: [ 5. 10. 15.]
# Explanation:
# 10 / 2 = 5
# 20 / 2 = 10
# 30 / 2 = 15
```

**Element-wise division is another fundamental operation for numerical computations in NumPy!**

Next.

---
layout: two-cols-header
---

## NumPy Array Operations - Element-wise Exponentiation ⏫
**Element-wise exponentiation allows you to raise each element of an array to a power.**

::left:: 

**1. Array ** Array (Element-wise Power):**

When you raise one NumPy array to the power of another array (of the **same shape**), the exponentiation is performed element by element.

```python
import numpy as np

base_array = np.array([1, 2, 3])
exponent_array = np.array([2, 3, 2]) # Powers to raise to
power_array = base_array ** exponent_array
print("Base Array:", base_array)       # [1 2 3]
print("Exponent Array:", exponent_array) # [2 3 2]
print("Power (base_array ** exponent_array):", power_array) 
# [ 1  8  9]
# Explanation:
# 1 ** 2 = 1
# 2 ** 3 = 8
# 3 ** 2 = 9
```
::right::
**Important:** For element-wise exponentiation between two arrays, ensure they have compatible shapes.
---

## NumPy Array Operations - Element-wise Exponentiation ⏫

**2. Array ** Scalar (Scalar Power - Broadcasting):**

You can also raise a NumPy array to the power of a **scalar value.** The scalar is broadcast, and element-wise exponentiation is performed.

```python
scalar_value = 2 # Power to raise to
scalar_power_array = base_array ** scalar_value

print("Base Array:", base_array)          # Output: [1 2 3]
print("Scalar power:", scalar_value)       # Output: 2
print("Power (base_array ** scalar):", scalar_power_array) # Output: [1 4 9]
# Explanation:
# 1 ** 2 = 1
# 2 ** 2 = 4
# 3 ** 2 = 9
```

**Element-wise exponentiation is a versatile operation for various numerical calculations with NumPy arrays!**

---

## NumPy Array Operations - Broadcasting Introduction 📡
### Introduction to Broadcasting

**Broadcasting is a powerful feature in NumPy that allows you to perform arithmetic operations on arrays with different shapes, making your code more concise and efficient.**

**What is Broadcasting?**

*   **Shape Compatibility:** Broadcasting describes how NumPy handles element-wise operations when arrays have different shapes.
*   **Implicit Expansion:** NumPy "broadcasts" or expands the dimensions of the smaller array to match the larger array, so that element-wise operations can be performed. This expansion is done virtually, without actually creating copies of data, making it memory-efficient.
*   **Rules of Broadcasting:** NumPy has specific broadcasting rules that determine if two arrays are compatible for broadcasting and how the shapes are expanded.
---

## NumPy Array Operations - Broadcasting Introduction 📡
**Basic Broadcasting Example: Scalar Broadcasting (already seen):**

We've already seen broadcasting with scalars:

```python
import numpy as np

array_a = np.array([1, 2, 3])
scalar_b = 10

sum_array = array_a + scalar_b  # Scalar 'b' is broadcast to match array_a's shape

print("Array:", array_a)       # Output: [1 2 3]
print("Scalar:", scalar_b)      # Output: 10
print("Array + Scalar (Broadcasting):", sum_array) # Output: [11 12 13]
```

In this case, the scalar `10` is effectively "broadcast" into an array `[10, 10, 10]` to be compatible for element-wise addition with `array_a`.
---
layout: two-cols-header
---

## NumPy Array Operations - Broadcasting Introduction 📡
**Broadcasting between Arrays of Different Shapes (Example):**

Broadcasting is not limited to scalars. It can also work between arrays of different dimensions, if their shapes are compatible.
::left::
```python
array_1d = np.array([1, 2, 3])        # Shape (3,)
array_2d = np.array([[10], [20], [30]]) # Shape (3, 1) - column vector

broadcasted_sum = array_1d + array_2d

print("Array 1D (Shape (3,)):", array_1d)     # [1 2 3]
print("Array 2D (Shape (3, 1)):\n", array_2d) # [[10] [20] [30]]
print("Broadcasted Sum (array_1d + array_2d):\n", broadcasted_sum)
# Output:
# [[11 12 13]
#  [21 22 23]
#  [31 32 33]]
# Explanation: array_1d is broadcast along rows to match array_2d's shape
```

::right::

In this example, `array_1d` (shape `(3,)`) is broadcast across the rows of `array_2d` (shape `(3, 1)`) to enable element-wise addition, resulting in a `(3, 3)` array.

**Broadcasting is a powerful tool for writing concise and efficient NumPy code, especially when working with arrays of different but compatible shapes! We will explore broadcasting rules in detail in the next slide.**

---
layout: two-cols-header
---

## NumPy Broadcasting Rules - Rule 1 📏
### Broadcasting Rule 1: Dimension Compatibility

**NumPy broadcasting operates based on a set of rules. Rule 1 is about dimension compatibility:**
::left::
**Broadcasting Rule 1:**

> Two dimensions are compatible for broadcasting when:
> 1.  They are **equal**, or
> 2.  One of them is **1**.

**Ex 1: Compatible Shapes (Equal Dimensions):**

Arrays with the same shape are always compatible.

```python
import numpy as np

array1 = np.array([1, 2, 3])    # Shape (3,)
array2 = np.array([4, 5, 6])    # Shape (3,)
sum_array = array1 + array2
print("Sum:", sum_array) # Output: [5 7 9]
```
::right::
**Ex 2: Compatible Shapes (One Dimension is 1):**
Arrays with shapes like `(3, 1)` and `(3,)` are compatible. The dimension of size 1 is broadcast.

```python
array_a = np.array([[1], [2], [3]]) # Shape (3, 1)
array_b = np.array([10, 20, 30])   # Shape (3,)

sum_broadcast = array_a + array_b
print("Broadcasted Sum:\n", sum_broadcast)
# Output:
# [[11 21 31]
#  [12 22 32]
#  [13 23 33]]
```
---
layout: two-cols-header
---

## NumPy Broadcasting Rules - Rule 1 📏
### Broadcasting Rule 1: Dimension Compatibility

**Example 3: Incompatible Shapes (Dimensions Not Meeting Rule 1):**

Arrays with shapes like `(2, 3)` and `(3, 2)` are not compatible for broadcasting because dimensions don't meet Rule 1 (neither equal nor 1). This will result in an error.

```python
# Example of incompatible shapes (will cause error if you run)
# array_x = np.array([[1, 2, 3], [4, 5, 6]]) # Shape (2, 3)
# array_y = np.array([[7, 8], [9, 10], [11, 12]]) # Shape (3, 2)
# error_sum = array_x + array_y # This will raise a ValueError due to incompatible shapes
# Uncommenting the above lines will cause a broadcasting error.
```

**Rule 1 is the first step in understanding broadcasting compatibility. In the next slide, we'll look at Rule 2!**

---
layout: two-cols-header
---

## NumPy Broadcasting Rules - Rule 2 📏📏
### Broadcasting Rule 2: Dimension Matching

**Building on Rule 1, Rule 2 further refines broadcasting compatibility related to dimension sizes.**

**Broadcasting Rule 2:**

> Arrays can be broadcast together if they are compatible according to Rule 1, and if for each dimension pair, either:
>
> 1.  The dimensions are **equal**, or
> 2.  One of the dimensions is **1**, or
> 3.  One of the dimensions is **absent** (i.e., one array has fewer dimensions).
---
layout: two-cols-header
---

## NumPy Broadcasting Rules - Rule 2 📏📏
::left::
**Ex 1: Compatible Shapes (Rule 2 - Dimension 1 and Absent):**

Shape `(3, 3)` and `(3,)` are compatible.  The `(3,)` array is treated as if it has shape `(1, 3)` or `(3, 1)` and then broadcast.

```python
import numpy as np

matrix_a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) # Shape (3, 3)
vector_b = np.array([10, 20, 30])                     # Shape (3,)

sum_rule2 = matrix_a + vector_b
print("Broadcasted Sum (Rule 2):\n", sum_rule2)
# Output:
# [[11 22 33]
#  [14 25 36]
#  [17 28 39]]
```
::right::
**Ex 2: Compatible Shapes (Rule 2 - Dimension 1 and Equal):**

Shape `(3, 1)` and `(1, 3)` are compatible and broadcast to `(3, 3)`.

```python
column_vector = np.array([[1], [2], [3]]) #  d(3, 1)
row_vector = np.array([[10, 20, 30]])     #  d(1, 3)

sum_rule2_b = column_vector + row_vector
print("Broadcasted Sum (Rule 2b):\n", sum_rule2_b)
# Output:
# [[11 21 31]
#  [12 22 32]
#  [13 23 33]]
```
---
layout: two-cols-header
---

## NumPy Broadcasting Rules - Rule 2 📏📏

**Example 3: Incompatible Shapes (Rule 2 Violation):**

Shapes `(3, 2)` and `(3,)` are not directly broadcastable in a way that results in element-wise addition in the intuitive way across rows/columns, because Rule 2 is not fully met for all dimension pairs in a consistent manner for typical arithmetic operations. NumPy will try broadcasting based on trailing dimensions, but it might not be what's intended, or raise errors in other scenarios. (More complex broadcasting cases might require reshaping for alignment).

**Rule 2, combined with Rule 1, provides a more complete understanding of when NumPy arrays can be broadcast together! Next, we'll look at more broadcasting examples.**

Next.
---

## NumPy Broadcasting Examples 🚀🚀🚀
### Broadcasting Examples in Action

**Let's solidify our understanding of broadcasting with more practical examples.**

**Example 1: Broadcasting a 1D array to a 2D array (along rows):**

```python
import numpy as np

array_1d_row = np.array([1, 2, 3])          # Shape (3,) - will be broadcast along rows
matrix_2d_rows = np.array([[10, 20, 30], [40, 50, 60]]) # Shape (2, 3)

broadcast_rows = matrix_2d_rows + array_1d_row

print("1D Array (row):", array_1d_row)
print("2D Matrix (rows):\n", matrix_2d_rows)
print("Broadcasted Sum (rows):\n", broadcast_rows)
# Output:
# [[11 22 33]
#  [41 52 63]]
```
---

## NumPy Broadcasting Examples 🚀🚀🚀

**Example 2: Broadcasting a 1D array to a 2D array (along columns):**

```python
array_1d_col = np.array([[100], [200], [300]]) # Shape (3, 1) - will be broadcast along columns
matrix_2d_cols = np.array([[1, 2], [3, 4], [5, 6]])   # Shape (3, 2)

broadcast_cols = matrix_2d_cols + array_1d_col

print("1D Array (column):\n", array_1d_col)
print("2D Matrix (columns):\n", matrix_2d_cols)
print("Broadcasted Sum (columns):\n", broadcast_cols)
# Output:
# [[101 202]
#  [203 204]
#  [305 306]]
```
---

## NumPy Broadcasting Examples 🚀🚀🚀
**Example 3: Broadcasting with higher dimensions (3D example):**

Broadcasting extends to higher dimensions as well, following the same rules.

```python
array_3d = np.arange(24).reshape(2, 3, 4) # Shape (2, 3, 4)
array_1d_depth = np.array([1000, 2000])     # Shape (2,) - broadcast across "depth" dimension

broadcast_3d = array_3d + array_1d_depth.reshape(2, 1, 1) # Reshape to (2, 1, 1) for explicit broadcasting

print("3D Array:\n", array_3d)
print("1D Array (depth):\n", array_1d_depth)
print("Broadcasted Sum (3D):\n", broadcast_3d)
# Output (truncated for brevity - full 3D array output)
# [[[1000, 1001, 1002, 1003], [1004, 1005, 1006, 1007], [1008, 1009, 1010, 1011]],
#  [[2012, 2013, 2014, 2015], [2016, 2017, 2018, 2019], [2020, 2021, 2022, 2023]]]
```

**These examples illustrate how broadcasting simplifies operations between arrays of different, but compatible, shapes in NumPy!**

---

## NumPy Broadcasting - Rule 3 and Summary 📏📏📏
### Broadcasting Rule 3: Alignment of Dimensions

**Rule 3 is the final rule that determines broadcasting compatibility. It ensures dimensions are aligned from right to left (trailing dimensions).**

**Broadcasting Rule 3:**

> Broadcasting applies across dimensions if, when comparing the shape of the arrays **from trailing dimensions backwards**:
>
> 1.  The dimensions are **compatible** (Rule 1: equal or one is 1), or
> 2.  If either array has more dimensions, the "missing" dimensions in the smaller array are considered to have size 1.
---

## NumPy Broadcasting - Rule 3 and Summary 📏📏📏

**Example 1: Broadcasting with Trailing Dimensions Alignment:**

Shape `(4, 3)` and `(3,)` are compatible because trailing dimensions align: `(3)` matches the last dimension of `(4, 3)`.

```python
import numpy as np

matrix_c = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]) # Shape (4, 3)
vector_d = np.array([100, 200, 300])                             # Shape (3,)

sum_rule3 = matrix_c + vector_d
print("Broadcasted Sum (Rule 3):\n", sum_rule3)
# Output:
# [[101 202 303]
#  [104 205 306]
#  [107 208 309]
#  [110 211 312]]
```
---

## NumPy Broadcasting - Rule 3 and Summary 📏📏📏
**Example 2: Broadcasting with More Dimensions (3D and 1D):**

Shape `(2, 3, 4)` and `(4,)` are compatible. Trailing dimension `(4)` matches.

```python
array_3d_e = np.arange(24).reshape(2, 3, 4) # Shape (2, 3, 4)
array_1d_f = np.array([10, 20, 30, 40])      # Shape (4,)

sum_rule3_b = array_3d_e + array_1d_f
print("Broadcasted Sum (Rule 3b):\n", sum_rule3_b)
# Output (truncated for brevity):
# [[[ 10  21  32  43], [ 4  15  26  37], [ 8  19  30  41]],
#  [[ 12  23  34  45], [16  27  38  49], [20  31  42  53]]]
```
---

## NumPy Broadcasting - Rule 3 and Summary 📏📏📏

**Broadcasting Summary: Key Takeaways**

- **Efficiency:** Broadcasting avoids unnecessary data copying, making operations memory and computationally efficient.
- **Conciseness:** Write more compact code for operations that would otherwise require explicit loops or reshaping.
- **Flexibility:** Enables operations between arrays of different, yet compatible, shapes, simplifying many numerical tasks.
- **Rules are Key:** Mastering the three broadcasting rules (`Dimension Compatibility`, `Dimension Matching`, `Alignment`) is crucial for predicting broadcasting behavior and avoiding errors.

**This concludes our exploration of Broadcasting in NumPy! You now have a solid understanding of how NumPy handles operations between arrays of different shapes.**

---

## Broadcasting Incompatible Shapes - Errors ⛔️

**It's crucial to understand when broadcasting *fails*. When array shapes are not compatible according to the broadcasting rules, NumPy will raise a `ValueError: operands could not be broadcast together` error.**

**Example 1: Incompatible Dimensions - ValueError:**

Arrays with shapes that don't meet Rule 1 (dimension compatibility) will result in an error.

```python
import numpy as np

array_incomp_1 = np.array([[1, 2, 3], [4, 5, 6]]) # Shape (2, 3)
array_incomp_2 = np.array([[7, 8], [9, 10], [11, 12]]) # Shape (3, 2)

# This will raise a ValueError: operands could not be broadcast together with shapes (2,3) (3,2)
# error_sum_incomp = array_incomp_1 + array_incomp_2
# print("Incompatible Sum:", error_sum_incomp) # This line will not be reached due to error
```
---

## Broadcasting Incompatible Shapes - Errors ⛔️

**It's crucial to understand when broadcasting *fails*. When array shapes are not compatible according to the broadcasting rules, NumPy will raise a `ValueError: operands could not be broadcast together` error.**

**Example 2: Incompatible Dimensions along specific axis:**

Even if some dimensions are compatible, if alignment rules are violated, broadcasting fails.

```python
array_b_incomp_1 = np.array([[1, 2, 3], [4, 5, 6]]) # Shape (2, 3)
array_b_incomp_2 = np.array([10, 20])             # Shape (2,)

# This will raise a ValueError: operands could not be broadcast together with shapes (2,3) (2,)
# error_sum_incomp_b = array_b_incomp_1 + array_b_incomp_2
# print("Incompatible Sum (b):", error_sum_incomp_b) # Error, line not reached
```
---

## Broadcasting Incompatible Shapes - Errors ⛔️

**It's crucial to understand when broadcasting *fails*. When array shapes are not compatible according to the broadcasting rules, NumPy will raise a `ValueError: operands could not be broadcast together` error.**

**Handling Broadcasting Errors:**

- **Check Array Shapes:** Always verify the shapes of your arrays when performing operations, especially if you expect broadcasting. Use `.shape` attribute.
- **Reshape Arrays:** If broadcasting fails due to shape incompatibility, you might need to reshape one or both arrays using `reshape()`, `transpose()`, or other reshaping functions to make them compatible *if logically possible* for your operation.
- **Understand Broadcasting Rules:** Review the broadcasting rules (Rule 1, 2, 3) to understand why certain shapes are incompatible.

**NumPy's broadcasting is powerful, but it's essential to be aware of shape compatibility and handle potential errors that arise from incompatible array shapes!**

---

## NumPy Reshaping - Introduction 🧰
### Introduction to Array Reshaping

**Reshaping is a fundamental operation in NumPy that allows you to change the shape (dimensions) of an array without changing its data. Reshaping is essential for making arrays compatible for operations and for organizing data in different ways.**

**What is Array Reshaping?**

*   **Changing Dimensions:** Reshaping modifies the number of dimensions or the size along each dimension of a NumPy array.
*   **Data Preservation:** Reshaping does *not* change the elements of the array itself, only how they are organized and accessed (their shape). The total number of elements remains the same.
*   **Creating Views or Copies (Important Note):** In many cases, `reshape()` creates a *view* of the original array (no data copying for efficiency). However, in some scenarios, it might create a copy. Be mindful of this when modifying reshaped arrays (deep vs. shallow copy concepts are relevant here!).
---

## NumPy Reshaping - Introduction 🧰
**Basic Reshaping with `np.reshape()`:**

The primary function for reshaping is `np.reshape(array, new_shape)`.

```python
import numpy as np

initial_array = np.arange(12) # 1D array with 12 elements: [0 1 2 ... 11]
print("Initial 1D array:", initial_array) # Output: [ 0  1  2  3  4  5  6  7  8  9 10 11]
print("Shape:", initial_array.shape)      # Output: (12,)
```

Now, let's reshape it into a 2D array (3 rows, 4 columns):

```python
reshaped_array_2d = initial_array.reshape((3, 4)) # Reshape to 3 rows, 4 columns
print("\nReshaped 2D array (3x4):\n", reshaped_array_2d)
# Output:
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]
print("New shape:", reshaped_array_2d.shape)     # Output: (3, 4)
```
---

## NumPy Reshaping - Introduction 🧰
**Important Considerations for Reshaping:**

- **Total Size Must Match:** The product of the dimensions in the `new_shape` must be equal to the total number of elements in the original array. You cannot reshape a (12,) array into a (3, 5) array because 3*5 = 15 != 12.
- **Shape Inference (-1):** You can use `-1` in one dimension of the `new_shape`. NumPy will automatically infer the size of that dimension based on the original array's size and the other specified dimensions.

Example of shape inference with `-1`:

```python
reshaped_inferred = initial_array.reshape((4, -1)) # 4 rows, let NumPy infer columns
print("\nReshaped with inferred dimension (4 rows, -1 columns):\n", reshaped_inferred)
# Output:
# [[ 0  1  2]
#  [ 3  4  5]
#  [ 6  7  8]
#  [ 9 10 11]]
print("New shape (inferred):", reshaped_inferred.shape) # Output: (4, 3) - NumPy inferred 3 columns
```

<!-- **Reshaping is a powerful technique for reorganizing your NumPy arrays! In the next slides, we'll explore more reshaping methods and examples.** -->

---

## Reshaping - Flattening and Raveling Arrays 📉
### Flattening and Raveling Arrays

**Flattening and raveling are reshaping operations that convert multi-dimensional arrays into 1-dimensional arrays (vectors). These are useful for simplifying array structures or preparing data for certain algorithms.**
---

## Reshaping - Flattening and Raveling Arrays 📉
**1. Flattening with `.flatten()`:**

The `.flatten()` method creates a **copy** of the array and flattens into a 1D array (row-major order - C-style).

```python
import numpy as np

matrix_3x3 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) # 2D array (3x3)
print("Original 2D array:\n", matrix_3x3)
# Output:
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]
print("Shape:", matrix_3x3.shape) # Output: (3, 3)
Flatten the 2D array using .flatten():

flattened_array = matrix_3x3.flatten() # Creates a copy, flattened to 1D
print("\nFlattened array (.flatten()):", flattened_array) # Output: [1 2 3 4 5 6 7 8 9]
print("Shape:", flattened_array.shape)      # Output: (9,)

# Verify it's a copy - modifying flattened_array won't change original matrix_3x3
flattened_array[0] = 999
print("\nModified flattened array:", flattened_array[0]) # Output: 999
print("Original matrix (unchanged):\n", matrix_3x3)      # Original matrix is NOT changed
```
---

## Reshaping - Flattening and Raveling Arrays 📉

**2. Raveling with `.ravel()`:**

The `.ravel()` method also flattens an array into 1D, but it generally returns a view of the original array if possible (and a copy if a view is not possible due to memory layout).

```python
raveled_array = matrix_3x3.ravel() # Returns a view if possible, flattened to 1D
print("\nRaveled array (.ravel()):", raveled_array)   # Output: [1 2 3 4 5 6 7 8 9]
print("Shape:", raveled_array.shape)     # Output: (9,)

# Demonstrate it's a view (usually) - modifying raveled_array *can* change original matrix_3x3
raveled_array[1] = 888
print("\nModified raveled array:", raveled_array[1])    # Output: 888
print("Original matrix (MAY BE changed):\n", matrix_3x3) # Original matrix IS changed (in this case, it's a view)
```
---

## Reshaping - Flattening and Raveling Arrays 📉

**Important Considerations for Flattening and Raveling:**

**Total Size Must Match:** Flattening and raveling preserve all elements, so the total number of elements remains the same.

**View vs. Copy:**  `.flatten()` always returns a copy. `.ravel()` generally returns a view (more memory-efficient) but might return a copy in some cases. Be aware of potential side effects when modifying raveled arrays.

**Flattening and raveling are useful for converting multi-dimensional arrays into a simpler 1D format for various processing tasks!**

---

## Reshaping - Expanding and Squeezing Dimensions ⏫🔽
### Expanding and Squeezing Dimensions

**NumPy provides functions to add or remove dimensions from arrays, which are useful for adapting array shapes for broadcasting or specific algorithm requirements.**

**1. Expanding Dimensions with `np.expand_dims()`:**

`np.expand_dims(array, axis)` inserts a new dimension of size 1 at the specified `axis` position.

```python
import numpy as np
array_1d_expand = np.array([1, 2, 3]) # Shape (3,)
print("Original 1D array:", array_1d_expand, ", Shape:", array_1d_expand.shape) # d(3,)

# Expand along axis 0 (rows)
expanded_array_row = np.expand_dims(array_1d_expand, axis=0) 
# d(1, 3) - row vector
print("\nExpanded (axis=0) - row vector:\n", expanded_array_row, ", Shape:", expanded_array_row.shape) 

expanded_array_col = np.expand_dims(array_1d_expand, axis=1) # Expand along axis 1 (columns)
print("\nExpanded (axis=1) - column vector:\n", expanded_array_col, ", Shape:", expanded_array_col.shape) 
# d(3, 1) - column vector
```
---

## Reshaping - Expanding and Squeezing Dimensions ⏫🔽
**2. Squeezing Dimensions with `np.squeeze()`:**

**`np.squeeze(array, axis=None)` removes dimensions of size 1 from an array. If `axis` is specified, it only removes dimensions of size 1 at that axis. If `axis=None`, it removes all size-1 dimensions.**

```python
array_expanded = np.array([[[1], [2], [3]]]) # Shape (1, 3, 1) - has size-1 dims
print("\nOriginal expanded array:\n", array_expanded, ", Shape:", array_expanded.shape) # d(1, 3, 1)

squeezed_array = np.squeeze(array_expanded) # Remove all size-1 dimensions
print("\nSqueezed array (all size-1 dims removed):\n", squeezed_array, ", Shape:", squeezed_array.shape) 
# d(3,) - size-1 dims gone

squeezed_axis0 = np.squeeze(array_expanded, axis=0) # Remove size-1 dim at axis 0
print("\nSqueezed axis=0:\n", squeezed_axis0, ", Shape:", squeezed_axis0.shape) 
# d(3, 1) - only axis 0 squeezed
```
---

## Reshaping - Expanding and Squeezing Dimensions ⏫🔽

**Important Considerations for Expanding and Squeezing Dimensions:**

Expanding dimensions adds new axes of size 1, which can be useful for broadcasting or aligning array shapes. Squeezing removes axes of size 1, simplifying array shapes when those dimensions are no longer needed.  Both operations are valuable for manipulating array dimensionality in NumPy.

---

## `np.expand_dims()` and `np.squeeze()` Summary ✅
### Session 2 Summary: Expanding and Squeezing Dimensions

**Congratulations on reaching the summary of Session 2!** 🎉 You've learned about expanding and squeezing dimensions in NumPy arrays.

**Key Concepts Covered in Session 2:**

*   **Expanding Dimensions:**
    *   `np.expand_dims(array, axis)`: Adds a new dimension of size 1 at the specified axis.
    *   Useful for broadcasting, aligning shapes, or explicitly representing higher-dimensional data.

*   **Squeezing Dimensions:**
    *   `np.squeeze(array, axis=None)`: Removes dimensions of size 1.
    *   Simplifies array shapes, especially after operations that might introduce unnecessary size-1 dimensions.

---

## `np.expand_dims()` and `np.squeeze()` Summary ✅
**Key Concepts Covered in Session 2:**

*   **`np.expand_dims()` Example:**

```python
import numpy as np
initial_1d = np.array([1, 2, 3])
expanded_2d_row = np.expand_dims(initial_1d, axis=0) # Expand to row vector (1, 3)
print("Expanded (row):\n", expanded_2d_row)
```

- **`np.squeeze()` Example:**

```python
initial_3d_size1 = np.array([[[1], [2], [3]]]) # Shape (1, 3, 1) - size-1 dims
squeezed_2d = np.squeeze(initial_3d_size1) # Squeeze all size-1 dims to (3,)
print("\nSqueezed:\n", squeezed_2d)
```
---

## `np.expand_dims()` and `np.squeeze()` Summary ✅

**Important Considerations for Expanding and Squeezing Dimensions:**

**Total Size Must Match:** Expanding and squeezing do not change the number of elements in the array. They only change how the array is shaped.

**View vs. Copy:** `np.expand_dims()` generally returns a view. `np.squeeze()` also usually returns a view. Be aware of potential side effects when modifying these arrays if they are views into the original data (deep vs. shallow copy concepts!).

Expanding and squeezing dimensions are valuable tools for manipulating array shapes in NumPy, particularly for broadcasting and data alignment.

---
layout: two-cols-header
---

## Session 2 - Session End 🎉

<!-- # Module 2: Data Manipulation with pandas and NumPy -->

### Session 2 Complete! Broadcasting and Reshaping ✅

**You have reached the end of Session 2: "NumPy Array Operations - Basic Operations"!**

<!-- **Congratulations!** 🥳 You've successfully completed Session 2 of Module 2! -->

**Key accomplishments in Session 2:**
::left::
*   You can now perform element-wise arithmetic operations (addition, subtraction, multiplication, division, exponentiation) on NumPy arrays.
*   You understand the concept of broadcasting and its benefits for efficient array operations.
*   You are familiar with the rules of broadcasting (Dimension Compatibility, Dimension Matching, Alignment).
::right::
*   You can identify cases where broadcasting will work and when it will result in errors due to incompatible shapes.
*   You know how to reshape NumPy arrays using `np.reshape()` and understand shape inference with `-1`.
*   You can flatten arrays to 1D using `.flatten()` and `.ravel()`, and expand/squeeze dimensions using `np.expand_dims()` and `np.squeeze()`.
---

## Session 2 - Session End 🎉
**Key accomplishments in Session 2:**

*   **`np.expand_dims()` Example:**

```python
import numpy as np
initial_1d_ex_end = np.array([1, 2, 3])
expanded_2d_row_ex_end = np.expand_dims(initial_1d_ex_end, axis=0)
print("Expanded (row) End Slide:\n", expanded_2d_row_ex_end)
```

- **`np.squeeze()` Example:**

```python
initial_3d_size1_ex_end = np.array([[[1], [2], [3]]])
squeezed_2d_ex_end = np.squeeze(initial_3d_size1_ex_end)
print("\nSqueezed End Slide:\n", squeezed_2d_ex_end)
```
---

## Session 2 - Session End 🎉
**Key accomplishments in Session 2:**

**Important Considerations for Expanding and Squeezing Dimensions:**

**Total Size Must Match:** Expanding and squeezing do not change the number of elements.

**View vs. Copy:** `np.expand_dims()` and `np.squeeze()` often return views. Be mindful of potential side effects when modifying them.

**You've significantly expanded your NumPy skills in Session 2! 💪**

**Ready to move on to Session 3 and explore more advanced NumPy array operations?**

**Up Next: Session 3 - NumPy Array Indexing and Slicing! 🚀**

<!-- **(Module 2, Session 2: NumPy Array Operations - Basic Operations - Session End)** -->