import React, { useState } from "react";
import TextHeaders from "../components/Texts/TextHeaders";
import Input from "../components/Input";
import Badge from "../components/Cards/Badge";
import Buttons from "../components/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { setToken } from "../features/counter/loginSignupSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AddImage from "../components/Images/AddImage";
import Avatar from "../components/Avatar";
export default function Signup() {
  const dispacth = useDispatch();
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    last_name: "",
    password: "",
    email: "",
    phone: "",
  });

  const [image, setImage] = useState(null);
  const [interests, setInterests] = useState({
    hiking: false,
    swimming: false,
    walking: false,
    touring: false,
    camping: false,
    eating: false,
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("name", user.name);
    formData.append("phone", user.phone);
    formData.append("swimming", interests.swimming);
    formData.append("hiking", interests.hiking);
    formData.append("eating", interests.eating);
    formData.append("walking", interests.walking);
    formData.append("camping", interests.camping);
    formData.append("touring", interests.touring);
    formData.append("featured_image", image);
    try {
      const res = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
      
        body: formData,
      });

      // const res = await axios.post('http://127.0.0.1:5000/users', body, {'content-type': 'multipart/form-data'})
       const result = await res.json()
       console.log(result)
      dispacth(setToken(res.data))
      history.push("/Myaccount");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(image);
  return (
    <div className="w-screen h-screen ">
      <TextHeaders title="Join Now" />
      <form
        className="flex flex-col items-center space-y-4"
        onSubmit={handleOnSubmit}
      >
        {image ? (
          <Avatar image={URL.createObjectURL(image)} w="w-42" />
        ) : (
          <AddImage
            controller={image}
            change={(e) => {
              const imageUrl = e.target.files[0];
              setImage(imageUrl);
            }}
          />
        )}

        <Input
          type="text"
          placeholder="Name"
          name="name"
          controller={user.name}
          change={handleChange}
        />
        <Input
          type="text"
          placeholder="Last name"
          name="last_name"
          controller={user.last_name}
          change={handleChange}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          controller={user.email}
          change={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          controller={user.password}
          change={handleChange}
        />
        <Input
          type="number"
          placeholder="Phone"
          name="phone"
          controller={user.phone}
          change={handleChange}
        />
        <h2 className="font-semibold text-secondary text-2xl">Interests</h2>
        <div className="flex w-2/5 flex-wrap justify-center space-x-2 space-y-1">
          <Badge
            text="Hiking"
            funClick={() =>
              setInterests({ ...interests, hiking: !interests.hiking })
            }
          />
          <Badge
            text="Swimming"
            funClick={() =>
              setInterests({ ...interests, swimming: !interests.swimming })
            }
          />
          <Badge
            text="Eating"
            funClick={() =>
              setInterests({ ...interests, eating: !interests.eating })
            }
          />
          <Badge
            text="Walking"
            funClick={() =>
              setInterests({ ...interests, walking: !interests.walking })
            }
          />
          <Badge
            text="Camping"
            funClick={() =>
              setInterests({ ...interests, camping: !interests.camping })
            }
          />
          <Badge
            text="Touring"
            funClick={() =>
              setInterests({ ...interests, touring: !interests.touring })
            }
          />
        </div>
        <Buttons text="Register" />
      </form>
    </div>
  );
}
