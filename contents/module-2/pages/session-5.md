---
theme: seriph
transition: fade
---

### Session 5: Array Manipulation - Reshaping, Stacking, Splitting 🛠️

**Welcome to Session 5: Array Manipulation!**

In this session, we will explore essential techniques for changing the shape and structure of NumPy arrays.  Array manipulation is a fundamental skill for preparing and transforming data for analysis.

**Key Topics in Session 5:**

*   **Reshaping Arrays:** Changing the shape of arrays without altering the data (`reshape()`, `flatten()`, `ravel()`).
*   **Stacking Arrays:** Combining arrays together, either horizontally or vertically (`np.hstack()`, `np.vstack()`, `np.concatenate()`).
*   **Splitting Arrays:** Dividing arrays into smaller sub-arrays, either horizontally or vertically (`np.hsplit()`, `np.vsplit()`, `np.split()`).

**These array manipulation techniques are crucial for data preprocessing, restructuring data, and preparing data for various computational tasks in NumPy!**

Next Slide.
---

### Session 5: Array Manipulation - Reshaping, Stacking, Splitting 🛠️

**Welcome to Session 5: Array Manipulation!**

In this session, we will explore essential techniques for changing the shape and structure of NumPy arrays.  Array manipulation is a fundamental skill for preparing and transforming data for analysis.

**Key Topics in Session 5:**

*   **Reshaping Arrays:** Changing the shape of arrays without altering the data (`reshape()`, `flatten()`, `ravel()`).
*   **Stacking Arrays:** Combining arrays together, either horizontally or vertically (`np.hstack()`, `np.vstack()`, `np.concatenate()`).
*   **Splitting Arrays:** Dividing arrays into smaller sub-arrays, either horizontally or vertically (`np.hsplit()`, `np.vsplit()`, `np.split()`).

**These array manipulation techniques are crucial for data preprocessing, restructuring data, and preparing data for various computational tasks in NumPy!**

Next Slide.
---

### Reshaping Arrays: Example with `.reshape()` 🧱

**Example: Reshaping a 1D array into a 2D array using `.reshape()`**

```python
import numpy as np

array_1d = np.arange(12) # 1D array with 12 elements
print("Original 1D Array:\n", array_1d)
# Output: Original 1D Array: [ 0  1  2  3  4  5  6  7  8  9 10 11]
print("Shape of original array:", array_1d.shape) # Output: (12,)


# Reshape the 1D array into a 2D array (3 rows, 4 columns)
array_2d_reshaped = array_1d.reshape((3, 4)) # New shape: (3, 4)
print("\nReshaped 2D Array (3x4):\n", array_2d_reshaped)
# Output:
# Reshaped 2D Array (3x4):
#  [[ 0  1  2  3]
#   [ 4  5  6  7]
#   [ 8  9 10 11]]
print("Shape of reshaped array:", array_2d_reshaped.shape) # Output: (3, 4)
```
---

### Reshaping Arrays: Flexible Reshaping with `-1` (Rows Auto) 🪄 (Part 1)

**Flexible Reshaping: Automatically Inferring Rows using `-1`**

You can use `-1` in the `new_shape` argument of `.reshape()` to have NumPy *automatically infer* the size of the **rows** dimension.

**Example:  `-1` to automatically calculate the number of rows**

```python
import numpy as np

array_1d_flex = np.arange(12) # 1D array with 12 elements
print("Original 1D Array:\n", array_1d_flex)
# Output: Original 1D Array: [ 0  1  2  3  4  5  6  7  8  9 10 11]

# Reshape to 2D with 4 columns, let NumPy infer the number of rows using -1
array_2d_flex_rows_auto = array_1d_flex.reshape((-1, 4)) # -1 for rows, 4 columns
print("\nReshaped 2D Array (auto rows, 4 cols):\n", array_2d_flex_rows_auto)
# Output:
# Reshaped 2D Array (auto rows, 4 cols):
#  [[ 0  1  2  3]
#   [ 4  5  6  7]
#   [ 8  9 10 11]]
# NumPy automatically calculated 3 rows because 12 elements / 4 columns = 3 rows
```
---

### Reshaping Arrays: Flexible Reshaping with `-1` (Cols Auto) 🪄 (Part 2)

**Flexible Reshaping: Automatically Inferring Columns using `-1`**

Similarly, you can use `-1` to have NumPy automatically infer the size of the **columns** dimension, if you specify the number of rows.

