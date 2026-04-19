import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiBasonCR;

const Bason=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Bason;