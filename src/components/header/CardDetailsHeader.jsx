import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import DeleteIcon from "@/components/icons/DeleteIcon";

export default () => {
  const { cartProducts, deleteCartProducts } = useContext(useCartDetails);
  return (
    <div className="mx-3 rounded-md bg-white shadow-2xl">
      <h4 className="ml-4 py-5 font-bold">Cart</h4>
      <hr />
      {cartProducts.length === 0 && (
        <p className="p-14 text-center">Your cart is empty.</p>
      )}
      {cartProducts.map((product) => (
        <article
          key={product.id}
          className="mx-2 grid grid-cols-[1fr_4fr_1fr] items-center gap-4 p-6 py-3"
        >
          <img className="rounded-md" src={product.img} alt="" />
          <div>
            <p>{product.subtitle}</p>
            <p>
              ${product.discountPrice} x {product.quantity}
              <span className=" pl-2 font-bold">
                ${(product.discountPrice * product.quantity).toFixed(2)}
              </span>
            </p>
          </div>
          <button
            className="justify-self-end hover:bg-slate-500"
            onClick={() => deleteCartProducts(product.id)}
          >
            <DeleteIcon />
          </button>
        </article>
      ))}
      {cartProducts.length !== 0 && (
        <div className="px-4">
          <button className="my-5 w-full rounded-md bg-orange-primary py-3 font-bold text-white transition-all duration-200 hover:bg-orange-400">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
