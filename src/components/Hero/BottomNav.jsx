
//     return (
//       <footer className=" border-t  px-1 pt-[5px]">
//                   <div className="flex justify-around items-center">
//                   <div>
//                     <i className="fa-solid fa-house"></i> <p>Home</p>
//                   </div>
  
//                   <div>
//                     <i
//                       className="fa-solid fa-bag-shopping"style={{ color: "#179631" }}></i> <p>Shop</p>
//                   </div>
  
//                   <div>
//                     <i className="fa-solid fa-newspaper"></i> <p>Blog</p>
//                   </div>
  
//                   <div>
//                     <i className="fa-solid fa-user"></i> <p>Profile</p>
//                   </div>
//                   </div>
//                 </footer>
//     );
//   }


import {BookOpen, Home, ShoppingBag, User} from "lucide-react";


export function BottomNav({ activeTab = "home" }) {
  const tabs = [
    { key: "home", icon: Home, label: "Home" },
    { key: "shop", icon: ShoppingBag, label: "Shop" },
    { key: "blog", icon: BookOpen, label: "Blog" },
    { key: "profile", icon: User, label: "Profile" },
  ];

  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="flex justify-around items-center py-1.5">
        {tabs.map(({ key, icon: Icon, label }) => (
          <div key={key} className="flex flex-col items-center gap-0.5">
            <Icon
              size={12}
              className={key === activeTab ? "text-green-600" : "text-gray-400"}
            />
            <p style={{ fontSize: 7 }} className={key === activeTab ? "text-green-600 font-semibold" : "text-gray-400"}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
}
