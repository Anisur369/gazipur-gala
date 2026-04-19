import GazipurGR from "@/components/gazipur/GazipurGR";
const apiURL=process.env.apiKonabariGR;

const Konabari=()=>{
  return <GazipurGR apiURL={apiURL}/>
}

export default Konabari;