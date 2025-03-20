---
theme: seriph
---

### What are Universal Functions (UFuncs)?

# Module 2: Data Manipulation with pandas and NumPy

**Welcome to Session 4 of Module 2! In this session, we'll explore NumPy's Universal Functions, or UFuncs: highly optimized functions for element-wise operations.**

**Universal Functions (UFuncs): Core Features**

*   **Element-wise Operations:** UFuncs perform operations element-by-element on arrays.
*   **Broadcasting:** UFuncs automatically support broadcasting, enabling operations on arrays with different but compatible shapes.
*   **Fast and Efficient:** UFuncs are implemented in compiled C code, making them incredibly fast and efficient for numerical computations in NumPy.
*   **Wide Range of Functions:** NumPy provides a vast library of UFuncs for various operations: Arithmetic, Trigonometric, Comparison, Logical, and many more!

---

### Session 4 - What We Will Cover

**Session 4: Universal Functions (UFuncs) - Session Outline**

**In this session, we will cover:**

*   **Understanding UFunc Concepts:** What makes UFuncs "universal" and why they are so important.
*   **Common UFunc Categories:** Exploring different types of UFuncs (arithmetic, trigonometric, comparison, logical, etc.).
*   **UFunc Features:**  Broadcasting, output arguments, and other key features of UFuncs.
*   **Performance Benefits:**  Understanding why UFuncs are significantly faster than standard Python loops for array operations.

**Mastering UFuncs is essential for writing efficient and concise NumPy code for numerical computations!**

---

### Understanding UFunc Concepts: Universality  🌍 

**What makes Universal Functions "Universal"?**

The term "Universal Functions" highlights several key aspects that make UFuncs fundamental to NumPy:

*   **Works Across Arrays:** UFuncs operate consistently across arrays of different dimensions (from scalars to N-dimensional arrays).
*   **Element-wise Application:**  They apply the operation element-by-element, regardless of the array's shape.
*   **Consistent Behavior:**  The operation is applied uniformly to every element in the input array(s).
*   **Foundation of NumPy Operations:**  UFuncs are the building blocks for a vast majority of NumPy's numerical operations, making them truly "universal" in their applicability within the library.

**This "universality" is what makes UFuncs so powerful and efficient for numerical computing with NumPy.**
---

### UFuncs and Broadcasting - Concept 📡

**UFuncs and Broadcasting: Seamless Shape Compatibility**

One of the most powerful features of UFuncs is their built-in support for **broadcasting**.  This allows UFuncs to operate on arrays that have *different shapes*, as long as those shapes are compatible according to NumPy's broadcasting rules.

**Broadcasting in UFuncs Means:**

*   **Flexibility:** Perform element-wise operations between arrays of different, compatible shapes.
*   **Efficiency:** Avoid unnecessary data duplication, making operations memory-efficient.
*   **Conciseness:** Write operations that work intuitively on arrays with varying shapes.
---

### UFuncs and Broadcasting - Example 💻

**Example: UFunc `np.add()` with broadcasting:**

```python
import numpy as np

array_a = np.array([1, 2, 3])     # Shape (3,)
scalar_b = 5                     # Scalar (shape ())

# UFunc np.add() broadcasts the scalar 'b' to match 'array_a'
result_broadcast = np.add(array_a, scalar_b)
print("Array + Scalar (Broadcasting):\n", result_broadcast) # Output: [6 7 8]
# Scalar '5' is effectively broadcast to [5, 5, 5] and then added element-wise.
```
---


### Common UFunc Categories: Arithmetic UFuncs ➗➕ (Part 1)

**NumPy provides a rich set of Arithmetic UFuncs for element-wise mathematical operations.** These UFuncs are fundamental for performing calculations on arrays.

**Key Arithmetic UFuncs (Part 1):**

*   **`np.add(array1, array2)`:**  Element-wise addition of two arrays (or array + scalar).  Operator equivalent: `+`
*   **`np.subtract(array1, array2)`:** Element-wise subtraction. Operator: `-`
*   **`np.multiply(array1, array2)`:** Element-wise multiplication. Operator: `*`
*   **`np.divide(array1, array2)`:** Element-wise division. Operator: `/`
*   **`np.floor_divide(array1, array2)`:** Floor division (element-wise). Operator: `//` (integer division, discarding remainder).
---

### Common UFunc Categories: Arithmetic UFuncs ➗➕ (Part 2)

**Key Arithmetic UFuncs (Part 2):**

*   **`np.power(array1, array2)`:** Element-wise exponentiation (array1 raised to the power of array2). Operator: `**`
*   **`np.remainder(array1, array2)` or `np.mod(array1, array2)`:** Element-wise remainder (modulo). Operator: `%`

**These Arithmetic UFuncs perform standard mathematical operations element-wise on NumPy arrays, with broadcasting support and high efficiency.**

---

### Arithmetic UFunc Example: `np.add()` ➕

**1. Element-wise Addition (`np.add()`):**

Perform element-wise addition between two arrays or an array and a scalar using `np.add()`.

```python
import numpy as np

array_add_a = np.array([1, 2, 3])
array_add_b = np.array([10, 20, 30])

# Element-wise addition of two arrays
result_add_array = np.add(array_add_a, array_add_b)
print("Array Addition (array + array):\n", result_add_array)
# Output:
# Array Addition (array + array):
#  [11 22 33]
```
---

### Arithmetic UFunc Example: `np.subtract()` ➖

**2. Element-wise Subtraction (`np.subtract()`):**

Perform element-wise subtraction between two arrays or an array and a scalar using `np.subtract()`.

```python
import numpy as np

array_sub_a = np.array([10, 20, 30])
array_sub_b = np.array([1, 2, 3])

# Element-wise subtraction of two arrays
result_sub_array = np.subtract(array_sub_a, array_sub_b)
print("Array Subtraction (array - array):\n", result_sub_array)
# Output:
# Array Subtraction (array - array):
#  [ 9 18 27]

# Subtraction with a scalar (broadcasting)
scalar_sub_c = 5
result_sub_scalar = np.subtract(array_sub_a, scalar_sub_c)
print("\nArray - Scalar Subtraction (broadcasting):\n", result_sub_scalar)
# Output:
# Array - Scalar Subtraction (broadcasting):
#  [ 5 15 25]
```
---

