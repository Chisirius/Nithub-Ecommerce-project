// export function ProductPreview(){
//     return(
//         <>
//          <img
//                   src="/tomato.jpeg"
//                   alt="product-slides"
//                   className="mages-slide"
//                 />
        
       
//         <div className="product-desc">
//                   <p className="text-[11px] pt-[15px] mb-2">Fresh derica tomatoes</p>
//                   <p >
//                     <span className="pr-[30px]">Name:</span> <span>Tomatoe</span>
//                   </p>
//                   <p>
//                     <span className="pr-[30px]">Quantiy:</span> <span>1kg</span>
//                   </p>
//                   <p>
//                     <span className="pr-[30px]">Price:</span> <span>$7/kilo</span>
//                   </p>
//                   <br />
//                 </div>
//          </>
//     )
// }



export function ProductPreview() {
  return (
    <>
      {/* hero image */}
      <div
        className="w-full flex items-center justify-center bg-gradient-to-b from-red-50 to-orange-50 relative"
        style={{ height: 140, fontSize: 72 }}
      >
        🍅
        <span
          className="absolute top-2 right-2 bg-green-100 text-green-700 rounded-full px-2"
          style={{ fontSize: 7, fontWeight: 600 }}
        >
          In Stock
        </span>
      </div>

      <div className="product-desc">
        <p className="text-gray-800" style={{ fontSize: 11, fontWeight: 600, paddingTop: 10, marginBottom: 6 }}>
          Fresh Derica Tomatoes
        </p>
        <p style={{ marginBottom: 3 }}>
          <span className="label">Name</span>
          <span className="value">Tomato</span>
        </p>
        <p style={{ marginBottom: 3 }}>
          <span className="label">Quantity</span>
          <span className="value">1 kg</span>
        </p>
        <p>
          <span className="label">Price</span>
          <span className="value text-green-600" style={{ color: "#16a34a" }}>$7 / kg</span>
        </p>
      </div>
    </>
  );
}
