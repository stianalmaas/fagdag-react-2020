import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from '../../modules/settings/user/';

const User = () => {

  //Oppgave 4
  /*const users = useSelector(state => state.settings.users);*/

  // const { data, isLoading } = users;
  // const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(sagaActions.getUsersSagaWatchAction());
  }, [dispatch]);*/
  const data = {};
  const isLoading = false; // Get the loading state from redux
  return(
    <>
      {/*{*/}
      {/*  isLoading*/}
      {/*    ? (<div>Loading...</div>)*/}
      {/*    : (*/}
      {/*      Object.keys(data).length > 0*/}
      {/*        ? Object.keys(data).map(i => (<div key={i}>{data[i].first_name}</div>))*/}
      {/*        : <div>No users</div>*/}
      {/*    )*/}
      {/*}*/}
    </>
  )
};

export default User;
