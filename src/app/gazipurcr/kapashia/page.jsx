import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiKapashiaCR;

const Kapashia=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Kapashia;