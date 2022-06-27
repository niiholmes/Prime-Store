import nc from "next-connect";
import Item from "../../../models/Item";
import db from "../../../utils/db"

const handler = nc();

handler.get(async (req, res)=> {
await db.connect();
await db.disconnect();
const items = await Item.find({});
res.send(items);
});


export default handler;

