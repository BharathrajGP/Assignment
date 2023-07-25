// App.js
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Action from "./ActionDropDown";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner";
import { Common } from "../../../helper/constants";

function Table() {
    const [displayPupilData, setDisplayPupilData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function pupilsUpdate() {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        setIsLoading(true);
        const schoolAdminUser = await commonApi.schoolAdminUser({});
        console.log(email);
        console.log(schoolAdminUser);
        if (!isEmptyObject(schoolAdminUser)) {
            const schoolData = schoolAdminUser.data.Items;
            const arrayData = [];
            schoolData.map((entry, index) => {
                console.log("entry", entry);
                entry.map((item) => {
                    console.log("item", item);
                    arrayData.push(item);
                });
            });

            setDisplayPupilData(arrayData);
            // const result= schoolAdminUser.data.Items.map((Users)=>{
            //   const _result=Users.map((User)=>{
            //     console.log(User);
            //     // setDisplayPupilData([...User]);
            //     return User
            //   }
            //   )
            //   console.log(_result)
            //   setDisplayPupilData([..._result])
            //   return _result;
            // })
            // setDisplayPupilData([...result]);
        } else {
        }
        setIsLoading(false);
    }
    const products = [
        { id: 1, foreName: "George", animal: "Monkey" },
        { id: 2, foreName: "Jeffrey", animal: "Giraffe" },
        { id: 3, foreName: "Alice", animal: "Giraffe" },
        { id: 4, foreName: "Foster", animal: "Tiger" },
        { id: 5, foreName: "Tracy", animal: "Bear" },
        { id: 6, foreName: "Joesph", animal: "Lion" },
        { id: 7, foreName: "Tania", animal: "Deer" },
        { id: 8, foreName: "Chelsea", animal: "Tiger" },
        { id: 9, foreName: "Benedict", animal: "Tiger" },
        { id: 10, foreName: "Chadd", animal: "Lion" },
        { id: 11, foreName: "Delphine", animal: "Deer" },
        { id: 12, foreName: "Elinore", animal: "Bear" },
        { id: 13, foreName: "Stokes", animal: "Tiger" },
        { id: 14, foreName: "Tamara", animal: "Lion" },
        { id: 15, foreName: "Zackery", animal: "Bear" },
        // {firstName,surName,characteristics,}
    ];

    const columns = [
        { dataField: "id", text: "Sur Name" },
        { dataField: "name", text: "Fore Name" },
        { dataField: "animal", text: "Characteristics" },
        { dataField: "animal", text: "UPN" },
        { dataField: "animal", text: "School Year" },
        { dataField: "animal", text: "Gender" },
        { dataField: "animal", text: "DoB" },
        { dataField: "animal", text: "Ethnicity" },
        { dataField: "animal", text: "Sen Status" },
        { dataField: "animal", text: "KS1 Result" },
        { dataField: "animal", text: "" },
    ];

    const defaultSorted = [
        {
            dataField: "name",
            order: "desc",
        },
    ];

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: ">>",
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log("page", page);
            console.log("sizePerPage", sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log("page", page);
            console.log("sizePerPage", sizePerPage);
        },
    });

    const { SearchBar, ClearSearchButton } = Search;

    return (
        <div className="App">
            <h5>
                React Bootstrap Table Next with Sorting, Pagination and Search
            </h5>

            <ToolkitProvider
                bootstrap4
                // keyField='id'
                data={products}
                columns={columns}
                search
            >
                {(props) => (
                    <div>
                        <h6>Input something at below input field:</h6>
                        <SearchBar {...props.searchProps} />
                        <ClearSearchButton {...props.searchProps} />
                        <hr />
                        <BootstrapTable
                            defaultSorted={defaultSorted}
                            pagination={pagination}
                            {...props.baseProps}
                        />
                    </div>
                )}
            </ToolkitProvider>
        </div>
    );
}

export default Table;
