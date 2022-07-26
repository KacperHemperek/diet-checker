import React from "react";

type Props = {
    title: string;
    paragraph: string;
    svg: any;
};

const Card = ({ title, paragraph, svg }: Props) => {
    return (
        <div className="group mx-auto h-full transition lg:hover:-translate-y-4">
            <div className="flex h-full max-w-[360px] flex-col justify-between rounded-lg border p-4 text-center text-base transition  group-hover:bg-green-500 md:p-8 ">
                <div>
                    <div className="flex justify-center fill-green-500 group-hover:fill-white">
                        {svg}
                    </div>
                    <h3 className="mt-4 min-h-[60px] text-xl text-green-500 group-hover:text-white  md:my-4 lg:min-h-[80px] lg:text-2xl xl:text-3xl">
                        {title}
                    </h3>
                    <p className=" transition group-hover:text-white ">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
