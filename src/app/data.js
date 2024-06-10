// loginstuff
let headersList = {
  Accept: "*/*",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E",
  Prefer: "return=representation",
};

let response = await fetch("https://dmyzwmcuzrezoxseqnfh.supabase.co/rest/v1/tivoli_ny", {
  method: "GET",
  headers: headersList,
});

const now = new Date();
const filteredData = (await response.json()).filter((item) => new Date(item.from) >= now);

// Sort the filtered data by the from date
filteredData.sort((a, b) => new Date(a.from) - new Date(b.from));

let responseKoncepter = await fetch("https://dmyzwmcuzrezoxseqnfh.supabase.co/rest/v1/Koncepter", {
  method: "GET",
  headers: headersList,
});
const sortedKonceptData = (await responseKoncepter.json()).sort((a, b) => a.Sorting - b.Sorting);

export const programdata = filteredData;
export const konceptdata = await sortedKonceptData;
