import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroup'
import axios from 'axios';
import { useRouter } from 'next/router';

const register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    // const { authenticated } = useAuthState();

    let router = useRouter();
    // if (authenticated) router.push("/");

    const handleSubmit = async (event: FormEvent) => {
        // form에 submit이 일어나면 화면이 refresh가 되는데 그것을 막아주기위해서 preventDefault를 사용한다
        event.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                // 원래으 표현은 email : email인데 key와 value가 같으면 아래와 같이 간략하게 표현 가능함
                email,
                password,
                username
            })
            console.log('res', res);
            router.push("/login");
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response ? error.response.data : undefined);
        }
    }


  return (
    <div className='bg-white'>
    <div className='flex flex-col items-center justify-center h-screen p-6'>
        <div className='w-10/12 mx-auto md:w-96'>
            <h1 className='mb-2 text-lg font-medium text-black'>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <InputGroup
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                    error={errors?.email}
                />
                <InputGroup
                    placeholder='Username'
                    value={username}
                    setValue={setUsername}
                    error={errors?.username}
                />
                <InputGroup
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    error={errors?.password}
                />
                <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded'>
                    회원 가입
                </button>
            </form>
            <small className='text-black'>
                이미 가입하셨나요?
                <Link href="/login" className='ml-1 text-blue-500 uppercase'>
                    {/* <a className='ml-1 text-blue-500 uppercase'>로그인</a> */}
                    로그인
                </Link>
            </small>
        </div>
    </div>
</div>
  )
}

export default register
