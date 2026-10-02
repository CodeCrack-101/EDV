const practicals = [
  {
    id: 1,
    title: "Basic Visualization in Python",
    technology: "Python",
    description: "Show Basic Visualization in Python using Student dataset.",
    tags: ["Python", "Pandas", "Matplotlib"],
    files: [
      {
        name: "student - student.csv",
        type: "CSV Dataset",
        path: "/practical-files/practical-1/student - student.csv"
      },
      {
        name: "STUDENTS.csv",
        type: "CSV Dataset",
        path: "/practical-files/practical-1/STUDENTS.csv"
      }
    ],
    code: [
      {
        id: 1,
        title: "Complete Practical 1 Code",
        language: "Python",
        code: `import pandas as pd
import matplotlib.pyplot as plt

# ============================================================
# PART A: USING STUDENT DATASET FOR BASIC VISUALIZATIONS
# ============================================================

# Load CSV File
df = pd.read_csv("Downloads/student - student.csv")

# Display Dataset
print("Student Dataset")
print(df)

# 1. LINE CHART - STUDENT MARKS
plt.figure(figsize=(8, 5))
plt.plot(df["Student_ID"], df["Total_Marks"], marker='o', linewidth=2)
plt.title("Student Marks")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.grid(True)
plt.show()

# 2. BAR CHART - MARKS COMPARISON
plt.figure(figsize=(8, 5))
plt.bar(df["Student_ID"], df["Total_Marks"])
plt.title("Marks Comparison")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.show()

# 3. HORIZONTAL BAR CHART - ATTENDANCE COMPARISON
plt.figure(figsize=(8, 5))
plt.barh(df["Student_ID"], df["Attendance"])
plt.title("Attendance Comparison")
plt.xlabel("Attendance (%)")
plt.ylabel("Student")
plt.show()

# 4. PIE CHART - MARKS DISTRIBUTION
plt.figure(figsize=(7, 7))
plt.pie(df["Total_Marks"], labels=df["Student_ID"], autopct="%1.1f%%", startangle=90)
plt.title("Marks Distribution")
plt.show()

# 5. SCATTER PLOT - STUDY HOURS VS MARKS
plt.figure(figsize=(8, 5))
plt.scatter(df["Study_Hours_Per_Week"], df["Total_Marks"], s=120)
plt.title("Study Hours vs Marks")
plt.xlabel("Study Hours")
plt.ylabel("Marks")
plt.grid(True)
plt.show()

# 6. HISTOGRAM - DISTRIBUTION OF MARKS
plt.figure(figsize=(8, 5))
plt.hist(df["Total_Marks"], bins=5)
plt.title("Histogram of Marks")
plt.xlabel("Marks")
plt.ylabel("Frequency")
plt.show()

# 7. BOX PLOT - MARKS
plt.figure(figsize=(5, 6))
plt.boxplot(df["Total_Marks"])
plt.title("Box Plot of Marks")
plt.ylabel("Marks")
plt.grid(True)
plt.show()

# 8. MULTIPLE LINE CHART - MARKS AND ATTENDANCE
plt.figure(figsize=(9, 5))
plt.plot(df["Student_ID"], df["Total_Marks"], marker='o', label="Marks")
plt.plot(df["Student_ID"], df["Attendance"], marker='s', label="Attendance")
plt.title("Marks and Attendance")
plt.xlabel("Student")
plt.ylabel("Values")
plt.legend()
plt.grid(True)
plt.show()

# 9. CUSTOMIZED LINE CHART - MARKS
plt.figure(figsize=(9, 5))
plt.plot(df["Student_ID"], df["Total_Marks"], color='red', linestyle='--', linewidth=3, marker='D', markersize=8)
plt.title("Customized Marks Plot")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.grid(True)
plt.show()

# 10. SAVE CHART
plt.figure(figsize=(8, 5))
plt.bar(df["Student_ID"], df["Total_Marks"])
plt.title("Student Marks")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.savefig("student_marks.png", dpi=300)
plt.show()
print("\\nChart saved as 'student_marks.png'")
print("\\nAll Visualizations Completed Successfully.")


# ============================================================
# PART B: USING STUDENT DATASET FOR PROBLEM STATEMENTS
# ============================================================

# 1. WHICH STUDENTS SCORED THE HIGHEST MARKS?
df = pd.read_csv("Downloads/student - student.csv")
print("Student Dataset\\n", df)

top10 = df.sort_values(by="Total_Marks", ascending=False).head(10)
print("\\nTop 10 Students:\\n", top10[["Student_Name", "Total_Marks"]])

plt.figure(figsize=(10, 5))
plt.bar(top10["Student_Name"], top10["Total_Marks"])
plt.title("Top 10 Students")
plt.xlabel("Student")
plt.ylabel("Marks")
plt.xticks(rotation=45)
plt.grid(axis='y')
plt.show()

highest = df[df["Total_Marks"] == df["Total_Marks"].max()]
print("\\nHighest Scoring Students:\\n", highest[["Student_Name", "Total_Marks", "Attendance", "Study_Hours_Per_Week"]])

lowest = df[df["Total_Marks"] == df["Total_Marks"].min()]
print("\\nLowest Scoring Students:\\n", lowest[["Student_Name", "Total_Marks", "Attendance", "Study_Hours_Per_Week"]])


# 2. DOES STUDYING MORE HOURS IMPROVE MARKS?
plt.figure(figsize=(8, 5))
plt.scatter(df["Study_Hours_Per_Week"], df["Total_Marks"])
plt.title("Study Hours vs Marks")
plt.xlabel("Study Hours")
plt.ylabel("Marks")
plt.grid(True)
plt.show()
correlation = df["Study_Hours_Per_Week"].corr(df["Total_Marks"])
print("Correlation between study hours and Marks:", round(correlation, 2))


# 3. WHICH STUDENTS HAVE ATTENDANCE BELOW 45%?
low = df[df["Attendance"] < 45]
print("Students with Attendance Below 45%:\\n", low)
plt.figure(figsize=(8, 4))
plt.bar(low["Student_ID"], low["Attendance"])
plt.title("Students with Low Attendance")
plt.xlabel("Student")
plt.ylabel("Attendance")
plt.show()


# 4. WHICH DEPARTMENT HAS THE HIGHEST AVERAGE MARKS?
df2 = pd.read_csv("Downloads/STUDENTS.csv")
dept = df2.groupby("department")["Total_Marks"].mean()
print("Average Marks by Department:\\n", dept)
dept.plot(kind="bar")
plt.title("Average Marks by Department")
plt.xlabel("Department")
plt.ylabel("Average Marks")
plt.show()


# 5. WHICH GRADE HAS MAXIMUM STUDENTS?
grade = df2["Grade"].value_counts()
print("Number of Students in Each Grade:\\n", grade)
grade.plot(kind="pie", autopct="%1.1f%%")
plt.title("Grade Distribution")
plt.ylabel("")
plt.show()`
      }
    ]
  },
  {
    id: 2,
    title: "Basic Visualization in R",
    technology: "R",
    description: "Show Basic Visualization in R using Student and Ecommerce datasets.",
    tags: ["R", "ggplot2", "dplyr"],
    files: [
      {
        name: "StudentDataset.csv",
        type: "CSV Dataset",
        path: "/practical-files/practical-2/StudentDataset.csv"
      },
      {
        name: "ecommerce_sales.csv",
        type: "CSV Dataset",
        path: "/practical-files/practical-2/ecommerce_sales.csv"
      }
    ],
    code: [
      {
        id: 1,
        title: "Complete Practical 2 Code",
        language: "R",
        code: `# ============================================================
# PART A: USING STUDENT DATASET
# ============================================================

# Required Packages
# install.packages("ggplot2")
# install.packages("dplyr")
library(ggplot2)
library(dplyr)

# Load Student Dataset
student <- read.csv("StudentDataset.csv")
student
str(student)
head(student)
summary(student)

# 1. BAR CHART - AVERAGE MARKS BY DEPARTMENT
dept_avg <- student %>% group_by(department) %>% summarise(Average_Marks = mean(Total_Marks))
print(dept_avg)
ggplot(dept_avg, aes(x = department, y = Average_Marks, fill = department)) +
  geom_bar(stat = "identity") +
  labs(title = "Average Marks by Department", x = "Department", y = "Average Marks") +
  theme_minimal()

# 2. BOX PLOT - ATTENDANCE COMPARISON
ggplot(student, aes(x = department, y = Attendance, fill = department)) +
  geom_boxplot() +
  labs(title = "Attendance Comparison", x = "Department", y = "Attendance (%)")

# 3. HISTOGRAM - DISTRIBUTION OF MARKS
ggplot(student, aes(x = Total_Marks)) +
  geom_histogram(binwidth = 20, fill = "pink", color = "black") +
  labs(title = "Distribution of Marks", x = "Marks", y = "Number of Students") +
  theme_minimal()

# 4. SCATTER PLOT - STUDY HOURS VS TOTAL MARKS
ggplot(student, aes(x = Study_Hours_Per_Week, y = Total_Marks)) +
  geom_point(color = "darkgreen") +
  labs(title = "Study Hours vs Total Marks", x = "Study Hours", y = "Marks") +
  theme_minimal()

# 4B. SCATTER PLOT WITH REGRESSION LINE
ggplot(student, aes(x = Study_Hours_Per_Week, y = Total_Marks)) +
  geom_point(color = "darkgreen") +
  geom_smooth(method = "lm", color = "red") +
  labs(title = "Study Hours vs Marks", x = "Study Hours", y = "Marks")

# 5. MARKS COMPARED BY GENDER USING BOX PLOT
ggplot(student, aes(x = Gender, y = Total_Marks, fill = Gender)) +
  geom_boxplot() +
  labs(title = "Marks by Gender", x = "Gender", y = "Total Marks") +
  theme_light()


# ============================================================
# PART B: USING ECOMMERCE SALES DATASET
# ============================================================

library(lubridate)
data <- read.csv("ecommerce_sales.csv")
print(data)
str(data)
head(data)
summary(data)

# 1. WHICH PRODUCT CATEGORIES GENERATE THE HIGHEST TOTAL SALES REVENUE?
category_sales <- data %>% group_by(Category) %>% summarise(Total_Sales = sum(Sales))
print(category_sales)
ggplot(category_sales, aes(x = reorder(Category, Total_Sales), y = Total_Sales, fill = Category)) +
  geom_col() + coord_flip() +
  labs(title = "Total Sales Revenue by Category", x = "Product Category", y = "Total Sales") +
  theme_minimal()

# 2. HOW ARE CUSTOMER PURCHASE AMOUNTS DISTRIBUTED?
ggplot(data, aes(x = Sales)) +
  geom_histogram(binwidth = 500, fill = "magenta", color = "blue") +
  labs(title = "Distribution of Customer Purchase Amount", x = "Sales Amount", y = "No. of Orders") +
  theme_minimal()

# 3. WHICH REGIONS CONTRIBUTE THE HIGHEST SALES REVENUE?
region_sales <- data %>% group_by(Region) %>% summarise(Total_Sales = sum(Sales))
print(region_sales)
ggplot(region_sales, aes(x = reorder(Region, Total_Sales), y = Total_Sales, fill = Region)) +
  geom_col() +
  labs(title = "Total Sales Revenue by Region", x = "Region", y = "Total Sales") +
  theme_minimal()

# 4. IS THERE A RELATIONSHIP BETWEEN DISCOUNT PERCENTAGE AND SALES AMOUNT?
ggplot(data, aes(x = Discount, y = Sales)) +
  geom_point(colour = "blue") +
  geom_smooth(method = "lm", colour = "red", se = FALSE) +
  labs(title = "Discount Percentage vs Sales", x = "Discount (%)", y = "Sales Amount") +
  theme_minimal()

# 5. WHAT IS THE DISTRIBUTION OF ORDERS BY PAYMENT METHOD?
ggplot(data, aes(x = Payment, fill = Payment)) +
  geom_bar() +
  labs(title = "Distribution of Payment Methods", x = "Payment Methods", y = "No. of Orders") +
  theme_minimal()

# 6. WHICH ARE THE TOP 10 BEST-SELLING PRODUCTS BASED ON SALES REVENUE?
top_products <- data %>% group_by(Product) %>% summarise(Total_Sales = sum(Sales)) %>% arrange(desc(Total_Sales)) %>% slice(1:10)
print(top_products)
ggplot(top_products, aes(x = reorder(Product, Total_Sales), y = Total_Sales)) +
  geom_col(fill = "darkgreen") + coord_flip() +
  labs(title = "Top 10 Best Selling Products", x = "Product", y = "Sales Revenue") +
  theme_minimal()

# 7. HOW DO MONTHLY SALES CHANGE OVER TIME?
data$Month <- floor_date(as.Date(data$Order_Date), "month")
monthly_sales <- data %>% group_by(Month) %>% summarise(Total_Sales = sum(Sales))
print(monthly_sales)
ggplot(monthly_sales, aes(x = Month, y = Total_Sales)) +
  geom_line(color = "darkgreen", linewidth = 1) + geom_point(size = 3) +
  labs(title = "Monthly Sales Trend", x = "Month", y = "Sales") + theme_minimal()

# 8. WHICH CUSTOMER SEGMENT CONTRIBUTES THE HIGHEST REVENUE?
set.seed(123)
data$Customer_Segment <- sample(c("Consumer", "Corporate", "Home Office"), size = nrow(data), replace = TRUE)
seg_sales <- data %>% group_by(Customer_Segment) %>% summarise(Total_Sales = sum(Sales))
print(seg_sales)
ggplot(seg_sales, aes(x = Customer_Segment, y = Total_Sales, fill = Customer_Segment)) +
  geom_col() +
  labs(title = "Revenue by Customer Segment", x = "Customer Segment", y = "Total Sales") + theme_minimal()

# 9. HOW DOES PROFIT VARY ACROSS DIFFERENT PRODUCT CATEGORIES?
profit_cat <- data %>% group_by(Category) %>% summarise(Total_Profit = sum(Profit))
print(profit_cat)
ggplot(profit_cat, aes(x = reorder(Category, Total_Profit), y = Total_Profit, fill = Category)) +
  geom_col() + coord_flip() +
  labs(title = "Profit by Product Category", x = "Category", y = "Total Profit") + theme_minimal()

# 10. WHAT IS THE OVERALL ORDER STATUS DISTRIBUTION?
set.seed(321)
data$Order_Status <- sample(c("Delivered", "Cancelled", "Returned", "Pending"), size = nrow(data), replace = TRUE, prob = c(0.77, 0.10, 0.08, 0.05))
print(table(data$Order_Status))
ggplot(data, aes(x = Order_Status, fill = Order_Status)) +
  geom_bar() +
  labs(title = "Order Status Distribution", x = "Order Status", y = "Number of Orders") + theme_minimal()`
      }
    ]
  },
  {
    id: 4,
    title: "Data Visualization using Tableau",
    technology: "Tableau",
    description: "Tableau practical workbook.",
    tags: ["Tableau", "Visualization", "Book1"],
    files: [
      {
        name: "Book1.twb",
        type: "Tableau Workbook",
        path: "/practical-files/practical-4/Book1.twb"
      }
    ],
    code: []
  },
  {
    id: 6,
    title: "Bank Customer Churn Analysis",
    technology: "Power BI",
    description: "Bank customer churn analysis using Power BI.",
    tags: ["Power BI", "DAX", "Bank Customer Churn", "Dashboard"],
    files: [
      {
        name: "po.pbit",
        type: "Power BI File",
        path: "/practical-files/practical-6/po.pbit"
      }
    ],
    code: [
      {
        id: 1,
        title: "Complete Practical 6 DAX Code",
        language: "DAX",
        code: `Age Group Sort =
SWITCH(
    'BankCustomerChurn'[Age Group],
    "18-24", 1,
    "25-34", 2,
    "35-44", 3,
    "45-54", 4,
    "55+", 5
)

Total Customers =
COUNT('BankCustomerChurn'[CustomerID])

Churn Customers =
SUM('BankCustomerChurn'[Exited])

Churn Rate =
DIVIDE(
    SUM('BankCustomerChurn'[Exited]),
    COUNT('BankCustomerChurn'[CustomerID])
)

Average Balance =
AVERAGE('BankCustomerChurn'[Balance])

Average Salary =
AVERAGE('BankCustomerChurn'[EstimatedSalary])`
      }
    ]
  }
];

export default practicals;
