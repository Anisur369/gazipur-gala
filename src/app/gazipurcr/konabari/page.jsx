import GazipurCR from "@/components/gazipur/GazipurCR";
const apiURL=process.env.apiKonabariCR;

const Konabari=()=>{
  return <GazipurCR apiURL={apiURL}/>
}

export default Konabari;