**Example: `-1` to automatically calculate the number of columns**

```python
import numpy as np

array_1d_flex = np.arange(12) # 1D array with 12 elements

# Reshape to 2D with 3 rows, let NumPy infer the number of columns using -1
array_2d_flex_cols_auto = array_1d_flex.reshape((3, -1)) # 3 rows, -1 for cols
print("\nReshaped 2D Array (3 rows, auto cols):\n", array_2d_flex_cols_auto)
# Output:
# Reshaped 2D Array (3 rows, auto cols):
#  [[ 0  1  2  3]
#   [ 4  5  6  7]
#   [ 8  9 10 11]]
# NumPy automatically calculated 4 columns because 12 elements / 3 rows = 4 columns
```
---

### Reshaping Arrays: Reshaping to 3D (Part 1) 🧊

**Reshaping to Higher Dimensions (e.g., 3D)**

`.reshape()` is not limited to 2D. You can reshape arrays to higher dimensions like 3D, 4D, and beyond, as long as the total number of elements remains consistent.

**Example: Reshaping a 1D array to a 3D array (2x3x2) - Code**

```python
import numpy as np

array_1d_to_3d = np.arange(12) # 1D array with 12 elements
print("Original 1D Array:\n", array_1d_to_3d)
# Output: Original 1D Array: [ 0  1  2  3  4  5  6  7  8  9 10 11]

# Reshape to a 3D array (2 planes, 3 rows, 2 columns)
array_3d_reshaped = array_1d_to_3d.reshape((2, 3, 2)) # New shape: (2, 3, 2)
```
---

### Reshaping Arrays: Reshaping to 3D (Part 2) 🧊

**Reshaping to 3D - Output and Shape**

Continuing the example, here is the output of the reshaped 3D array and its shape.

```python
import numpy as np # (Code from previous slide - Slide 1B-4-a)
array_1d_to_3d = np.arange(12)
array_3d_reshaped = array_1d_to_3d.reshape((2, 3, 2))


print("\nReshaped 3D Array (2x3x2):\n", array_3d_reshaped)
# Output:
# Reshaped 3D Array (2x3x2):
#  [[[ 0  1]
#    [ 2  3]
#    [ 4  5]]

#   [[ 6  7]
#    [ 8  9]
#    [10 11]]]
print("Shape of reshaped 3D array:", array_3d_reshaped.shape) # Output: (2, 3, 2)
```
---

### Reshaping Arrays: Flattening Arrays: `.flatten()` and `.ravel()` 📉

**Flattening Arrays to 1D: `.flatten()` and `.ravel()`**

Sometimes you need to convert a multi-dimensional array into a 1-dimensional array. NumPy provides two methods for this: `.flatten()` and `.ravel()`.

**Key Differences & Similarities:**

*   **`.flatten()`:**
    *   Returns a **copy** of the original array.
    *   Changes to the flattened array *do not* affect the original array.
*   **`.ravel()`:**
    *   Returns a **view** of the original array, *if possible*.
    *   Changes to the raveled array *may* affect the original array (if it returns a view, which is common).

**Both `.flatten()` and `.ravel()` achieve the goal of converting an array to 1D, but their behavior regarding memory and modification is different.**

**Let's see examples of each!**
---

### Reshaping Arrays: Example of `.flatten()` (Part 1) 🧱📉

**Example: Flattening a 2D array to 1D using `.flatten()`**

```python
import numpy as np

array_2d_flatten = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Original 2D Array:\n", array_2d_flatten)
# Output:
# Original 2D Array:
#  [[1 2 3]
#   [4 5 6]
#   [7 8 9]]
print("Shape of original array:", array_2d_flatten.shape) # Output: (3, 3)


# Flatten the 2D array using .flatten()
array_1d_flattened = array_2d_flatten.flatten()
print("\nFlattened 1D Array using .flatten():\n", array_1d_flattened)
# Output: Flattened 1D Array using .flatten(): [1 2 3 4 5 6 7 8 9]
print("Shape of flattened array:", array_1d_flattened.shape) # Output: (9,)
```
---

### Reshaping Arrays: `.flatten()` Returns a Copy (Part 2) 🧱📉

**`.flatten()` returns a *copy*:** Modifying the flattened array does *not* change the original array.

**Continuing the `.flatten()` example:**

