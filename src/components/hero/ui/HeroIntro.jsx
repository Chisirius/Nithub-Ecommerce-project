import Stat from "./Stat";


function HeroIntro() {
  return (
    <div className="my-auto mx-[20px]">
      <h1 className="text-grey-900 text-center font-bold mb-[20px]">
        Fresh Farm Produce
        <span className="block text-green-600">
          Delivered to Your Door
        </span>
      </h1>

      <p className="text-grey-500 max-w-xl my-[25px]">
        Experience the best quality agricultural products directly from local farms.
        Fresh vegetables, organic fruits, and premium farming supplies all in one place.
      </p>

      <div className="flex gap-8 pt-4">
        <Stat value="1000+" label="Products" />
        <Stat value="500+" label="Farmers" />
        <Stat value="10,000+" label="Happy Customers" />
      </div>
    </div>
  );
}

export default HeroIntro;




        