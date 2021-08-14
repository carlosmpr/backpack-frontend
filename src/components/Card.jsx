import React from "react";


export default function Card() {
  return (
    <div class="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center ">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}
