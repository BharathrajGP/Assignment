import React from 'react';
import BlockIcon from '@mui/icons-material/Block';
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";

 async function idToDeletePupildata({pupilId}){
    var email = SessionStorage.getItem(SessionStorageKeys.Email);
  
          var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
          console.log(token);
          const deleteIndividualPupil = await commonApi.deleteIndividualPupil({id:pupilId,active:'yes'});
          console.log(email);
          console.log(deleteIndividualPupil);
          if (!isEmptyObject(deleteIndividualPupil)) {
              // const teachersData = getIndividualPupil.data.Items;
              // const arrayData = [];
              // teachersData.map((entry, index) => {
              //     console.log("entry", entry);
              //     entry.map((item) => {
              //         console.log("iitem", item);
              //         arrayData.push(item);
              //     });
              // });
              console.log(deleteIndividualPupil);
  
          } else {
          }
}
function DeletePupil() {
  return (
    <div>
      <button onClick={() =>{idToDeletePupildata();}}>
      <BlockIcon />
          Remove Pupil
      </button>
    </div>
  )
}

export default DeletePupil
