
// loginstuff
let headersList = {
  Accept: "*/*",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E",
  Prefer: "return=representation",
};

let response = await fetch("https://dmyzwmcuzrezoxseqnfh.supabase.co/rest/v1/Program?select=*", {
  method: "GET",
  headers: headersList,
});

export const data = await response.json();
