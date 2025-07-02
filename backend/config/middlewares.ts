export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  // 'strapi::cors',
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:3000",
        "https://le-club-des-familles-91ce.vercel.app/",
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: "*",
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
