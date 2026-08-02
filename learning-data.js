// learning-data.js

const learningData = [
  {
    id: "databricks",
    title: "Databricks Certified Data Engineer",
    year: "2024",
    provider: "Databricks",
    shortDesc: "Advanced Spark, Delta Lake, and MLflow for scalable data engineering.",
    topics: [
      {
        id: "spark",
        name: "Spark & PySpark on Databricks",
        details: [
          "Spark architecture, RDDs vs DataFrames, Spark SQL",
          "Writing PySpark code in Databricks notebooks",
          "Optimizing transformations, joins, and aggregations",
          "Performance tuning: partitioning, caching, broadcast joins"
        ]
      },
      {
        id: "delta",
        name: "Delta Lake & ACID Transactions",
        details: [
          "Delta table format and log management",
          "Time travel, schema evolution, and constraints",
          "Optimize, Z-Order, and compaction"
        ]
      },
      {
        id: "workflows",
        name: "Jobs, Workflows & Scheduling",
        details: [
          "Creating and configuring Databricks Jobs",
          "Multi-task workflows and dependencies",
          "Cluster policies, auto-scaling, and cost optimization"
        ]
      },
      {
        id: "mlflow",
        name: "MLflow Tracking & Model Management",
        details: [
          "MLflow Tracking: runs, experiments, and metrics",
          "MLflow Models and model registry",
          "Integration with Databricks and notebooks"
        ]
      }
    ]
  },
  {
    id: "azure",
    title: "Azure Data Engineer Associate",
    year: "2024",
    provider: "Microsoft",
    shortDesc: "Azure data services, pipelines, and security best practices.",
    topics: [
      {
        id: "adf",
        name: "Azure Data Factory",
        details: [
          "Pipelines, activities, linked services, datasets",
          "Copy data, mapping data flows, triggers",
          "Monitoring and alerting"
        ]
      },
      {
        id: "synapse",
        name: "Azure Synapse Analytics",
        details: [
          "Dedicated SQL pools vs serverless",
          "Data modeling and performance tuning",
          "Integration with Data Factory and Power BI"
        ]
      },
      {
        id: "adls",
        name: "Azure Data Lake Storage (ADLS)",
        details: [
          "ADLS Gen2 architecture and security",
          "Hierarchical namespace and access control",
          "Integration with ADF, Databricks, and Synapse"
        ]
      }
    ]
  },
  {
    id: "aws",
    title: "AWS Solutions Architect Associate",
    year: "2023",
    provider: "Amazon Web Services",
    shortDesc: "S3, Lambda, Redshift, Glue, and data engineering workflows.",
    topics: [
      {
        id: "s3-lambda",
        name: "S3 & Lambda",
        details: [
          "S3 storage classes, lifecycle policies",
          "Event-driven Lambda functions",
          "Serverless ETL patterns"
        ]
      },
      {
        id: "redshift-glue",
        name: "Redshift & Glue",
        details: [
          "Redshift schemas, distribution keys, sort keys",
          "Glue crawlers, ETL jobs, and Data Catalog",
          "Integration with S3 and Athena"
        ]
      },
      {
        id: "iam-vpc",
        name: "IAM & VPC Basics",
        details: [
          "Users, roles, policies, and permissions",
          "VPC, subnets, route tables, security groups",
          "Best practices for secure data platforms"
        ]
      }
    ]
  },
  {
    id: "sql",
    title: "Advanced SQL for Data Engineering",
    year: "2023",
    provider: "Coursera",
    shortDesc: "Query optimization, window functions, and complex transformations.",
    topics: [
      {
        id: "window-fns",
        name: "Window Functions",
        details: [
          "ROW_NUMBER, RANK, DENSE_RANK",
          "LEAD, LAG, running totals",
          "Partitioning and ordering"
        ]
      },
      {
        id: "optimization",
        name: "Query Optimization",
        details: [
          "Execution plans and indexes",
          "Join strategies and statistics",
          "Common anti-patterns and fixes"
        ]
      },
      {
        id: "cte-subq",
        name: "CTEs & Subqueries",
        details: [
          "Recursive CTEs for hierarchies",
          "Correlated vs non-correlated subqueries",
          "Refactoring complex queries"
        ]
      }
    ]
  },
  {
    id: "python-de",
    title: "Python for Data Engineering",
    year: "2023",
    provider: "Self-study / Projects",
    shortDesc: "Data manipulation, APIs, and automation with Python.",
    topics: [
      {
        id: "pandas",
        name: "pandas & NumPy",
        details: [
          "Data cleaning and transformation",
          "GroupBy, merge, pivot tables",
          "Working with large CSV/Parquet files"
        ]
      },
      {
        id: "api-etl",
        name: "APIs & ETL Scripts",
        details: [
          "Calling REST APIs with requests",
          "Parsing JSON and loading to files/DB",
          "Scheduling scripts with cron / Airflow"
        ]
      }
    ]
  },
  {
    id: "powerbi",
    title: "Power BI Data Analyst",
    year: "2022",
    provider: "Microsoft",
    shortDesc: "Data modeling, DAX, and interactive dashboards.",
    topics: [
      {
        id: "modeling",
        name: "Data Modeling",
        details: [
          "Star schema design",
          "Relationships and cardinality",
          "Calculated columns vs measures"
        ]
      },
      {
        id: "dax",
        name: "DAX",
        details: [
          "CALCULATE, FILTER, ALL",
          "Time intelligence functions",
          "Optimizing DAX for performance"
        ]
      },
      {
        id: "dashboards",
        name: "Dashboards & Reports",
        details: [
          "Building interactive visuals",
          "Bookmarks, drill-through, tooltips",
          "Publishing and sharing in Power BI Service"
        ]
      }
    ]
  }
];