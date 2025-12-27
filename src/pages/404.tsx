'use client'

import { BTN_Primary } from '@/layouts/button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai';

function PageNotFound() {
    const router = useRouter();  
    return (
        <div className='max-w-5xl mx-auto py-12'>
            <Image
                width={600}
                height={600}
                alt='404'
                src={"/404.webp"}
                className='mx-auto py-6'
            />
            <BTN_Primary
                className='mx-auto'
                title='Back to home'
                icon={AiOutlineHome}
                onClick={() => router.push("/")}
            />
        </div>
    );
}

export default PageNotFound;