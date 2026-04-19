import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiPubailCR;

const Pubail=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Pubail;