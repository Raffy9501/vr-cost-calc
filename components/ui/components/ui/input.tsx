import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 w-full"
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
