import { type ComponentPropsWithRef, forwardRef } from "react";

export const IconInfoCircle = forwardRef<
  SVGSVGElement,
  ComponentPropsWithRef<"svg">
>(({ ...props }, ref) => (
  <svg
    height="16"
    ref={ref}
    viewBox="0 0 20 16"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0C5.5625 0 2 3.59375 2 8C2 12.4375 5.5625 16 10 16C14.4062 16 18 12.4375 18 8C18 3.59375 14.4062 0 10 0ZM10 15C6.125 15 3 11.875 3 8C3 4.15625 6.125 1 10 1C13.8438 1 17 4.15625 17 8C17 11.875 13.8438 15 10 15ZM10 5.75C10.4062 5.75 10.75 5.4375 10.75 5C10.75 4.59375 10.4062 4.25 10 4.25C9.5625 4.25 9.25 4.59375 9.25 5C9.25 5.4375 9.5625 5.75 10 5.75ZM11.5 11H10.5V7.5C10.5 7.25 10.25 7 10 7H9C8.71875 7 8.5 7.25 8.5 7.5C8.5 7.78125 8.71875 8 9 8H9.5V11H8.5C8.21875 11 8 11.25 8 11.5C8 11.7812 8.21875 12 8.5 12H11.5C11.75 12 12 11.7812 12 11.5C12 11.25 11.75 11 11.5 11Z"
      fill="currentColor"
    />
  </svg>
));
IconInfoCircle.displayName = "@optiaxiom/react/IconInfoCircle";