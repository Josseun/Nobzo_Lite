import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import type { property, CommentType, LikesType } from "../types";
import { getTypeColor } from "../utils/formatPrice";

const ExplorePropertyPage = () => {
  const [property, setProperty] = useState<property | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [likes, setLikes] = useState<LikesType[]>([]);

  const currentUserId = 1;
  const { id } = useParams();

  useEffect(() => {
    const fetchdetail = async () => {
      const res = await fetch("/frontend_db.json");
      const data = await res.json();

      const property = data.properties.find(
        (item: property) => item.id === Number(id),
      );

      setProperty(property);
      setComments(
        data.comments.filter((c: CommentType) => c.propertyId === Number(id)),
      );
      setLikes(
        data.likes.filter((l: LikesType) => l.propertyId === Number(id)),
      );
    };
    fetchdetail();
  }, [id]);

  if (!property)
    return (
      <div className="w-full h-full flex-center text-5xl">
        <div className="mt-50">Loading...</div>
      </div>
    );

  const liked = likes.some(
    (like) => like.propertyId === Number(id) && like.userId === currentUserId,
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="w-screen h-full min-h-screen">
      {/* Hero image */}
      <div className="relative w-full h-[420px]">
        <img
          className="w-full h-full object-cover"
          src={property.image}
          alt={property.title}
        />

        <NavLink
          to="/"
          className="absolute top-5 left-5 flex-center bg-white/90 rounded-full size-10"
        >
          <Icon className="size-5 text-secondary" icon="mdi:arrow-left" />
        </NavLink>

        <div className="absolute bottom-6 left-8">
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm capitalize mb-3 ${getTypeColor(property.type)}`}
          >
            {property.type}
          </span>
          <h1 className="text-3xl font-bold text-white">{property.title}</h1>
          <p className="flex items-center gap-1 text-white/90 mt-1">
            <Icon className="size-5" icon="humbleicons:location" />
            {property.location}
          </p>
        </div>
      </div>

      <div className="px-10 max-lg:px-4 mt-6 flex-between max-md:flex-col max-md:items-start max-md:gap-4">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(property.price)}
        </span>

        <div className="flex-center gap-3">
          <button
            className={`flex-center gap-2 border rounded-full px-4 py-2 ${liked ? "text-red-600 border-red-200" : "text-primary border-gray-200"}`}
          >
            <Icon
              className="size-5"
              icon={liked ? "mdi:heart" : "mdi:heart-outline"}
            />
            Like
          </button>
          <button className="flex-center gap-2 border rounded-full px-4 py-2 text-primary border-gray-200">
            <Icon className="size-5" icon="mdi:share-outline" />
            Share
          </button>
        </div>
      </div>

      {/* About */}
      <div className="px-10 max-lg:px-4 mt-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-secondary mb-3">
            About the Property
          </h2>
          <p className="text-neutral leading-relaxed">{property.description}</p>
        </div>
      </div>

      {/* Comments */}
      <div className="px-10 max-lg:px-4 mt-6 pb-10">
        <div className="bg-white rounded-xl shadow p-6 h-full">
          <h2 className="text-xl font-bold text-secondary mb-4">
            Community Buzz ({comments.length})
          </h2>

          <div className="w-full h-full my-10 relative flex flex-col gap-4 items-end">
            <textarea
              name="textarea"
              placeholder="Ask a question or share your thoughts..."
              className="outline-0 border placeholder:text-xl text-xl rounded-md w-full h-full p-3 px-4 max-h-200 scrollbar-none"
            ></textarea>
            <button className="px-4 py-1 text-white text-xl font-semibold bg-primary rounded-lg">Post</button>
          </div>

          <div className="flex flex-col gap-4">
            {comments.length === 0 && (
              <p className="text-neutral text-sm">No comments yet.</p>
            )}
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-100 pb-4">
                <div className="w-full flex justify-between">
                  <div className="flex gap-3 w-full">
                    <div className="rounded-full p-1 bg-neutral/30 w-full max-w-7 h-7 flex-center">
                      <Icon icon="iconamoon:profile" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl font-semibold">{comment.user}</p>
                      <p className="text-md text-secondary w-full">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-neutral w-full max-w-20 text-end">
                    {comment.createdAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePropertyPage;

//  <div className="flex-between">
//                   <div className="flex justify-center items-start gap-3">
//
//                     <div className="">
//                       <span className="font-semibold text-secondary text-lg">{comment.user}</span>
//                       <p className="text-neutral mt-1">{comment.text}</p>
//                     </div>
//                   </div>
//                   <span className="text-xs text-neutral">
//                     {comment.createdAt}
//                   </span>
//                 </div>
