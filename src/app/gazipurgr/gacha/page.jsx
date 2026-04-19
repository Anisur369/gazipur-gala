import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiGachaGR;

const Gacha=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Gacha;