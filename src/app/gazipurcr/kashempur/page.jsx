import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiKashempurCR;

const Kashempur=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Kashempur;