export const bundles = {
  "Free Forever": {
    name: "Free Forever",
    price: 0,
    soloPrice: 0,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    description: "Transform data into compelling narratives.",
    useCase: (
      <>
        Experience essential analytics <br /> features at no cost.
      </>
    ),
    useCaseSolo: (
      <>
        Experience essential analytics <br /> features at no cost.
      </>
    ),
    key: "Storyteller's Suite",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Transformations",
      "Unlimited Visualizations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },

  "Storyteller's Suite": {
    name: "Storyteller's Suite",
    price: 50,
    soloPrice: 30,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    hiddenModules: ["Replicate"],
    description: "Transform data into compelling narratives.",
    useCase: (
      <>
        Perfect for data analysts <br /> and storytellers.
      </>
    ),
    useCaseSolo: (
      <>
        Perfect for individual data analysts <br /> and storytellers
      </>
    ),
    key: "Storyteller's Suite",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Transformations",
      "Unlimited Visualizations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },

  "Data Workflow Pro": {
    name: "Data Workflow Pro",
    price: 60,
    soloPrice: 40,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    hiddenModules: ["Visualize"],
    description: "Optimize data workflows for robust data handling.",
    useCase: (
      <>
        Ideal for data engineers <br /> and analysts
      </>
    ),
    useCaseSolo: (
      <>
        Ideal for solo data engineers <br /> and analysts
      </>
    ),
    key: "Data Workflow Pro",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Replications",
      "Unlimited Transformations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },

  "Ultimate Analytics Suite": {
    name: "Ultimate Analytics Suite",
    price: 70,
    soloPrice: 50,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    description:
      "Comprehensive data solution for advanced insights and efficiency.",
    useCase: (
      <>
        Perfect for organizations with <br /> complex data needs.
      </>
    ),
    useCaseSolo:
      "Perfect for citizen data analysts and individuals with advanced needs",
    key: "Ultimate Analytics Suite",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Replications",
      "Unlimited Transformations",
      "Unlimited Visualizations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },
};

export const microservices = {
  "Free Forever": {
    name: "Free Forever",
    price: 0,
    soloPrice: 0,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    description: "Transform data into compelling narratives.",
    useCase: (
      <>
        Experience essential analytics <br /> features at no cost.
      </>
    ),
    useCaseSolo: (
      <>
        Experience essential analytics <br /> features at no cost.
      </>
    ),
    key: "Storyteller's Suite",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Transformations",
      "Unlimited Visualizations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },

  "Data Visualization Studio": {
    name: "Data Visualization Studio",
    price: 50,
    soloPrice: 30,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    useCase: (
      <>
        Suited for business users <br /> and analysts.
      </>
    ),
    useCaseSolo: (
      <>
        Suited for individual business users <br /> and analysts.
      </>
    ),
    hiddenModules: ["Replicate", "Transform"],
    content:
      "Ideal for individuals exploring the platform's basic functionalities.",
    key: "Data Visualization Studio",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Visualizations",
      "In App Slack & Email Notifications",
    ],
  },

  "Data Prep Studio": {
    name: "Data Prep Studio",
    price: 50,
    soloPrice: 30,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    hiddenModules: ["Visualize", "Replicate"],
    useCase: (
      <>
        Ideal for data analysts <br /> and scientists.
      </>
    ),
    useCaseSolo: (
      <>
        Ideal for solo data analysts <br /> and scientists.
      </>
    ),
    content:
      "Ideal for individuals exploring the platform's basic functionalities.",
    key: "Data Prep Studio",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Transformations",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },

  "Data Flow Engine": {
    name: "Data Flow Engine",
    price: 50,
    soloPrice: 30,
    modules: ["Integrate", "Replicate", "Transform", "Visualize"],
    hiddenModules: ["Visualize", "Transform"],
    useCase: (
      <>
        For data analysts and teams <br />
        needing data consistency.
      </>
    ),
    useCaseSolo: "For solo data analysts needing data consistency.",
    content:
      "Ideal for individuals exploring the platform's basic functionalities.",
    key: "Data Flow Engine",
    planIncludes: [
      "Unlimited Integrations",
      "Unlimited Replications",
      "120 Mins of Compute (renews monthly)",
      "In App Slack & Email Notifications",
    ],
  },
};
