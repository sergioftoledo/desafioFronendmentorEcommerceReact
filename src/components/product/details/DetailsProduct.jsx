import { useState, useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import CartIcon from "@/components/icons/CartIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import PlusIcon from "@/components/icons/PlusIcon";

const DetailsProduct = ({ objetProduct }) => {
  const { addCartProducts } = useContext(useCartDetails);
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addCartProducts({
      img: objetProduct.imagesSmall[0],
      id: objetProduct.id,
      discountPrice: (objetProduct.price * objetProduct.discount).toFixed(2),
      title: objetProduct.title,
      quantity: count,
    });
    setCount(1);
  };

  return (
    <section className="container mx-auto px-5 pb-5">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        {objetProduct.subtitle}
      </p>
      <h2 className="mb-3 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="mb-5 text-dark-grayish-blue">{objetProduct.description}</p>
      <div className="md:grid-col-[1fr_3fr] mb-5 grid grid-cols-3 items-center gap-4 font-bold md:gap-2">
        <span className="text-3xl">
          ${(objetProduct.price * objetProduct.discount).toFixed(2)}
        </span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary md:col-span-2">
          {objetProduct.discount * 100}%
        </span>
        <span className=" text-right text-grayish-blue line-through md:text-left">
          ${objetProduct.price.toFixed(2)}
        </span>
      </div>
      <div>
        <div className="grid grid-cols-3 font-bold">
          <div className="col-span-3 flex items-center justify-between rounded-lg bg-gray-50 py-3 px-3 md:col-span-1">
            <button>
              <MinusIcon onClick={decrementCount} />
            </button>
            <span>{count}</span>
            <button>
              <PlusIcon onClick={addCount} />
            </button>
          </div>
          <button
            className="col-span-3 flex items-center justify-center gap-x-5 rounded-lg bg-orange-primary py-3 transition-all duration-200 hover:bg-orange-400 md:col-span-2"
            onClick={handleAddToCart}
          >
            <CartIcon fill="#fff" />
            <span className="text-white">Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
