import TextInput from "../../src/components/text-input";
import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import {Button} from "../../src/components/ui/button";
import {useRouter} from "next/navigation";

const Signup = () => {
    const router = useRouter();
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <img src={'/images/signup.jpg'} style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                }}
                     alt="Login"/>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/2">
                <div className='flex-col w-1/2'>
                    <div className="text-4xl font-bold text-purple-600">Welcome to MyBookBox!</div>
                    <div className='text-gray-600 text-md mt-4'>Enter your details below to create an account:</div>
                    <TextInput
                        label='First Name'
                        placeholder='Enter your first name'
                        wrapperStyles='my-8'
                    />
                    <TextInput
                        label='Last Name'
                        placeholder='Enter your last name'
                        wrapperStyles='my-8'
                    />
                    <TextInput
                        label='Email'
                        placeholder='Enter your email'
                        wrapperStyles='my-8'
                    />
                    <TextInput
                        label='Password'
                        placeholder='Enter your password'
                    />
                    <PrimaryButton
                        label='Create an Account'
                        loading={false}
                        icon={<ArrowRight/>}
                        additionalStyles='my-8'
                    />
                    <div className='text-sm text-center'>
                        Already have an account?
                        <Button
                            variant="link"
                            className='text-purple-600'
                            onClick={() => router.push("/login")}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup