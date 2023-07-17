import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Programmer",
          "Web Developer",
          "React Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
