const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Get homepage content
export const fetchHomepageContent = async () => {
  try {
    const response = await fetch(`${apiUrl}/homepage`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};

// Get logo
export const fetchLogo = async () => {
  try {
    const response = await fetch(`${apiUrl}/logo`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};
