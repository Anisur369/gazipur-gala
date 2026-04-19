import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiTongiWestGR;

const TongiWeast=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default TongiWeast;