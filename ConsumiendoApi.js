const url =
  "https://noticias-cambio-climatico.p.rapidapi.com/noticias/guardian";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bef999889fmshe5187ac0f3ee08ap1dba42jsn1de5d60363e4",
    "x-rapidapi-host": "noticias-cambio-climatico.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((res) => {
    console.log("Status:", res.status);
    console.log("Headers:", res.headers);
    return res.text();
  })
  .then((body) => {
    console.log(body); // Inspeccionar la respuesta completa
  })
  .catch((error) => console.error("Error:", error));
