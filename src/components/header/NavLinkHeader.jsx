const NavLinkHeader = ({ nameLink }) => {
  return (
    <a className="group relative md:py-8" href="#">
      <span className="group-hover:text-orange-primary">{nameLink}</span>
      <span className="absolute bottom-0 block w-full scale-0 p-[2px] transition-all duration-200 group-hover:scale-100 group-hover:bg-orange-primary"></span>
    </a>
  );
};

export default NavLinkHeader;
