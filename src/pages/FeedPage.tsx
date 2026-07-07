import { useEffect, useState } from "react";
import FilterBtn from "../components/FilterBtn";
import PropCard from "../components/PropCard";
import { filter } from "../types";
import type { CommentType, property, LikesType } from "../types";

const FeedPage = () => {
  const [properties, setProperties] = useState<property[]>([]);
  const [likes, setLikes] = useState<LikesType[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [sort, setSort] = useState("All Properties");

  const currentUserId = 1;

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await fetch("/frontend_db.json");

        if (!response.ok) {
          throw new Error("Failed to fetch Properties");
        }

        const data = await response.json();
        setProperties(data.properties);
        setComments(data.comments);
        setLikes(data.likes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProps();
  }, []);

  const sortedProperties =
    sort === "All Properties"
      ? properties
      : properties.filter((prop) => prop.type === sort);

  const handleLikes = (propertyId: number) => {
    const hasLiked = likes.some(
      (like) => like.propertyId === propertyId && like.userId === currentUserId,
    );

    if (hasLiked) {
      setLikes(
        likes.filter(
          (like) =>
            !(like.propertyId === propertyId && like.userId === currentUserId),
        ),
      );
    } else {
      setLikes([
        ...likes,
        {
          id: Date.now(),
          propertyId,
          userId: currentUserId,
        },
      ]);
    }
  };

  return (
    <div className="my-4 max-lg:px-2 w-screen min-h-screen overflow-hidden">
      <section className="flex-between max-lg:gap-4 max-md:flex-col w-full h-full bg-tertiary px-10 max-lg:px-0">
        <div>
          <h2 className="text-2xl font-bold text-secondary">
            Explore Premium Listings
          </h2>
          <p className="text-neutral">
            Currated properties for the modern professional.
          </p>
        </div>
        <div className="flex-center gap-3 max-md:gap-0">
          {filter.map((name) => (
            <FilterBtn setSort={setSort} sort={sort} key={name} name={name} />
          ))}
        </div>
      </section>
      <section className="w-full h-full flex-center px-10 mt-10">
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedProperties.map((propData) => {
            const commentsCount = comments.filter(
              (comment) => comment.propertyId === propData.id,
            ).length;

            const likesCount = likes.filter(
              (like) => like.propertyId === propData.id,
            ).length;

            const liked = likes.some(
              (like) =>
                like.propertyId === propData.id &&
                like.userId === currentUserId,
            );

            return (
              <PropCard
                key={propData.id}
                prop={propData}
                likeCount={likesCount}
                commentCount={commentsCount}
                liked={liked}
                onLike={handleLikes}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FeedPage;
