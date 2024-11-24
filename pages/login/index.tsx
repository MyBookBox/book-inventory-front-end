import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import TextInput from "../../src/components/text-input";
import {Button} from "../../src/components/ui/button";
import {useRouter} from "next/navigation";

const Login = () => {
    const router = useRouter();
    return (
        <div className='flex'>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/2">
                <div className='flex-col w-1/3'>
                    <div className="text-4xl font-bold text-purple-600">Welcome Back!</div>
                    <TextInput
                        label='Email'
                        placeholder='Enter your email'
                        wrapperStyles='my-8'
                    />
                    <TextInput
                        label='Password'
                        placeholder='Enter your password'
                        wrapperStyles='mb-4'
                    />
                    <div className='flex justify-end '>
                        <Button
                            variant="link"
                            className='text-gray-600 underline font-normal mx-0 px-0'
                            onClick={() => router.push("/signup")}>
                            Forgot Password
                        </Button>
                    </div>
                    <PrimaryButton
                        label='Login'
                        loading={false}
                        icon={<ArrowRight/>}
                        additionalStyles='mb-8 mt-4'
                        onClick={() => router.push("/home")}
                    />
                    <div className='text-sm text-center'>
                        Don't have an account yet?
                        <Button
                            variant="link"
                            className='text-purple-600'
                            onClick={() => router.push("/signup")}>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={'/images/login.jpeg'} style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                }}
                     alt="Login"/>
            </div>
        </div>
    );


}
export default Login