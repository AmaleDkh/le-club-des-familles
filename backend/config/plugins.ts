// export default () => ({});

// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: "nodemailer",
//       providerOptions: {
//         host: "gmail.com",
//         port: 587,
//         secure: false,
//         auth: {
//           user: env("GMAIL_USERNAME"),
//           pass: env("GMAIL_PASSWORD"),
//         },

//         tls: {
//           rejectUnauthorized: false,
//         },
//       },
//       settings: {
//         defaultFrom: env("GMAIL_USERNAME"),
//         defaultReplyTo: env("GMAIL_USERNAME"),
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: "gmail",
        auth: {
          user: env("GMAIL_USER"),
          pass: env("GMAIL_PASS"),
        },
      },
      settings: {
        defaultFrom: env("GMAIL_USER"),
        defaultReplyTo: env("GMAIL_USER"),
      },
    },
  },
});
