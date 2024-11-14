import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Companies from "@/components/companies";
import Cards from "@/components/cards_map";

export default function Home() {
  return (
    <div>
      <Header/>
      <br /><br /><br />
      <Carousel/>
      <br /><br /><br /><br />
      <Companies/>
      <br /><br /><br />
      <Cards/>
    </div>
  );
}
