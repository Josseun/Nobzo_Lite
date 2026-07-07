import type { FilterBtnProps } from "../types";

const FilterBtn = ({ name, sort, setSort }: FilterBtnProps) => {
  return (
    <button
      onClick={() => setSort(name)}
      className={`capitalize px-4 py-2  text-lg max-lg:text-xs  rounded-full font-medium hover:bg-primary hover:text-white max-md:rounded-none max-md:border-b max-md:not-first:border-l max-md:w-full max-md:max-w-fit max-md:text-start ${sort === name ? "bg-primary text-tertiary" : "bg-blue-100 text-secondary"}`}
    >
      {name}
    </button>
  );
};

export default FilterBtn;
