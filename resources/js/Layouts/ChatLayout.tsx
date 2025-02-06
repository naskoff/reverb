import { PropsWithChildren, ReactNode } from 'react';

export default function ChatLayout({
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="hidden w-64 flex-col bg-gray-800 md:flex">
                <div className="flex h-16 items-center justify-center bg-gray-900">
                    <span className="font-bold uppercase text-white">
                        Sidebar
                    </span>
                </div>
                <div className="flex flex-1 flex-col overflow-y-auto">
                    <nav className="flex-1 bg-gray-800 px-2 py-4">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            Messages
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            Settings
                        </a>
                    </nav>
                </div>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
                <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white">
                    <div className="flex items-center px-4">
                        <button className="text-gray-500 focus:text-gray-700 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <input
                            className="mx-4 w-full rounded-md border px-4 py-2"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className="flex items-center pr-4">
                        <button className="flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
