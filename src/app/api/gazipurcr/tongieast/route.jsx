import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const tongieastCollection = connect("tongieast");

export async function GET(Request) {
  const result = await tongieastCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const tongieast = await request.json();
  await tongieastCollection.insertOne(tongieast);
  revalidatePath("/tongieast");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
