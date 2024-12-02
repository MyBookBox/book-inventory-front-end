import {Avatar, AvatarFallback} from "../../src/components/ui/avatar"
import TextInput from "../../src/components/text-input";
import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import {getUser} from "../../src/shared/utils/stroge-util";

const Profile = () => {
    const user = getUser() ?? {}
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('');
    };

    return (
        <>
            <div className='text-4xl text-purple-900'>Profile</div>
            <div className='text-md text-gray-600 mt-4'>You can manage your profile here by adding, editing, or deleting them.</div>
            <div className='flex justify-start gap-16 items-center my-12'>
                <Avatar className='w-28 h-28 bg-purple-50 border-purple-900 border'>
                    <AvatarFallback className='text-5xl text-purple-900'>{getInitials(user['name'])}</AvatarFallback>
                </Avatar>
                <div className='flex-col'>
                    <div className='text-lg text-gray-900 mb-4'>{user['name']}</div>
                    <div className='text-md text-gray-900'> {user['email']}</div>
                </div>
            </div>
            <div className='shadow-md p-8 w-1/2'>
                <div className='text-2xl text-purple-900'>Change Password</div>
                <TextInput
                    label='Current Password'
                    type='password'
                    placeholder='Enter your current password'
                    wrapperStyles='my-8'
                />
                <TextInput
                    label='New Password'
                    type='password'
                    placeholder='Enter your new password'
                    wrapperStyles='my-8'
                />
                <TextInput
                    label='Confirm Password'
                    type='password'
                    placeholder='Enter your confrim password'
                    wrapperStyles='my-8'
                />
                <div className='flex justify-center items-center w-full'>
                    <PrimaryButton
                        label='Change password'
                        loading={false}
                        icon={<ArrowRight/>}
                        additionalStyles='mb-8 mt-4 w-48'
                        onClick={() => {
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Profile