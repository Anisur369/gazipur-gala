import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiGachaCR;

const Gacha=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Gacha;