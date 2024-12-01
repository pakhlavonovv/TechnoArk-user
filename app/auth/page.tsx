'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../components/style.css';

const Page = () => {
  const [loginState, setLoginState] = useState({
    phone_number: '',
    password: '',
  });
  const [registerState, setRegisterState] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://texnoark.ilyosbekdev.uz/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginState),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Login failed');
      }

      const data = await response.json();
      const { access_token, refresh_token } = data.data?.tokens;
      const userId = data.data?.data?.id;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      localStorage.setItem('user_id', userId);

      navigate.push('/');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://texnoark.ilyosbekdev.uz/auth/admin/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerState),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Register failed');
      }

      const data = await response.json();
      navigate.push('/');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 w-full h-[100%] pt-4">
      <div className="container w-full max-w-[100%] md:max-w-[70%] mx-auto flex flex-col items-center justify-center gap-10 h-full">
        <h1 className="text-[25px] text-white font-sans text-center md:text-[40px]">Register Login Widget</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-10 w-full">
          <form
            onSubmit={handleLogin}
            className="w-[100%] sm:w-[80%] md:h-[100vh] lg:w-[90%] xl:h-[90vh] bg-white p-10 flex flex-col gap-8 items-center justify-center shadow-md rounded-lg"
          >
            <h2 className="font-sans text-[25px] text-center md:text-[40px]">Login</h2>
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="text"
              placeholder="Phone number"
              value={loginState.phone_number}
              onChange={(e) =>
                setLoginState({ ...loginState, phone_number: e.target.value })
              }
            />
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="password"
              placeholder="Password"
              value={loginState.password}
              onChange={(e) =>
                setLoginState({ ...loginState, password: e.target.value })
              }
            />
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-[100%] h-[45px] text-[18px] bg-blue-800 text-white rounded-md"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login Now'}
            </button>
            <div className="w-[100%] flex items-center justify-between sm:hidden">
              <p>Don't have an account?</p>
              <Link href={'#register'}>Register</Link>
            </div>
          </form>

          <form
            id="register"
            onSubmit={handleRegister}
            className="w-[100%] sm:w-[80%] md:h-[100vh] xl:h-[90vh] lg:w-[90%] bg-white p-10 flex flex-col gap-8 items-center justify-center shadow-md rounded-lg"
          >
            <h2 className="font-sans text-[25px] sm:text-[30px] text-center lg:text-[40px]">Register</h2>
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="text"
              placeholder="First Name"
              value={registerState.first_name}
              onChange={(e) =>
                setRegisterState({ ...registerState, first_name: e.target.value })
              }
            />
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="text"
              placeholder="Last Name"
              value={registerState.last_name}
              onChange={(e) =>
                setRegisterState({ ...registerState, last_name: e.target.value })
              }
            />
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="text"
              placeholder="Phone number"
              value={registerState.phone_number}
              onChange={(e) =>
                setRegisterState({
                  ...registerState,
                  phone_number: e.target.value,
                })
              }
            />
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="email"
              placeholder="Email"
              value={registerState.email}
              onChange={(e) =>
                setRegisterState({ ...registerState, email: e.target.value })
              }
            />
            <input
              className="w-full outline-none border-b-[1px] border-black pb-5 bg-transparent"
              type="password"
              placeholder="Password"
              value={registerState.password}
              onChange={(e) =>
                setRegisterState({ ...registerState, password: e.target.value })
              }
            />
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-[90%] h-[45px] text-[18px] bg-blue-800 text-white rounded-md"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Register Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
