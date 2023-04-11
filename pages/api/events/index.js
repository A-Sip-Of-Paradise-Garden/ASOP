import { createEvent } from "@/lib/mongodb/events";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const event = req.body;
      const { message, error } = await createEvent(event);
      if (error) throw new Error(error);
      return res.status(200).json({ message });
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  } 

  res.setHeader('Allow', ['POST']);
  res.status(425).end(`Method ${req.method} is not allowed.`);
}

export default handler;