export const navLinkClass = ({
  isScrolled,
  isMainNav,
}: {
  isScrolled: boolean;
  isMainNav: boolean;
}) => {
  if (isScrolled) {
    return "font-medium px-3 py-2 tracking-wider text-[15px] transition-colors text-secondary-foreground hover:text-green";
  }
  if (isMainNav) {
    return "font-medium px-3 py-2 tracking-wider text-[15px] transition-colors text-white hover:text-green-600";
  }

  return "font-medium px-3 py-2 tracking-wider text-[15px] transition-colors text-primary-foreground hover:text-green";
};

export const inputError = "text-red-600 pt-1 text-sm";
