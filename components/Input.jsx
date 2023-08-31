import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'


export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'w-full bg-gray-300 rounded border border-gray-300 focus:border-pineGreen text-[#0a192f] focus:ring-2 focus:ring-textGreen/50 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-8'

  return (
    <div className={cn('p-2 w-1/2', className)}>
      <div className="relative">
        <label htmlFor={id} className="leading-7 text-md text-textGreen">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid ? (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />) : (<div className='px-1 h-4'></div>)

          }
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn('w-full bg-gray-300 rounded border border-gray-300 focus:border-textGreen text-[#0a192f] focus:ring-2 focus:ring-textGreen/50 h-14 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out', )}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          autoComplete="off"
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 h-4 font-bold text-red-500 text-xs font-secondary"
      {...framer_error}
    >
      <MdError size={14} />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}