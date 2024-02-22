import { InputHTMLAttributes } from 'react'


interface InputProps {
  Icon?: any
  label?: string
}



export default function Input(
  props: InputHTMLAttributes<HTMLInputElement> & InputProps
) {
  
  const { Icon, label, name, ...restProps } = props

 

  return (
    <div className="w-full grid gap-[5px] bg-white  font-semibold text-neutral-900 text-textSize7 lg:text-textSize6">
      <label htmlFor={name} className="">
        {label}
      </label>
      <div className="border-2 border-azulPrimary900 h-[40px] md:h-[40px] rounded-md  w-full flex items-center">
        <input
          id={name}
          name={name}
          {...restProps}
          className="focus:outline-none font-medium h-full text-neutral-600 w-full placeholder:text-textSize7 rounded-md placeholder:text-neutral-300"
        />
        {Icon && Icon}
      </div>
    </div>
  )
}
