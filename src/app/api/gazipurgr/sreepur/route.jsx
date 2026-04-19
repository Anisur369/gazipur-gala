import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect2";
const sreepurCollection = connect("sreepur");

export async function GET(Request) {
  const result = await sreepurCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const sreepur = await request.json();
  await sreepurCollection.insertOne(sreepur);
  revalidatePath("/sreepur");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
