/* eslint-disable sonarjs/no-duplicate-string */
import BigQuery from "@/public/assets/integrationImages/BigQuery.png";
import MongoDB from "@/public/assets/integrationImages/MongoDB.png";
import MySQL from "@/public/assets/integrationImages/MySQL.png";
import PostgreSQL from "@/public/assets/integrationImages/PostgreSQL.png";
import Redshift from "@/public/assets/integrationImages/Redshift.png";
import atlas from "@/public/assets/integrationImages/atlas.png";
import avro from "@/public/assets/integrationImages/avro.png";
import csv from "@/public/assets/integrationImages/csv.png";
import excel from "@/public/assets/integrationImages/excel.png";
import feather from "@/public/assets/integrationImages/feather.png";
import firebase from "@/public/assets/integrationImages/firebase.png";
import googleanalytics360 from "@/public/assets/integrationImages/ganalytics360.png";
import gcs from "@/public/assets/integrationImages/gcs.png";
import GoogleSheets from "@/public/assets/integrationImages/googleSheets.png";
import googleanalytics from "@/public/assets/integrationImages/googleanalytics.png";
import GoogleDrive from "@/public/assets/integrationImages/googledrive.png";
import googlesearchconsole from "@/public/assets/integrationImages/googlesearchconsole.png";
import jira from "@/public/assets/integrationImages/jira.png";
import json from "@/public/assets/integrationImages/json.png";
import mixpanel from "@/public/assets/integrationImages/mixpanel.png";
import mysql_gcp from "@/public/assets/integrationImages/mysql_gcp.png";
import parquet from "@/public/assets/integrationImages/parquet.png";
import pickle from "@/public/assets/integrationImages/pickle.png";
import postgres_gcp from "@/public/assets/integrationImages/postgres_gcp.png";
import razorpay from "@/public/assets/integrationImages/razorpay.png";
import Redis from "@/public/assets/integrationImages/redis.png";
import rest from "@/public/assets/integrationImages/rest.png";
import sendgrid from "@/public/assets/integrationImages/sendgrid.png";
import shopify from "@/public/assets/integrationImages/shopify.png";
import slack from "@/public/assets/integrationImages/slack.png";
import Snowflake from "@/public/assets/integrationImages/snowflake.png";
import sqlite from "@/public/assets/integrationImages/sqllite.png";
import sqlserver from "@/public/assets/integrationImages/sqlserver.png";
import sqlserverwithgcp from "@/public/assets/integrationImages/sqlserverwithgcp.png";
import stripe from "@/public/assets/integrationImages/stripe.png";

