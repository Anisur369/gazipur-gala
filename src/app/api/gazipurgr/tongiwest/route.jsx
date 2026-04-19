import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect2";
const tongiwestCollection = connect("tongiwest");

export async function GET(Request) {
  const result = await tongiwestCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const tongiwest = await request.json();
  await tongiwestCollection.insertOne(tongiwest);
  revalidatePath("/tongiwest");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
