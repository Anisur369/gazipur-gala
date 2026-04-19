import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiPubailGR;

const Pubail=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Pubail;