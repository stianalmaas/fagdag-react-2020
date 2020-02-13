import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSagaWatchAction } from '../../modules/settings/user/actions';

const User = () => {
  const users = useSelector(state => state.settings.users);

  const { data, isLoading } = users;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersSagaWatchAction());
  }, [dispatch]);

  return(
    <>
      {
        isLoading && (<div>Loading...</div>)
      }
      {
        Object.keys(data).length > 0
          ? Object.keys(data).map(i => (<div key={i}>{data[i].first_name}</div>))
          : (<div>ingen data</div>)
      }
    </>
  )
};

export default User;
