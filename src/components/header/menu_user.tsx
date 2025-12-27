import { useAuth } from '@/context/contextAuthen';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaRegUser } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';
import { LuUserRoundCog } from 'react-icons/lu';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import Image from 'next/image';
import useAuthen from '@/swr/admins/useAuthen';
import get_url_img from '@/config/get_url_img';

function MenuUser() {
    const { UserLogin } = useAuthen();
    const { logout } = useAuth();
    const router = useRouter();

    return (
        <div className="relative group  select-none">
            {/* Trigger */}
            <div className="flex justify-end items-center gap-2 cursor-pointer px-4 py-2 border-e dark:border-white/20">
                {/* Avatar nếu có, ngược lại hiển thị icon */}
                {UserLogin?.avatar ? (
                    <Image
                        src={get_url_img('avatars', UserLogin.avatar)}
                        alt="avatar"
                        width={28}
                        height={28}
                        className="rounded-full object-cover w-7 h-7 border border-gray-300 shadow-sm"
                    />
                ) : (
                    <FaRegUser className="w-4 h-4 text-gray-600" />
                )}
                <span className="font-bold dark:text-white ">{UserLogin?.displayname ?? UserLogin?.email}</span>
            </div>

            {/* Dropdown menu */}
            <div
                className="
          absolute top-full right-0
          hidden group-hover:block hover:block
        bg-white dark:bg-gray-900 border dark:border-white/20 rounded-md shadow-md z-50
          pt-2 transition-all duration-300
        "
            >
                <ul className="min-w-40 py-1">
                    <li>
                        {
                            router.asPath !== "/" &&
                            <Link
                                href="/"
                                className="flex py-2 px-4 dark:text-gray-500 justify-between items-center transition-colors duration-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-black/30 dark:hover:text-indigo-500"
                            >
                                <IoHomeOutline className="w-4 h-4" />
                                Trang chủ
                            </Link>
                        }
                        {
                            router.asPath !== '/dashboard' &&
                            <Link
                                href="/dashboard"
                                className="flex py-2 px-4 dark:text-gray-500 justify-between items-center transition-colors duration-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-black/30 dark:hover:text-indigo-500"
                            >
                                <MdOutlineDashboardCustomize className="w-4 h-4" />
                                Quản lý
                            </Link>
                        }
                    </li>

                    <li>
                        <Link
                            href="/auth/settings"
                            className="flex py-2 px-4 dark:text-gray-500 justify-between items-center transition-colors duration-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-black/30 dark:hover:text-indigo-500"
                        >
                            <LuUserRoundCog className="w-4 h-4" />
                            Cài đặt
                        </Link>
                    </li>

                    <li>
                        <button
                            onClick={logout}
                            className="flex w-full py-2 px-4 dark:text-gray-500 justify-between items-center transition-colors duration-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-black/30 dark:hover:text-indigo-500"
                        >
                            <GoSignOut className="w-4 h-4" />
                            Đăng xuất
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuUser;
