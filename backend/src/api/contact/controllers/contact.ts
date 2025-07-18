"use strict";

module.exports = {
  async send(ctx) {
    const { to, subject, message, emailaddress } = ctx.request.body;

    if (!to || !subject || !message || !emailaddress) {
      return ctx.badRequest("Tous les champs sont obligatoires");
    }

    try {
      await strapi.plugin("email").service("email").send({
        to: "amdkhissi@gmail.com",
        from: emailaddress,
        subject,
        text: message,
      });

      ctx.send({ message: "Email envoyé avec succès" });
    } catch (err) {
      ctx.throw(500, "Erreur lors de l’envoi de l’email");
    }
  },
};
