import ChatLayout from '@/Layouts/ChatLayout';
import { Head } from '@inertiajs/react';

export default function Chat() {
    return (
        <ChatLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Chat
                </h2>
            }
        >
            <Head title="Chat" />

            <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
            <p className="mt-2 text-gray-600">
                This is an example dashboard using Tailwind CSS.
            </p>
        </ChatLayout>
    );
}
