import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

export const ToastNotification = () => {
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

export const success = (msg) => {
    toast.success(msg);
};

export const errorMsg = (msg) => {
    toast.error(msg);
};

export const loading = (msg) => {
    toast.loading(msg, { style: { background: "#1877f2", color: "white", }, theme: { primary: "green", secondary: "black", } });
};

export const custom = (msg) => {
    toast.custom(msg);
};

export const dismiss = (toastId) => {
    toast.dismiss(toastId);
};

export const remove = (toastId) => {
    toast.remove(toastId);
};