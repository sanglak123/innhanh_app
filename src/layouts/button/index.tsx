import { IconType } from "react-icons";
import { BiLoaderCircle } from "react-icons/bi";

type Props = {
    onClick?: any,
    title: string,
    icon: IconType,
    isLoading?: boolean,
    title_loading?: string
    className?: string
    tabIndex?: number
}

export function BTN_Primary(props: Props) {
    const { onClick, title, isLoading, title_loading, className, tabIndex } = props;
    return (
        <button
            tabIndex={tabIndex}
            disabled={isLoading}
            onClick={onClick}
            className={`bg-indigo-500 text-white hover:bg-indigo-700 px-6 py-4 rounded-full transition-all duration-300 flex justify-center gap-3 items-center ${className ?? ""}`}
        >
            {
                isLoading ?
                    <>
                        <BiLoaderCircle className='w-4 h-4 animate-spin' />
                        {title_loading ?? "loading..."}
                    </>
                    :
                    <>
                        <props.icon className='w-4 h-4' />
                        {title}
                    </>
            }
        </button>
    );
};

export function BTN_Danger(props: Props) {
    const { onClick, title, isLoading, title_loading, className } = props;
    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            className={`bg-red-700 text-white hover:bg-red-900 px-6 py-4 rounded-full transition-colors duration-300 flex justify-center gap-3 items-center ${className ?? ""}`}
        >
            {
                isLoading ?
                    <>
                        <BiLoaderCircle className='w-4 h-4 animate-spin' />
                        {title_loading ?? "loading..."}
                    </>
                    :
                    <>
                        <props.icon className='w-4 h-4' />
                        {title}
                    </>
            }
        </button>
    );
};

export function BTN_Success(props: Props) {
    const { onClick, title, isLoading, title_loading, className } = props;
    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            className={`bg-green-700  text-white hover:bg-green-900 px-6 py-4 rounded-full transition-all duration-300 flex justify-center gap-3 items-center ${className ?? ""}`}
        >
            {
                isLoading ?
                    <>
                        <BiLoaderCircle className='w-4 h-4 animate-spin' />
                        {title_loading ?? "loading..."}
                    </>
                    :
                    <>
                        <props.icon className='w-4 h-4' />
                        {title}
                    </>
            }
        </button>
    );
};

