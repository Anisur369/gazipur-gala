import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiBasonGR;

const Bason=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Bason;