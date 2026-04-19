import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect2";
const kaliganjCollection = connect("kaliganj");

export async function GET(Request) {
  const result = await kaliganjCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const kaliganj = await request.json();
  await kaliganjCollection.insertOne(kaliganj);
  revalidatePath("/kaliganj");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
