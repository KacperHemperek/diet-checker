import { useRouter } from "next/router";
import React, { FormEvent, useCallback, useRef } from "react";


type Props = {
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const hanldeSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const value = (inputRef.current as HTMLInputElement).value;

    router.push(`/search/${value}`);
  }, []);

  return (
    <form className={className} onSubmit={hanldeSubmit}>
      <div className="flex w-full">
        <input
          ref={inputRef}
          type="text"
          className="w-full rounded-l-lg border px-2 py-1 focus:outline-1 focus:outline-green-500 "
          placeholder="Search"
        />
        <button
          className="rounded-r-lg border border-green-500 bg-green-500 p-2"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-4 w-4 fill-white"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

SearchBar.displayName = "SearchBar";

export default SearchBar;
