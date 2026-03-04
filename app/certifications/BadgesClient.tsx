"use client";

import { hideRoverTip } from "@/components/Rover";
import { certifications } from "./certificationsData";
import { Badge } from "@/components/Badge";

export function BadgesClient() {
  return (
    <>
      {certifications.map((c, index) => (
        <Badge key={index} handleClick={() => hideRoverTip("cert")} {...c} />
      ))}
    </>
  );
}
