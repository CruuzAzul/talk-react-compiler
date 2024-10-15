import React, { forwardRef, InputHTMLAttributes } from "react";
import "../../styles/input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endSlot?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ endSlot, ...props }, ref) => {
    return (
      <div>
        <input ref={ref} {...props} />
        {endSlot && <span>{endSlot}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
