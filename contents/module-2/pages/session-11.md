---
layout: two-cols-header
transition: fade
---

### 🐼 Session 11: Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

In this session, we'll explore the powerful `groupby()` function in pandas, which is essential for data analysis and preparation.

::left::

**What is Data Aggregation?**

* Data aggregation involves combining multiple values into a single summary value.
* It's a key step in understanding data patterns and trends.
* The `groupby()` function enables us to perform this aggregation efficiently.

::right::

**Key Concepts:**

* **Splitting:** Dividing the DataFrame into groups based on one or more columns.
* **Applying:** Applying a function (e.g., calculating the mean, sum, count) to each group independently.
* **Combining:** Combining the results from each group into a new DataFrame.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's dive into how `groupby()` works with some examples!

::left::

**1. Grouping by a Single Column:**

* We can group a DataFrame by the unique values in a single column.
* This creates groups of rows that share the same value in that column.

::right::

**Example: Grouping by a Single Column**

```python
import pandas as pd

# Sample DataFrame
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)
print("Original DataFrame:\n", df)

# Group by 'Animal' column
grouped_animal = df.groupby('Animal')
print("\nDataFrame grouped by 'Animal':\n", grouped_animal)
```
---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's explore what happens when we group the data.

::left::

**Output \& Explanation (Slide 2):**

```sh
Original DataFrame:
  Animal   Color  Height  Weight
0    Dog   Brown      20      15
1    Dog   Black      22      17
2    Cat  Orange      18      12
3    Cat   White      20      13
4    Dog   White      25      20
5    Cat   Black      19      14

DataFrame grouped by 'Animal':
<pandas.core.groupby.generic.DataFrameGroupBy object at 0x...>
```

::right::

**Explanation:**

* The `groupby('Animal')` operation creates a `DataFrameGroupBy` object.
* This object represents a collection of DataFrames, one for each unique value in the 'Animal' column ('Dog' and 'Cat').
* It doesn't display the grouped DataFrames directly but provides methods to perform operations on them.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Now, let's see `groupby()` in action by applying a function!

::left::

**2. Applying a Function to Each Group:**

* After grouping, we can apply a function to each group to calculate summary statistics.
* Common aggregation functions include:
    * `mean()`: Calculate the mean of each group.
    * `sum()`: Calculate the sum of each group.
    * `count()`: Count the number of elements in each group.
    * `min()`: Find the minimum value in each group.
    * `max()`: Find the maximum value in each group.

::right::

**Example: Applying the `mean()` Function**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)

# Group by 'Animal' and calculate the mean
mean_by_animal = df.groupby('Animal').mean()
print("Mean Height and Weight by Animal:\n", mean_by_animal)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying the `mean()` function.

::left::

**Output & Explanation (Slide 4):**

```sh
Mean Height and Weight by Animal:
        Height  Weight
Animal                
Cat      19.000000   13.000000
Dog      22.333333   17.333333
```

::right::

**Explanation:**

* The `groupby('Animal').mean()` operation calculates the mean of the 'Height' and 'Weight' columns for each animal group.
* The result is a new DataFrame where the index is the grouped column ('Animal'), and the columns are the mean values for the numerical columns.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's explore other aggregation functions.

::left::

**3. Applying Other Aggregation Functions:**

* We can use other functions like `sum()`, `count()`, `min()`, and `max()` to get different summary statistics.

::right::

**Example: Applying `sum()`, `count()`, `min()`, and `max()`**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)

# Group by 'Animal' and calculate sum, count, min, max
sum_by_animal = df.groupby('Animal').sum()
count_by_animal = df.groupby('Animal').count()
min_by_animal = df.groupby('Animal').min()
max_by_animal = df.groupby('Animal').max()

print("Sum by Animal:\n", sum_by_animal)
print("\nCount by Animal:\n", count_by_animal)
print("\nMin by Animal:\n", min_by_animal)
print("\nMax by Animal:\n", max_by_animal)
```

---
layout: two-cols-header
transition: fade
---

::left::

### 🐼 Data Aggregation and Grouping (GroupBy) 📊


**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying these functions.

**Explanation:**

* `sum()`: Calculates the sum of 'Height' and 'Weight' for each animal.
* `count()`: Counts the number of non-NA values in each column for each animal.
* `min()`: Finds the minimum value in each column for each animal.
* `max()`: Finds the maximum value in each column for each animal.

::right::

**Output & Explanation (Slide 6):**

```sh
Sum by Animal:
        Height  Weight
