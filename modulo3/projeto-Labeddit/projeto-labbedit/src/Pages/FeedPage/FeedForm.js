import React, { useEffect, useState } from 'react'
import useForm from '../../Hooks/useForm';
import { createPost } from '../../Services/post';


function FeedPage() {

  const { form, onChange, cleatFields } = useForm({ title: "", body: "" })

  const onSubmitForm = (event) => {
      event.preventDefault();
      createPost(form, cleatFields)
  }

  return (
    <form onSubmit={onSubmitForm}>

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

    </form>
  )
}

export default FeedPage