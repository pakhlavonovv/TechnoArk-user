import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Companies from "@/components/companies";
import Cards from "@/components/cards_map";
import CategoriesImages from "@/components/categories_images";
import SaleCards from "@/components/sale_cards";
import AirpodsAds from "@/components/airpods_ads";
import RecentlyCards from "@/components/recently_cards";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <br /><br />
      <Companies/>
      <br /><br />
      <Cards/>
      <br />
      <CategoriesImages/>
      <br /><br />
      <SaleCards/>
      <br /><br />
      <AirpodsAds/>
      <br /><br /><br />
      <RecentlyCards/>
      <br /><br /><br />
      <Footer/>
    </div>
  );
}
