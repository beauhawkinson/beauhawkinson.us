"use client";

import { Plinth } from "@beauhawkinson/plinth";

import { useIsMobile } from "@/lib/utils/use-mobile";

const PlinthContent = () => {
  const isMobile = useIsMobile();

  return (
    <Plinth
      count={isMobile ? 4 : 7}
      cardHeight={isMobile ? 80 : 120}
      cardWidth={isMobile ? 200 : 284}
      faceStyles={{
        front: "border-0",
      }}
    />
  );
};

export default PlinthContent;