```python
import numpy as np # (Code continued from previous slide - Slide 1B-6-a)
array_2d_flatten = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
array_1d_flattened = array_2d_flatten.flatten()

array_1d_flattened[0] = 99  # Modify the first element of the flattened array
print("\nModified flattened array (element [0] changed):\n", array_1d_flattened)
# Output: Modified flattened array (element [0] changed): [99  2  3  4  5  6  7  8  9]
print("\nOriginal 2D array (remains unchanged):\n", array_2d_flatten)
# Output:
# Original 2D array (remains unchanged):
#  [[1 2 3]
#   [4 5 6]
#   [7 8 9]] # Original array is *not* modified, confirming .flatten() returns a copy.
```
---

### Reshaping Arrays: Example of `.ravel()` (Part 1) 🧱〰️

**Example: Flattening a 2D array to 1D using `.ravel()`**

```python
import numpy as np

array_2d_ravel = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
print("Original 2D Array:\n", array_2d_ravel)
# Output:
# Original 2D Array:
#  [[10 20 30]
#   [40 50 60]
#   [70 80 90]]
print("Shape of original array:", array_2d_ravel.shape) # Output: (3, 3)


# Ravel the 2D array using .ravel()
array_1d_raveled = array_2d_ravel.ravel()
print("\nRaveled 1D Array using .ravel():\n", array_1d_raveled)
# Output: Raveled 1D Array using .ravel(): [10 20 30 40 50 60 70 80 90]
print("Shape of raveled array:", array_1d_raveled.shape) # Output: (9,)
```
---

### Reshaping Arrays: `.ravel()` Returns a View (Part 2) 🧱〰️

**`.ravel()` often returns a *view*:** Modifying the raveled array *can* change the original array.

**Continuing the `.ravel()` example:**

```python
import numpy as np # (Code continued from previous slide - Slide 1B-7-a)
array_2d_ravel = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
array_1d_raveled = array_2d_ravel.ravel()

array_1d_raveled[0] = 999  # Modify the first element of the raveled array
print("\nModified raveled array (element [0] changed):\n", array_1d_raveled)
# Output: Modified raveled array (element [0] changed): [999  20  30  40  50  60  70  80  90]
print("\nOriginal 2D array (IS also modified!):\n", array_2d_ravel)
# Output:
# Original 2D array (IS also modified!):
#  [[999  20  30]
#   [ 40  50  60]
#   [ 70  80  90]] # Original array *IS* modified, confirming .ravel() often returns a view.
```
---

### Reshaping Arrays: Summary ✅

**Summary of Reshaping Techniques:**

*   **`.reshape(new_shape)`:**  Changes the shape of an array *without* changing the data.  Flexible, can reshape to higher or lower dimensions. Use `-1` for automatic dimension inference.
*   **`.flatten()`:**  Always returns a **1D copy** of the original array. Modifications to the flattened array *do not* affect the original.
*   **`.ravel()`:** Returns a **1D view** of the original array *if possible*. Modifications to the raveled array *may* affect the original array. Often more memory-efficient than `.flatten()`.

**Choose the reshaping method that best suits your needs based on whether you need to change dimensionality, require a copy or a view, and memory considerations.**

**Next, we'll move on to the next key array manipulation topic: Stacking Arrays!**

---

### Stacking Arrays: Introduction 🧱🧱🧱

**Stacking** refers to joining multiple NumPy arrays together to create a new array with a higher dimension or a larger size along an existing dimension.

**Key Stacking Functions:**

*   **`np.hstack((array1, array2, ...))` (Horizontal Stack):** Stacks arrays side-by-side (horizontally). Number of rows must match.
*   **`np.vstack((array1, array2, ...))` (Vertical Stack):** Stacks arrays one above the other (vertically). Number of columns must match.
*   **`np.concatenate((array1, array2, ...), axis=?)`:** General concatenation along a specified axis. Provides more flexibility.

**Stacking is essential for combining data from different sources or creating larger datasets from smaller components.**

**Let's explore these stacking functions with examples, starting with `np.hstack()`!**

---

### Stacking Arrays: `np.hstack()` with 1D Arrays ➡️➡️ (Part 1)

**1. `np.hstack()` - Horizontal Stacking of 1D Arrays**

`np.hstack()` stacks 1-dimensional arrays horizontally, resulting in a longer 1D array.

**Example: Stacking two 1D arrays**

