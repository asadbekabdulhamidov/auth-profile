import { FieldError } from 'react-hook-form';

type InputProps = {
  icon?: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
  name: string;
};

function Input({
  icon,
  type = 'text',
  placeholder,
  error,
  register,
  name,
}: InputProps) {
  return (
    <div>
      <div className="flex items-center gap-3 border-2 border-[#99A1AF] p-4 rounded-[14px] ">
        <img src={icon} alt="" />
        <input
          className="border-none outline-none text-[#99A1AF]"
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {error && <p className="text-red-600 mt-1 ml-1">{error.message}</p>}
    </div>
  );
}

export default Input;
