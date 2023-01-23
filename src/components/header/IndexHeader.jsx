import { useState, useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CardDetailsHeader from "@/components/header/CardDetailsHeader";

const MainHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);
  const { cartProducts, totalQuantityProduct } = useContext(useCartDetails);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-6 md:border-b-[1px] md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          className="mr-auto mb-1 h-5 md:mr-0"
          src={LogoSneakers}
          alt="Logo Sneakers"
        />
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "fixed top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-4 gap-y-5  bg-white p-8"
              : "hidden"
          }`}
        >
          <button>
            <CloseIcon className="mb-12 md:hidden" onClick={handleCloseMenu} />
          </button>
          <NavLinkHeader nameLink="Collections" />
          <NavLinkHeader nameLink="Men" />
          <NavLinkHeader nameLink="Women" />
          <NavLinkHeader nameLink="About" />
          <NavLinkHeader nameLink="Contact" />
        </nav>
        <div className="flex gap-4">
          <button
            className="relative"
            onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)}
          >
            <CartIcon />
            <span className="absolute top-0 rounded-full bg-orange-primary px-2 text-xs font-bold text-white">
              {totalQuantityProduct}
            </span>
          </button>
          <section className="absolute top-[110%] left-0 z-10 w-full md:top-full md:left-full md:max-w-md md:-translate-x-full">
            {isOpenDetailsCart && <CardDetailsHeader />}
          </section>
          <img className="w-10" src={AvatarImage} alt="Avatar images" />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
