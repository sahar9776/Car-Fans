import * as React from "react";

const Textarea = React.forwardRef(({ name, ...props }, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="labelStyle">
        {name}
      </label>
      <textarea
        className="textarea"
        ref={ref}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