### Arithmetic UFunc Example: `np.multiply()` ✖️

**3. Element-wise Multiplication (`np.multiply()`):**

Perform element-wise multiplication using `np.multiply()`.

```python
import numpy as np

array_mul_a = np.array([1, 2, 3])
array_mul_b = np.array([10, 20, 30])

result_multiply = np.multiply(array_mul_a, array_mul_b)
print("Array Multiplication:\n", result_multiply)
# Output:
# Array Multiplication:
#  [ 10  40  90]
```
---

### Arithmetic UFunc Example: `np.divide()` ➗

**4. Element-wise Division (`np.divide()`):**

Perform element-wise division using `np.divide()`.

```python
import numpy as np

array_div_a = np.array([10, 20, 30])
array_div_b = np.array([2, 5, 10])

result_divide = np.divide(array_div_a, array_div_b)
print("Array Division:\n", result_divide)
# Output:
# Array Division:
#  [ 5.  4.  3.]
# Note: Division results in floating-point numbers.
```
---

### Arithmetic UFunc Example: `np.floor_divide()` //

**5. Element-wise Floor Division (`np.floor_divide()`):**

Perform floor division (integer division, discarding remainder) using `np.floor_divide()`.

```python
import numpy as np

array_floor_div_a = np.array([10, 20, 30])
array_floor_div_b = np.array([3, 6, 7])

result_floor_divide = np.floor_divide(array_floor_div_a, array_floor_div_b)
print("Array Floor Division:\n", result_floor_divide)
# Output:
# Array Floor Division:
#  [3 3 4]
# Note: Floor division discards the remainder and results in integers.
```
---

### Arithmetic UFunc Example: `np.power()` 🚀

**6. Element-wise Exponentiation (`np.power()`):**

Perform element-wise exponentiation (raising one array to the power of another, or an array to the power of a scalar) using `np.power()`.

```python
import numpy as np
array_power_a = np.array([1, 2, 3])
array_power_b = np.array([2, 3, 4]) # Exponents

# Array to the power of another array
result_power_array = np.power(array_power_a, array_power_b)
print("Array Exponentiation (array ** array):\n", result_power_array)
# Output:
# Array Exponentiation (array ** array):
#  [ 1  8 81]  (1^2, 2^3, 3^4)

# Array to the power of a scalar
scalar_power_c = 2
result_power_scalar = np.power(array_power_a, scalar_power_c)
print("\nArray to Scalar Power (array ** scalar):\n", result_power_scalar)
# Output:
# Array to Scalar Power (array ** scalar):
#  [1 4 9]   (1^2, 2^2, 3^2)
```
---

### Arithmetic UFunc Example: `np.remainder()`/`np.mod()` ➗%

**7. Element-wise Remainder (Modulo) (`np.remainder()` or `np.mod()`):**

Calculate the element-wise remainder (modulo) using `np.remainder()` or `np.mod()`. Both functions are identical.

```python
import numpy as np

array_rem_a = np.array([10, 20, 30])
array_rem_b = np.array([3, 7, 11])

result_remainder = np.remainder(array_rem_a, array_rem_b) # or np.mod(array_rem_a, array_rem_b)
print("Array Remainder (Modulo):\n", result_remainder)
# Output:
# Array Remainder (Modulo):
#  [1 6 8]  (10%3, 20%7, 30%11)
```
---

### Common UFunc Categories: Trigonometric UFuncs 📐

**NumPy also provides a comprehensive set of Trigonometric UFuncs for element-wise trigonometric calculations.**

**Key Trigonometric UFuncs:**

*   **`np.sin(array)`:**  Element-wise sine.
*   **`np.cos(array)`:** Element-wise cosine.
*   **`np.tan(array)`:** Element-wise tangent.
*   **`np.arcsin(array)`:** Element-wise arcsine (inverse sine).
*   **`np.arccos(array)`:** Element-wise arccosine (inverse cosine).
*   **`np.arctan(array)`:** Element-wise arctangent (inverse tangent).

**These Trigonometric UFuncs enable efficient element-wise trigonometric operations on NumPy arrays.**
---

### Trigonometric UFunc Example: `np.sin()` 🌊

**1. Element-wise Sine (`np.sin()`):**

Calculate the element-wise sine of an array (angles are assumed to be in radians) using `np.sin()`.

```python
import numpy as np

angles = np.array([0, np.pi/2, np.pi, 3*np.pi/2]) # Angles in radians
sin_values = np.sin(angles)

print("Angles (radians):", angles)
# Output:
# Angles (radians): [0.         1.57079633 3.14159265 4.71238898]
print("\nSine values (np.sin(angles)):\n", sin_values)
# Output:
# Sine values (np.sin(angles)):
#  [ 0.0000000e+00  1.0000000e+00  1.2246468e-16 -1.0000000e+00]
# Note: Due to floating-point precision, values close to 0 may be represented as very small numbers like 1.22e-16.
```
---

### Trigonometric UFunc Example: `np.cos()` 🏔️

**2. Element-wise Cosine (`np.cos()`):**

Calculate the element-wise cosine of an array (angles in radians) using `np.cos()`.

```python
import numpy as np

angles_cos = np.array([0, np.pi/3, np.pi/2, 2*np.pi/3, np.pi]) # Radians
cos_values = np.cos(angles_cos)

print("Angles (radians):", angles_cos)
# Output:
# Angles (radians): [0.         1.04719755 1.57079633 2.0943951  3.14159265]
print("\nCosine values (np.cos(angles_cos)):\n", cos_values)
# Output:
# Cosine values (np.cos(angles_cos)):
#  [ 1.00000000e+00  5.00000000e-01  6.1232340e-17 -5.00000000e-01 -1.00000000e+00]
# Again, note floating-point approximations for values very close to 0.
```
---

### Trigonometric UFunc Example: `np.tan()` ⛰️

**3. Element-wise Tangent (`np.tan()`):**

Calculate the element-wise tangent of an array (angles in radians) using `np.tan()`.

