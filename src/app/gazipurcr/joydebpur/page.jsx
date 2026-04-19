import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiJoydebpurCR;

const Joydebpur=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Joydebpur;