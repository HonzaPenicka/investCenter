import { FunctionComponent } from 'react';

export const Burger: FunctionComponent<any> = (props) => {
  return (
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
