import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiKaliganjCR;

const Kaliganj=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Kaliganj;