import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiTongiEastCR;

const TongiEast=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default TongiEast;