import React, { HTMLInputTypeAttribute } from "react";

type Props = {
    onChange: React.ChangeEventHandler;
    value: string;
    name: string;
    type: "number" | "email" | "text" | "search" | "tel" | "password";
    label: string;
    error?: string | undefined;
    className?: string;
    placeholder?: string;
};

const FormInput = ({
    onChange,
    value,
    name,
    placeholder,
    type,
    label,
    className,
    error,
}: Props) => {
    return (
        <div className={`${className} relative pb-8`}>
            <div
                className={`${
                    error ? "border-red-500" : " focus-within:border-green-500"
                } group flex items-center overflow-hidden rounded-lg border-2 border-r transition `}
            >
                <label
                    className={`${
                        error
                            ? "border-r-red-500 bg-red-500 text-white"
                            : " group-focus-within:border-r-green-500"
                    } border-r-2 bg-gray-100 py-1 px-2  transition `}
                >
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    className=" w-full bg-transparent py-1 px-2 autofill:bg-transparent focus:outline-none"
                />
            </div>
            <span className="absolute text-sm text-red-500">{error}</span>
        </div>
    );
};

export default FormInput;
