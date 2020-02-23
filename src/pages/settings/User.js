import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sagaActions } from '../../modules/settings/user/';

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaActions.getUsersSagaWatchAction());
  });

  //Oppgave 3.4
  const data = {};
  const isLoading = false; // Get the loading state from redux
  return(
    <>
      {/* isLoading ? 'Loading' : // Display all users*/}
    </>
  )
};

export default User;
