import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header';
import useForm from '../../Hooks/useForm';
import useProtectedPage from '../../Hooks/useProtectedPage'
import { post } from '../../Services/post';


function FeedPage() {

  useProtectedPage();

  useEffect(() => {
    post(setPosts)
  }, [])

  const [posts, setPosts] = useState

  const { form, onChange, cleatFields } = useForm({ title: "", body: "" })

  const postsList = posts && posts.map((post) => {
    return (
      <div>
        <p>{post.title}</p>
        <p>{post.username}</p>
      </div>
    )
  });


  return (
    <div>
      <Header />
      <div>
        <h3>Feed</h3>

        <input
          name={"title"}
          onChange={onChange}
          placeholder="título"
          required
        />

        <input
          name={"body"}
          onChange={onChange}
          placeholder="Escreva seu post aqui"
          required
        />

        <button>Postar!</button>

      </div>
      {postsList}
    </div>
  )
}

export default FeedPage