Animal                
Cat         57      39
Dog         67      52

Count by Animal:
        Color  Height  Weight
Animal                       
Cat         3       3       3
Dog         3       3       3

Min by Animal:
        Color  Height  Weight
Animal                       
Cat     Black      18      12
Dog     Black      20      15

Max by Animal:
        Color  Height  Weight
Animal                       
Cat     White      20      14
Dog     White      25      20
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

We can also apply multiple aggregation functions at once.

::left::

**4. Applying Multiple Aggregation Functions:**

* The `agg()` method allows us to apply multiple aggregation functions to the grouped data.
* We can specify the functions as a list or a dictionary.

::right::

**Example: Applying Multiple Functions with `agg()`**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)

# Group by 'Animal' and apply multiple functions
agg_by_animal = df.groupby('Animal').agg(['mean', 'sum', 'count'])
print("Aggregation by Animal:\n", agg_by_animal)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying multiple functions.

::left::

**Output & Explanation (Slide 8):**
```sh
Aggregation by Animal:
        Height            Weight           
          mean sum count   mean sum count
Animal                                   
Cat     19.00  57     3   13.00  39     3
Dog     22.33  67     3   17.33  52     3
```

::right::

**Explanation:**

* The `agg(['mean', 'sum', 'count'])` operation calculates the mean, sum, and count for the 'Height' and 'Weight' columns for each animal group.
* The result is a hierarchical column index, showing the function applied to each column.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

We can also apply different aggregation functions to different columns.

::left::

**5. Applying Different Functions to Different Columns:**

* The `agg()` method allows us to apply different aggregation functions to different columns.
* We can specify the functions using a dictionary where keys are column names and values are the aggregation functions.

::right::

**Example: Applying Different Functions to Columns**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)

# Group by 'Animal' and apply different functions to columns
agg_by_animal_col = df.groupby('Animal').agg({
    'Height': ['mean', 'max'],
    'Weight': 'sum'
})
print("Aggregation by Animal (Different Functions):\n", agg_by_animal_col)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying different functions to columns.

::left::

**Output & Explanation (Slide 10):**
```sh
Aggregation by Animal (Different Functions):
        Height      Weight
          mean  max    sum
Animal                      
Cat     19.00   20     39
Dog     22.33   25     52
```

::right::

**Explanation:**

* The `agg({'Height': ['mean', 'max'], 'Weight': 'sum'})` operation calculates the mean and max for 'Height' and the sum for 'Weight' for each animal.
* The result shows the specified functions applied to the respective columns.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

We can also group by multiple columns.

::left::

**6. Grouping by Multiple Columns:**

* We can group a DataFrame by multiple columns to create more granular groups.
* This allows us to analyze data based on combinations of different categories.

::right::

**Example: Grouping by Multiple Columns**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Color': ['Brown', 'Black', 'Orange', 'White', 'White', 'Black'],
    'Height': [20, 22, 18, 20, 25, 19],
    'Weight': [15, 17, 12, 13, 20, 14],
}
df = pd.DataFrame(data)

# Group by 'Animal' and 'Color'
grouped_animal_color = df.groupby(['Animal', 'Color']).mean()
print("Mean by Animal and Color:\n", grouped_animal_color)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of grouping by multiple columns.

::left::

**Output & Explanation (Slide 12):**
```sh
Mean by Animal and Color:
                Height  Weight
Animal Color                  
Cat    Black    19.0      14.0
       Orange   18.0      12.0
       White    20.0      13.0
Dog    Black    22.0      17.0
       Brown    20.0      15.0
       White    25.0      20.0
```

::right::

**Explanation:**

* The `groupby(['Animal', 'Color']).mean()` operation calculates the mean of 'Height' and 'Weight' for each combination of 'Animal' and 'Color'.
* The result is a DataFrame with a multi-index, showing the mean values for each unique combination.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's apply `groupby()` to a real-world dataset.

::left::

**7. Practical Example with a Kaggle Dataset:**

* We will use a sample dataset from Kaggle to demonstrate the power of `groupby()`.
* We'll focus on summarizing data and extracting meaningful insights.

::right::

**Example: Analyzing Sales Data**

