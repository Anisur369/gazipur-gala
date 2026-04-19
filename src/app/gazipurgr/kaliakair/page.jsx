import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiKaliakairGR;

const Kaliakair=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Kaliakair;