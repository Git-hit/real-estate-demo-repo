export async function handler(event) {
    const VERIFY_TOKEN = "demo-admin";
  
    // 1️⃣ Verification Step (For Meta API)
    if (event.httpMethod === "GET") {
      const params = new URLSearchParams(event.queryStringParameters);
      const mode = params.get("hub.mode");
      const token = params.get("hub.verify_token");
      const challenge = params.get("hub.challenge");
  
      if (mode === "subscribe" && token === VERIFY_TOKEN) {
        console.log("Webhook verified!");
        return {
          statusCode: 200,
          body: challenge
        };
      } else {
        return { statusCode: 403, body: "Verification failed" };
      }
    }
  
    // 2️⃣ Webhook Listener for Instagram Media
    if (event.httpMethod === "POST") {
      const body = JSON.parse(event.body);
      console.log("Instagram Webhook Data:", JSON.stringify(body, null, 2));
  
      if (body.entry) {
        body.entry.forEach((entry) => {
          entry.changes?.forEach((change) => {
            if (change.field === "media") {
              console.log("New Instagram Post:", change.value);
              // Here, you can trigger a process to update the website with the new reel.
            }
          });
        });
      }
  
      return { statusCode: 200, body: "Webhook received" };
    }
  
    return { statusCode: 405, body: "Method Not Allowed" };
  }  