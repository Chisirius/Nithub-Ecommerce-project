// import Stat from "./ui/Stat";

// function HeroIntro() {
//   return (
//     <div className="my-auto mx-[20px]">
//       <h1 className="text-grey-900 text-center font-bold mb-[20px]">
//         Fresh Farm Produce
//         <span className="block text-green-600">
//           Delivered to Your Door
//         </span>
//       </h1>

//       <p className="text-grey-500 max-w-xl my-[25px]">
//         Experience the best quality agricultural products directly from local farms.
//         Fresh vegetables, organic fruits, and premium farming supplies all in one place.
//       </p>

//       <div className="flex gap-8 pt-4">
//         <Stat value="1000+" label="Products" />
//         <Stat value="500+" label="Farmers" />
//         <Stat value="10,000+" label="Happy Customers" />
//       </div>
//     </div>
//   );
// }

// export default HeroIntro;


import Stat from "./ui/Stat";

export default function HeroIntro() {
  return (
    <div className="my-auto mx-5 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
      <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 rounded-full px-3 py-1 mb-4" style={{ fontSize: 11, fontWeight: 600 }}>
        🌿 Farm-to-Door Delivery
      </span>

      <h1 className="text-gray-900 mb-4" style={{ lineHeight: 1.25 }}>
        Fresh Farm Produce
        <span className="block text-green-600">Delivered to Your Door</span>
      </h1>

      <p className="text-gray-500 max-w-sm my-5" style={{ fontSize: 13, lineHeight: 1.6 }}>
        Experience the best quality agricultural products directly from local farms.
        Fresh vegetables, organic fruits, and premium farming supplies — all in one place.
      </p>

      <div className="flex gap-3 mb-8">
        <button className="bg-green-600 text-white rounded-full px-6 py-2.5 shadow-lg" style={{ fontSize: 13, fontWeight: 600 }}>
          Shop Now
        </button>
        <button className="border border-green-200 text-green-700 rounded-full px-6 py-2.5" style={{ fontSize: 13, fontWeight: 600 }}>
          Learn More
        </button>
      </div>

      <div className="flex gap-6 pt-2">
        <Stat value="1,000+" label="Products" />
        <div className="w-px bg-gray-200" />
        <Stat value="500+" label="Farmers" />
        <div className="w-px bg-gray-200" />
        <Stat value="10K+" label="Customers" />
      </div>
    </div>
  );
}