export const DATABASETYPES = [
  {
    title: "MySQL",
    image: MySQL,
    type: "MYSQL",
    label: "MySQL",
    value: "MYSQL",
    category: "S & D",
    filter: ["Databases", "Data Warehouses"],
    url: "https://docs.edilitics.com/integrate/databases/mysql",
    desc: "MySQL is an open-source relational database management system known for its reliability, performance, and ease of use. It is widely used for web applications and supports various data types and operations.",
    free: true,
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "MySQL GCP",
    image: mysql_gcp,
    type: "MYSQL",
    label: "MySQL GCP",
    value: "MYSQL",
    url: "https://docs.edilitics.com/integrate/databases/google-cloud-mysql",
    category: "S & D",
    filter: ["Databases", "Data Warehouses"],
    desc: "MySQL on Google Cloud Platform (GCP) offers a fully-managed database service. It combines MySQL's relational database capabilities with Google's infrastructure, ensuring reliability, security, and scalability",
    db_subtype: "MYSQL_GCP",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "PostgreSQL",
    image: PostgreSQL,
    type: "POSTGRES",
    label: "PostgreSQL",
    value: "POSTGRES",
    category: "S & D",
    url: "https://docs.edilitics.com/integrate/databases/postgresql",
    filter: ["Databases", "Data Warehouses"],
    desc: "PostgreSQL is a powerful, open-source object-relational database system. It has strong support for SQL standards and offers advanced features like complex queries, foreign keys, triggers, and views.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "PostgreSQL GCP",
    image: postgres_gcp,
    type: "POSTGRES",
    label: "PostgreSQL GCP",
    db_subtype: "POSTGRES_GCP",
    value: "POSTGRES",
    category: "S & D",
    url: "https://docs.edilitics.com/integrate/databases/google-cloud-postgresql",
    filter: ["Databases", "Data Warehouses"],
    desc: "PostgreSQL on Google Cloud Platform (GCP) offers a fully-managed relational database service. It provides scalability, high availability, and integrates with other Google Cloud services for seamless operations.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "SQL Server",
    image: sqlserver,
    type: "SQLSERVER",
    label: "SQL Server",
    value: "SQLSERVER",
    filter: ["Databases", "Data Warehouses"],
    desc: "Microsoft SQL Server is a relational database management system that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.",
    category: "S & D",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "SQL Server GCP",
    image: sqlserverwithgcp,
    type: "SQLSERVER",
    label: "SQL Server GCP",
    value: "SQLSERVER",
    db_subtype: "SQLSERVER_GCP",
    filter: ["Databases", "Data Warehouses"],
    desc: "SQL Server on Google Cloud Platform (GCP) offers a fully-managed database service. It combines SQL Server's robust capabilities with the scalability and security of Google's cloud infrastructure.",
    category: "S & D",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "MongoDB",
    image: MongoDB,
    type: "MONGODB",
    label: "MongoDB",
    value: "MONGODB",
    url: "https://docs.edilitics.com/integrate/databases/mongodbgeneric",
    category: "S & D",
    filter: ["Databases"],
    desc: "A popular NoSQL document database that offers flexibility, scalability, and high performance for working with large datasets and unstructured data.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "MongoDB Atlas",
    image: atlas,
    type: "MONGODB",
    label: "MongoDB Atlas",
    value: "MONGODB",
    category: "S & D",
    filter: ["Databases"],
    db_subtype: "MONGODB_ATLAS",
    url: "https://docs.edilitics.com/integrate/databases/mongodbatlas",
    free: true,
    desc: "MongoDB Atlas is a fully-managed cloud database service that simplifies deployment, operation, and scaling of MongoDB databases. It offers automated backups, monitoring, and global distribution.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: true,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },

  {
    title: "Google Sheets",
    image: GoogleSheets,
    type: "SHEETS",
    free: true,
    label: "Google Sheets",
    value: "SHEETS",
    category: "S & D",
    filter: ["File Formats"],
    desc: "Google Sheets is a web-based spreadsheet application that allows real-time collaboration and data sharing. It integrates with other Google services and supports various functions and data formats.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "GCS",
    image: gcs,
    type: "GCS",
    label: "Google Cloud Storage",
    value: "GCS",
    filter: ["Cloud Storage"],
    category: "S & D",
    desc: " Google Cloud Storage (GCS) is a scalable and secure object storage service for storing and retrieving any amount of data. It integrates with other Google Cloud services, providing reliable and fast data access.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Google Drive",
    image: GoogleDrive,
    type: "GDRIVE",
    label: "Google Drive",
    value: "GDRIVE",
    category: "S & D",
    filter: ["Cloud Storage"],
    desc: "Google Drive is a cloud storage service that allows users to store, share, and collaborate on files. It integrates with Google Docs, Sheets, and other Google services, offering seamless file management.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Firebase Analytics",
    image: firebase,
    type: "FIREBASEANALYTICS",
    label: "Firebase Analytics",
    value: "FIREBASEANALYTICS",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Firebase is a platform developed by Google for creating mobile and web applications. It offers a real-time NoSQL database, authentication, analytics, and cloud messaging, among other services.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Slack",
    image: slack,
    type: "SLACK",
    label: "Slack",
    value: "SLACK",
    category: "S",
    filter: ["Engineering Analytics"],
    desc: "Slack is a cloud-based messaging platform designed for teams, offering instant messaging, file sharing, and collaboration tools. It integrates with various services and provides real-time notifications. ",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Razorpay",
    image: razorpay,
    type: "RAZORPAY",
    label: "Razorpay",
    value: "RAZORPAY",
    category: "S",
    filter: ["Finance Analytics"],
    desc: "Razorpay is an Indian payment gateway that allows businesses to accept, process, and disburse payments online. It supports multiple payment modes, including credit cards, debit cards, net banking, and UPI.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
    nodestination: true,
  },
  {
    title: "Stripe",
    image: stripe,
    type: "STRIPE",
    label: "Stripe",
    value: "STRIPE",
    category: "S",
    filter: ["Finance Analytics"],
    desc: "Stripe is a technology company that provides a suite of payment processing solutions for online businesses. It supports multiple payment methods and currencies, offering seamless integration with various platforms.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Mixpanel",
    image: mixpanel,
    type: "MIXPANEL",
    label: "Mixpanel",
    value: "MIXPANEL",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Mixpanel is an advanced analytics platform that helps businesses understand user behavior across their websites and mobile applications. It offers tools for tracking events, creating funnels, and user segmentation.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Google Analytics",
    image: googleanalytics,
    type: "GOOGLE_ANALYTICS",
    label: "Google Analytics",
    value: "GOOGLE_ANALYTICS",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Google Analytics is a free web analytics service offered by Google that tracks and reports website traffic. It provides insights into user behavior, helping businesses optimize their online presence.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
    nodestination: true,
  },
  {
    title: "Google Analytics 360",
    image: googleanalytics360,
    type: "GOOGLE_ANALYTICS",
    label: "Google Analytics 360",
    value: "GOOGLE_ANALYTICS",
    db_subtype: "GOOGLE_ANALYTICS_360",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Google Analytics 360 is a premium web analytics service that offers advanced features for enterprise-level insights. It helps businesses track and analyze website traffic and user behavior.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Google Search Console",
    image: googlesearchconsole,
    type: "GOOGLE_SEARCH_CONSOLE",
    label: "Google Search Console",
    value: "GOOGLE_SEARCH_CONSOLE",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Google Search Console is a web service by Google that helps webmasters monitor, maintain, and troubleshoot their site's presence in Google Search results, providing insights and performance reports.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Jira Cloud",
    url: "https://docs.edilitics.com/integrate/engineering-analytics/jira",
    image: jira,
    type: "JIRA_CLOUD",
    label: "Jira Cloud",
    value: "JIRA_CLOUD",
    filter: ["Engineering Analytics"],
    category: "S",
    desc: "Jira is a project management tool developed by Atlassian, widely used for tracking issues, bugs, and project tasks. It supports agile methodologies and integrates with various development and collaboration tools.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Rest API",
    image: rest,
    type: "REST_API",
    label: "Rest API",
    value: "REST_API",
    category: "S",
    filter: ["Interface"],
    desc: "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless, client-server communication and uses standard HTTP methods for operations on resources.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Sendgrid",
    url: "https://docs.edilitics.com/integrate/marketing-and-product-analytics/sendgrid",
    image: sendgrid,
    type: "SENDGRID",
    label: "Sendgrid",
    value: "SENDGRID",
    filter: ["Marketing & Product Analytics"],
    desc: "SendGrid is a cloud-based email delivery service that helps businesses send transactional and marketing emails. It provides reliable email delivery, scalable infrastructure, and analytics for email performance.",
    category: "S",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "Shopify",
    image: shopify,
    type: "SHOPIFY",
    label: "Shopify",
    value: "SHOPIFY",
    category: "S",
    filter: ["Marketing & Product Analytics"],
    desc: "Shopify is an e-commerce platform that allows businesses to create online stores, manage products, process orders, and handle payments. It offers various tools and integrations for a seamless shopping experience.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
    nodestination: true,
  },
  {
    title: "CSV",
    url: "https://docs.edilitics.com/integrate/file-formats/csv",
    image: csv,
    type: "CSV",
    label: "CSV",
    value: "CSV",
    filter: ["File Formats"],
    category: "S & D",
    desc: "CSV (Comma-Separated Values) is a simple file format used to store tabular data, such as spreadsheets or databases. Each line of the file is a data record, with each field separated by a comma.",
    free: true,
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Excel",
    url: "https://docs.edilitics.com/integrate/file-formats/excel",
    image: excel,
    type: "EXCEL",
    label: "Excel",
    filter: ["File Formats"],
    value: "EXCEL",
    category: "S & D",
    free: true,
    desc: "Microsoft Excel is a spreadsheet application used for data analysis and visualization. It offers powerful tools for calculations, graphing, pivot tables, and supports various data formats and functions.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Avro",
    image: avro,
    url: "https://docs.edilitics.com/integrate/file-formats/avro",
    type: "AVRO",
    label: "Avro",
    filter: ["File Formats"],
    value: "AVRO",
    category: "S & D",
    desc: "Avro is a data serialization framework developed within Apache's Hadoop project. It supports rich data structures and a compact, fast binary format, making it ideal for big data applications and analytics.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Feather",
    image: feather,
    type: "FEATHER",
    filter: ["File Formats"],
    url: "https://docs.edilitics.com/integrate/file-formats/feather",
    label: "Feather",
    value: "FEATHER",
    desc: "Feather is a lightweight, fast, and efficient file format for storing data frames. Developed by Apache Arrow, it is ideal for high-performance analytics and data interchange between systems.",
    category: "S & D",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Parquet",
    image: parquet,
    type: "PARQUET",
    label: "Parquet",
    url: "https://docs.edilitics.com/integrate/file-formats/parquet",
    filter: ["File Formats"],
    value: "PARQUET",
    category: "S & D",
    desc: "Parquet is a columnar storage file format optimized for use with big data processing frameworks like Apache Hadoop. It provides efficient data compression and encoding, improving performance and storage.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Pickle",
    image: pickle,
    type: "PICKLE",
    label: "Pickle",
    value: "PICKLE",
    filter: ["File Formats"],
    url: "https://docs.edilitics.com/integrate/file-formats/pickle",
    category: "S & D",
    desc: "Pickle is a Python module used to serialize and deserialize Python objects. It allows for saving Python object structures to files and retrieving them later, making it useful for data persistence and sharing.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "JSON",
    image: json,
    type: "JSON",
    label: "JSON",
    value: "JSON",
    filter: ["File Formats"],
    url: "https://docs.edilitics.com/integrate/file-formats/json",
    category: "S & D",
    desc: "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used in web applications.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: false,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Redis",
    image: Redis,
    type: "REDIS",
    label: "Redis",
    value: "REDIS",
    category: "S",
    filter: ["Data Stores"],
    desc: "Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports various data structures, including strings, hashes, lists, and sets, enabling high-performance operations.",
    pipeline: {
      full: {
        source: true,
        destination: false,
      },
      incremental: {
        source: true,
        destination: false,
      },
      cdc: {
        source: true,
        destination: false,
      },
    },
    transformation: {
      source: true,
      destination: false,
    },
    visualization: {
      source: false,
    },
  },
  {
    title: "SQLite",
    image: sqlite,
    type: "SQLITE",
    label: "SQLite",
    value: "SQLITE",
    category: "S & D",
    filter: ["Data Stores"],
    desc: "SQLite is a self-contained, high-reliability, embedded SQL database engine. It is widely used for local storage in mobile applications and desktop software, offering a full-featured SQL implementation.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "BigQuery",
    image: BigQuery,
    type: "BIGQUERY",
    label: "BigQuery",
    value: "BIGQUERY",
    filter: ["Data Warehouses"],
    desc: "BigQuery is a fully-managed, serverless data warehouse offered by Google Cloud. It allows super-fast SQL queries using the processing power of Google's infrastructure, ideal for large datasets.",
    category: "S & D",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "Snowflake",
    image: Snowflake,
    type: "SNOWFLAKE",
    label: "Snowflake",
    value: "SNOWFLAKE",
    filter: ["Data Warehouses"],
    desc: "Snowflake is a cloud-based data warehousing platform that provides scalable storage and processing. It separates compute and storage, allowing for flexible resource allocation and efficient data analytics.",
    category: "S & D",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
  {
    title: "RedShift",
    image: Redshift,
    type: "REDSHIFT",
    label: "RedShift",
    value: "REDSHIFT",
    category: "S & D",
    filter: ["Data Warehouses"],
    desc: "Amazon Redshift is a fully-managed data warehouse service in the cloud. It enables fast querying and analytics on large datasets, integrating seamlessly with other AWS services for data processing.",
    pipeline: {
      full: {
        source: true,
        destination: true,
      },
      incremental: {
        source: true,
        destination: true,
      },
      cdc: {
        source: false,
        destination: true,
      },
    },
    transformation: {
      source: true,
      destination: true,
    },
    visualization: {
      source: true,
    },
  },
];
