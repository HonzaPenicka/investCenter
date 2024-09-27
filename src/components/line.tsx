import { FunctionComponent } from 'react';

export const Line: FunctionComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      {...props}
    >
      <path
        d="M44.910179138183594,277.84429931640625C91.61676406860352,277.24549865722656,267.6646563212077,292.8143666585286,325.1496887207031,274.2514953613281C382.63472112019855,255.6886240641276,367.66468302408856,179.04192097981772,389.82037353515625,166.46707153320312C411.97606404622394,153.89222208658853,411.1776428222656,224.55090268452963,458.0838317871094,198.80239868164062C504.9900207519531,173.05389467875162,635.7285614013672,43.11377271016438,671.2575073242188,11.97604751586914"
        fill="none"
        stroke-width="2"
        stroke='url("#SvgjsLinearGradient1001")'
        stroke-linecap="round"
        stroke-dasharray="0 0"
        stroke-opacity="1"
        transform="matrix(1,0,0,1,-5.684341886080802e-14,0)"
      ></path>
      <defs>
        <linearGradient
          id="SvgjsLinearGradient1001"
          gradientTransform="rotate(0, 0.5, 0.5)"
        >
          <stop stop-color="hsl(272, 99%, 54%)" offset="0"></stop>
          <stop stop-color="hsl(113, 98%, 50%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