```python
import numpy as np

angles_tan = np.array([0, np.pi/4, np.pi/2, 3*np.pi/4, np.pi]) # Radians
tan_values = np.tan(angles_tan)

print("Angles (radians):", angles_tan)
# Output:
# Angles (radians): [0.         0.78539816 1.57079633 2.35619449 3.14159265]
print("\nTangent values (np.tan(angles_tan)):\n", tan_values)
# Output:
# Tangent values (np.tan(angles_tan)):
#  [ 0.0000000e+00  1.0000000e+00  1.6331239e+16 -1.0000000e+00  1.2246468e-16]
# Note: Tangent of pi/2 (90 degrees) is mathematically infinity, represented by a very large number in floating-point.
```
---

### Trigonometric UFunc Example: `np.arcsin()` 〰️

**4. Element-wise Arcsine (Inverse Sine) (`np.arcsin()`):**

Calculate the element-wise arcsine (inverse sine, angle in radians whose sine is given) using `np.arcsin()`.  The input values should be in the range [-1, 1].

```python
import numpy as np

sin_values_arcsin = np.array([-1, -0.5, 0, 0.5, 1]) # Sine values
arcsin_angles = np.arcsin(sin_values_arcsin) # Calculate arcsine (inverse sine)

print("Sine values:", sin_values_arcsin)
# Output:
# Sine values: [-1.  -0.5  0.   0.5   1. ]
print("\nArcsine values (np.arcsin(sin_values)) (radians):\n", arcsin_angles)
# Output:
# Arcsine values (np.arcsin(sin_values)) (radians):
#  [-1.57079633 -0.52359878  0.          0.52359878  1.57079633]
# These output values are angles in radians.
```
---

### Trigonometric UFunc Example: `np.arccos()` 拱

**5. Element-wise Arccosine (Inverse Cosine) (`np.arccos()`):**

Calculate the element-wise arccosine (inverse cosine, angle in radians whose cosine is given) using `np.arccos()`. The input values should be in the range [-1, 1].

```python
import numpy as np

cos_values_arccos = np.array([-1, -0.5, 0, 0.5, 1]) # Cosine values
arccos_angles = np.arccos(cos_values_arccos) # Calculate arccosine (inverse cosine)

print("Cosine values:", cos_values_arccos)
# Output:
# Cosine values: [-1.  -0.5  0.   0.5   1. ]
print("\nArccosine values (np.arccos(cos_values)) (radians):\n", arccos_angles)
# Output:
# Arccosine values (np.arccos(cos_values)) (radians):
#  [3.14159265 2.0943951  1.57079633 1.04719755 0.        ]
# These output values are angles in radians.
```
---

### Trigonometric UFunc Example: `np.arctan()` 📉

**6. Element-wise Arctangent (Inverse Tangent) (`np.arctan()`):**

Calculate the element-wise arctangent (inverse tangent, angle in radians whose tangent is given) using `np.arctan()`.

```python
import numpy as np

tan_values_arctan = np.array([-1, 0, 1]) # Tangent values
arctan_angles = np.arctan(tan_values_arctan) # Calculate arctangent (inverse tangent)

print("Tangent values:", tan_values_arctan)
# Output:
# Tangent values: [-1.  0.  1.]
print("\nArctangent values (np.arctan(tan_values)) (radians):\n", arctan_angles)
# Output:
# Arctangent values (np.arctan(tan_values)) (radians):
#  [-0.78539816  0.          0.78539816]
# These output values are angles in radians.
```
---

### Trigonometric UFuncs: Degrees and Radians 🌡️

**Important Note: Degrees vs. Radians in Trigonometric UFuncs**

*   **Radians by Default:** NumPy's trigonometric UFuncs (`np.sin()`, `np.cos()`, `np.tan()`, `np.arcsin()`, `np.arccos()`, `np.arctan()`) work with angles in **radians** by default.
*   **Degrees Conversion:** If you have angles in degrees, you need to convert them to radians *before* using these UFuncs.
*   **`np.deg2rad()` and `np.rad2deg()`:** NumPy provides functions for easy conversion between degrees and radians:
    *   `np.deg2rad(degrees_array)`: Convert degrees to radians.
    *   `np.rad2deg(radians_array)`: Convert radians to degrees.

**Always be mindful of whether your angles are in degrees or radians when using NumPy's trigonometric functions!**
---

### Trigonometric UFunc Example: Degrees to Radians Conversion 🌍

**Example: Working with Angles in Degrees**

If your angles are given in degrees, first convert them to radians using `np.deg2rad()` before using trigonometric UFuncs.

```python
import numpy as np
angles_degrees = np.array([0, 30, 45, 60, 90]) # Angles in degrees

# Convert degrees to radians using np.deg2rad()
angles_radians = np.deg2rad(angles_degrees)
print("Angles (degrees):", angles_degrees)
# Output:
# Angles (degrees): [ 0 30 45 60 90]
print("\nAngles (radians) after conversion:\n", angles_radians)
# Output:
# Angles (radians) after conversion:
#  [0.         0.52359878 0.78539816 1.04719755 1.57079633]
# Now use np.sin() with radians
sin_values_degrees = np.sin(angles_radians)
print("\nSine values (using angles originally in degrees):\n", sin_values_degrees)
# Output:
# Sine values (using angles originally in degrees):
#  [0.         0.5        0.70710678 0.8660254  1.        ]
```
---

### Trigonometric UFunc Example: Degrees to Radians Conversion 🌍 (Part 1)

**Example: Converting Angles from Degrees to Radians**

If your angles are in degrees, first convert them to radians using `np.deg2rad()`.

```python
import numpy as np

angles_degrees = np.array([0, 30, 45, 60, 90]) # Angles in degrees

# Convert degrees to radians using np.deg2rad()
angles_radians = np.deg2rad(angles_degrees)
print("Angles (degrees):", angles_degrees)
# Output:
# Angles (degrees): [ 0 30 45 60 90]
print("\nAngles (radians) after conversion:\n", angles_radians)
# Output:
# Angles (radians) after conversion:
#  [0.         0.52359878 0.78539816 1.04719755 1.57079633]
```
---

### Trigonometric UFunc Example: Degrees to Radians Conversion 🌍 (Part 1)

**Example: Converting Angles from Degrees to Radians**

If your angles are in degrees, first convert them to radians using `np.deg2rad()`.

