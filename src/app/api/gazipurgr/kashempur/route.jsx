import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const kashempurCollection = connect("kashempur2");

export async function GET(Request) {
  const result = await kashempurCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const kashempur = await request.json();
  await kashempurCollection.insertOne(kashempur);
  revalidatePath("/kashempur");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
