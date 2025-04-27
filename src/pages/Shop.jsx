import Popular from "../components/popular/Popular";
import Hero from "../components/hero/Hero";
import Offers from "../components/offers/offers";
import Newcollections from "../components/new collections/Newcollections";
import Newsletter from "../components/newsletter/Newsletter";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter />
    </div>
  );
}

export default Shop;