```python
import numpy as np

array_hstack_a = np.array([1, 2, 3])
array_hstack_b = np.array([4, 5, 6])
print("Array 1:\n", array_hstack_a)
# Output: Array 1: [1 2 3]
print("\nArray 2:\n", array_hstack_b)
# Output: Array 2: [4 5 6]


# Horizontally stack array_hstack_a and array_hstack_b
array_hstack_result = np.hstack((array_hstack_a, array_hstack_b))
print("\nHorizontally Stacked Array (hstack):\n", array_hstack_result)
# Output: Horizontally Stacked Array (hstack): [1 2 3 4 5 6]
```
---

### Stacking Arrays: `np.hstack()` with 2D Arrays ➡️➡️ (Part 2)

**1. `np.hstack()` - Horizontal Stacking of 2D Arrays**

When used with 2D arrays, `np.hstack()` stacks them side-by-side, effectively adding columns.  Arrays must have the same number of rows.

**Example: Stacking two 2D arrays**

```python
import numpy as np

array_2d_hstack_a = np.array([[1, 2], [3, 4]])
array_2d_hstack_b = np.array([[5, 6], [7, 8]])
print("\n2D Array 1:\n", array_2d_hstack_a)
print("\n2D Array 2:\n", array_2d_hstack_b)
array_2d_hstack_result = np.hstack((array_2d_hstack_a, array_2d_hstack_b))
print("\nHorizontally Stacked 2D Arrays (hstack):\n", array_2d_hstack_result)
# Output:
# Horizontally Stacked 2D Arrays (hstack):
#  [[1 2 5 6]
#   [3 4 7 8]]
```
---

### Stacking Arrays: `np.vstack()` with 1D Arrays ⬇️⬇️ (Part 1)

**2. `np.vstack()` - Vertical Stacking of 1D Arrays**

`np.vstack()` stacks arrays vertically (one above the other). For 1D arrays, it stacks them as rows, resulting in a 2D array.

**Example: Stacking two 1D arrays vertically**

```python
import numpy as np

array_vstack_1d_a = np.array([1, 2, 3])
array_vstack_1d_b = np.array([4, 5, 6])
print("Array 1:\n", array_vstack_1d_a) # Output: Array 1: [1 2 3]
print("\nArray 2:\n", array_vstack_1d_b) # Output: Array 2: [4 5 6]


# Vertically stack array_vstack_1d_a and array_vstack_1d_b
array_vstack_1d_result = np.vstack((array_vstack_1d_a, array_vstack_1d_b))
print("\nVertically Stacked Array (vstack):\n", array_vstack_1d_result)
# Output:
# Vertically Stacked Array (vstack):
#  [[1 2 3]
#   [4 5 6]] # 1D arrays stacked as rows in a 2D array.
```
---

### Stacking Arrays: `np.vstack()` with 2D Arrays ⬇️⬇️ (Part 2)

**2. `np.vstack()` - Vertical Stacking of 2D Arrays**

With 2D arrays, `np.vstack()` stacks them one on top of the other, effectively adding rows. Arrays must have the same number of columns.

**Example: Stacking two 2D arrays vertically**

```python
import numpy as np

array_2d_vstack_a = np.array([[10, 20], [30, 40]])
array_2d_vstack_b = np.array([[50, 60], [70, 80]])
print("\n2D Array 1:\n", array_2d_vstack_a)
print("\n2D Array 2:\n", array_2d_vstack_b)
array_2d_vstack_result = np.vstack((array_2d_vstack_a, array_2d_vstack_b))
print("\nVertically Stacked 2D Arrays (vstack):\n", array_2d_vstack_result)
# Output:
# Vertically Stacked 2D Arrays (vstack):
#  [[10 20]
#   [30 40]
#   [50 60]
#   [70 80]] # 2D arrays stacked one on top of the other (rows are added).
```
---

### Stacking Arrays: `np.vstack()` with 2D Arrays ⬇️⬇️ (Part 2)

**2. `np.vstack()` - Vertical Stacking of 2D Arrays**

With 2D arrays, `np.vstack()` stacks them one on top of the other, effectively adding rows. Arrays must have the same number of columns.

**Example: Stacking two 2D arrays vertically**

