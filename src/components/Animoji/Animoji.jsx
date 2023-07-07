/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Animoji = ({
  number,
  className,
  imageClassName,
  image = "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-51-1@2x.png",
}) => {
  return (
    <div className={`animoji ${number} ${className}`}>
      {(number === "eight" ||
        number === "eighty-three" ||
        number === "eleven" ||
        number === "fifteen" ||
        number === "fifty-eight" ||
        number === "fifty-nine" ||
        number === "fifty-six" ||
        number === "fifty-three" ||
        number === "forty-eight" ||
        number === "forty-six" ||
        number === "forty-three" ||
        number === "fourteen" ||
        number === "ninety-one" ||
        number === "ninety" ||
        number === "one-hundred-and-fifteen" ||
        number === "seven" ||
        number === "sixteen" ||
        number === "sixty-four" ||
        number === "sixty-one" ||
        number === "sixty-three" ||
        number === "sixty-two" ||
        number === "sixty" ||
        number === "ten" ||
        number === "thirteen" ||
        number === "thirty-eight" ||
        number === "twelve" ||
        number === "twenty-eight" ||
        number === "twenty-five" ||
        number === "twenty-four" ||
        number === "twenty-six" ||
        number === "twenty-three") && (
        <img
          className={`img ${imageClassName}`}
          alt="Image"
          src={
            number === "eight"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-4@2x.png"
              : number === "ten"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-6@2x.png"
              : number === "eleven"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-7@2x.png"
              : number === "twelve"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-8@2x.png"
              : number === "thirteen"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-9@2x.png"
              : number === "fourteen"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-10@2x.png"
              : number === "fifteen"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-11@2x.png"
              : number === "sixteen"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-12@2x.png"
              : number === "twenty-three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-19@2x.png"
              : number === "twenty-four"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-21@2x.png"
              : number === "twenty-five"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-22@2x.png"
              : number === "twenty-six"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-29@2x.png"
              : number === "twenty-eight"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-31@2x.png"
              : number === "thirty-eight"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-41@2x.png"
              : number === "forty-three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-46@2x.png"
              : number === "forty-six"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-49@2x.png"
              : number === "forty-eight"
              ? image
              : number === "fifty-three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-56@2x.png"
              : number === "fifty-six"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-59@2x.png"
              : number === "fifty-eight"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-61@2x.png"
              : number === "fifty-nine"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-62@2x.png"
              : number === "sixty"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-63@2x.png"
              : number === "sixty-one"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-69@2x.png"
              : number === "sixty-two"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-70@2x.png"
              : number === "sixty-three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-71@2x.png"
              : number === "sixty-four"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-72@2x.png"
              : number === "eighty-three"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-86@2x.png"
              : number === "ninety"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-96@2x.png"
              : number === "ninety-one"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-98@2x.png"
              : number === "one-hundred-and-fifteen"
              ? "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-119@2x.png"
              : "https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-3@2x.png"
          }
        />
      )}
    </div>
  );
};

Animoji.propTypes = {
  number: PropTypes.oneOf([
    "thirty-nine",
    "forty-two",
    "sixty-three",
    "sixty-seven",
    "one-hundred-and-eight",
    "sixty-eight",
    "forty-six",
    "fifty-five",
    "sixty-five",
    "sixty-one",
    "twenty-nine",
    "one-hundred-and-three",
    "ninety-five",
    "one-hundred-and-twelve",
    "twenty",
    "one-hundred-and-five",
    "fifty-six",
    "eighty-nine",
    "thirty-six",
    "forty-nine",
    "eighty-one",
    "fifteen",
    "one-hundred",
    "fifty-eight",
    "thirty-two",
    "eleven",
    "thirty-one",
    "eighty-six",
    "ninety",
    "six",
    "ninety-two",
    "twenty-one",
    "fifty-four",
    "ninety-six",
    "eight",
    "one-hundred-and-seven",
    "sixty-nine",
    "four",
    "one",
    "eighty-four",
    "ninety-seven",
    "one-hundred-and-sixteen",
    "thirty-three",
    "one-hundred-and-thirteen",
    "three",
    "fifty-seven",
    "ninety-three",
    "sixty-six",
    "twenty-six",
    "eighty",
    "fifty-one",
    "two",
    "nineteen",
    "eighty-eight",
    "ninety-four",
    "forty-seven",
    "one-hundred-and-four",
    "five",
    "forty-one",
    "sixty-four",
    "one-hundred-and-eleven",
    "twenty-seven",
    "seventy-seven",
    "eighteen",
    "one-hundred-and-six",
    "sixty",
    "sixty-two",
    "one-hundred-and-fifteen",
    "thirty",
    "nine",
    "thirty-eight",
    "fifty",
    "ninety-one",
    "seventy-four",
    "forty-four",
    "seventy-five",
    "eighty-three",
    "one-hundred-and-one",
    "sixteen",
    "twenty-five",
    "thirty-four",
    "forty-eight",
    "one-hundred-and-two",
    "one-hundred-and-ten",
    "fifty-three",
    "fifty-two",
    "seventeen",
    "ten",
    "twelve",
    "seventy-nine",
    "eighty-seven",
    "twenty-two",
    "seventy-one",
    "twenty-eight",
    "twenty-three",
    "forty-three",
    "seventy-three",
    "seventy-eight",
    "thirteen",
    "twenty-four",
    "seventy-six",
    "seventy-two",
    "thirty-five",
    "thirty-seven",
    "forty",
    "one-hundred-and-fourteen",
    "ninety-eight",
    "fourteen",
    "seven",
    "forty-five",
    "eighty-two",
    "eighty-five",
    "ninety-nine",
    "one-hundred-and-nine",
    "seventy",
    "fifty-nine",
  ]),
  image: PropTypes.string,
};
