import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiKaliakairCR;

const Kaliakair=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Kaliakair;