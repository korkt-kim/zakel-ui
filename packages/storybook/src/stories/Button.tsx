import { Button as _Button, type ButtonProps } from "@zakel-ui/core";

export const Button = ({

  ...props
}: ButtonProps) => {
  
  return (
    <_Button
      variant='primary'
      {...props}
    
    />
      
  );
};
