const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const airTableToken = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;
const airTableId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const airTableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;
const airTableBabyBadgesName =
  process.env.NEXT_PUBLIC_AIRTABLE_BABY_BADGES_BASE_NAME;
const airTableChildrenBadgesName =
  process.env.NEXT_PUBLIC_AIRTABLE_CHILDREN_BADGES_BASE_NAME;
const airTableAdultBadgesName =
  process.env.NEXT_PUBLIC_AIRTABLE_ADULT_BADGES_BASE_NAME;
const airTableValueBadgesName =
  process.env.NEXT_PUBLIC_AIRTABLE_VALUE_BADGES_BASE_NAME;

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

// Get Airtable data
export const fetchAirtableData = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${airTableId}/${airTableName}`,
      {
        headers: {
          Authorization: `Bearer ${airTableToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des données");
    }

    const data = await response.json();

    return data.records;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    throw error;
  }
};

// Get Airtable baby badges data
export const fetchAirtableBabyBadgesData = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${airTableId}/${airTableBabyBadgesName}`,
      {
        headers: {
          Authorization: `Bearer ${airTableToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des données");
    }

    const data = await response.json();

    return data.records;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    throw error;
  }
};

// Get Airtable children badges data
export const fetchAirtableChildrenBadgesData = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${airTableId}/${airTableChildrenBadgesName}`,
      {
        headers: {
          Authorization: `Bearer ${airTableToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des données");
    }

    const data = await response.json();

    return data.records;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    throw error;
  }
};

// Get Airtable adult badges data
export const fetchAirtableAdultBadgesData = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${airTableId}/${airTableAdultBadgesName}`,
      {
        headers: {
          Authorization: `Bearer ${airTableToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des données");
    }

    const data = await response.json();

    return data.records;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    throw error;
  }
};

// Get Airtable value badges data
export const fetchAirtableValueBadgesData = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${airTableId}/${airTableValueBadgesName}`,
      {
        headers: {
          Authorization: `Bearer ${airTableToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des données");
    }

    const data = await response.json();

    return data.records;
  } catch (error) {
    console.error("Erreur lors de la récupération des données", error);
    throw error;
  }
};
