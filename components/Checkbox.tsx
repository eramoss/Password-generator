import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { ButtonHTMLAttributes, useContext } from 'react';


export interface checkboxProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string;
  id: string;
}


export function CheckboxComponent({children,id, ...props }: checkboxProps){






return (
  <div>
    <form>
        <div className='items-center flex'>
         
          <Checkbox.Root className="bg-gray-900 w-6 h-6 rounded flex items-center justify-center shadow-sm" defaultChecked id={id}>
            <Checkbox.Indicator >
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <label className="mx-2" htmlFor={id}>
            {children}
          </label>

        </div>
      </form>
    </div>
    


  )
}



