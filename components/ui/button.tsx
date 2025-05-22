import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
