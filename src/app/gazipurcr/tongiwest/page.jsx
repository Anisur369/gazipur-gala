import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiTongiWestCR;

const TongiWeast=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default TongiWeast;