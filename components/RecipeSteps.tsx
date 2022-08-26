import React from "react";

type Props = {
    steps: any[] | string;
};

const RecipeSteps = ({ steps }: Props) => {
    return (
        <div className="py-4 md:col-span-6 lg:col-span-7">
            <h2 className="mb-6 text-2xl font-semibold xl:text-3xl">
                {typeof steps === "string" ? (
                    <>
                        <span className="text-green-500">Recipe</span>
                        <span> summary</span>
                    </>
                ) : (
                    <>
                        <span className="text-green-500">Recipe</span>
                        <span> steps</span>
                    </>
                )}
            </h2>
            {typeof steps === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: steps }}></div>
            ) : (
                <ol>
                    {steps.map((item, index) => {
                        const bullet = `<span class="font-semibold text-green-500 ">
                          ${index + 1 + ". "}
                        </span>`;

                        return (
                            <li
                                className="mb-1 xl:text-lg"
                                key={index}
                                dangerouslySetInnerHTML={{
                                    __html: `${bullet} ${item.step}`,
                                }}
                            />
                        );
                    })}
                </ol>
            )}
        </div>
    );
};

export default RecipeSteps;
