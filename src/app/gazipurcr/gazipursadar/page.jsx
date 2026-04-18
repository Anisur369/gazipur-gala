import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiGazipurSadarCR;

const GazipurSadar=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default GazipurSadar;