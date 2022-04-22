module.exports = {
  title: "gamue.de: Blog von Johannes Ganzenmüller",
  description: "Auf diesem Blog dreht sich alles rund um die Themen Reisen, Fotografie und Technik.",
  url: "https://gamue.de",
  author:{
    name: "Johannes Ganzenmüller",
    email: "johannes@gamue.de"
  },
  buildTime: new Date(),
  og_image: "assets/images/j_logo.jpg",
  accounts:{
    instagram: "https://www.instagram.com/johannes.ganzenmueller/",
    instagram_people: "https://www.instagram.com/gamue16/"
  },
  environment: process.env.ENV_PROFILE?.trim() || "dev"
};