```python
import pandas as pd

# Load a sample sales dataset (replace with your Kaggle dataset path)
sales_data = pd.read_csv("sales_data.csv") #Please replace with an actual sales dataset.

# Group by 'Product Category' and calculate total sales
category_sales = sales_data.groupby('Product Category')['Sales'].sum()
print("Total Sales by Product Category:\n", category_sales)

# Group by 'Region' and calculate average profit
region_profit = sales_data.groupby('Region')['Profit'].mean()
print("\nAverage Profit by Region:\n", region_profit)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of the sales data analysis.

::left::

**Output & Explanation (Slide 13):**

```sh
Total Sales by Product Category:
Product Category
Electronics     150000
Clothing        120000
Home Goods      100000
Name: Sales, dtype: int64

Average Profit by Region:
Region
North     1500
South     2000
East      1800
West      1600
Name: Profit, dtype: int64
```

::right::

**Explanation:**

* The `groupby('Product Category')['Sales'].sum()` operation calculates the total sales for each product category.
* The `groupby('Region')['Profit'].mean()` operation calculates the average profit for each region.
* The results are Series showing the aggregated values for each group.

**Note:** Please replace `"sales_data.csv"` with an actual sales dataset for the code to run correctly.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's explore further aggregation techniques.

::left::

**8. Applying Custom Aggregation Functions:**

* We can define custom functions and use them with `groupby()` and `agg()`.
* This allows for flexible and specific data analysis.

::right::

**Example: Custom Aggregation Function**

```python
import pandas as pd
import numpy as np

# Load the sales dataset (replace with your Kaggle dataset path)
sales_data = pd.read_csv("sales_data.csv") #Please replace with an actual sales dataset.

# Custom function to calculate the range (max - min)
def sales_range(series):
    return series.max() - series.min()

# Group by 'Product Category' and apply the custom function
category_sales_range = sales_data.groupby('Product Category')['Sales'].agg(sales_range)
print("Sales Range by Product Category:\n", category_sales_range)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying the custom aggregation function.

::left::

**Output & Explanation (Slide 15):**

```sh
Sales Range by Product Category:
Product Category
Electronics     50000
Clothing        40000
Home Goods      30000
Name: Sales, dtype: int64
```

::right::

**Explanation:**

* The `sales_range` function calculates the difference between the maximum and minimum sales values for each product category.
* The `groupby('Product Category')['Sales'].agg(sales_range)` operation applies this custom function to the 'Sales' column for each product category.
* The result is a Series showing the sales range for each category.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's apply multiple custom aggregation functions using `agg()`.

::left::

**9. Applying Multiple Custom Aggregation Functions:**

* We can use a dictionary with `agg()` to apply different custom functions to different columns.
* This provides even more flexibility in data analysis.

::right::

**Example: Multiple Custom Functions with `agg()`**

```python
import pandas as pd
import numpy as np

# Load the sales dataset (replace with your Kaggle dataset path)
sales_data = pd.read_csv("sales_data.csv") #Please replace with an actual sales dataset.

# Custom functions
def sales_range(series):
    return series.max() - series.min()

def average_profit_per_sale(group):
    return group['Profit'].sum() / group['Sales'].sum()

# Group by 'Product Category' and apply multiple custom functions
custom_agg_results = sales_data.groupby('Product Category').agg({
    'Sales': sales_range,
    'Profit': average_profit_per_sale
})
print("Custom Aggregation Results:\n", custom_agg_results)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying multiple custom aggregation functions.

::left::

**Output & Explanation (Slide 16):**

```sh
Custom Aggregation Results:
                    Sales  Profit
Product Category                  
Electronics         50000     0.1
Clothing            40000     0.2
Home Goods          30000     0.3
```

::right::

**Explanation:**

* The `sales_range` function calculates the difference between the maximum and minimum sales values for each product category.
* The `average_profit_per_sale` function calculates the total profit divided by the total sales for each product category.
* The `groupby('Product Category').agg({'Sales': sales_range, 'Profit': average_profit_per_sale})` operation applies these custom functions to the respective columns.
* The result is a DataFrame showing the sales range and average profit per sale for each product category.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's explore how to transform data within each group.

::left::

**10. Applying Transformation Functions:**

* Transformation functions apply a function to each element of a group and return a DataFrame with the same shape as the original group.
* The `transform()` method is used for this purpose.

::right::

**Example: Applying a Transformation Function**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Height': [20, 22, 18, 20, 25, 19],
}
df = pd.DataFrame(data)

# Group by 'Animal' and transform 'Height' by subtracting the mean
transformed_height = df.groupby('Animal')['Height'].transform(lambda x: x - x.mean())
print("Transformed Height:\n", transformed_height)

# Add the transformed column to the original DataFrame
df['Transformed Height'] = transformed_height
print("\nDataFrame with Transformed Height:\n", df)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying the transformation function.

::left::

**Output & Explanation (Slide 17):**

```sh
Transformed Height:
Animal
Cat    [-1.0, 1.0, -1.0]
Dog    [-2.33333333, 2.33333333, -0.33333333]
Name: Height, dtype: float64

