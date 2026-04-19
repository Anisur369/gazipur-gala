import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const kapashiaCollection = connect("kapashia2");

export async function GET(Request) {
  const result = await kapashiaCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const kapashia = await request.json();
  await kapashiaCollection.insertOne(kapashia);
  revalidatePath("/kapashia");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
