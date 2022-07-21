import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    description?: React.ReactNode;
};

const CustomFormWrapper = ({ children, onSubmit, description }: Props) => {
    return (
        <form
            className={`${
                description ? "lg:w-4/5 xl:w-7/12" : "lg:w-1/2 xl:w-1/4"
            } flex w-full md:w-3/5 `}
            onSubmit={onSubmit}
        >
            {description && (
                <div className="hidden w-1/2 rounded-l-lg border-y border-l lg:flex">
                    {description}
                </div>
            )}
            <div
                className={`${
                    description ? "lg:w-1/2 lg:rounded-l-none" : "lg:w-full"
                } w-full rounded-lg md:border md:p-8`}
            >
                {children}
            </div>
        </form>
    );
};

export default CustomFormWrapper;
