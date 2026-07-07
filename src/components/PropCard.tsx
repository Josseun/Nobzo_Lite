import { Icon } from "@iconify/react";
import type { propCardProps } from "../types";
import { useState } from "react";
import { formattedPrice } from "../utils/formatPrice";

const PropCard = ({
  prop,
  commentCount,
  likeCount,
  liked,
  onLike,
}: propCardProps) => {
  const [toggle, setToggle] = useState(false);

  const displayPrice = prop.price;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "rent":
        return "bg-primary text-white";

      case "sale":
        return "bg-blue-100 text-secondary";

      default:
        return "bg-primary text-white";
        break;
    }
  };

  return (
    <>
      <div className="w-full max-w-xl rounded-xl bg-white shadow-2xl h-full">
        <div className="relative w-full">
          <img
            className="rounded-t-2xl w-full h-full max-h-80"
            src={prop.image}
            alt={prop.title}
          />
          <div className="flex-between absolute top-5 px-6 w-full">
            <button
              className={`p-1 px-4  rounded-full capitalize ${getTypeColor(prop.type)} `}
            >
              {prop.type}
            </button>

            <button
              onClick={() => setToggle(!toggle)}
              className={`bg-tertiary p-1 rounded-full ${toggle ? "text-red-600" : "text-primary"}`}
            >
              {toggle ? (
                <Icon className="size-8" icon="mdi:heart" />
              ) : (
                <Icon className="size-8" icon="mdi:heart-outline" />
              )}
            </button>
          </div>
        </div>
        <div className="py-8 px-4 flex w-full flex-col">
          <div className="flex gap-3">
            <button
              onClick={() => onLike(prop.id)}
              className={`flex-center gap-2 ${liked ? "text-red-600" : "text-primary"}`}
            >
              {liked ? (
                <Icon className="size-8" icon="mdi:heart" />
              ) : (
                <Icon className="size-8" icon="mdi:heart-outline" />
              )}
              {likeCount}
            </button>
            <span className="flex-center gap-2">
              <Icon className="size-5" icon="mdi:message-outline" />
              {commentCount}
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-lg max-xl:text-sm font-semibold text-secondary">
                {prop.title}
              </p>
              <p className="flex items-center gap-1 max-xl:text-sm text-secondary font-normal">
                <Icon className="size-5" icon="humbleicons:location" />
                {prop.location}
              </p>
            </div>
            <span className="text-lg font-semibold text-primary max-xl:text-sm">
              {formattedPrice(displayPrice)}/mo
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropCard;
