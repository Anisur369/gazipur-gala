import { revalidatePath } from "next/cache";
import { connect } from "../lib/dbConnect";
const allCaseCollection = connect("allcase");

export async function GET(Request) {
  console.log("GET request received at /api/allcases");
  const result = await allCaseCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const allcase = await request.json();
  await allCaseCollection.insertOne(allcase);
  revalidatePath("/allcases");
  return Response.json({ 
    status:200,
    message: 'Case added successfully' 
  });
  
  // if(!allcase.caseNumber && typeof allcase.caseNumber !== 'string') {
  //   return Response.json({ 
  //     status:400,
  //     message: 'Case number is required' });
  // }
  // const feedbackdata = await feedbackCollection.find().toArray();

  // const newFeedback = {
  //   userid: feedbackdata.length > 0 ? feedbackdata[feedbackdata.length - 1].userid + 1 : 1,
  //   date:new Date().toISOString(),
  //   message:message
  // }
  // await feedbackCollection.insertOne(newFeedback);
  // revalidatePath("/feedback");

  // return Response.json({ 
  //   status:200,
  //   data: newFeedback 
  // });
}
