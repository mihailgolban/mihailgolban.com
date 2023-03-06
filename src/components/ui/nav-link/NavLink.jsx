import cn from "classnames";

export const NavLink = ({ children, className, active, ...props }) => {
  const { ...attrs } = props;

  return (
    <>
      <a
        {...attrs}
        className={cn(
          "text-black text-[14px] uppercase tracking-widest font-normal text-sm cursor-pointer py-2 pr-4 hover:text-secondary",
          {
            "text-secondary": active,
          }
        )}
      >
        {children}
      </a>
    </>
  );
};
