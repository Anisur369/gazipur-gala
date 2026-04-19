import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiKapashiaGR;

const Kapashia=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Kapashia;