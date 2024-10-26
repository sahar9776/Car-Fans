import * as React from "react";

const Input = React.forwardRef(({ name, ...props }, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="label">
        {name}
      </label>
      <input
        className="input"
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