```python
import numpy as np

array_2d_vstack_a = np.array([[10, 20], [30, 40]])
array_2d_vstack_b = np.array([[50, 60], [70, 80]])
print("\n2D Array 1:\n", array_2d_vstack_a)
print("\n2D Array 2:\n", array_2d_vstack_b)
array_2d_vstack_result = np.vstack((array_2d_vstack_a, array_2d_vstack_b))
print("\nVertically Stacked 2D Arrays (vstack):\n", array_2d_vstack_result)
# Output:
# Vertically Stacked 2D Arrays (vstack):
#  [[10 20]
#   [30 40]
#   [50 60]
#   [70 80]] # 2D arrays stacked one on top of the other (rows are added).
```
---

### Stacking Arrays: `np.concatenate()` with `axis=1` ↔️🔗 (Part 2)

**`np.concatenate()` with `axis=1` (Horizontal Concatenation)**

Using `axis=1` in `np.concatenate()` performs horizontal concatenation (side-by-side), similar to `np.hstack()`. Arrays must have the same number of rows.

**Example: `np.concatenate()` with `axis=1`**

```python
import numpy as np # (Code continued from previous slide - Slide 1C-4-a)
array_concat_2d_a = np.array([[1, 2], [3, 4]])
array_concat_2d_b = np.array([[5, 6], [7, 8]])


# Concatenate along axis=1 (horizontally - like hstack)
array_concat_axis1 = np.concatenate((array_concat_2d_a, array_concat_2d_b), axis=1)
print("\nConcatenated Array (axis=1):\n", array_concat_axis1)
# Output:
# Concatenated Array (axis=1):
#  [[1 2 5 6]
#   [3 4 7 8]] # Concatenated horizontally (columns added).

# For 1D arrays, axis=1 will result in an error (as they are not 2D along axis=1).
# axis=0 will still concatenate 1D arrays into a longer 1D array (like hstack for 1D).
```
---

### Stacking Arrays: Summary ✅

**Summary of Stacking Techniques:**

*   **`np.hstack((arrays))`:** Horizontal stacking (side-by-side). Arrays must have matching number of rows.
*   **`np.vstack((arrays))`:** Vertical stacking (one above another). Arrays must have matching number of columns.
*   **`np.concatenate((arrays), axis=?)`:** General stacking. Use `axis=0` for vertical stacking (like `vstack`), `axis=1` for horizontal stacking (like `hstack`). More versatile for higher dimensions.

**Stacking functions are used to combine arrays, building larger structures from smaller ones. Choose the function that best fits your desired stacking direction and array dimensions.**

**Next, we'll move on to the final key array manipulation topic in this session: Splitting Arrays!**

---

### Splitting Arrays: Introduction ✂️✂️✂️

**Splitting** is the opposite of stacking. It involves dividing a single NumPy array into multiple smaller sub-arrays.

**Key Splitting Functions:**

*   **`np.hsplit(array, indices_or_sections)` (Horizontal Split):** Splits an array into multiple sub-arrays horizontally (column-wise).
*   **`np.vsplit(array, indices_or_sections)` (Vertical Split):** Splits an array into multiple sub-arrays vertically (row-wise).
*   **`np.split(array, indices_or_sections, axis=?)`:** General splitting along a specified axis. More flexible.

**Splitting is useful for dividing large datasets into manageable chunks or for processing data in segments.**

**Let's explore these splitting functions with examples, starting with `np.hsplit()`!**

---

### Splitting Arrays: Example of `np.hsplit()` (Part 1) ↔️✂️

**1. `np.hsplit()` - Horizontal Splitting (Column-wise)**

`np.hsplit()` splits an array horizontally into multiple sub-arrays. Specify either the number of sections or column indices for splitting.

**Example: Splitting a 2D array horizontally into 3 equal parts - Code**

```python
import numpy as np

array_hsplit_2d = np.array([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]])
print("Original 2D Array:\n", array_hsplit_2d)
# Output:
# Original 2D Array:
#  [[ 1  2  3  4  5  6]
#   [ 7  8  9 10 11 12]]

# Split horizontally into 3 equal parts
array_hsplit_result = np.hsplit(array_hsplit_2d, 3) # Split into 3 sections
```
---

### Splitting Arrays: Example of `np.hsplit()` (Part 2) ↔️✂️

**`np.hsplit()` - Output and Explanation**

Continuing the example, here is the output of the horizontal split and explanation.

