export async function sendData(url, body, httpVerb) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: httpVerb,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
    return null;
  }
}
