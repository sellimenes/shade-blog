"use client";

import { Angry, Frown, Heart, Laugh, ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  postId: string;
};

const Reactions = ({ postId }: Props) => {
  const [reactions, setReactions] = useState({
    like: 0,
    dislike: 0,
    love: 0,
    laugh: 0,
    angry: 0,
    sad: 0,
  });

  const getReactions = async (postId: string) => {
    const res = await axios.get("/api/reactions", {
      params: {
        postId,
      },
    });
    setReactions({
      like: res.data.like,
      dislike: res.data.dislike,
      love: res.data.love,
      laugh: res.data.laugh,
      angry: res.data.angry,
      sad: res.data.sad,
    });
  };

  const sendReaction = async (postId: string, reactionName: string) => {
    const res = await axios.patch("/api/reactions", {
      postId,
      reactionName,
    });
    getReactions(postId);
  };

  useEffect(() => {
    getReactions(postId);
  }, [postId]);
  return (
    <div className="lg:sticky top-5 h-full flex lg:flex-col gap-5">
      <div
        onClick={() => sendReaction(postId, "like")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <ThumbsUp size={24} className="text-primary" />
        <span className="text-sm opacity-80">{reactions.like}</span>
      </div>
      <div
        onClick={() => sendReaction(postId, "dislike")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <ThumbsDown size={24} className="text-primary" />
        <span className="text-sm opacity-80">{reactions.dislike}</span>
      </div>
      <div
        onClick={() => sendReaction(postId, "love")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <Heart size={24} className="fill-red-500 text-red-500" />
        <span className="text-sm opacity-80">{reactions.love}</span>
      </div>
      <div
        onClick={() => sendReaction(postId, "laugh")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <Laugh size={24} className="fill-primary-foreground text-yellow-500" />
        <span className="text-sm opacity-80">{reactions.laugh}</span>
      </div>
      <div
        onClick={() => sendReaction(postId, "angry")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <Angry size={24} className="fill-primary-foreground text-yellow-500" />
        <span className="text-sm opacity-80">{reactions.angry}</span>
      </div>
      <div
        onClick={() => sendReaction(postId, "sad")}
        className="flex flex-col justify-center items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <Frown size={24} className="fill-primary-foreground text-yellow-500" />
        <span className="text-sm opacity-80">{reactions.sad}</span>
      </div>
    </div>
  );
};

export default Reactions;
