import React from 'react'
import { useParams } from 'react-router-dom';
import { baseURL } from '../../Constants/urls';
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData';

function PostPage() {
  useProtectedPage();

  const postDetails = useRequestData([], `${baseURL}/posts`)

  const params = useParams();
  console.log(params)

  return (
    <div>
      post

    </div>
  )
}

export default PostPage