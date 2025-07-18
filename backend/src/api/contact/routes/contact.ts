module.exports = {
  routes: [
    {
      method: "GET",
      path: "/contact/send",
      handler: "contact.send",
      config: {
        auth: false,
      },
    },
    {
      method: " POST",
      path: "/contact/send",
      handler: "contact.send",
      config: {
        auth: false,
      },
    },
  ],
};
