import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState('');


  const onSubmit = data => {
    console.log(data);
    const eventData = {
      name: data.name,
      price:data.price,
      imageURL: imageURL
    }
    const url = `http://localhost:5055/addEvent`

    console.log(eventData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server site responce', res))
  };


  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '38e63777af0d63db08cd195f094cf61f');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        console.log(response)
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>hellow addEvents</h2>
        <input  name="name" {...register("name")} />
        <br />
        <input  placeholder="price" {...register("price")} />
        <br/>
        <input name="imageURL" type="file" onChange={handleImageUpload} />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvents;