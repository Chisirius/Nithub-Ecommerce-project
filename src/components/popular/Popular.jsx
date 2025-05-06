import "./popular.css";
import data_product from "../assets/product";
import Item from "../item/Item";

function Popular() {
  return (
    <div className="popular">
      <h1>Coming Soon</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
