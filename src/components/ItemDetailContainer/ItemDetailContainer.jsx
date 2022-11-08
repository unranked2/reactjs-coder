import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error));
  }, [id]);

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2 className="producto-detalle">{product.title}</h2>
        <p className="producto-desc">{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {/* <ItemCount stock={product.stock}/> */}
    </div>
  );
}

export default ItemDetailContainer;
