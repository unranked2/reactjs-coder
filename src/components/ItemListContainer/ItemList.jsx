import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
