// export function PhoneHeader(){
//     return(
//         <header>
//                 <span className="icons">
//                   <b>09.20</b>
//                 </span>
//                 <span className="design"></span>
//                 <span className="icons">
//                   <i className="fa-solid fa-wifi"></i>
//                   <i className="fa-solid fa-signal fa-sm"></i>
//                   <i className="fa-solid fa-battery-half fa-sm"></i>
//                 </span>
//             </header>
//     )
// }


            

import { Bell, ShoppingCart } from "lucide-react";

export function PhoneHeader() {
  return (
    <header className="phone-header">
      <div className="phone-header-logo">🌿 FarmFresh</div>
      <div className="phone-header-icons">
        <div className="relative">
          <Bell size={12} />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
        </div>
        <ShoppingCart size={12} />
      </div>
    </header>
  );
}
