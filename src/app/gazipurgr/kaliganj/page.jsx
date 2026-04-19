import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiKaliganjGR;

const Kaliganj=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Kaliganj;