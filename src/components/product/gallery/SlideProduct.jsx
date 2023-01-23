import { useRef, useState } from "react";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import ImgProduct from "@/components/product/gallery/ImgProduct";

const SlideProduct = ({
  ARRAY_IMGS = [],
  ARRAY_IMGS_SMALL = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const btnSlider = useRef(null);
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section {...props}>
      {isOpenModal && (
        <button
          onClick={handleCloseModal}
          className="text-right font-bold text-white md:col-span-4"
        >
          X
        </button>
      )}
      <div className="relative col-span-4">
        <img
          className="aspect-[16/13]md:aspect-[16/16] md:cursor-pointer md:rounded-md xl:aspect-[16/14] 2xl:aspect-[17/13]"
          src={ARRAY_IMGS[index]}
          alt=""
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className={`absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4 ${
            !isOpenModal && "md:hidden"
          }`}
        >
          <button
            className="w- grid h-8 w-8 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid h-8 w-8 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMGS_SMALL.map((smallImg, i) => (
        <div
          key={i}
          onClick={() => {
            setIndex(i);
          }}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <ImgProduct smallImg={smallImg} />

          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && "bg-[rgba(255,255,255,0.8)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default SlideProduct;
