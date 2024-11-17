import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Companies from "@/components/companies";
import Cards from "@/components/cards_map";
import CategoriesImages from "@/components/categories_images";
import SaleCards from "@/components/sale_cards";

export default function Home() {
  return (
    <div>
      <Header/>
      <br />
      <Carousel/>
      <br /><br /><br /><br />
      <Companies/>
      <br /><br /><br />
      <Cards/>
      <br /><br />
      <CategoriesImages/>
      <br /><br />
      <SaleCards/>
    </div>
  );
}
