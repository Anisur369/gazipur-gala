import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const kaliakairCollection = connect("kaliakair");

export async function GET(Request) {
  const result = await kaliakairCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const kaliakair = await request.json();
  await kaliakairCollection.insertOne(kaliakair);
  revalidatePath("/kaliakair");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
