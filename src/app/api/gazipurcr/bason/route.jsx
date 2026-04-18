import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const basonCollection = connect("bason");

export async function GET(Request) {
  const result = await basonCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const bason = await request.json();
  await basonCollection.insertOne(bason);
  revalidatePath("/bason");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
