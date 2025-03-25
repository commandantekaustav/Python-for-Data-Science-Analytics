---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**Advanced Techniques**

::left::

**Theory:**

* Missing data is a common problem.
* It can lead to biased results and affect model performance.
* Advanced techniques offer better ways to handle it.

::right::

**Topics Covered:**

1.  Advanced Imputation
2.  Complex `dropna()`
3.  Patterns in Missing Data
4.  Missing Time Series Data

---
layout: two-cols-header
transition: fade
---

### 🗑️ Session 25: Handling Missing Values ❓

**1. Advanced Imputation: KNN**

::left::

**Theory:**

* KNN Imputation estimates missing values based on their nearest neighbors.
* It's useful for capturing relationships in data.

**Code:**

```py
import pandas as pd
from sklearn.impute import KNNImputer

# Create a DataFrame with missing values
data = pd.DataFrame([[1, 2, np.nan], [3, np.nan, 5], [np.nan, 8, 9]])

# Impute missing values using KNN
imputer = KNNImputer(n_neighbors=2)
data_imputed = imputer.fit_transform(data)

print(data_imputed)
```

::right::

**Explanation of Outputs:**

```bash
[[1. 2. 5.]
 [3. 5. 5.]
 [3. 8. 9.]]
```

* The missing values in the DataFrame are replaced with values estimated by the KNN Imputer.
* `n_neighbors=2` means that the imputation is based on the 2 nearest neighbors.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

::left::

**1. Advanced Imputation: KNN**


**Theory:**

* Choosing 'k' is crucial in KNN.
* A small 'k' can lead to noisy imputations.
* A large 'k' can smooth out patterns.

**Code:**

```python
import pandas as pd
from sklearn.impute import KNNImputer
import numpy as np

# Create a DataFrame with missing values
data = pd.DataFrame([[1, 2, np.nan], [3, np.nan, 5], [np.nan, 8, 9]])

# Impute with k=1
imputer_k1 = KNNImputer(n_neighbors=1)
data_imputed_k1 = imputer_k1.fit_transform(data)
print("Imputed with k=1:\n", data_imputed_k1)
```

::right::

```py
# Impute with k=3
imputer_k3 = KNNImputer(n_neighbors=3)
data_imputed_k3 = imputer_k3.fit_transform(data)
print("\nImputed with k=3:\n", data_imputed_k3)
```

**Explanation of Outputs:**

```bash
Imputed with k=1:
[[1. 2. 1.]
 [3. 3. 5.]
 [1. 8. 9.]]

Imputed with k=3:
[[1.         2.         5.        ]
 [3.         6.33333333 5.        ]
 [4.         8.         9.        ]]
```

* The output shows how different 'k' values impact imputation.
* k=1 results in imputations based on the single nearest neighbor.
* k=3 averages the values of the three nearest neighbors.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**1. Advanced Imputation: KNN**

::left::

**Theory:**

* KNN can handle both numerical and categorical data.
* For categorical, imputation is often based on the mode of neighbors.

**Code:**

```python
import pandas as pd
from sklearn.impute import KNNImputer
import numpy as np
# Create a DataFrame with missing values (including a categorical column)
data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': ['a', 'b', 'a', np.nan, 'b'],
    'C': [3, np.nan, 5, 6, 7]
})
# Impute missing values using KNN
imputer = KNNImputer(n_neighbors=2)
data_imputed = imputer.fit_transform(data)
print(data_imputed)
```

::right::

**Explanation of Outputs:**

```bash
[[ 1.  'a'  3.]
 [ 2.  'b'  2.]
 [ 1.  'a'  5.]
 [ 4.  'b'  6.]
 [ 5.  'b'  7.]]
```

* Column 'A' and 'C' are imputed numerically.
* Column 'B' (categorical) is imputed using the mode of the nearest neighbors.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**1. Advanced Imputation: Model-Based**

::left::

**Theory:**

* Model-based imputation uses predictive models to fill missing values.
* It can capture complex relationships.
* Examples include regression, decision trees, etc.

**Code:**

```python
import pandas as pd
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer
import numpy as np

# Create a DataFrame with missing values
data = pd.DataFrame([[1, 2, np.nan], [3, np.nan, 5], [np.nan, 8, 9]])
```

::right::

```py
# Impute using IterativeImputer (a model-based approach)
imputer = IterativeImputer(random_state=0)
data_imputed = imputer.fit_transform(data)

print(data_imputed)
```

**Explanation of Outputs:**

```bash
[[1.       2.       4.66666667]
 [3.       6.33333333 5.        ]
 [1.6      8.       9.        ]]
```

* The missing values are imputed using a model-based approach.
* `IterativeImputer` uses an iterative process, modeling each feature as a function of the others.

