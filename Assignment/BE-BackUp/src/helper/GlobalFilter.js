import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter, searchBy }) => {
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
    }, 1000);
    return (
        <span className="d-flex align-items-center justify-content-end">
            Search : &nbsp;
            <input
                className="form-control ml-2 w-auto"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={searchBy}
            />
        </span>
    );
};

export { GlobalFilter };
