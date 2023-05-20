import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

export default function SelectBox() {
  const [query, setQuery] = useState("");
  const { products } = useSelector((state) => state.products);
  const [selected, setSelected] = useState(products[0]);

  const filteredProducts =
    query === ""
      ? products
      : products.filter((product) =>
          product.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    // <div className="">
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left sm:text-sm border border-[#EEEEEE]">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 capitalize"
            displayValue={(product) => product.title}
            onChange={(event) => setQuery(event.target.value)}
            name="product"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute max-h-28 overflow-y-scroll top-full left-0 z-10 mt-1 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredProducts.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <Combobox.Option
                  key={product.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 capitalize ${
                      active ? "bg-primary text-white" : "text-gray-900"
                    }`
                  }
                  value={product}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate capitalize ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {product.title}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-primary"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
    // </div>
  );
}
