import nc from "next-connect";
import Item from "../../models/Item";
import db from "../../utils/db"
import items from "../../utils/items";


const handler = nc();

handler.get(async (req, res)=> {
await db.connect();
await Item.deleteMany();
await Item.insertMany(items);   
await db.disconnect();  
res.send({message: 'successful '});
});


export default handler; 
