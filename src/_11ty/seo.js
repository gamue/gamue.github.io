function toXmlDateString(date) {
  return date.toISOString().replace(/\.\d+Z$/, "+00:00");
}

module.exports = {
  title: (data) => data.title || data.site.title,
  description: (data) => data.description || data.site.description,
  author: (data) => data.site.author.name,
  date: (data) => {
      if (data.seoType !== "article") {
        return null;
      }
      return toXmlDateString(data.page.date);
    },
  type: (data) => data.seoType || "website",
  canonicalUrl: (data) => {
      if (data.page.url) {
        return data.site.url + data.page.url;
      }

      return data.site.url;
    },
  image: (data) => {
      var image = data.header?.overlay_image || data.header?.teaser || data.site.og_image;
      if(image){
        if(!image.startsWith('/')){
          image = '/' + image;
        }
        return data.site.url + image;
      }
      return null;
    },
  jsonLd: (data) => {
      const payloadPage = {
        "@type": data.seoType === "article" ? "BlogPosting" : "WebSite",
        "inLanguage": "de-DE",
        "description": data.seo.description,
        "author": {
          "@id": "https://gamue.de/#johannes"
        }
      };

      if (data.seoType === "article") {
          payloadPage.datePublished = toXmlDateString(data.page.date);
          payloadPage.dateModified = toXmlDateString(data.page.date);
          payloadPage.mainEntityOfPage = {
            "@type": "WebPage",
            "@id": data.seo.canonicalUrl,
          };
          payloadPage.headline = data.seo.title;
          payloadPage.image = {
            "@type": "ImageObject",
            url: data.seo.image
          };
          payloadPage.publisher = {
            "@id": "https://gamue.de/#organization"
          };
      } else {
          payloadPage.name = data.seo.title;
          payloadPage.primaryImageOfPage = {
            "@type": "ImageObject",
            url: data.seo.image
          };
          payloadPage.url = data.seo.canonicalUrl;
      }

      const payload = {
        "@context": "https://schema.org",
        "@graph": [
          {
          "@type": "Person",
          "@id": "https://gamue.de/#johannes",
          name: data.site.author.name,
          url: data.site.url,
          "sameAs": [
            data.site.accounts.instagram,
            data.site.accounts.instagram_people,
            "https://github.com/gamue",
            "https://www.linkedin.com/in/johannesganzenmueller/"
            ]
          },
          {
          "@type": "Organization",
          "@id": "https://gamue.de/#organization",
          "name": "gamue.de",
          "url": data.site.url,
          "logo": {
            "@type": "ImageObject",
            "url": data.site.og_image
            }
          },
          payloadPage
        ]
      };
      return JSON.stringify(payload);
    },
};
