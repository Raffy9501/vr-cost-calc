import * as React from "react"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return (
    <label
      className="block text-sm font-medium text-gray-700 mb-1"
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = "Label"

export { Label }
