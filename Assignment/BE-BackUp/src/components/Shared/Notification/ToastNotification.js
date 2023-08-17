import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ToastNotification = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        duration: 4000,
                        style: {
                            background: '#1877f2',
                            color: 'white'
                        },
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                    error: {
                        duration: 3000,
                        style: {
                            background: '#1877f2',
                            color: 'white'
                        },
                        theme: {
                            primary: 'red',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    );
};

const success = (msg) => {
    toast.success(msg);
};

const errorMsg = (msg) => {
    toast.error(msg);
};

const loading = (msg) => {
    toast.loading(msg, { style: { background: "#1877f2", color: "white", }, theme: { primary: "green", secondary: "black", } });
};

const custom = (msg) => {
    toast.custom(msg);
};

const dismiss = (toastId) => {
    toast.dismiss(toastId);
};

const remove = (toastId) => {
    toast.remove(toastId);
};

export { ToastNotification, success, errorMsg, loading, custom, dismiss, remove };