```python
import numpy as np

angles_degrees = np.array([0, 30, 45, 60, 90]) # Angles in degrees

# Convert degrees to radians using np.deg2rad()
angles_radians = np.deg2rad(angles_degrees)
print("Angles (degrees):", angles_degrees)
# Output:
# Angles (degrees): [ 0 30 45 60 90]
print("\nAngles (radians) after conversion:\n", angles_radians)
# Output:
# Angles (radians) after conversion:
#  [0.         0.52359878 0.78539816 1.04719755 1.57079633]
```
---

### Trigonometric UFunc Example: Degrees to Radians Conversion 🌍 (Part 2)

**Using Radians with Trigonometric UFuncs**

After converting degrees to radians, you can use the radian values with trigonometric UFuncs like `np.sin()`.

```python
import numpy as np

angles_radians = np.array([0.        , 0.52359878, 0.78539816, 1.04719755, 1.57079633]) # Radians from previous slide

# Use np.sin() with the converted radian angles
sin_values_degrees = np.sin(angles_radians)
print("Sine values (using angles originally in degrees):\n", sin_values_degrees)
# Output:
# Sine values (using angles originally in degrees):
#  [0.         0.5        0.70710678 0.8660254  1.        ]
```
---

### Trigonometric UFunc Example: Radians to Degrees Conversion 🌎

**Example: Converting Angles from Radians back to Degrees**

You can convert angles back from radians to degrees using `np.rad2deg()`.

```python
import numpy as np

angles_radians_back = np.array([0, np.pi/2, np.pi, 3*np.pi/2, 2*np.pi]) # Angles in radians

# Convert radians back to degrees using np.rad2deg()
angles_degrees_back = np.rad2deg(angles_radians_back)
print("Angles (radians):", angles_radians_back)
# Output:
# Angles (radians): [0.         1.57079633 3.14159265 4.71238898 6.28318531]
print("\nAngles (degrees) after conversion:\n", angles_degrees_back)
# Output:
# Angles (degrees) after conversion:
#  [  0.  90. 180. 270. 360.]
```
---

### Common UFunc Categories: Trigonometric UFuncs - Summary 🎬

**Summary of Trigonometric UFuncs:**

*   **Element-wise Trigonometric Operations:** NumPy provides UFuncs for sine (`np.sin()`), cosine (`np.cos()`), tangent (`np.tan()`), and their inverse functions (`np.arcsin()`, `np.arccos()`, `np.arctan()`).
*   **Radians by Default:** Remember that these UFuncs operate on angles in **radians** by default.
*   **Degrees-Radians Conversion:** Use `np.deg2rad()` to convert degrees to radians and `np.rad2deg()` to convert radians back to degrees when needed.
*   **Essential for Angle/Wave-based Calculations:** Trigonometric UFuncs are crucial for working with angular data, wave phenomena, and various scientific and engineering applications.

**Next, we'll explore another category of UFuncs: Comparison UFuncs!**
---

### Common UFunc Categories: Comparison UFuncs ⚖️

**NumPy also provides a set of Comparison UFuncs for element-wise comparisons between arrays.**

**Key Comparison UFuncs:**

*   **`np.equal(array1, array2)`:**  Element-wise equality comparison (`array1 == array2`).
*   **`np.not_equal(array1, array2)`:** Element-wise inequality comparison (`array1 != array2`).
*   **`np.greater(array1, array2)`:** Element-wise greater-than comparison (`array1 > array2`).
*   **`np.greater_equal(array1, array2)`:** Element-wise greater-than-or-equal comparison (`array1 >= array2`).
*   **`np.less(array1, array2)`:** Element-wise less-than comparison (`array1 < array2`).
*   **`np.less_equal(array1, array2)`:** Element-wise less-than-or-equal comparison (`array1 <= array2`).

**These Comparison UFuncs perform element-wise comparisons and return boolean arrays (`True` or `False`) based on the comparison results.**

---

### Comparison UFunc Example: `np.equal()` == 🎯

**1. Element-wise Equality (`np.equal()`):**

Perform element-wise equality comparison between two arrays using `np.equal()`. Returns `True` where elements are equal, `False` otherwise.

```python
import numpy as np

array_comp_a = np.array([1, 2, 3, 4, 5])
array_comp_b = np.array([1, 2, 9, 4, 6])

result_equal = np.equal(array_comp_a, array_comp_b)
print("Array Equality Comparison:\n", result_equal)
# Output:
# Array Equality Comparison:
#  [ True  True False  True False]
# Compares element-wise: [1==1, 2==2, 3==9, 4==4, 5==6] -> [True, True, False, True, False]
```
---

### Comparison UFunc Example: `np.not_equal()` != 🙅‍♀️

**2. Element-wise Inequality (`np.not_equal()`):**

Perform element-wise inequality comparison between two arrays using `np.not_equal()`. Returns `True` where elements are *not* equal, `False` otherwise.

```python
import numpy as np

array_comp_neq_a = np.array([1, 2, 3, 4, 5])
array_comp_neq_b = np.array([1, 2, 9, 4, 6])

result_not_equal = np.not_equal(array_comp_neq_a, array_comp_neq_b)
print("Array Inequality Comparison:\n", result_not_equal)
# Output:
# Array Inequality Comparison:
#  [False False  True False  True]
# Compares element-wise for inequality: [1!=1, 2!=2, 3!=9, 4!=4, 5!=6] -> [False, False, True, False, True]
```
---

### Comparison UFunc Example: `np.greater()` > 👍

**3. Element-wise Greater Than (`np.greater()`):**

Perform element-wise greater-than comparison between two arrays using `np.greater()`. Returns `True` where the first array is greater, `False` otherwise.

```python
import numpy as np

array_comp_gt_a = np.array([1, 20, 3, 40, 5])
array_comp_gt_b = np.array([5, 2, 9, 30, 5])

result_greater = np.greater(array_comp_gt_a, array_comp_gt_b)
print("Array Greater Than Comparison:\n", result_greater)
# Output:
# Array Greater Than Comparison:
#  [False  True False  True False]
# Compares element-wise: [1>5, 20>2, 3>9, 40>30, 5>5] -> [False, True, False, True, False]
```
---

### Comparison UFunc Example: `np.greater_equal()` >= 👍=

**4. Element-wise Greater Than or Equal (`np.greater_equal()`):**

Perform element-wise greater-than-or-equal-to comparison using `np.greater_equal()`. Returns `True` where the first array is greater than or equal to, `False` otherwise.

