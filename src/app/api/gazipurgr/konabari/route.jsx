import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect2";
const konabariCollection = connect("konabari");

export async function GET(Request) {
  const result = await konabariCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const konabari = await request.json();
  await konabariCollection.insertOne(konabari);
  revalidatePath("/konabari");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
}
