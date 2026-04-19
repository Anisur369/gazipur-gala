import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiKashempurGR;

const Kashempur=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Kashempur;