---
layout: two-cols-header
transition: fade
---
::left::

### 🗑️ Session 25: Handling Missing Values ❓


**1. Advanced Imputation: Model-Based**

**Theory:**

* Different models can be used in model-based imputation.
* The choice of model impacts the results.

**Code:**

```python
import pandas as pd
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer
from sklearn.linear_model import LinearRegression
import numpy as np

# Create a DataFrame with missing values
data = pd.DataFrame([[1, 2, np.nan], [3, np.nan, 5], [np.nan, 8, 9]])

# Impute using IterativeImputer with a LinearRegression model
imputer_lr = IterativeImputer(estimator=LinearRegression(), random_state=0)
data_imputed_lr = imputer_lr.fit_transform(data)
print("Imputed with Linear Regression:\n", data_imputed_lr)
```
::right::

```py
# Impute using IterativeImputer with 
# default estimator (BayesianRidge)
imputer_default = IterativeImputer(random_state=0)
data_imputed_default = imputer_default.fit_transform(data)
print("\nImputed with default estimator:\n",
                     data_imputed_default)
```

**Explanation of Outputs:**

```bash
Imputed with Linear Regression:
[[1.       2.       4.66666667]
 [3.       6.33333333 5.        ]
 [1.6      8.       9.        ]]

Imputed with default estimator:
[[1.       2.       4.66666667]
 [3.       6.33333333 5.        ]
 [1.6      8.       9.        ]]
```

* The output shows imputation using Linear Regression and the default estimator (BayesianRidge).
* Different models can lead to slightly different imputed values.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**2. Complex `dropna()` Workflows**

::left::

**Theory:**

* `dropna()` removes missing values.
* Complex workflows allow more control.
* This includes using conditions and thresholds.

**Code:**

```python
import pandas as pd
import numpy as np
# Create a DataFrame with missing values
data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, np.nan]
})
print("Original Data:\n", data)

# Drop rows where 'A' is NaN AND 'B' is not NaN
data_dropped_cond = data.dropna(subset=['A', 'B'], how='any')
print("\nDropped rows based on condition:\n", data_dropped_cond)
```

::right::

**Explanation of Outputs:**

```bash
Original Data:
     A    B    C
0  1.0  NaN  1.0
1  2.0  2.0  2.0
2  NaN  3.0  3.0
3  4.0  NaN  4.0
4  5.0  5.0  NaN

Dropped rows based on condition:
     A    B    C
1  2.0  2.0  2.0
4  5.0  5.0  NaN
```

* The original DataFrame contains missing values.
* The code drops rows where column 'A' has a missing value.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**2. Complex `dropna()` Workflows**

::left::

**Theory:**

* The `thresh` parameter sets a minimum number of non-missing values.
* Rows/columns with fewer non-missing values are dropped.

**Code:**

```python
import pandas as pd
import numpy as np
# Create a DataFrame with missing values
data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, np.nan]
})
print("Original Data:\n", data)

# Drop rows with less than 2 non-missing values
data_dropped_thresh = data.dropna(thresh=2)
print("\nDropped rows with thresh=2:\n", data_dropped_thresh)
```

::right::

**Explanation of Outputs:**
```bash
Original Data:
     A    B    C
0  1.0  NaN  1.0
1  2.0  2.0  2.0
2  NaN  3.0  3.0
3  4.0  NaN  4.0
4  5.0  5.0  NaN

Dropped rows with thresh=2:
     A    B    C
1  2.0  2.0  2.0
2  NaN  3.0  3.0
4  5.0  5.0  NaN
```

* Rows with less than 2 non-missing values are removed.
* Row 0 and Row 3 are dropped because they have only one non-missing value.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**3. Patterns in Missing Data**

::left::

**Theory:**

* Understanding why data is missing is crucial.
* Patterns can reveal underlying issues.
* Visualizations help identify these patterns.

**Code:**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create a DataFrame with missing values
data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, np.nan]
})
print("Original Data:\n", data)
```

::right::

```py
# Visualize missing data with a heatmap
sns.heatmap(data.isnull(), cbar=False)
plt.show()
```

**Explanation of Outputs:**
```bash
Original Data:
     A    B    C
0  1.0  NaN  1.0
1  2.0  2.0  2.0
2  NaN  3.0  3.0
3  4.0  NaN  4.0
4  5.0  5.0  NaN
```

- The heatmap visualizes missing data.
- White indicates missing values, while dark color indicates non-missing values.

---
layout: two-cols-header
transition: fade
---

### 🗑️ Session 25: Handling Missing Values ❓

::left::

**3. Patterns in Missing Data**


**Theory:**

* Missing data statistics can reveal patterns.
* Calculating the percentage of missing values per column is useful.

**Code:**

```python
import pandas as pd
import numpy as np

