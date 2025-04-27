import "./item.css";

function Item(props) {
  return (
    <div className="itemb">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="itemb-prices">
        <div className="itemb-price-new">${props.new_price}</div>
        <div className="itemb-price-old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
