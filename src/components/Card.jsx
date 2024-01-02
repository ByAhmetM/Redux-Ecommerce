import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.basket);

  const found = state.basket.find((i) => i.id === product.id);
  const handleClick = () => {
    if (found) {
      dispatch(updateItem(found));
    } else {
      dispatch(addToBasket(product));
    }
  };

  return (
    <div style={{ width: "18rem" }} className="card pt-4">
      <div className="d-flex justify-content-center">
        <img
          src={product.image}
          width={200}
          height={200}
          className="rounded"
          alt=""
        />
      </div>
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>
          <span className="fw-bold me-2">
            {product.make}
            <span>{product.model}</span>
          </span>
        </p>
        <p className="d-flex flex-column">
          {product.specs.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>
        <button onClick={handleClick} className="btn btn-dark w-100">
          {found ? `Miktarı Arttır (${found.amount})` : "Sepete Ekle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
