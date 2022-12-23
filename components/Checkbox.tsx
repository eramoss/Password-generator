import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { ButtonHTMLAttributes, useContext } from "react";

export interface checkboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  htmlfor: string;
  onCheck: () => void;
}

export function CheckboxComponent({
  children,
  htmlfor,
  onCheck,
  ...props
}: checkboxProps) {
  return (
    <div>
      <form>
        <div className="items-center flex">
          <Checkbox.Root
            className="bg-gray-900 w-6 h-6 rounded flex items-center justify-center shadow-sm"
            defaultChecked
            id={htmlfor}
            onClick={onCheck}
          >
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <label className="pl-2" htmlFor={htmlfor}>
            {children}
          </label>
        </div>
      </form>
    </div>
  );
}
