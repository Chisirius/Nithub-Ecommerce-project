
// export function ProductCard(){
//     const option =[
//         {
//             id: 1,
//             img: "/vegetables.jpeg",
//             name: "Fresh Vegetables",
//             price: "$5",
//         },
//         {
//             id: 2,
//             img: "/tomato.jpeg",
//             name: "Tomatoes",
//             price: "$7",
//         },
//         {
//             id: 3,
//             img: "/maize grain.jpeg",
//             name: "Corn",
//             price: "$2",
//         },
//         {   
//             id: 4,
//             img:"/rice grain.jpeg",
//             name: "Rices",
//             price: "$6",
//         },
//     ]

//     return(
//         <>
//             <div>
//                     <p className="recommended">Recommended</p>
//             </div>

            
//             <div className="recommend">
//             {
//                 option.map((item) => (
//                     <div key={item.id} className="bg-white rounded-md shadow-sm overflow-hidden">
//                         <img 
//                            src={item.img} 
//                            alt={item.name}
//                            className="w-full h-14 object-cover" 
//                         />
//                         <p> {item.name} </p>
//                         <p className="text-green-600">price: {item.price}/kg</p>
//                         <p className="text-[8px] text-gray-500">🛒 Add to cart</p>
//                     </div>
//                 ))
//             }
//         </div>
//         </>
//     )
// }


import {Star} from "lucide-react";

const products = [
  { id: 1, emoji: "🥬", name: "Spinach", price: "₦3" },
  { id: 2, emoji: "🍅", name: "Tomatoes", price: "₦7" },
  { id: 3, emoji: "🌽", name: "Corn", price: "₦2" },
  { id: 4, emoji: "🌾", name: "Rice", price: "₦6" },
];

export function ProductCard() {
  return (
    <>
      <p className="recommended">Recommended</p>
      <div className="recommend">
        {products.map((item) => (
          <div key={item.id} className="recommend-card">
            <div
              className="flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100"
              style={{ height: 54, fontSize: 28 }}
            >
              {item.emoji}
            </div>
            <div className="recommend-card-body">
              <p className="text-gray-800" style={{ fontSize: 8, fontWeight: 600 }}>
                {item.name}
              </p>
              <div className="flex items-center gap-0.5 my-0.5">
                <Star size={7} className="text-yellow-400 fill-yellow-400" />
                <span style={{ fontSize: 7 }} className="text-gray-400">4.8</span>
              </div>
              <p className="text-green-600" style={{ fontSize: 8, fontWeight: 700 }}>
                {item.price}/kg
              </p>
              <button
                className="mt-1 w-full bg-green-600 text-white rounded-full"
                style={{ fontSize: 6.5, padding: "2px 0" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
