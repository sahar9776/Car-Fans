import * as React from "react";

const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={label} className="labelStyle">
        {label}
      </label>
      <input className="input" autoComplete="off" ref={ref} {...props} />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
