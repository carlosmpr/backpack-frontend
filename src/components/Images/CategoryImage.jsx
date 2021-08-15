import React from "react";
import hiking from "../../assets/images/hiking.svg";
import swim from "../../assets/images/swim.svg";
import eating from "../../assets/images/eating.svg";
import running from "../../assets/images/running.svg";
import touring from "../../assets/images/touring.svg";
import camping from "../../assets/images/camping.svg";

export default function CategoryImage({ category }) {
  const renderImage = () => {
    switch (category) {
      case 'hiking':
        return hiking;
      case 'swimming':
        return swim;
      case 'eating':
        return eating;
      case 'running':
        return running;
      case 'touring':
        return touring;
      case 'camping':
        return camping;

      default:
        break;
    }
  };

  return (
      <div className="w-16 p-2">
      <img src={renderImage()} alt={category} />
      </div>
  )
}
