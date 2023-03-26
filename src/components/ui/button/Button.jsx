import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({ children, ...props }) => {
  const { primary, secondary, link, icon: Icon, iconPosition = "left", size, className, ...attrs } = props;

  const classes = cn(
    { [styles.btnPrimary]: primary },
    { [styles.btnSecondary]: secondary },
    { [styles.btnLink]: link },
    { [styles.btnLarge]: size === "lg" },
    className
  );

  const iconClasses = cn("icon text-base", { "text-xl": size === "lg" });

  const showLeftIcon = Icon && iconPosition === "left";
  const showRightIcon = Icon && iconPosition === "right";

  return (
    <button {...attrs} className={classes}>
      <div className="flex justify-center items-center gap-2">
        {showLeftIcon && (
          <span className={iconClasses}>
            <Icon />
          </span>
        )}
        <div>{children}</div>
        {showRightIcon && (
          <span className={iconClasses}>
            <Icon />
          </span>
        )}
      </div>
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.func,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["lg", "sm"]),
};
