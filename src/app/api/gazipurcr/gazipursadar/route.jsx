import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const gazipursadarCollection = connect("gazipursadar");

export async function GET(Request) {
  const result = await gazipursadarCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const gazipursadar = await request.json();
  await gazipursadarCollection.insertOne(gazipursadar);
  revalidatePath("/gazipursadar");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
