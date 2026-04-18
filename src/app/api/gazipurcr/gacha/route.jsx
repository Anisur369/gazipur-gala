import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const gachaCollection = connect("gacha");

export async function GET(Request) {
  const result = await gachaCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const gacha = await request.json();
  await gachaCollection.insertOne(gacha);
  revalidatePath("/gacha");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
