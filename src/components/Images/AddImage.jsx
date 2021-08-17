import React from "react";

export default function AddImage({controller, change}) {
  return (
    <>
      <input
        type="file"
        name="image"
        value={controller}
        id="image"
        accept="image/*"
        className="invisible"
        aria-label="File browser example"
        onChange={change}
      />
      <label
        for="image"
        className="bg-white cursor-pointer p-9 rounded-full text-8xl shadow-lg bg-opacity-50 "
      >
        <i class="fas fa-upload text-blue-400"></i>
      </label>
      <p className="font-bold ">Upload Profile Pic</p>
    </>
  );
}
