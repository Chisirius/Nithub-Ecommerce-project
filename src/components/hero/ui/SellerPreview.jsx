// export function SellerPreview(){
//     return(
        
//                 <div className="seller">
//                   <img
//                     src="/260x260-pp.jpg"
//                     alt="sellers image"
//                     className="sellers-img"
//                   />

//                   <div className="seller-profile">
//                     <div>
//                             <p className="text-[10px]">SuperGreen Farm</p>
//                             <p className="text-[9px] text-gray-500">Verified Seller</p>
//                     </div>
//                   </div>
//                 </div>
//     )
// }


import {MapPin, ShieldCheck} from "lucide-react";

export function SellerPreview() {
  return (
    <div className="seller">
      {/* avatar fallback — initials since we don't have the local image */}
      <div
        className="sellers-img flex items-center justify-center bg-green-600 text-white"
        style={{ fontSize: 13, fontWeight: 700 }}
      >
        SG
      </div>

      <div className="seller-profile flex-1">
        <p>SuperGreen Farm</p>
        <div className="flex items-center gap-1">
          <ShieldCheck size={8} className="text-green-600" />
          <p>Verified Seller</p>
        </div>
      </div>

      <MapPin size={10} className="text-gray-400" />
    </div>
  );
}