```python
import numpy as np

array_comp_gte_a = np.array([1, 20, 3, 40, 5])
array_comp_gte_b = np.array([5, 2, 9, 40, 5])

result_greater_equal = np.greater_equal(array_comp_gte_a, array_comp_gte_b)
print("Array Greater or Equal Comparison:\n", result_greater_equal)
# Output:
# Array Greater or Equal Comparison:
#  [False  True False  True  True]
# Compares element-wise: [1>=5, 20>=2, 3>=9, 40>=40, 5>=5] -> [False, True, False, True, True]
```
---

### Comparison UFunc Example: `np.less()` < 👇

**5. Element-wise Less Than (`np.less()`):**

Perform element-wise less-than comparison using `np.less()`. Returns `True` where the first array is less than, `False` otherwise.

```python
import numpy as np

array_comp_lt_a = np.array([1, 20, 3, 40, 5])
array_comp_lt_b = np.array([5, 2, 9, 30, 5])

result_less = np.less(array_comp_lt_a, array_comp_lt_b)
print("Array Less Than Comparison:\n", result_less)
# Output:
# Array Less Than Comparison:
#  [ True False  True False False]
# Compares element-wise: [1<5, 20<2, 3<9, 40<30, 5<5] -> [True, False, True, False, False]
```
---

### Comparison UFunc Example: `np.less_equal()` <= 👇=

**6. Element-wise Less Than or Equal (`np.less_equal()`):**

Perform element-wise less-than-or-equal-to comparison using `np.less_equal()`. Returns `True` where the first array is less than or equal to, `False` otherwise.

```python
import numpy as np

array_comp_lte_a = np.array([1, 20, 3, 40, 5])
array_comp_lte_b = np.array([5, 2, 9, 40, 5])

result_less_equal = np.less_equal(array_comp_lte_a, array_comp_lte_b)
print("Array Less or Equal Comparison:\n", result_less_equal)
# Output:
# Array Less or Equal Comparison:
#  [ True False  True  True  True]
# Compares element-wise: [1<=5, 20<=2, 3<=9, 40<=40, 5<=5] -> [True, False, True, True, True]
```
---

### Common UFunc Categories: Comparison UFuncs - Summary ✅

**Summary of Comparison UFuncs:**

*   **Element-wise Comparisons:** NumPy provides UFuncs for all standard comparison operations: equal (`np.equal()`), not equal (`np.not_equal()`), greater than (`np.greater()`), greater than or equal (`np.greater_equal()`), less than (`np.less()`), and less than or equal (`np.less_equal()`).
*   **Boolean Array Output:** Comparison UFuncs always return boolean arrays (`True` or `False`) as their result.
*   **Foundation for Conditional Logic:** Comparison UFuncs are fundamental for implementing conditional logic and data filtering in NumPy, often used in conjunction with boolean indexing (as we saw in Session 3!).

**Next, we'll explore another category of UFuncs: Logical UFuncs!**
---

### Common UFunc Categories: Logical UFuncs 🧠

**NumPy provides Logical UFuncs to perform element-wise logical operations on boolean arrays (or arrays that can be interpreted as boolean).**

**Key Logical UFuncs:**

*   **`np.logical_and(array1, array2)`:** Element-wise logical AND. Operator equivalent: `&` (for boolean arrays).
*   **`np.logical_or(array1, array2)`:** Element-wise logical OR. Operator equivalent: `|` (for boolean arrays).
*   **`np.logical_not(array)`:** Element-wise logical NOT (inverts boolean values). Operator equivalent: `~` (for boolean arrays).
*   **`np.logical_xor(array1, array2)`:** Element-wise logical XOR (exclusive OR).

**These Logical UFuncs are essential for combining and manipulating boolean conditions and performing logical operations on array data.**

---

### Logical UFunc Example: `np.logical_and()` 🤝

**1. Element-wise Logical AND (`np.logical_and()`):**

Perform element-wise logical AND between two arrays. Returns `True` if *both* corresponding elements are `True` (or non-zero), `False` otherwise.

```python
import numpy as np

bool_array_and_a = np.array([True, True, False, False])
bool_array_and_b = np.array([True, False, True, False])

result_logical_and = np.logical_and(bool_array_and_a, bool_array_and_b)
print("Logical AND:\n", result_logical_and)
# Output:
# Logical AND:
#  [ True False False False]
# Element-wise AND: [True AND True, True AND False, False AND True, False AND False] -> [True, False, False, False]
```
---

### Logical UFunc Example: `np.logical_or()` ➕

**2. Element-wise Logical OR (`np.logical_or()`):**

Perform element-wise logical OR between two arrays. Returns `True` if *at least one* of the corresponding elements is `True` (or non-zero), `False` if both are `False` (or zero).

```python
import numpy as np

bool_array_or_a = np.array([True, True, False, False])
bool_array_or_b = np.array([True, False, True, False])

result_logical_or = np.logical_or(bool_array_or_a, bool_array_or_b)
print("Logical OR:\n", result_logical_or)
# Output:
# Logical OR:
#  [ True  True  True False]
# Element-wise OR: [True OR True, True OR False, False OR True, False OR False] -> [True, True, True, False]
```
---

### Logical UFunc Example: `np.logical_not()` 🚫

**3. Element-wise Logical NOT (`np.logical_not()`):**

Perform element-wise logical NOT (inversion) on an array. Returns `True` for `False` elements (or zero), and `False` for `True` elements (or non-zero).

```python
import numpy as np

bool_array_not = np.array([True, False, True, False])

result_logical_not = np.logical_not(bool_array_not)
print("Logical NOT:\n", result_logical_not)
# Output:
# Logical NOT:
#  [False  True False  True]
# Element-wise NOT: [NOT True, NOT False, NOT True, NOT False] -> [False, True, False, True]
```
---

### Logical UFunc Example: `np.logical_xor()` Exclusive OR 🔀

**4. Element-wise Logical XOR (Exclusive OR) (`np.logical_xor()`):**

Perform element-wise logical XOR (exclusive OR) between two arrays. Returns `True` if *exactly one* of the corresponding elements is `True` (or non-zero), and `False` otherwise.

