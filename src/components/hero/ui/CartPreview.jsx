// export function CartPreview(){

//     const cartItems= [
//         {   
//             id: 1,
//             img : "/tomato.jpeg",
//             name: "Derica Tomato",
//             quantity: "1kg",
//             price: "7$"
//         },
//         {   
//             id: 2,
//             img : "/irish potatoe.jpeg",
//             name: "Irish Potatoe",
//             quantity: "7kg",
//             price: "15$"
//         },
//         {   
//             id: 3,
//             img : "/rice grain.jpeg",
//             name: "Rice",
//             quantity: "25kg",
//             price: "35$"
//         },
//     ]

//     return (
//         <div>

//             {
//                 cartItems.map(item =>(
//                     <div className="items" key={item.id}>
                       
//                        <div>
//                             <img
//                                src={item.img}
//                                alt={item.name}
//                                className="cart-img"
//                             />  
//                        </div> 
                       
//                        <div className="cart-desc">
//                        <p className="text-[10px]">{item.name}</p>
//                        <p className="text-[9px] text-green-600">{item.quantity}</p>
//                        <p className="text-[9px] text-gray-600">{item.price}</p>
//                        <button className="text-[9px] bg-green-600 text-white px-2 py-0.5 rounded-full w-fit">delete item</button>
//                        </div>

//                     </div>
//                 ))
//             }
            
//       </div>
//     )

// }


import {Trash2} from "lucide-react";

const cartItems = [
  { id: 1, emoji: "🍅", name: "Derica Tomato", quantity: "1 kg", price: "₦7.00" },
  { id: 2, emoji: "🥔", name: "Irish Potato", quantity: "7 kg", price: "₦15.00" },
  { id: 3, emoji: "🌾", name: "Basmati Rice", quantity: "25 kg", price: "₦35.00" },
];

export function CartPreview() {
  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div className="items" key={item.id}>
          <div
            className=" flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl  "
            style={{ fontSize: 20, padding: 20, marginRight:15, marginLeft:20}}
          >
            {item.emoji}
          </div>

          <div className="cart-desc flex-1">
            <p className="text-gray-800" style={{ fontSize: 8, fontWeight: 600 }}>{item.name}</p>
            <p className="text-green-600" style={{ fontSize: 8 }}>{item.quantity}</p>
            <p className="text-green-700" style={{ fontSize: 9, fontWeight: 700 }}>{item.price}</p>
          </div>

          <button className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
            <Trash2 size={9} className="text-red-400" />
          </button>
        </div>
      ))}

      {/* total row */}
      <div className="cart-total">
        <div className="flex justify-between items-center mb-2">
          <span style={{ fontSize: 8 }} className="text-gray-500">Total</span>
          <span style={{ fontSize: 11, fontWeight: 700 }} className="text-green-700">₦57.00</span>
        </div>
        <button
          className="w-full bg-green-600 text-white rounded-xl flex items-center justify-center gap-1"
          style={{ fontSize: 8, padding: "6px 0" }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
