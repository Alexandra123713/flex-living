import { Navbar } from "../../components/Nav";
import { WeRent } from "../../components/WeRent";
import { Search } from "../../components/SearchBar";
import { TheFuture } from "../../components/TheFuture";
import { TitleSubtitle } from "../../components/TitleSubtitle";
import { FeaturesContainer } from "../../components/Features/FeaturesContainer";
import { Locations } from "../../components/Locations/Locations";
import { Bespoke } from "../../components/Bespoke";
import { PartnershipContainer } from "../../components/Partnerships/PartnershipContainer";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { BcgImage } from "./styles";
import { Blog } from "../../components/Blog/Blog";
import { Button } from "../../components/Button";
import { Links } from "../../components/Links/Links";
import { Dictum } from "../../components/Dictum/Dictum";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <BcgImage>
        <WeRent />
        <Search />
      </BcgImage>
      <TheFuture />
      <TitleSubtitle
        text1="Id aliquam molestie nunc quis turpis imperdiet quis"
        text2="Euismod condimentum tempus quis nibh. Accumsan imperdiet non vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam enim adipiscing interdum purus."
      />
      <FeaturesContainer />
      <Locations />
      <Bespoke />
      <TitleSubtitle
        text1="Corporate Partnerships"
        text2="We work with 100+  companies to meet accommodation needs in London. Offer a dedicated
        booking manager that can help to find properties for your needs."
      />
      <PartnershipContainer />
      <TitleSubtitle
        text1="What our partners think"
        text2="See what our partners say about us"
      />
      <Testimonials />
      <Blog />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "140px",
        }}
      >
        <Button text="Read more" />
      </div>
      <Links />
      <Dictum />
      <Footer />
    </div>
  );
};
