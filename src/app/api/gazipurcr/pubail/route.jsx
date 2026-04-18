import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const pubailCollection = connect("pubail");

export async function GET(Request) {
  const result = await pubailCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const pubail = await request.json();
  await pubailCollection.insertOne(pubail);
  revalidatePath("/pubail");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