```python
import numpy as np # (Code continued from previous slide - Slide 1D-2-a)
array_hsplit_2d = np.array([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]])
array_hsplit_result = np.hsplit(array_hsplit_2d, 3) # Split into 3 sections


print("\nHorizontally Split Arrays (hsplit):\n", array_hsplit_result)
# Output:
# Horizontally Split Arrays (hsplit):
#  [array([[1, 2], [7, 8]]),
#   array([[ 3,  4], [ 9, 10]]),
#   array([[ 5,  6], [11, 12]])]
# Original 2D array is split into 3 sub-arrays horizontally.
```
---

### Splitting Arrays: Example of `np.vsplit()` (Part 1) ⬇️✂️

**2. `np.vsplit()` - Vertical Splitting (Row-wise)**

`np.vsplit()` splits an array vertically into multiple sub-arrays (row-wise). Specify either the number of sections or row indices for splitting.

**Example: Splitting a 2D array vertically into 2 equal parts - Code**

```python
import numpy as np

array_vsplit_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
print("Original 2D Array:\n", array_vsplit_2d)
# Output:
# Original 2D Array:
#  [[ 1  2  3]
#   [ 4  5  6]
#   [ 7  8  9]
#   [10 11 12]]

# Split vertically into 2 equal parts
array_vsplit_result = np.vsplit(array_vsplit_2d, 2) # Split into 2 sections
```
---

### Splitting Arrays: Example of `np.vsplit()` (Part 2) ⬇️✂️

**`np.vsplit()` - Output and Explanation**

Continuing the example, here is the output of the vertical split and explanation.

```python
import numpy as np # (Code continued from previous slide - Slide 1D-3-a)
array_vsplit_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
array_vsplit_result = np.vsplit(array_vsplit_2d, 2) # Split into 2 sections


print("\nVertically Split Arrays (vsplit):\n", array_vsplit_result)
# Output:
# Vertically Split Arrays (vsplit):
#  [array([[1, 2, 3], [4, 5, 6]]),
#   array([[ 7,  8,  9], [10, 11, 12]])]
# Original 2D array is split into 2 sub-arrays vertically.
```
---

### Splitting Arrays: `np.split()` - General Splitting (Code) ➕✂️ (Part 1)

**3. `np.split()` with `axis=0` - Code Example**

`np.split()` with `axis=0` splits vertically (row-wise), like `np.vsplit()`.

**Example: `np.split()` with `axis=0` - Code**

```python
import numpy as np

array_split_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
print("Original 2D Array:\n", array_split_2d)
# Output:
# Original 2D Array:
#  [[ 1  2  3]
#   [ 4  5  6]
#   [ 7  8  9]
#   [10 11 12]]

# Split vertically into 2 equal parts using axis=0
array_split_axis0 = np.split(array_split_2d, 2, axis=0) # axis=0 for vertical split
print("\nVertically Split Arrays (`np.split(axis=0)`):\n", array_split_axis0)
# Output: [array([ ... ]), array([ ... ])] # Output shown concisely in code
```
---

### Splitting Arrays: `np.split()` - `axis=0` Output ➕✂️ (Part 2)

**`np.split()` with `axis=0` - Output Displayed**

Here is the *output* from the `np.split(..., axis=0)` code (from the previous slide).

**Output:**
```
Vertically Split Arrays (np.split(axis=0)):
    [   
        array([ 
                [1, 2, 3],
                [4, 5, 6]]),
        array([ 
                [ 7,  8,  9],
                [10, 11, 12]])
    ]
```
---

### Splitting Arrays: `np.split()` - `axis=0` Explanation ➕✂️ (Part 3)

**`np.split()` with `axis=0` - Explanation**

As you can see in the output, `np.split(array, 2, axis=0)` split the original 2D array into **two sub-arrays vertically**.

This is exactly how `np.vsplit()` would behave - splitting along `axis=0` for a 2D array is equivalent to vertical splitting.

**`axis=0` for `np.split()` means split into sub-arrays *row-wise*.**
---

### Splitting Arrays: Summary ✅

**Summary of Splitting Techniques:**

*   **`np.hsplit(array, sections)`:** Horizontal split (column-wise).
*   **`np.vsplit(array, sections)`:** Vertical split (row-wise).
*   **`np.split(array, sections, axis=?)`:** General split. `axis=0` for vertical, `axis=1` for horizontal.

**Splitting functions divide arrays into smaller sub-arrays. Choose the function based on the desired split direction.**

**With Splitting Arrays covered, we've completed the core Array Manipulation techniques in Session 5!**

