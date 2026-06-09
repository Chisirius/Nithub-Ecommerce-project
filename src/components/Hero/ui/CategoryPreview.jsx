// import "../hero.css"

// export function CategoryPreview(){
//     const category = [
//         {   
//             id : 1,
//             img : "/cereals.jpeg", 
//             name : "Cereals"
//         },
//         {   
//             id : 2,
//             img : "/beans grain.jpeg",
//             name : "Beans"
//         },
//         {   
//             id : 3,
//             img : "/vegetables.jpeg",
//             name : "Vegeis"
//         },
//         {   
//             id : 4,
//             img : "/fruits.jpeg",
//             name : "Fruits"
//         }
//     ]
//     return(
//         <div>
//                 <div className="category">
//                   <span>Search by category</span>
//                   <span>view all</span>
//                 </div>

//                 <div className="images">
//                 {
//                     category.map(item => (
//                         <div  key={item.id}>
//                              <img src={item.img} alt={item.name} />
//                         </div>
//                     ))
//                 }
//                 </div>
//          </div>
//     )
// }


const categories = [
    { id: 1, emoji: "🌾", name: "Cereals" },
    { id: 2, emoji: "🫘", name: "Beans" },
    { id: 3, emoji: "🥦", name: "Veggies" },
    { id: 4, emoji: "🍎", name: "Fruits" },
  ];
  
  export function CategoryPreview() {
    return (
      <div>
        <div className="category">
          <span>Categories</span>
          <span>View all</span>
        </div>
        <div className="images">
          {categories.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center justify-center bg-green-50 border border-green-200 rounded-2xl"
                style={{ width: 48, height: 48, fontSize: 22 }}
              >
                {item.emoji}
              </div>
              <span style={{ fontSize: 7 }} className="text-gray-500 text-center block mt-1">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  