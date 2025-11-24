// rrd
import { Link } from 'react-router-dom';
import ProfileImage from '../components/ProfileImage';
//image
import EmailIcon from '../assets/email-icon.svg';
import Password from '../assets/password-icon.svg';

type LoginFormValues = {
  email: string;
  password: string;
};

//reacct hook form
import { useForm } from 'react-hook-form';
function Login() {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (values: LoginFormValues) => {
    console.log('Formdan kelgan malumot:', values);
  };

  return (
    <div className="w-md">
      <Link to="/">← Back to home</Link>
      <div className="w-md shadow-2xl p-[49px] text-center~ rounded-3xl flex flex-col items-center justify-center">
        <ProfileImage />
        <p className="mt-4 mb-2 leading-6 text-center">Welcome Back</p>
        <p className="text-[#4A5565] leading-6 text-center">
          Sign in to your account
        </p>

        <form
          className="w-full mt-8 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center gap-3 border-2 border-[#99A1AF] p-4 rounded-[14px] ">
            <img src={EmailIcon} alt="" />
            <input
              className="border-none outline-none text-[#99A1AF]"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="flex items-center gap-3 border-2 border-[#99A1AF] p-4 rounded-[14px] ">
            <img src={Password} alt="" />
            <input
              className="border-none outline-none text-[#99A1AF]"
              type="password"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
