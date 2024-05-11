import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetLoading } from '../../redux/loadersSlice';
import { GetAllBloodGroupsInInventory } from '../../apicalls/dashboard';
import { message } from 'antd';
import { getLoggedInUserName } from '../../utils/helpers';

function Home() {
  const { currentUser } = useSelector((state) => state.users);
  const [bloodGroupsData = [], setBloodGroupsData] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetAllBloodGroupsInInventory();
      dispatch(SetLoading(false));
      if(response.success) 
        {
          setBloodGroupsData(response.data);
        } else {
          throw new Error(response.message);
        }
      
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <span className='text-primary text-2xl'>
        Welcome {getLoggedInUserName(currentUser)}
      </span>
    </div>
  )
}

export default Home