**Next: Session 5 - Your Turn Exercises on Array Manipulation!**

---

### Session 5: Your Turn - Array Manipulation Exercises 💪🚀

**Time to practice your Array Manipulation skills!**

These exercises will challenge you to apply the `reshape()`, `flatten()`, `ravel()`, `hstack()`, `vstack()`, `concatenate()`, `hsplit()`, `vsplit()`, and `split()` techniques we've covered in Session 5.

**Instructions:**

1.  **For each exercise, write Python code using NumPy to achieve the described array manipulation.**
2.  **Test your code and verify that the output matches the expected result.**
3.  **Focus on using the most appropriate NumPy functions for each task.**

**Let's start with Exercise 1: Reshaping!**

---

### Session 5: Your Turn - Exercise 1: Reshaping 🔄💪

**Exercise 1: Reshaping**

**Task:**

1.  **Create a 1D NumPy array** named `exercise_1_array` containing numbers from 20 to 31 (inclusive).
2.  **Reshape `exercise_1_array` into a 2D array** with 3 rows and 4 columns.
3.  **Print both the original 1D array and the reshaped 2D array.**
4.  **Verify the shape of the reshaped array is (3, 4).**

**Hint:** Use `np.arange()` to create the 1D array and `.reshape()` to reshape it.

**Write your Python code to solve Exercise 1!**

<!-- Next Slide: Exercise 2 (Stacking). -->
---

### Session 5: Your Turn - Exercise 2: Stacking 🧱💪

**Exercise 2: Stacking**

**Task:**

1.  **Create two 2D NumPy arrays**, `array_A` and `array_B`, both with shape (2, 3), containing any numbers you like.
2.  **Vertically stack `array_A` and `array_B`** using `np.vstack()` to create a new array named `stacked_array`.
3.  **Horizontally stack `array_A` and `array_B`** using `np.hstack()` to create another new array named `h_stacked_array`.
4.  **Print `stacked_array` and `h_stacked_array`.**
5.  **Verify the shapes of `stacked_array` and `h_stacked_array`.**

**Hint:** Use `np.array()` to create the initial arrays and `np.vstack()` and `np.hstack()` for stacking.

**Write your Python code to solve Exercise 2!**

<!-- Next Slide: Exercise 3 (Splitting). -->
---

### Session 5: Your Turn - Exercise 3: Splitting ✂️💪

**Exercise 3: Splitting**

**Task:**

1.  **Create a 2D NumPy array** named `large_array` with shape (6, 6) containing numbers from 1 to 36. 
<!-- (inclusive). -->
2.  **Vertically split `large_array`** into 3 equal sub-arrays using `np.vsplit()`. Store the result in `vertical_split_arrays`.
3.  **Horizontally split `large_array`** into 2 equal sub-arrays using `np.hsplit()`. Store the result in `horizontal_split_arrays`.
4.  **Print `vertical_split_arrays` and `horizontal_split_arrays`.**
5.  **Verify the shapes of the resulting sub-arrays in both `vertical_split_arrays` and `horizontal_split_arrays`.**

**Hint:** Use `np.arange().reshape()` to create `large_array`, and `np.vsplit()` and `np.hsplit()` for splitting.

**Write your Python code to solve Exercise 3!**

<!-- Next Slide: Session 5 Summary & Project. -->
---

### Session 5 Summary & Project: Array Manipulation ✅🎉

**Congratulations! You've completed Session 5 on Array Manipulation!**

**Key Skills Learned in Session 5:**

*   **Reshaping Arrays:**  `.reshape()`, `.flatten()`, `.ravel()` for changing array shapes.
*   **Stacking Arrays:** `np.hstack()`, `np.vstack()`, `np.concatenate()` for combining arrays.
*   **Splitting Arrays:** `np.hsplit()`, `np.vsplit()`, `np.split()` for dividing arrays.
---

### Session 5 Summary & Project: Array Manipulation ✅🎉

**Project Idea: Image Tile Arrangement**

*   Imagine you have a large image represented as a NumPy array.
*   Use splitting to divide it into tiles.
*   Use stacking to rearrange these tiles in a different order or layout.
*   This simulates basic image processing and data restructuring using array manipulation.

**Array manipulation is fundamental for data processing in NumPy!  Mastery of these techniques is crucial.**

**End of Session 5: Array Manipulation ✅🎉**

**Next: Session 6 - [Introduction to pandas and Series 🐼📊]**