```python
import numpy as np

bool_array_xor_a = np.array([True, True, False, False])
bool_array_xor_b = np.array([True, False, True, False])

result_logical_xor = np.logical_xor(bool_array_xor_a, bool_array_xor_b)
print("Logical XOR (Exclusive OR):\n", result_logical_xor)
# Output:
# Logical XOR (Exclusive OR):
#  [False  True  True False]
# Element-wise XOR: [True XOR True, True XOR False, False XOR True, False XOR False] -> [False, True, True, False]
```
---

### Common UFunc Categories: Logical UFuncs - Summary ✅

**Summary of Logical UFuncs:**

*   **Element-wise Logical Operations:** NumPy provides UFuncs for common logical operations: AND (`np.logical_and()`), OR (`np.logical_or()`), NOT (`np.logical_not()`), and XOR (`np.logical_xor()`).
*   **Boolean Array Inputs & Outputs:** Logical UFuncs typically operate on boolean arrays and always return boolean arrays as their result.
*   **Combining Boolean Conditions:** Logical UFuncs are essential for combining and manipulating boolean conditions, allowing for complex data filtering and selection based on multiple criteria.

**Having explored Arithmetic, Trigonometric, Comparison, and Logical UFuncs, we've covered the main categories of UFuncs in NumPy!**

**Next, we will move on to explore key *Features* of UFuncs, starting with "UFunc Methods"!**
---

### UFunc Features: Introduction to UFunc Methods ⚙️

**Beyond element-wise operations, UFuncs also provide special *methods* that enable powerful aggregate operations and customized reductions.**

**What are UFunc Methods?**

UFunc methods are functions that can be called *on* a UFunc object to perform specific types of operations, such as:

*   **Reduction:** Applying a UFunc cumulatively along an array's axis (`.reduce()`).
*   **Accumulation:**  Generating cumulative results of a UFunc operation (`.accumulate()`).
*   **Outer product:** Computing the outer product of two arrays using a UFunc (`.outer()`).

**These methods significantly extend the utility of UFuncs beyond basic element-wise operations, allowing for concise and efficient array manipulations.**

**Let's explore these UFunc methods in detail, starting with `.reduce()`.**
---

### UFunc Method: `.reduce()` 📉

**1. `.reduce()`: Reducing an array to a single value**

The `.reduce()` method applies a UFunc cumulatively to all elements of an array along a specified axis, reducing the array to a single value (or a lower-dimensional array).

**Example: Summing array elements using `.reduce()` with `np.add`**

```python
import numpy as np

array_reduce = np.array([1, 2, 3, 4, 5])

# Use .reduce() with np.add to sum all elements
sum_reduced = np.add.reduce(array_reduce)
print("Array:", array_reduce)
# Output: Array: [1 2 3 4 5]
print("\nSum using .reduce(np.add):\n", sum_reduced)
# Output: Sum using .reduce(np.add): 15
# .reduce() with np.add effectively performs: 1+2+3+4+5 = 15
```
---

### UFunc Method: `.reduce()` with different UFuncs ➕✖️

**`.reduce()` works with *any* UFunc, not just `np.add()`. You can use it to perform cumulative operations using other UFuncs as well.**

**Examples with other UFuncs:**

```python
import numpy as np

array_reduce_multi = np.array([1, 2, 3, 4, 5])

# 1. Product of array elements using .reduce() with np.multiply
product_reduced = np.multiply.reduce(array_reduce_multi)
print("Array:", array_reduce_multi)
# Output: Array: [1 2 3 4 5]
print("\nProduct using .reduce(np.multiply):\n", product_reduced)
# Output: Product using .reduce(np.multiply): 120
# .reduce() with np.multiply performs: 1*2*3*4*5 = 120


array_reduce_max = np.array([5, 1, 9, 2, 7])

# 2. Maximum element using .reduce() with np.maximum
max_reduced = np.maximum.reduce(array_reduce_max)
print("\nArray:", array_reduce_max)
# Output: Array: [5 1 9 2 7]
print("\nMaximum using .reduce(np.maximum):\n", max_reduced)
# Output: Maximum using .reduce(np.maximum): 9
# .reduce() with np.maximum finds the maximum element in the array.
```
---

### UFunc Method: `.reduce()` with Axis ↔️

**`.reduce()` and the `axis` parameter for multi-dimensional arrays**

For multi-dimensional arrays, you can use the `axis` parameter in `.reduce()` to specify the axis along which the reduction is performed.

**Example: Summing along rows and columns of a 2D array**

```python
import numpy as np

array_reduce_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("2D Array:\n", array_reduce_2d)
# Output:
# 2D Array:
#  [[1 2 3]
#   [4 5 6]
#   [7 8 9]]

# 1. Reduce along axis=0 (columns) - sum of each column
sum_columns = np.add.reduce(array_reduce_2d, axis=0)
print("\nColumn Sums (.reduce(axis=0)):\n", sum_columns) # Output: [12 15 18]
# Sum of each column: [1+4+7, 2+5+8, 3+6+9] = [12, 15, 18]

# 2. Reduce along axis=1 (rows) - sum of each row
sum_rows = np.add.reduce(array_reduce_2d, axis=1)
print("\nRow Sums (.reduce(axis=1)):\n", sum_rows) # Output: [ 6 15 24]
# Sum of each row: [1+2+3, 4+5+6, 7+8+9] = [6, 15, 24]
```
---

### UFunc Method: `.accumulate()` 📶

**2. `.accumulate()`: Cumulative operation along an axis**

The `.accumulate()` method applies a UFunc *cumulatively* along a specified axis, but instead of reducing to a single value, it returns an array containing the cumulative results at each step.

**Example: Cumulative sum using `.accumulate()` with `np.add`**

```python
import numpy as np

array_accumulate = np.array([1, 2, 3, 4, 5])

# Use .accumulate() with np.add for cumulative sum
cumulative_sum = np.add.accumulate(array_accumulate)
print("Array:", array_accumulate)
# Output: Array: [1 2 3 4 5]
print("\nCumulative Sum using .accumulate(np.add):\n", cumulative_sum)
# Output: Cumulative Sum using .accumulate(np.add): [ 1  3  6 10 15]
# .accumulate() with np.add performs cumulative summation:
# [1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5] = [1, 3, 6, 10, 15]
```
---

### UFunc Method: `.accumulate()` with different UFuncs ➕✖️

