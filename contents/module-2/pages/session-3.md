## Slide 1: Session 3 - NumPy Array Indexing and Slicing - Introduction 🚀

# Module 2: Data Manipulation with pandas and NumPy

### Session 3: Introduction to NumPy Array Indexing and Slicing

**Welcome to Session 3 of Module 2! In this session, we'll explore powerful techniques for accessing and manipulating specific elements and subsets of data within NumPy arrays: Indexing and Slicing.**

**Why Indexing and Slicing are Essential in NumPy?**

*   **Accessing Specific Elements:** Indexing allows you to retrieve individual elements from a NumPy array based on their position (index).
*   **Extracting Subsets of Data:** Slicing enables you to extract contiguous portions (sub-arrays) of an array, based on ranges of indices.
*   **Data Manipulation:** Indexing and slicing are fundamental for modifying specific elements or sections of arrays, performing targeted operations, and data filtering.
*   **Efficiency:** NumPy's indexing and slicing are highly optimized, enabling fast access and manipulation of array data, which is crucial for performance in numerical computations.

**In this session, we will cover:**

*   **Basic Indexing:** Accessing single elements in 1D and multi-dimensional arrays.
*   **Slicing:** Extracting sub-arrays using start, stop, and step indices.
*   **Multi-dimensional Indexing and Slicing:** Applying indexing and slicing to arrays with more than one dimension.
*   **(Potentially) Boolean Indexing (if time allows):**  Using boolean arrays as indices for powerful data selection. *(If we have time within this session, we'll introduce boolean indexing).*

**Mastering NumPy indexing and slicing is key to effectively working with array data and performing complex data analysis tasks!**

Next.
---

## Slide 2: Session 3 - NumPy Array Indexing - Basic 1D Indexing 📍

# Module 2: Data Manipulation with pandas and NumPy

### Basic Indexing in 1D Arrays

**Let's start with the simplest case: indexing in one-dimensional (1D) NumPy arrays. Indexing allows you to access individual elements within the array.**

**1. Accessing Elements by Index (Positive Indexing):**

In a 1D NumPy array, you can access elements using their **index position**, just like with Python lists.  NumPy uses **0-based indexing**, meaning the first element is at index 0, the second at index 1, and so on.

```python
import numpy as np

array_1d_index = np.array([10, 20, 30, 40, 50])

first_element = array_1d_index[0]   # Access element at index 0 (first element)
print("First element (index 0):", first_element) # Output: 10

second_element = array_1d_index[1]  # Access element at index 1 (second element)
print("Second element (index 1):", second_element) # Output: 20

third_element = array_1d_index[2]   # Access element at index 2 (third element)
print("Third element (index 2):", third_element)  # Output: 30
```

**Visualizing 1D Array Indices:**
```
Array:      [10, 20, 30, 40, 50]
Indices:     0   1   2   3   4
```

**2. Negative Indexing (Accessing from the End):**
- `-1` refers to the last element.
- `-2` refers to the second-to-last element, and so on.

```python
last_element = array_1d_index[-1]  # Access the last element (index -1)
print("Last element (index -1):", last_element)   # Output: 50

second_last_element = array_1d_index[-2] # Access the second-to-last (index -2)
print("Second last element (index -2):", second_last_element) # Output: 40
```

**Visualizing Negative Indices:**
```
Array:      [10, 20, 30, 40, 50]
Positive Indices:  0   1   2   3   4
Negative Indices: -5  -4  -3  -2  -1
```

**Basic indexing provides direct access to individual elements in 1D NumPy arrays using both positive and negative index positions!**
---

## Slide 3: Session 3 - NumPy Array Indexing - Basic 2D Indexing 🖼️

# Module 2: Data Manipulation with pandas and NumPy

### Basic Indexing in 2D Arrays

**Now let's explore indexing in two-dimensional (2D) NumPy arrays (matrices). In 2D arrays, you need to specify *two* indices to access an element: one for the row and one for the column.**

**1. Accessing Elements by Row and Column Indices:**

To access an element in a 2D array, you use the syntax `array_2d[row_index, column_index]`.  Remember, indexing is 0-based.

```python
import numpy as np

array_2d_index = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("2D Array:\n", array_2d_index)
# Output:
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

element_0_1 = array_2d_index[0, 1] # Access element at row index 0, column index 1 (value 2)
print("\nElement at [0, 1]:", element_0_1) # Output: 2

element_2_0 = array_2d_index[2, 0] # Access element at row index 2, column index 0 (value 7)
print("Element at [2, 0]:", element_2_0) # Output: 7

element_1_2 = array_2d_index[1, 2] # Access element at row index 1, column index 2 (value 6)
print("Element at [1, 2]:", element_1_2) # Output: 6
```

**Visualizing 2D Array Indices (Row, Column):**
```
2D Array:
       Columns: 0  1  2
Rows 0:      [[1, 2, 3],
Rows 1:       [4, 5, 6],
Rows 2:       [7, 8, 9]]

To access '5', you use index [1, 1] (Row 1, Column 1)
```

**2. Negative Indexing in 2D Arrays:**

You can also use negative indices for rows and columns in 2D arrays, counting from the end of rows and columns respectively.

```python
last_row_last_col = array_2d_index[-1, -1] # Last row, last column (value 9)
print("\nLast element [-1, -1]:", last_row_last_col) # Output: 9

first_row_last_col = array_2d_index[0, -1] # First row, last column (value 3)
print("Element at [0, -1]:", first_row_last_col) # Output: 3

last_row_first_col = array_2d_index[-1, 0] # Last row, first column (value 7)
print("Element at [-1, 0]:", last_row_first_col) # Output: 7
```

**Basic indexing in 2D arrays allows you to pinpoint and access individual elements using row and column indices, with both positive and negative indexing options!**

---

## Slide 4: Session 3 - NumPy Array Indexing - Basic ND Indexing 📦

# Module 2: Data Manipulation with pandas and NumPy

### Basic Indexing in N-Dimensional Arrays

**The principles of basic indexing extend naturally to arrays with more than two dimensions (N-dimensional arrays). For N-dimensional arrays, you need to provide N indices to access a single element.**

**Accessing Elements in ND Arrays:**

For an N-dimensional array, the syntax to access an element is `array_nd[index_0, index_1, ..., index_N-1]`, where `index_i` is the index along the i-th dimension.

**Example with a 3D Array:**

Let's consider a 3D array (imagine a cube of numbers).

```python
import numpy as np

array_3d_index = np.arange(24).reshape((2, 3, 4)) # 3D array: (2 layers, 3 rows, 4 columns)
print("3D Array:\n", array_3d_index)
# Output (3D array structure):
# [[[ 0  1  2  3]  # Layer 0, Row 0
#   [ 4  5  6  7]  # Layer 0, Row 1
#   [ 8  9 10 11]] # Layer 0, Row 2
#
#  [[12 13 14 15] # Layer 1, Row 0
#   [16 17 18 19] # Layer 1, Row 1
#   [20 21 22 23]]] # Layer 1, Row 2

element_0_1_2 = array_3d_index[0, 1, 2] # Access element at layer 0, row 1, column 2 (value 6)
print("\nElement at [0, 1, 2]:", element_0_1_2) # Output: 6
# Layer 0, Row 1, Column 2

element_1_0_3 = array_3d_index[1, 0, 3] # Access element at layer 1, row 0, column 3 (value 15)
print("Element at [1, 0, 3]:", element_1_0_3) # Output: 15
# Layer 1, Row 0, Column 3
```

**Understanding 3D Indexing (Layer, Row, Column):**

In this 3D array `array_3d_index` with shape `(2, 3, 4)`:

- The **first index** (e.g., `0` or `1`) selects the **layer** (imagine stacking 2D arrays on top of each other).
- The **second index** (e.g., `0`, `1`, or `2`) selects the row within that layer.
- The **third index** (e.g., 0, 1, 2, or 3) selects the **column** within that row.

**Visual Analogy (3D Array as Layers of Matrices):**

Imagine a stack of matrices. The first index chooses which matrix (layer) you are looking at, and then the subsequent indices work like 2D indexing within that matrix.

**Basic indexing in N-dimensional arrays generalizes the concept of accessing individual elements by extending the index tuple to match the number of dimensions!**

Next.
---

## Slide 5: Session 3 - NumPy Array Slicing - 1D Slicing 🔪

# Module 2: Data Manipulation with pandas and NumPy

### Slicing in 1D Arrays

**Slicing allows you to extract a *portion* or a *sub-array* from a NumPy array, rather than just single elements. Let's start with slicing in 1D arrays.**

**Basic Slicing Syntax: `start:stop:step`**

In 1D NumPy arrays (and also in higher dimensions), you use the slice notation `start:stop:step` to extract a range of elements.

*   **`start` (optional):** The starting index of the slice (inclusive). If omitted, it defaults to 0 (the beginning).
*   **`stop` (required):** The ending index of the slice (exclusive). The slice will go *up to* this index, but *not include* the element at the `stop` index itself.
*   **`step` (optional):** The step size or increment between indices. If omitted, it defaults to 1.

**1. Basic Slicing with `start:stop`:**

Extract a range of elements from `start` index up to (but not including) `stop` index, with a step of 1.

```python
import numpy as np

array_1d_slice = np.array([10, 20, 30, 40, 50, 60, 70])

slice_1_4 = array_1d_slice[1:4] # Elements from index 1 up to (but not including) 4
print("Slice [1:4]:", slice_1_4) # Output: [20 30 40] (indices 1, 2, 3)
# Elements at indices 1, 2, 3 are extracted.

slice_2_end = array_1d_slice[2:]  # Slice from index 2 to the end
print("Slice [2:]:", slice_2_end)  # Output: [30 40 50 60 70] (from index 2 onwards)
# From index 2 to the end of the array.

slice_start_3 = array_1d_slice[:3] # Slice from the beginning up to (but not including) index 3
print("Slice [:3]:", slice_start_3) # Output: [10 20 30] (indices 0, 1, 2)
# From the start up to (but not including) index 3.
```

**2. Slicing with `start:stop:step` (Specifying Step):**

Control the step size to extract elements at intervals.

```python
slice_0_5_2 = array_1d_slice[0:5:2] # From index 0 to 5 (exclusive), step of 2
print("Slice [0:5:2]:", slice_0_5_2) # Output: [10 30 50] (indices 0, 2, 4)
# Elements at indices 0, 0+2=2, 2+2=4 are extracted.

slice_all_step2 = array_1d_slice[::2] # Slice all elements with a step of 2
print("Slice [::2]:", slice_all_step2) # Output: [10 30 50 70] (every other element)
# Every other element from the beginning to the end.
```

**3. Negative Indices in Slicing:**

You can also use negative indices within slices.

```python
slice_neg3_neg1 = array_1d_slice[-3:-1] # From 3rd last to 1st last (exclusive)
print("Slice [-3:-1]:", slice_neg3_neg1) # Output: [50 60] (3rd and 2nd last)
# From the 3rd last element up to (but not including) the last element.

slice_start_neg4 = array_1d_slice[:-4]  # From start up to 4th last (exclusive)
print("Slice [:-4]:", slice_start_neg4)  # Output: [10 20 30] (up to 4th last)
# From the start up to (but not including) the 4th last element.
```

**Slicing in 1D arrays provides a flexible way to extract sub-sections of data based on index ranges and step sizes!**

Next.

---

## Slide 6: Session 3 - NumPy Array Slicing - 2D Slicing 🖼️🔪

# Module 2: Data Manipulation with pandas and NumPy

### Slicing in 2D Arrays

**Slicing in 2D arrays extends the 1D slicing concept to two dimensions (rows and columns). You can slice along rows, columns, or both simultaneously to extract sub-matrices.**

**Slicing Syntax for 2D Arrays: `array_2d[row_slice, column_slice]`**

You provide two slices, separated by a comma: one for the rows and one for the columns. Each slice uses the `start:stop:step` syntax.

**1. Row Slicing:**

Slice to select a range of rows, keeping all columns.

```python
import numpy as np

array_2d_slice = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
print("2D Array:\n", array_2d_slice)
# Output:
# [[ 1  2  3  4]
#  [ 5  6  7  8]
#  [ 9 10 11 12]
#  [13 14 15 16]]

row_slice_1_3 = array_2d_slice[1:3, :] # Rows from index 1 up to (not incl.) 3, all columns (:)
print("\nRow Slice [1:3, :]:\n", row_slice_1_3)
# Output (Rows 1 and 2, all columns):
# [[ 5  6  7  8]
#  [ 9 10 11 12]]
# Selects rows at index 1 and 2, and all columns.

row_slice_start_2 = array_2d_slice[:2, :] # Rows from start up to (not incl.) 2, all columns
print("\nRow Slice [:2, :]:\n", row_slice_start_2)
# Output (Rows 0 and 1, all columns):
# [[1 2 3 4]
#  [5 6 7 8]]
# Selects rows from the beginning up to (but not including) index 2, and all columns.
```

**2. Column Slicing:**
Slice to select a range of columns, keeping all rows.

```python
col_slice_1_3 = array_2d_slice[:, 1:3] # All rows (:), columns from index 1 up to (not incl.) 3
print("\nColumn Slice [:, 1:3]:\n", col_slice_1_3)
# Output (All rows, Columns 1 and 2):
# [[ 2  3]
#  [ 6  7]
#  [10 11]
#  [14 15]]
# Selects all rows, and columns at index 1 and 2.

col_slice_end_2 = array_2d_slice[:, :2] # All rows, columns from start up to (not incl.) 2
print("\nColumn Slice [:, :2]:\n", col_slice_end_2)
# Output (All rows, Columns 0 and 1):
# [[ 1  2]
#  [ 5  6]
#  [ 9 10]
#  [13 14]]
# Selects all rows, and columns from the beginning up to (but not including) index 2.
```

**3. Row and Column Slicing Combined:**

Slice both rows and columns to extract a sub-matrix.

```python
both_slice_1_3_1_3 = array_2d_slice[1:3, 1:3] # Rows 1 to 3 (excl.), Cols 1 to 3 (excl.)
print("\nCombined Slice [1:3, 1:3]:\n", both_slice_1_3_1_3)
# Output (Rows 1 & 2, Columns 1 & 2):
# [[ 6  7]
#  [10 11]]
# Selects rows at index 1 and 2, AND columns at index 1 and 2, creating a 2x2 sub-matrix.

both_slice_0_2_0_2 = array_2d_slice[:2, :2] # Rows start to 2 (excl.), Cols start to 2 (excl.)
print("\nCombined Slice [:2, :2]:\n", both_slice_0_2_0_2)
# Output (Rows 0 & 1, Columns 0 & 1):
# [[1 2]
#  [5 6]]
# Selects rows from start up to 2 (exclusive), AND columns from start up to 2 (exclusive), creating a top-left 2x2 sub-matrix.
```

**Slicing in 2D arrays provides powerful ways to extract rows, columns, and sub-matrices using the `[row_slice, column_slice]` syntax!**
---

## Slide 7: Session 3 - NumPy Array Slicing - ND Slicing 📦🔪

# Module 2: Data Manipulation with pandas and NumPy

### Slicing in N-Dimensional Arrays

**Slicing in N-dimensional arrays generalizes the 1D and 2D slicing concepts. For an N-dimensional array, you provide N slices (or use `:` to select all elements along a dimension), separated by commas, within square brackets.**

**Slicing Syntax for ND Arrays: `array_nd[slice_0, slice_1, ..., slice_N-1]`**

Each `slice_i` uses the `start:stop:step` syntax, and `:` selects all elements along that dimension.

**Example with a 3D Array:**

Let's use our 3D array again to demonstrate slicing in higher dimensions.

```python
import numpy as np

array_3d_slice = np.arange(24).reshape((2, 3, 4)) # Shape (2, 3, 4)
print("3D Array:\n", array_3d_slice)
# Output (3D array structure):
# [[[ 0  1  2  3]  # Layer 0, Row 0
#   [ 4  5  6  7]  # Layer 0, Row 1
#   [ 8  9 10 11]] # Layer 0, Row 2
#
#  [[12 13 14 15] # Layer 1, Row 0
#   [16 17 18 19] # Layer 1, Row 1
#   [20 21 22 23]]] # Layer 1, Row 2
```

**1. Slicing along the first dimension (layers):**

```python
layer_slice_0 = array_3d_slice[0, :, :] # Layer 0, all rows and columns (:)
print("\nLayer Slice [0, :, :]:\n", layer_slice_0)
# Output (Layer 0 - a 2D array):
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]
# Selects the first layer (index 0), and all rows and columns within that layer.

layer_slice_0_1 = array_3d_slice[0:2, :, :] # Layers from 0 up to (not incl.) 2, all rows, all cols
print("\nLayer Slice [0:2, :, :]:\n", layer_slice_0_1)
# Output (Layers 0 and 1 - still a 3D array, but potentially viewed as a stack of 2D slices):
# [[[ 0  1  2  3]
#   [ 4  5  6  7]
#   [ 8  9 10 11]]
#
#  [[12 13 14 15]
#   [16 17 18 19]
#   [20 21 22 23]]]
# Selects layers from index 0 up to (but not including) 2, and all rows and columns within those layers (which is actually all layers in this case, but demonstrating the slice concept).
```

**2. Slicing along the second dimension (rows):**

```python
row_slice_1_2 = array_3d_slice[:, 1:3, :] # All layers (:), rows 1 to 3 (excl.), all columns (:)
print("\nRow Slice [:, 1:3, :]:\n", row_slice_1_2)
# Output (All layers, Rows 1 and 2 from each layer, all columns):
# [[[ 4  5  6  7]
#   [ 8  9 10 11]]
#
#  [[16 17 18 19]
#   [20 21 22 23]]]
# Selects all layers, and rows at index 1 and 2 from each layer, and all columns within those rows.
```

**3. Slicing along the third dimension (columns):**

```python
col_slice_1_3 = array_3d_slice[:, :, 1:3] # All layers (:), all rows (:), columns 1 to 3 (excl.)
print("\nColumn Slice [:, :, 1:3]:\n", col_slice_1_3)
# Output (All layers, all rows from each layer, Columns 1 and 2):
# [[[ 1  2]
#   [ 5  6]
#   [ 9 10]]
#
#  [[13 14]
#   [17 18]
#   [21 22]]]
# Selects all layers, all rows within each layer, and columns at index 1 and 2.
```

**4. Combined Slicing across dimensions:**

You can combine slices along multiple dimensions to extract specific sub-volumes.

```python
combined_slice = array_3d_slice[0, 1:, :2] # Layer 0, rows from 1 onwards, columns up to 2 (excl.)
print("\nCombined Slice [0, 1:, :2]:\n", combined_slice)
# Output (Layer 0, Rows 1 and 2, Columns 0 and 1):
# [[4 5]
#  [8 9]]
# Selects only the first layer (index 0), rows from index 1 to the end of that layer, and columns from the beginning up to (but not including) index 2.
```

**Slicing in N-dimensional arrays extends the same `start:stop:step` logic to each dimension, providing powerful control over sub-array extraction in higher-dimensional data!**

Next.
---

## Slide 8: Session 3 - NumPy Array Slicing - Slicing with Steps 🚶‍♀️

# Module 2: Data Manipulation with pandas and NumPy

### Slicing with Steps

**The `step` parameter in slicing (`start:stop:step`) provides even more control over sub-array extraction. It allows you to select elements at regular intervals within a slice.**

**Understanding the `step` Parameter:**

*   `step` value determines the increment between indices when slicing.
*   A `step` of `1` (default) selects consecutive elements.
*   A `step` of `2` selects every other element, `3` selects every third, and so on.
*   A negative `step` value allows you to slice in reverse order.

**1. Slicing with Positive Step Values:**

Extract elements at regular intervals using a positive `step`.

```python
import numpy as np

array_step_slice = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

slice_step_2 = array_step_slice[1:8:2] # From index 1 to 8 (excl.), step 2
print("Slice [1:8:2]:", slice_step_2) # Output: [20 40 60 80] (2nd, 4th, 6th, 8th elements in range)
# Starts at index 1, goes up to (but not including) index 8, taking steps of 2.

slice_step_3 = array_step_slice[::3]  # From start to end, step 3
print("Slice [::3]:", slice_step_3)  # Output: [ 10  40  70 100] (every 3rd element)
# Takes every 3rd element from the entire array.
```

**2. Slicing with Negative Step Values (Reverse Slicing):**

Use a negative `step` to traverse the array in reverse.

```python
slice_reverse = array_step_slice[::-1] # Slice all elements in reverse (step -1)
print("Slice [::-1]:", slice_reverse) # Output: [100  90  80  70  60  50  40  30  20  10] (reversed array)
# Reverses the entire array.

slice_reverse_step2 = array_step_slice[7:2:-2] # From index 7 down to (but not incl.) 2, step -2
print("Slice [7:2:-2]:", slice_reverse_step2) # Output: [80 60 40] (8th, 6th, 4th from start)
# Starts at index 7, goes down to (but not including) index 2, taking steps of -2.
```

**Combining Steps with Multi-dimensional Slicing:**

You can use steps in slices along any dimension of multi-dimensional arrays as well.

```python
array_2d_step_slice = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

slice_2d_step = array_2d_step_slice[::2, ::2] # Every other row, every other column
print("\n2D Slice [::2, ::2]:\n", slice_2d_step)
# Output (Every other row and column):
# [[ 1  3]
#  [ 9 11]]
# Selects every other row (starting from row 0), and every other column (starting from column 0).
```

**Slicing with the `step` parameter greatly expands your ability to extract non-contiguous sub-arrays and patterns from NumPy arrays!**

Next.

---

## Slide 9: Session 3 - NumPy Array Indexing and Slicing - Combining Indexing and Slicing 🤝

# Module 2: Data Manipulation with pandas and NumPy

### Combining Indexing and Slicing

**You can combine basic indexing and slicing operations within the same array access to extract very specific data subsets from NumPy arrays.**

**Combining Indexing and Slicing Techniques:**

By strategically using indices and slices together, you can:

*   Select specific rows or columns by index, while slicing across others.
*   Extract sub-matrices but then pinpoint individual elements within those sub-matrices.
*   Create highly customized views into your array data.

**Examples of Combining Indexing and Slicing:**

**1. Slicing rows, then indexing columns:**

First, slice a set of rows, and then index a specific column from those rows.

```python
import numpy as np

array_combine = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
print("2D Array:\n", array_combine)
# Output:
# [[ 1  2  3  4]
#  [ 5  6  7  8]
#  [ 9 10 11 12]
#  [13 14 15 16]]

sliced_rows_index_col = array_combine[1:4, 2] # Rows 1 to 4 (excl.), then column at index 2
print("\nSliced Rows, Indexed Column [1:4, 2]:", sliced_rows_index_col)
# Output: [ 7 11 15] (elements from column 2 of rows 1, 2, 3)
# Slices rows 1, 2, 3 and then, from each of those rows, selects the element at column index 2.
```

**2. Indexing rows, then slicing columns:**

First, select specific rows by index, and then slice a range of columns from those rows.

```python
indexed_rows_sliced_cols = array_combine[[0, 2], 1:] # Rows at index 0 and 2, then columns from index 1 onwards
print("\nIndexed Rows, Sliced Columns [[0, 2], 1:]:\n", indexed_rows_sliced_cols)
# Output:
# [[ 2  3  4]
#  [10 11 12]]
# Selects rows at index 0 and 2, and then, from EACH of those rows, takes columns from index 1 to the end.
```

**3. Combining slices with steps and indexing:**

Combine all techniques for even more refined selection.

```python
complex_combined = array_combine[::2, 1::2] # Every other row, and from those rows, every other column starting from index 1
print("\nComplex Combined Slice [::2, 1::2]:\n", complex_combined)
# Output (Every other row, every other column starting from index 1):
# [[ 2  4]
#  [10 12]]
# Selects every other row starting from row 0, AND from each of those selected rows, selects every other column starting from column index 1.
```

**Combining indexing and slicing unlocks advanced data extraction patterns in NumPy arrays, allowing for precise and efficient manipulation of array subsets!**

Next.

---

## Slide 10: Session 3 - NumPy Array Indexing and Slicing - More Combined Examples 🚀

# Module 2: Data Manipulation with pandas and NumPy

### More Examples: Combining Indexing and Slicing

**Let's look at a few more examples to further illustrate the versatility of combining indexing and slicing in NumPy.**

**Example 1: Extracting a Checkerboard Pattern:**

Create a checkerboard-like sub-matrix from a larger array using step slicing and combined row/column slices.

```python
import numpy as np

checkerboard_array = np.array([[i+j for j in range(8)] for i in range(8)]) # 8x8 array
print("Checkerboard Array (8x8):\n", checkerboard_array)
# Output (8x8 array, values represent row+col index sums):
# [[ 0  1  2  3  4  5  6  7]
#  [ 1  2  3  4  5  6  7  8]
#  [ 2  3  4  5  6  7  8  9]
#  [ 3  4  5  6  7  8  9 10]
#  [ 4  5  6  7  8  9 10 11]
#  [ 5  6  7  8  9 10 11 12]
#  [ 6  7  8  9 10 11 12 13]
#  [ 7  8  9 10 11 12 13 14]]

checkerboard_slice = checkerboard_array[::2, ::2] # Every other row, every other column
print("\nCheckerboard Slice [::2, ::2]:\n", checkerboard_slice)
# Output (Checkerboard pattern - top-left 4x4 of the pattern):
# [[0 2 4 6]
#  [2 4 6 8]
#  [4 6 8 10]
#  [6 8 10 12]]
# Selects every other row and every other column, creating a checkerboard pattern.
```

**Example 2: Extracting a Column Vector from a Sliced Row Range:**

Slice a range of rows, and then extract a specific column from that row slice to get a column vector.

```python
column_vector_slice = array_combine[1:4, 3:4] # Rows 1 to 4 (excl.), columns 3 to 4 (excl.) - effectively column 3
print("\nColumn Vector Slice [1:4, 3:4]:\n", column_vector_slice)
# Output (Column vector from rows 1, 2, 3 - column 3 values):
# [[ 8]
#  [12]
#  [16]]
# Slices rows 1, 2, 3, and then takes columns from index 3 up to (but not including) 4, which effectively selects just column index 3, resulting in a column vector.
```

**Example 3: Reversing Rows in a Sliced Column Range:**

Slice a range of columns, and then reverse the order of rows within that column slice.

```python
reversed_rows_slice = array_combine[:, 1:3][::-1, :] # All rows in reverse order [::-1, :], but only for columns 1 and 2 [:, 1:3]
print("\nReversed Rows Slice [:, 1:3][::-1, :]:\n", reversed_rows_slice)
# Output (Rows reversed within columns 1 and 2):
# [[14 15]
#  [10 11]
#  [ 6  7]
#  [ 2  3]]
# First, it slices columns 1 and 2 from all rows [:, 1:3]. Then, on this intermediate sliced array, it reverses the order of rows [::-1, :].
```

**Important Note: Views vs. Copies**

Remember that NumPy slicing generally creates *views* of the original array, not *copies* of the data. This means that if you modify a slice, you might be modifying the original array as well! Be mindful of this behavior, especially when you intend to work with a separate, independent sub-array. (We will explore "views" and "copies" in more detail in a later, more advanced session if needed.)

---

## Slide 11: Session 3 - NumPy Array Indexing - Introduction to Boolean Indexing 🚦

# Module 2: Data Manipulation with pandas and NumPy

### Introduction to Boolean Indexing

**Boolean indexing is a very powerful and flexible technique in NumPy that allows you to select elements from an array based on a *boolean condition*. Instead of using indices based on position, you use indices based on whether elements satisfy a certain condition.**

**What is Boolean Indexing?**

*   **Condition-based Selection:** Boolean indexing uses a boolean array (an array of `True` and `False` values) of the same shape as the array you want to index (or broadcastable to that shape).
*   **`True` values Select:**  Wherever the boolean array has a `True` value, the corresponding element from the original array is selected and included in the result.
*   **`False` values Filter Out:** Wherever the boolean array has a `False` value, the corresponding element is *not* selected.

**Creating Boolean Arrays for Indexing:**

Boolean arrays are typically created by applying **comparison operators** (e.g., `==`, `>`, `<`, `>=`, `<=`, `!=`) to NumPy arrays. These operations return boolean arrays based on element-wise comparisons.

**Example: Creating a boolean array:**

```python
import numpy as np

data_bool_index = np.array([15, 20, 25, 30, 35, 40])

# Create a boolean array: True where elements are greater than 30, False otherwise
bool_array = data_bool_index > 30
print("Original Array:", data_bool_index) # Output: [15 20 25 30 35 40]
print("\nBoolean Array (data > 30):\n", bool_array)
# Output: [False False False False  True  True]
#  15 > 30 - False
#  20 > 30 - False
#  25 > 30 - False
#  30 > 30 - False
#  35 > 30 - True
#  40 > 30 - True
```

**Using Boolean Arrays for Indexing:**

Now, use this `bool_array` to index `data_bool_index`.

```python
selected_elements = data_bool_index[bool_array] # Use boolean array to index
print("\nSelected Elements (data > 30):\n", selected_elements) # Output: [35 40]
# Only elements corresponding to 'True' in bool_array are selected.
# Elements at indices 4 and 5 (where bool_array is True) are selected.
```

**Boolean indexing is a powerful way to filter data in NumPy arrays based on conditions, allowing you to extract subsets of data that meet specific criteria! In the next slide, we'll see more examples of boolean indexing in action.**

---

## Slide 12: Session 3 - NumPy Array Indexing - Boolean Indexing Examples in Action 🚀

# Module 2: Data Manipulation with pandas and NumPy

### Boolean Indexing Examples

**Let's explore more practical examples of boolean indexing to see its power in data selection and filtering.**

**Example 1: Selecting even numbers from an array:**

Use boolean indexing to extract all even numbers from a NumPy array.

```python
import numpy as np

numbers = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Create boolean array: True for even numbers, False for odd
even_condition = numbers % 2 == 0
print("Original Numbers:", numbers) # Output: [ 1  2  3  4  5  6  7  8  9 10]
print("\nBoolean Array (numbers % 2 == 0):\n", even_condition)
# Output: [False  True False  True False  True False  True False  True]

even_numbers = numbers[even_condition] # Use boolean array to select even numbers
print("\nEven Numbers:", even_numbers)   # Output: [ 2  4  6  8 10]
# Only even numbers (where bool_array is True) are selected.
```

**Example 2: Selecting values within a range:**

Extract values that fall within a specific numerical range.

```python
data_range = np.array([22, 35, 18, 40, 28, 45, 32, 50])
lower_bound = 25
upper_bound = 40

# Boolean condition: True if value is >= lower_bound AND < upper_bound
range_condition = (data_range >= lower_bound) & (data_range < upper_bound) # Use '&' for element-wise AND
print("Data Array:", data_range) # Output: [22 35 18 40 28 45 32 50]
print("\nBoolean Array (range condition):\n", range_condition)
# Output: [False  True False False  True False  True False]

values_in_range = data_range[range_condition] # Select values within the range
print("\nValues in Range (25 <= value < 40):\n", values_in_range) # Output: [35 28 32]
# Only values that satisfy the range condition are selected.
```

**Example 3:  Replacing values based on a condition:**

Boolean indexing can also be used to *modify* values in an array based on a condition.

```python
temperatures = np.array([28, 32, 24, 35, 26, 38, 30])
threshold_temp = 32

# Boolean array: True for temps above threshold, False otherwise
too_hot_condition = temperatures > threshold_temp
print("Temperatures:", temperatures) # Output: [28 32 24 35 26 38 30]
print("\nBoolean Array (temps > 32):\n", too_hot_condition)
# Output: [False False False  True False  True False]

temperatures[too_hot_condition] = threshold_temp # Set temps above threshold to the threshold value
print("\nTemperatures after adjustment (temps > 32 set to 32):\n", temperatures)
# Output: [28 32 24 32 26 32 30]
# Temperatures above 32 are replaced with 32.
```

**Boolean indexing provides a concise and efficient way to perform conditional data selection and modification in NumPy, making your code more expressive and powerful!**

Next.

---

## Slide 13: Session 3 - NumPy Array Indexing - Boolean Indexing with 2D Arrays 🖼️🚦

# Module 2: Data Manipulation with pandas and NumPy

### Boolean Indexing in 2D Arrays

**Boolean indexing extends seamlessly to 2D (and N-dimensional) arrays. You can use boolean arrays to select rows or elements in 2D arrays based on conditions.**

**Applying Boolean Indexing to 2D Arrays:**

When you use a 1D boolean array to index a 2D array, it typically selects **rows** that correspond to `True` values in the boolean array.

**Example 1: Selecting rows based on a condition in one column:**

Select rows in a 2D array where the values in a *specific column* meet a condition.

```python
import numpy as np

array_2d_bool = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90], [2, 5, 8]])
print("2D Array:\n", array_2d_bool)
# Output:
# [[10 20 30]
#  [40 50 60]
#  [70 80 90]
#  [ 2  5  8]]

# Condition: Select rows where the first column (index 0) is greater than 30
row_condition = array_2d_bool[:, 0] > 30 # Boolean array based on the first column
print("\nBoolean Array (first column > 30):\n", row_condition)
# Output: [False  True  True False]
# [10 > 30 - False, 40 > 30 - True, 70 > 30 - True, 2 > 30 - False]

selected_rows = array_2d_bool[row_condition, :] # Use boolean array to select rows, all columns (:)
print("\nSelected Rows (first column > 30):\n", selected_rows)
# Output (Rows where first column > 30):
# [[40 50 60]
#  [70 80 90]]
# Rows at indices 1 and 2 (where row_condition is True) are selected.
```

**Example 2: Selecting elements based on a condition across the entire 2D array:**

You can create a boolean array based on a condition applied to the *entire* 2D array, and then use it to select elements.  This will flatten the result to 1D.

```python
# Condition: Select elements in the entire 2D array that are greater than 50
element_condition = array_2d_bool > 50 # Boolean array of same shape as array_2d_bool
print("\nBoolean Array (array > 50):\n", element_condition)
# Output (Boolean array of same shape as array_2d_bool):
# [[False False False]
#  [False False  True]
#  [ True  True  True]
#  [False False False]]

selected_elements_2d = array_2d_bool[element_condition] # Use boolean array to select elements > 50
print("\nSelected Elements (array > 50):\n", selected_elements_2d)
# Output (1D array of elements > 50):
# [60 70 80 90]
# Elements from all positions where element_condition is True are selected and flattened to 1D.
```

**Boolean indexing in 2D arrays allows you to perform row-wise selection based on column conditions, or element-wise selection across the entire array based on conditions!**

Next.

---

## Slide 14: Session 3 - NumPy Array Indexing - Boolean Indexing Summary & Combining with Slicing ✅🚦

# Module 2: Data Manipulation with pandas and NumPy

### Boolean Indexing Summary and Combining with Slicing

**Let's summarize the key aspects of boolean indexing and see how it can be combined with slicing for advanced data manipulation.**

**Summary of Boolean Indexing:**

*   **Condition-Based Selection:** Boolean indexing selects array elements based on whether they satisfy a boolean condition (represented by a boolean array).
*   **Flexible Conditions:** You can create complex boolean conditions using comparison operators and logical operators (`&`, `|`, `~`).
*   **Row/Element Selection:** In 2D arrays, boolean arrays can select rows or individual elements, depending on the boolean array's shape and how it's used.
*   **Data Filtering and Modification:** Boolean indexing is essential for filtering data based on criteria and for conditionally modifying array values.

**Combining Boolean Indexing with Slicing:**

You can combine boolean indexing with slicing to achieve highly specific data extraction. For example, select rows based on a boolean condition, and then slice specific columns from those selected rows.

**Example: Combine boolean indexing and slicing:**

Select rows where the first column is greater than 30, and then from those rows, select only the first two columns.

```python
import numpy as np

array_combine_bool_slice = np.array([[10, 20, 30, 40], [40, 50, 60, 70], [70, 80, 90, 100], [2, 5, 8, 11]])
print("2D Array:\n", array_combine_bool_slice)
# Output:
# [[ 10  20  30  40]
#  [ 40  50  60  70]
#  [ 70  80  90 100]
#  [  2   5   8  11]]

row_condition_combined = array_combine_bool_slice[:, 0] > 30 # Rows where first column > 30
print("\nBoolean Row Condition (first column > 30):\n", row_condition_combined)
# Output: [False  True  True False]

combined_result = array_combine_bool_slice[row_condition_combined, :2] # Select rows based on condition, then slice first 2 columns
print("\nCombined Boolean Indexing and Slicing:\n", combined_result)
# Output (Rows where first column > 30, and then first 2 columns of those rows):
# [[40 50]
#  [70 80]]
# Selects rows at indices 1 and 2 (where condition is True), and then from those rows, takes columns from the beginning up to (but not including) index 2.
```

**Boolean indexing, especially when combined with slicing, is one of the most powerful and frequently used techniques for data manipulation and analysis in NumPy!**

Next.

---

## Slide 15: Session 3 - Session End 🎉

# Module 2: Data Manipulation with pandas and NumPy

### Session 3 Complete! NumPy Array Indexing and Slicing ✅

**Congratulations!** 🥳 You have completed Session 3 of Module 2: "NumPy Array Indexing and Slicing"!

**Key accomplishments in Session 3:**

*   You now understand basic indexing to access individual elements in 1D, 2D, and N-dimensional NumPy arrays using positive and negative indices.
*   You can use slicing to extract sub-arrays from 1D, 2D, and N-dimensional arrays using `start:stop:step` notation along different axes.
*   You know how to combine indexing and slicing for powerful and flexible data extraction.
*   You have been introduced to boolean indexing and understand how to use boolean arrays to select data based on conditions.
*   You've seen examples of using boolean indexing for data filtering and conditional modification.
*   You understand how to combine boolean indexing with slicing for advanced data selection techniques.

**With these skills in indexing and slicing, you are now well-equipped to access and manipulate specific data within NumPy arrays, which is fundamental for almost all data analysis and numerical tasks using NumPy!**

**Ready to move on to Session 4 and explore even more NumPy operations?**

**Up Next: Session 4 - Universal Functions (UFuncs) in NumPy!** 🚀

**(Module 2, Session 3: NumPy Array Indexing and Slicing - Session End)**
---

