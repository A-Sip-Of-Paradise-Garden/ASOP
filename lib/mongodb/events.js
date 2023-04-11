import clientPromise from ".";

let client;
let db;
let events;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    events = await db.collection("events");
  } catch (error) {
    throw new Error("Failed to stablish connection to database");
  }
}

(async () => {
  await init();
})();

// EVENTS

export async function getEvents() {
  try {
    if (!events) await init();
    const result = await events.find({}).toArray();
    return { events: result };
  } catch (error) {
    return { error: "Failed to fetch events!" };
  }
}

export async function createEvent(event) {
  try {
    if (!events) await init();
    const result = await events.insertOne(event);
    return { message: `Successfully inserted document with the _id: ${result.insertedId}` };
  } catch (error) {
    return { error: "Could not create event!" };
  }
}
