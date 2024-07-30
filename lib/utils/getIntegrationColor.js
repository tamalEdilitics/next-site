const getIntegrationColor = (db_type, db_subtype) => {
  if (db_subtype === "GOOGLE_ANALYTICS_360") {
    return "hover:bg-[#4f8ff56e]";
  }

  const colorClasses = {
    FIREBASEANALYTICS: "hover:bg-[#ffcb303b]",
    GOOGLE_ANALYTICS:
      db_subtype !== "GOOGLE_ANALYTICS_360" ? "hover:bg-[#ffcb303b]" : null,
    POSTGRES: "hover:bg-[#3367916c]",
    STRIPE: "hover:bg-[#635bff56]",
    MIXPANEL: "hover:bg-[#7755ff62]",
    MYSQL: "hover:bg-[#e87a125e]",
    SQLSERVER: "hover:bg-[#7b21205d]",
    BIGQUERY: "hover:bg-[#3086ff53]",
    REDSHIFT: "hover:bg-[#4a8ac65d]",
    SNOWFLAKE: "hover:bg-[#29b5e856]",
    MONGODB: "hover:bg-[#0fab505e]",
    SHEETS: "hover:bg-[#20a56551]",
    GCS: "hover:bg-[#4386fb4a]",
    GDRIVE: "hover:bg-[#2683fc52]",
    SLACK: "hover:bg-[#35c4ef62]",
    RAZORPAY: "hover:bg-[#3396ff4f]",
    SHOPIFY: "hover:bg-[#64914b6c]",
    EXCEL: "hover:bg-[#21a36653]",
    CSV: "hover:bg-[#1fb35a57]",
    AVRO: "hover:bg-[#15cdfb48]",
    JIRA_CLOUD: "hover:bg-[#2583ff4e]",
    REDIS: "hover:bg-[#dc382c4b]",
    PICKLE: "hover:bg-[#a5df4151]",
    SENDGRID: "hover:bg-[#53abe657]",
    PARQUET: "hover:bg-[#52a8ee6d]",
    SQLITE: "hover:bg-[#3a9cd96a]",
    REST_API: "hover:bg-[#12a2e05d]",
    GOOGLE_SEARCH_CONSOLE: "hover:bg-[#f6f9fe67]",
  };

  return colorClasses[db_type] || null;
};

export const getDefaultColor = (db_type, db_subtype) => {
  if (db_subtype === "GOOGLE_ANALYTICS_360") {
    return "bg-[#4f8ff56e]";
  }

  const colorClasses = {
    FIREBASEANALYTICS: "bg-[#ffcb303b]",
    FEATHER: "bg-[#dc382c33]",
    GOOGLE_ANALYTICS:
      db_subtype !== "GOOGLE_ANALYTICS_360" ? "bg-[#ffcb303b]" : null,
    POSTGRES: "bg-[#3367916c]",
    STRIPE: "bg-[#635bff56]",
    MIXPANEL: "bg-[#7755ff62]",
    MYSQL: "bg-[#e87a125e]",
    SQLSERVER: "bg-[#7b21205d]",
    BIGQUERY: "bg-[#3086ff53]",
    REDSHIFT: "bg-[#4a8ac65d]",
    SNOWFLAKE: "bg-[#29b5e856]",
    MONGODB: "bg-[#0fab505e]",
    SHEETS: "bg-[#20a56551]",
    GCS: "bg-[#4386fb4a]",
    GDRIVE: "bg-[#2683fc52]",
    SLACK: "bg-[#35c4ef62]",
    RAZORPAY: "bg-[#3396ff4f]",
    SHOPIFY: "bg-[#64914b6c]",
    EXCEL: "bg-[#21a36653]",
    CSV: "bg-[#1fb35a57]",
    AVRO: "bg-[#15cdfb48]",
    JIRA_CLOUD: "bg-[#2583ff4e]",
    REDIS: "bg-[#dc382c4b]",
    PICKLE: "bg-[#a5df4151]",
    SENDGRID: "bg-[#53abe657]",
    PARQUET: "bg-[#52a8ee6d]",
    SQLITE: "bg-[#3a9cd96a]",
    REST_API: "bg-[#12a2e05d]",
    GOOGLE_SEARCH_CONSOLE: "bg-[#f6f9fe67]",
  };

  return colorClasses[db_type] || null;
};

export default getIntegrationColor;
