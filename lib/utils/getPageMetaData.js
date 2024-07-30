import siteConfig from "../static/siteConfig";

const getPageMetaData = (page) => {
  return {
    title: siteConfig[page].metaTitle,
    metadataBase: new URL(siteConfig[page].url),
    description: siteConfig[page].metaDescription,
    keywords: siteConfig[page].keywords,
    alternates: {
      canonical: siteConfig[page].canonical,
    },
    openGraph: {
      url: siteConfig[page].url,
      title: siteConfig[page].ogTitle,
      description: siteConfig[page].ogDescription,
      siteName: siteConfig[page].ogTitle,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://storage.googleapis.com/images-for-documentation-website/EDILITICS%20WEBSITE%20-%20CONTENT/OG.png",
          width: 800,
          height: 600,
          alt: "Edilitics Logo",
        },
        {
          url: "https://storage.googleapis.com/images-for-documentation-website/EDILITICS%20WEBSITE%20-%20CONTENT/OG.png",
          width: 1800,
          height: 1600,
          alt: "Edilitics Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        "https://storage.googleapis.com/images-for-documentation-website/EDILITICS%20WEBSITE%20-%20CONTENT/OG.png",
      ],
      title: siteConfig[page].ogTitle,
      description: siteConfig[page].ogDescription,
      creator: "@edilitics",
    },
    icons: {
      apple: [
        { url: "/apple/apple-touch-icon.png" },
        {
          url: "/apple/apple-touch-icon-57x57.png",
          sizes: "57x57",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-114x114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          url: "/apple/apple-touch-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "57x57",
          url: "/apple/apple-touch-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "60x60",
          url: "/apple/apple-touch-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "72x72",
          url: "/apple/apple-touch-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "76x76",
          url: "/apple/apple-touch-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "114x114",
          url: "/apple/apple-touch-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "120x120",
          url: "/apple/apple-touch-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "144x144",
          url: "/apple/apple-touch-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "152x152",
          url: "/apple/apple-touch-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "180x180",
          url: "/apple/apple-touch-icon-180x180.png",
        },
      ],
    },
  };
};

export default getPageMetaData;