DataFrame with Transformed Height:
   Animal  Height  Transformed Height
0    Dog     20.0         -2.333333
1    Dog     22.0          2.333333
2    Cat     18.0         -1.000000
3    Cat     20.0          1.000000
4    Dog     25.0         -0.333333
5    Cat     19.0         -1.000000
```

::right::

**Explanation:**

- The `transform(lambda x: x - x.mean())` function subtracts the mean of each group's 'Height' values from each individual value.
- This results in a new column ('Transformed Height') that shows the deviation of each height from the group mean.

**Key Points:**

- `transform()` is useful for applying element-wise operations within each group.
- It returns a DataFrame with the same shape as the original, preserving the group structure

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's explore how to filter data within each group.

::left::

**11. Applying Filtering Functions:**

* Filtering functions allow us to select groups based on a condition applied to the group.
* The `filter()` method is used for this purpose.

::right::

**Example: Applying a Filtering Function**

```python
import pandas as pd

# Sample DataFrame (from Slide 2)
data = {
    'Animal': ['Dog', 'Dog', 'Cat', 'Cat', 'Dog', 'Cat'],
    'Height': [20, 22, 18, 20, 25, 19],
}
df = pd.DataFrame(data)

# Filter groups with a mean height greater than 20
filtered_df = df.groupby('Animal').filter(lambda x: x['Height'].mean() > 20)
print("Filtered DataFrame:\n", filtered_df)
```

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's see the output of applying the filtering function.

::left::

**Output & Explanation (Slide 19):**

```sh
Filtered DataFrame:
  Animal  Height
0    Dog      20
1    Dog      22
4    Dog      25
```

::right::

**Explanation:**

* The `filter(lambda x: x['Height'].mean() > 20)` function selects groups where the mean height is greater than 20.
* In this case, only the 'Dog' group meets this condition.
* The result is a DataFrame containing only the rows from the filtered groups.

**Key Points:**

* `filter()` is useful for selecting entire groups based on a condition.
* It returns a DataFrame containing only the rows from the filtered groups.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's summarize the key concepts of `groupby()`.

::left::

**12. Recap of Key Concepts:**

* `groupby()` is a powerful tool for splitting, applying, and combining data.
* It allows us to perform aggregation, transformation, and filtering operations on groups of data.
* `agg()`, `transform()`, and `filter()` are essential methods for working with grouped data.

::right::

**Key Takeaways:**

* **Splitting:** Grouping data based on one or more columns.
* **Applying:** Using aggregation functions (mean, sum, etc.) or custom functions.
* **Combining:** Getting the results back into a DataFrame.
* **Flexibility:** `groupby()` works with various data types and complex operations.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Let's do a short exercise to solidify your understanding.

::left::

**13. Exercise:**

Using the sales dataset (or a dataset of your choice), perform the following:

1.  Group the data by a categorical column (e.g., 'Product Category', 'Region').
2.  Calculate the total sales and average profit for each group.
3.  Apply a custom aggregation function to find the range of sales within each group.
4.  Filter the groups to include only those with an average profit greater than a certain threshold.

::right::

**Tips:**

* Remember to load your dataset first.
* Use `groupby()`, `agg()`, and custom functions.
* Try different aggregation functions and filtering conditions.
* Experiment with grouping by multiple columns.

---
layout: two-cols-header
transition: fade
---
### 🐼 Data Aggregation and Grouping (GroupBy) 📊

**DataFrame Operations: Summarizing and Preparing Data**

Congratulations! You've reached the end of this session.

::left::

**14. Conclusion:**

In this session, we explored the `groupby()` function in pandas, a fundamental tool for data aggregation and preparation. We covered various techniques, including:

* Grouping and aggregation
* Applying custom functions
* Transformation and filtering

::right::

**Next Steps:**

* Practice with different datasets.
* Explore advanced `groupby()` techniques (e.g., `apply()`).
* Combine `groupby()` with other pandas operations.

Keep exploring and happy coding!