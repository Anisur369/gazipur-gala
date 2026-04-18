import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect";
const joydebpurCollection = connect("joydebpur");


export async function GET(Request) {
  const result = await joydebpurCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const joydebpur = await request.json();
  await joydebpurCollection.insertOne(joydebpur);
  revalidatePath("/joydebpur");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
