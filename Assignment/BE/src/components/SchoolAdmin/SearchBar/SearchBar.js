import React ,{useState} from "react";
import TextField from "@mui/material/TextField";
import SchoolAdminClasses from "../SchoolAdminClasses/SchoolAdminClasses";
function SearchBar({ rowsData, setRowsData }) {
    const [searchQuery, setSearchQuery] = useState("");
    // const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = rowsData.filter((item) =>
            item.ClassName.toLowerCase().includes(query.toLowerCase())
        );
        console.log("filtered",filtered);
        setRowsData(filtered);
    };

    return (
        <div
        // className="main"
        >
            {/* <h1>React Search</h1> */}
            <div>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            {/* <List /> */}
            {/* <SchoolAdminClasses /> */}
        </div>
    );
}

export default SearchBar;
