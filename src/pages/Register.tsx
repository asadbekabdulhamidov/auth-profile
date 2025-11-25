// rrd
import { Link, useNavigate } from 'react-router-dom';
import ProfileImage from '../components/ProfileImage';

//image
import EmailIcon from '../assets/email-icon.svg';
import PasswordIcon from '../assets/password-icon.svg';
import GoogleIcon from '../assets/google-icin.svg';
import UserIcon from '../assets/usericon.svg';

//componnets
import Input from '../components/Input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// firebase
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase.config';

const schema = yup.object({
  username: yup
    .string()
    .min(5, 'min 5 characters')
    .required('username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'min 6 characters')
    .required('Password is required'),
});

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

//reacct hook form
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google register user:', result.user);
      navigate('/profile');
    } catch (error: any) {
      console.log('RegisterWithGoogle error:', error.message);
    }
  };

  const onSubmit = async (values: RegisterFormValues) => {
    // console.log('Formdan kelgan malumot:', values);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log('Firebase user:', userCredential.user);
      navigate('/profile');
    } catch (error: any) {
      console.log('Regisrer error', error.message);
    }
  };

  return (
    <div className="w-md">
      <Link className=" block mb-6" to="/">
        ← Back to home
      </Link>
      <div className="w-md shadow-2xl p-[49px] text-center~ rounded-3xl flex flex-col items-center justify-center">
        <ProfileImage />
        <p className="mt-4 mb-2 leading-6 text-center">Create account</p>
        <p className="text-[#4A5565] leading-6 text-center">Join us today</p>

        <form
          className="w-full mt-8 flex flex-col gap-6 mb-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            icon={UserIcon}
            name="username"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors.username}
          />

          <Input
            icon={EmailIcon}
            name="email"
            type="email"
            placeholder="Email address"
            register={register}
            error={errors.email}
          />

          <Input
            name="password"
            icon={PasswordIcon}
            type="password"
            placeholder="Password"
            register={register}
            error={errors.password}
          />
          <Button className="" size="lg" variant="primary" fullWidth={true}>
            Login
          </Button>
        </form>

        <div className="w-full flex   items-center justify-center gap-1 mb-6">
          <div className="h-px bg-[#99A1AF] w-full"></div>
          <span className=" text-[#99A1AF] leading-6">or</span>
          <div className="h-px bg-[#99A1AF] w-full"></div>
        </div>
        <Button
          className="border-none mb-8 flex gap-2 bg-[#f3f4f6] text-black "
          size="lg"
          fullWidth={true}
          variant=""
          onClick={handleGoogleRegister}
        >
          <img src={GoogleIcon} alt="" />
          Register with Google
        </Button>
        <p className="leading-6">
          <span className="text-[#4A5565]">Don't have an account?</span>
          <Link className="text-[#155DFC]" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