# Create a DataFrame with missing values
data = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, np.nan]
})
print("Original Data:\n", data)
```

::right::

```py
# Calculate percentage of missing values per column
missing_percentage = data.isnull().sum() / len(data) * 100
print("\nMissing Percentage per column:\n", missing_percentage)
```

**Explanation of Outputs:**
```bash
Original Data:
     A    B    C
0  1.0  NaN  1.0
1  2.0  2.0  2.0
2  NaN  3.0  3.0
3  4.0  NaN  4.0
4  5.0  5.0  NaN

Missing Percentage per column:
A    20.0
B    40.0
C    20.0
dtype: float64
```

* The code calculates the percentage of missing values for each column.
* Column 'B' has the highest percentage of missing values (40%).

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

::left::


**4. Missing Time Series Data**

**Theory:**

* Time series data has a temporal order.
* Missing values need special handling.
* Interpolation is a common technique.

**Code:**

```python
import pandas as pd
import numpy as np

# Create a Time Series with missing values
dates = pd.date_range('2023-01-01', periods=5, freq='D')
data = pd.Series([1, np.nan, 3, np.nan, 5], index=dates)
print("Original Time Series:\n", data)

# Interpolate missing values using linear interpolation
data_interpolated = data.interpolate(method='linear')
print("\nInterpolated Time Series:\n", data_interpolated)
```

::right::

**Explanation of Outputs:**
```bash
Original Time Series:
2023-01-01    1.0
2023-01-02    NaN
2023-01-03    3.0
2023-01-04    NaN
2023-01-05    5.0
Freq: D, dtype: float64

Interpolated Time Series:
2023-01-01    1.0
2023-01-02    2.0
2023-01-03    3.0
2023-01-04    4.0
2023-01-05    5.0
Freq: D, dtype: float64
```

* The original time series has missing values.
* Linear interpolation fills the gaps by connecting the known data points with straight lines.

---
layout: two-cols-header
transition: fade
---

::left::

### 🗑️ Session 25: Handling Missing Values ❓

**4. Missing Time Series Data**


**Theory:**

* Forward fill is a simple imputation technique.
* It propagates the last valid observation forward.

**Code:**

```python
import pandas as pd
import numpy as np

# Create a Time Series with missing values
dates = pd.date_range('2023-01-01', periods=5, freq='D')
data = pd.Series([1, np.nan, 3, np.nan, 5], index=dates)
print("Original Time Series:\n", data)

# Forward fill missing values
data_ffill = data.ffill()
print("\nForward Filled Time Series:\n", data_ffill)
```
::right::

**Explanation of Outputs:**
```bash
Original Time Series:
2023-01-01    1.0
2023-01-02    NaN
2023-01-03    3.0
2023-01-04    NaN
2023-01-05    5.0
Freq: D, dtype: float64

Forward Filled Time Series:
2023-01-01    1.0
2023-01-02    1.0
2023-01-03    3.0
2023-01-04    3.0
2023-01-05    5.0
Freq: D, dtype: float64
```

* The original time series has missing values.
* Forward fill replaces each missing value with the preceding valid value.

---
layout: two-cols-header
transition: fade
---

### 🗑️ Session 25: Handling Missing Values ❓

**4. Missing Time Series Data**

::left::

**Theory:**

* Backward fill is another simple imputation technique.
* It propagates the next valid observation backward.

**Code:**

```python
import pandas as pd
import numpy as np

# Create a Time Series with missing values
dates = pd.date_range('2023-01-01', periods=5, freq='D')
data = pd.Series([1, np.nan, 3, np.nan, 5], index=dates)
print("Original Time Series:\n", data)

# Backward fill missing values
data_bfill = data.bfill()
print("\nBackward Filled Time Series:\n", data_bfill)
```

::right::

**Explanation of Outputs:**
```bash
Original Time Series:
2023-01-01    1.0
2023-01-02    NaN
2023-01-03    3.0
2023-01-04    NaN
2023-01-05    5.0
Freq: D, dtype: float64

Backward Filled Time Series:
2023-01-01    1.0
2023-01-02    3.0
2023-01-03    3.0
2023-01-04    5.0
2023-01-05    5.0
Freq: D, dtype: float64
```

* The original time series has missing values.
* Backward fill replaces each missing value with the following valid value.

---
layout: two-cols-header
transition: fade
---
### 🗑️ Session 25: Handling Missing Values ❓

**Session Conclusion**

::left::

**Summary:**

* This session covered advanced techniques for handling missing values.
* We explored KNN and model-based imputation.
* We also discussed complex dropna() workflows and handling missing values in time series.

::right::

**Next Steps:**

* Practice these techniques on different datasets.
* Experiment with various imputation methods.
* Consider the impact of missing data handling on your analyses.