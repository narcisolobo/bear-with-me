import dbConnect from '@/lib/db-connect';
import Contact from '@/models/contact-model';

async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
      break;
    case 'POST':
      try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
    default:
      const err = { message: `Method ${method} not supported.` };
      console.error(err);
      res.status(400).json(err);
      break;
  }
}

export default handler;
