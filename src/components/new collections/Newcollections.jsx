import "./newcollections.css";
import Item from "../item/Item";
import New__collections from "../assets/newcollection";

function Newcollections() {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {New__collections.map((New__collection, i) => {
          return (
            <Item
              key={i}
              id={New__collection.name}
              name={New__collection.name}
              image={New__collection.image}
              new_price={New__collection.new_price}
              old_price={New__collection.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Newcollections;
