import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiGazipurSadarGR;

const GazipurSadar=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default GazipurSadar;