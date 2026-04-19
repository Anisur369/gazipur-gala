import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiTongiEastGR;

const TongiEast=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default TongiEast;