import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { baseURL } from '../../Constants/urls';
import useForm from '../../Hooks/useForm';
import useProtectedPage from '../../Hooks/useProtectedPage'
import useRequestData from '../../Hooks/useRequestData';
import { goToPostPage } from '../../Routes/Coordinator';
import {PostsMap} from './styledFeedPage'


function FeedPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const posts = useRequestData([], `${baseURL}/posts`);

  const onClickCard = (id) => {
    goToPostPage(navigate, id)
  }

  const { form, onChange, cleatFields } = useForm({ title: "", body: "" });

  const postsCard = posts && posts.map((post) => {
    return (
      <PostsMap  key={post.id}>
        <p onClick={() => onClickCard(post.id)}>{post.title}</p>
        <p>Usuário: {post.username}</p>
        <p> {post.voteSum} </p>
        <p> {post.commmentCount} </p>
        <button> {post.userVote} x </button>

      </PostsMap>
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
      {postsCard}
    </div>
  )
}

export default FeedPage