**Like `.reduce()`, `.accumulate()` also works with various UFuncs, allowing for cumulative operations beyond just summation.**

**Examples with other UFuncs:**

```python
import numpy as np

array_accum_multi = np.array([1, 2, 3, 4, 5])

# 1. Cumulative product using .accumulate() with np.multiply
cumulative_product = np.multiply.accumulate(array_accum_multi)
print("Array:", array_accum_multi)
# Output: Array: [1 2 3 4 5]
print("\nCumulative Product using .accumulate(np.multiply):\n", cumulative_product)
# Output: Cumulative Product using .accumulate(np.multiply): [  1   2   6  24 120]
# Cumulative product: [1, 1*2, 1*2*3, 1*2*3*4, 1*2*3*4*5] = [1, 2, 6, 24, 120]


array_accum_max = np.array([5, 1, 9, 2, 7])

# 2. Cumulative maximum using .accumulate() with np.maximum
cumulative_max = np.maximum.accumulate(array_accum_max)
print("\nArray:", array_accum_max)
# Output: Array: [5 1 9 2 7]
print("\nCumulative Maximum using .accumulate(np.maximum):\n", cumulative_max)
# Output: Cumulative Maximum using .accumulate(np.maximum): [5 5 9 9 9]
# Cumulative maximum: [5, max(5,1), max(max(5,1),9), max(max(5,1,9),2), max(max(5,1,9,2),7)] = [5, 5, 9, 9, 9]
```
---

### UFunc Method: `.accumulate()` with Axis ↔️

**`.accumulate()` and the `axis` parameter for multi-dimensional arrays**

Like `.reduce()`, `.accumulate()` also accepts the `axis` parameter to specify the axis for cumulative operations in multi-dimensional arrays.

**Example: Cumulative sum along rows and columns of a 2D array**

```python
import numpy as np

array_accum_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("2D Array:\n", array_accum_2d)
# Output:
# 2D Array:
#  [[1 2 3]
#   [4 5 6]
#   [7 8 9]]

# 1. Accumulate along axis=0 (columns) - cumulative sum down each column
accumulate_columns = np.add.accumulate(array_accum_2d, axis=0)
print("\nColumn Cumulative Sums (.accumulate(axis=0)):\n", accumulate_columns)
# Output:
# Column Cumulative Sums (.accumulate(axis=0)):
#  [[ 1  2  3]
#   [ 5  7  9]  #[1, 4] [2, 5] [3, 6] -> [1, 1+4] [2, 2+5] [3, 3+6]
#   [12 15 18]] #[1, 4, 7] [2, 5, 8] [3, 6, 9] -> [1, 1+4+7] [2, 2+5+8] [3, 3+6+9]


# 2. Accumulate along axis=1 (rows) - cumulative sum across each row
accumulate_rows = np.add.accumulate(array_accum_2d, axis=1)
print("\nRow Cumulative Sums (.accumulate(axis=1)):\n", accumulate_rows)
# Output:
# Row Cumulative Sums (.accumulate(axis=1)):
#  [[ 1  3  6] #[1] [1, 2] [1, 2, 3] -> [1] [1, 1+2] [1, 1+2+3]
#   [ 4  9 15] #[4] [4, 5] [4, 5, 6] -> [4] [4, 4+5] [4, 4+5+6]
#   [ 7 15 24]] #[7] [7, 8] [7, 8, 9] -> [7] [7, 7+8] [7, 7+8+9]
```
---

### UFunc Method: `.outer()` 🔀

**3. `.outer()`: Outer product of two arrays**

The `.outer()` method computes the outer product of two input arrays using the UFunc. The outer product, for UFuncs, applies the UFunc to all pairs of elements from the two input arrays.

**Example: Outer product using `.outer()` with `np.multiply`**

```python
import numpy as np

array_outer_a = np.array([1, 2, 3])
array_outer_b = np.array([10, 20, 30])

# Use .outer() with np.multiply for outer product
outer_product = np.multiply.outer(array_outer_a, array_outer_b)
print("Array 1:", array_outer_a)
# Output: Array 1: [1 2 3]
print("\nArray 2:", array_outer_b)
# Output: Array 2: [10 20 30]
print("\nOuter Product using .outer(np.multiply):\n", outer_product)
# Output:
# Outer Product using .outer(np.multiply):
#  [[ 10  20  30] # 1 * [10, 20, 30]
#   [ 20  40  60] # 2 * [10, 20, 30]
#   [ 30  60  90]] # 3 * [10, 20, 30]
# Result is a 2D array where each element [i, j] is array_outer_a[i] * array_outer_b[j]
```
---

### UFunc Features: UFunc Methods - Summary ✅

**Summary of UFunc Methods:**

*   **`.reduce()`:** Reduces an array to a single value (or lower dimension) by applying a UFunc cumulatively along a specified axis.  Think of it as "aggregating" array elements.
*   **`.accumulate()`:** Generates an array of the same shape (or lower dimension in some cases) containing the cumulative results of a UFunc operation along a specified axis. Think of it as showing the "step-by-step" results of a cumulative operation.
*   **`.outer()`:** Computes the outer product of two arrays, applying a UFunc to all pairs of elements from the two arrays, resulting in a higher-dimensional array.  Think of it as creating a "combination table" of UFunc operations between two arrays.

**These UFunc methods significantly expand the power and flexibility of NumPy UFuncs for efficient array manipulation and aggregation!**

**Next, we will explore another key feature of UFuncs: the `out` argument!**
---

### UFunc Features: Output Arguments (`out` argument) ➡️

**Another powerful feature of UFuncs is the `out` argument. It provides control over where the output of a UFunc operation is stored.**

**What is the `out` argument?**

*   **Specify Output Array:** The `out` argument lets you designate a pre-allocated array where the UFunc will write its results.
*   **In-place Operations (in effect):** By using `out`, you can perform operations "in-place" in the sense that the result is directly placed into an existing array, potentially avoiding the creation of new arrays and saving memory.
*   **Flexibility and Control:**  The `out` argument gives you more control over memory management and where UFunc results are stored.

**Let's see how to use the `out` argument in practice.**

---

### UFunc Feature Example: `out` argument with `np.add()` 💾

**Example: Using the `out` argument with `np.add()`**

