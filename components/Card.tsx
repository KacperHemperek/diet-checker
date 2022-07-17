import React from "react";

type Props = {
    title: string;
    paragraph: string;
    svg: any;
};

const Card = ({ title, paragraph, svg }: Props) => {
    return (
        <div className="mx-auto h-full">
            <div className="flex h-full max-w-[360px] flex-col justify-between rounded-lg border p-4 text-center text-base md:p-8 ">
                <div>
                    <div className="flex justify-center fill-green-500">
                        {svg}
                    </div>
                    <h3 className="mt-4 min-h-[60px] text-xl text-green-500  md:my-4 lg:min-h-[80px] lg:text-2xl xl:text-3xl">
                        {title}
                    </h3>
                    <p>{paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
