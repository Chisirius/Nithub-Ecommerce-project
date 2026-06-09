import "./hero.css";
import {BottomNav} from "./BottomNav";
import {Features} from "./Features";
import {FeaturedProducts} from "./FeaturedProducts";
import {ComingSoon} from "./ComingSoon";
import {CartPreview} from "./ui/CartPreview";
import {CategoryPreview} from "./ui/CategoryPreview";
import {ProductCard} from "./ui/ProductCard";
import {SearchBox} from "./ui/SearchBox";
import {PhoneHeader} from "./ui/PhoneHeader";
import {ProductPreview} from "./ui/ProductPreview";
import {SellerPreview} from "./ui/SellerPreview";
import HeroIntro from "./HeroIntro";
import LaptopDesign from "./LaptopDesign";

function Hero() {
  return (
    <>
      {/* ── Hero section ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-6 lg:px-12 py-14">
        {/* ambient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* left: text */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <HeroIntro />
          </div>

          {/* right: phones on desktop, laptop on mobile */}
          <div className="flex-1 flex items-center justify-center w-full">

            {/* ── Desktop: 3 overlapping phones ── */}
            <div className="hidden lg:block">
              <div className="b">

                {/* phone 1 — shop */}
                <div className="phone">
                  <div className="phone1">
                    <PhoneHeader />
                    <SearchBox />
                    <CategoryPreview />
                    <ProductCard />
                    <BottomNav activeTab="shop" />
                  </div>
                </div>

                {/* phone 2 — product detail */}
                <div className="phone phonee">
                  <div className="phone2">
                    <PhoneHeader />
                    <div className="mages">
                      <ProductPreview />
                      <SellerPreview />
                      <button className="order">🛒 Order Now</button>
                      <BottomNav activeTab="shop" />
                    </div>
                  </div>
                </div>

                {/* phone 3 — cart */}
                <div className="phone phonee">
                  <div className="phone3">
                    <div className="cart-header">
                      <p style={{ fontSize: 10, fontWeight: 700 }} className="text-gray-800">My Cart</p>
                      <span className="bg-green-600 text-white rounded-full px-2" style={{ fontSize: 7 }}>3 items</span>
                    </div>
                    <CartPreview />
                    <BottomNav activeTab="shop" />
                  </div>
                </div>

              </div>
            </div>

            {/* ── Mobile: laptop mockup ── */}
            <div className="lg:hidden w-full max-w-sm">
              <LaptopDesign />
            </div>

          </div>
        </div>
      </section>

      <Features />
      <FeaturedProducts />
      <ComingSoon />
    </>
  );
}

export default Hero;
