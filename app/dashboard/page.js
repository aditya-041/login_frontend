import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md">
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-md p-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold"><span className='text-purple-600'>Destion</span> Innovations</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Welcome!</span>
                        <img  src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png" alt="" className="rounded-full w-10" />
                    </div>
                </header>

                <main className="flex-1 p-6">
                    <h2 className="text-2xl font-semibold">Welcome to your Dashboard!</h2>
                    <p className="mt-4 text-gray-600">This is where your content will go.</p>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