```python
import numpy as np

array_in1 = np.array([1, 2, 3])
array_in2 = np.array([10, 20, 30])

# Pre-allocate an output array
array_out = np.zeros_like(array_in1) # Create array of zeros with same shape as array_in1

# Use the 'out' argument to store the result of np.add() in array_out
result_out = np.add(array_in1, array_in2, out=array_out)

print("Input Array 1:", array_in1)
# Output: Input Array 1: [1 2 3]
print("\nInput Array 2:", array_in2)
# Output: Input Array 2: [10 20 30]
print("\nOutput Array (using 'out' argument):\n", array_out)
# Output: Output Array (using 'out' argument):
#  [11 22 33]
print("\nReturn value of np.add(..., out=array_out):", result_out)
# Output: Return value of np.add(..., out=array_out): [11 22 33]
# Note: 'out' argument modifies array_out in-place, and also returns a reference to it.
```
---

### UFunc Features: `out` argument for Memory Efficiency 🧠💾

**Memory Efficiency with the `out` argument:**

Using the `out` argument can be beneficial for memory efficiency, especially in scenarios involving large arrays and repeated operations. It can help avoid the overhead of creating temporary arrays.

**Example: In-place-like operation for memory saving**

```python
import numpy as np

array_memory = np.array([1, 2, 3, 4, 5])

# "In-place" squaring using out argument (avoids creating a new array for the result)
np.power(array_memory, 2, out=array_memory) # Square each element and store result back in array_memory

print("Array after 'in-place' squaring using 'out' argument:\n", array_memory)
# Output:
# Array after 'in-place' squaring using 'out' argument:
#  [ 1  4  9 16 25]
# The original 'array_memory' is modified directly to store the squared values.
```
---

### UFunc Features: `out` argument Summary ✅

**Summary of the `out` argument:**

*   **Control over Output Location:** The `out` argument provides explicit control over where UFunc results are written.
*   **In-place Operation Capability:**  Enables "in-place"-like operations by writing results directly into pre-existing arrays, avoiding new array creation.
*   **Memory Efficiency:** Can improve memory efficiency, especially with large arrays and repeated calculations, by reducing memory allocation overhead.
*   **Optional but Powerful:** The `out` argument is optional but offers significant flexibility for memory management and optimization when working with NumPy UFuncs.

**Having explored UFunc Methods and the `out` argument, we've covered key *Features* that enhance UFunc functionality!**

**Next, we will delve into understanding the *Performance Benefits* of using UFuncs!**

---

### Performance Benefits: Why UFuncs are Fast? 🚀

**One of the most compelling reasons to use NumPy UFuncs is their exceptional performance compared to standard Python loops for numerical computations.**

**Why are UFuncs so much faster?**

*   **Compiled C Code:** UFuncs are implemented in highly optimized C code under the hood. This compiled code executes much faster than interpreted Python code, especially for numerical loops.
*   **Vectorized Operations:** UFuncs perform vectorized operations, processing entire arrays or array chunks in a single operation, rather than element by element in a Python loop. This eliminates Python loop overhead.
*   **Optimized for NumPy Arrays:** UFuncs are specifically designed to work with NumPy arrays, leveraging efficient memory access and data handling within NumPy's array structures.

**This combination of compiled code and vectorized operations results in significant speed advantages when using UFuncs for numerical tasks in NumPy!**

---

### Performance Benefit Example: UFunc vs. Loop Speed ⏱️

**Let's compare the execution speed of a UFunc operation to a standard Python loop for the same element-wise operation.**

**Example: Element-wise addition - UFunc vs. Loop**

```python
import numpy as np
import time

array_size = 1000000  # One million elements
array_a = np.arange(array_size)
array_b = np.arange(array_size)

# 1. Using NumPy UFunc (vectorized)
start_time_ufunc = time.time()
result_ufunc = np.add(array_a, array_b)
end_time_ufunc = time.time()
ufunc_time = end_time_ufunc - start_time_ufunc

# 2. Using standard Python loop (element-wise)
start_time_loop = time.time()
result_loop = [a + b for a, b in zip(array_a, array_b)]
end_time_loop = time.time()
loop_time = end_time_loop - start_time_loop

print("Array Size:", array_size)
print("\nUFunc Time (np.add):", f"{ufunc_time:.6f} seconds")
print("Loop Time (Python loop):", f"{loop_time:.6f} seconds")
print(f"\nUFunc is approximately {loop_time/ufunc_time:.1f} times faster than the loop!")
# Output will show UFunc significantly faster (e.g., 50x to 100x or more, depending on system)
```
**The UFunc approach is typically orders of magnitude faster than equivalent Python loop-based implementations for numerical array operations.**
---

### Performance Benefits: Summary ✅

**Summary of Performance Benefits of UFuncs:**

*   **Significant Speed Advantage:** UFuncs offer a dramatic speed improvement compared to Python loops for numerical operations on arrays (often 50x to 100x faster or more).
*   **Compiled C Code & Vectorization:** This speed comes from UFuncs being implemented in compiled C code and performing vectorized operations, eliminating Python loop overhead.
*   **Efficiency for Numerical Tasks:** For any numerical task involving arrays in NumPy, using UFuncs is the highly recommended and efficient approach.

**By leveraging UFuncs, you can write high-performance numerical code in Python with NumPy!**

**In Session 4, we've explored the core concepts, categories, features, and performance benefits of NumPy Universal Functions (UFuncs)!**

**[Next: Session 5 - Topic to be decided]** (Or: **End of Session 4**)

---

### Other UFunc Categories (Brief Overview) ✨

**Beyond the main categories, NumPy offers even more UFuncs for specialized operations!**

**Just a glimpse of other categories:**

*   **Rounding UFuncs:**  Functions like `np.round()`, `np.floor()`, `np.ceil()` for element-wise rounding to different precisions or directions.
*   **Exponents and Logarithms UFuncs:** Functions like `np.exp()`, `np.log()`, `np.log10()` for element-wise exponential and logarithmic calculations.
*   **... and many more!** NumPy's extensive UFunc library covers a wide range of mathematical, logical, and bitwise operations.

**This session focused on the *core* UFunc concepts and the most commonly used categories. Explore the NumPy documentation to discover the full breadth of UFuncs available!**

**[Final Slide: Session 4 Summary/End]**

---

