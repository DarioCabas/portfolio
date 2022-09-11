import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

type Variant = 'light' | 'primary';

interface LogoProps {
  variant?: Variant;
}

export const Logo = styled((props: LogoProps) => {
  const { variant, ...other } = props;
  
  return (
    <svg
      width="10mm"
      height="10mm"
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        style={{
          fill: "#54c3bc",
          fillOpacity: 1,
          stroke: "none",
        }}
      >
        <path
          style={{
            color: "#000",
            fill: "#54c3bc",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform="matrix(.17234 0 0 .17234 -129.116 -74.774)"
          d="M1060.592 525.715c-8.927.002-18.01 1.682-26.89 5.306-31.88 13.012-51.493 50.562-36.259 83.875 5.616 12.28 15.725 21.923 27.883 27.077 12.158 5.154 26.878 5.572 39.863-1.575 8.637-4.752 15.215-12.567 18.473-21.931 3.258-9.364 2.614-21.129-4.637-30.27-4.363-5.5-9.898-8.466-16.916-9.605-3.508-.57-7.617-.53-11.787 1.408-4.17 1.938-7.794 6.124-9.304 10.727a10.394 10.394 0 0 0 6.634 13.115 10.394 10.394 0 0 0 11.381-4.615c1.266.345 3.845 2.064 3.705 1.888 2.546 3.209 2.74 6.358 1.291 10.522-1.448 4.164-5.123 8.492-8.863 10.55-7.041 3.876-14.487 3.716-21.726.647-7.24-3.07-13.76-9.295-17.092-16.582-9.861-21.564 3.525-47.135 25.209-55.984 28.95-11.816 62.032 5.963 72.924 34.796 13.708 36.291-8.52 76.902-44.534 89.762-24.968 8.916-53.684 4.161-75.205-11.545a10.394 10.394 0 0 0-.662.104c-18.91-15.17-42.612-23.949-67.125-23.496a97.883 97.883 0 0 0-31.187 5.716c-46.492 16.602-75.072 68.819-56.99 116.686 14.803 39.19 59.628 63.267 100.226 46.697 31.879-13.01 51.492-50.56 36.258-83.875-5.615-12.279-15.725-21.922-27.883-27.076s-26.877-5.572-39.863 1.574c-8.636 4.753-15.215 12.568-18.473 21.932-3.258 9.364-2.614 21.129 4.637 30.27 4.363 5.5 9.898 8.466 16.916 9.605 3.508.57 7.617.53 11.787-1.408 4.17-1.938 7.794-6.125 9.305-10.727a10.394 10.394 0 0 0-6.635-13.115 10.394 10.394 0 0 0-11.381 4.615c-1.266-.346-3.845-2.064-3.705-1.888-2.546-3.21-2.74-6.358-1.291-10.522 1.449-4.164 5.123-8.492 8.863-10.55 7.041-3.876 14.487-3.716 21.727-.647s13.759 9.295 17.091 16.582c9.862 21.563-3.525 47.134-25.209 55.984-28.95 11.816-62.032-5.963-72.923-34.797-13.709-36.29 8.519-76.902 44.533-89.761 43.606-15.571 91.755 11.137 106.539 54.351 3.738 10.926 5.344 22.596 4.82 34.172a99.696 99.696 0 0 0-1.076 19.14c.395 9.66 2.22 19.402 5.637 28.97 16.6 46.491 68.818 75.07 116.685 56.99 39.191-14.804 63.267-59.629 46.698-100.227-13.012-31.879-50.562-51.492-83.875-36.258-12.28 5.615-21.922 15.725-27.077 27.883-5.154 12.158-5.572 26.877 1.575 39.863 4.752 8.636 12.567 15.215 21.931 18.473 9.364 3.258 21.13 2.614 30.27-4.637 5.5-4.363 8.466-9.898 9.605-16.916.57-3.508.53-7.617-1.408-11.787-1.938-4.17-6.124-7.794-10.726-9.305a10.394 10.394 0 0 0-13.116 6.635 10.394 10.394 0 0 0 4.616 11.381c-.346 1.266-2.065 3.845-1.89 3.705-3.208 2.546-6.357 2.74-10.52 1.291-4.165-1.449-8.493-5.123-10.551-8.863-3.876-7.041-3.716-14.487-.647-21.727s9.295-13.759 16.582-17.091c21.564-9.862 47.135 3.525 55.985 25.209 11.815 28.95-5.963 62.032-34.797 72.923-36.291 13.709-76.902-8.519-89.762-44.533-4.17-11.68-5.283-23.777-3.846-35.498a10.394 10.394 0 0 0 .272-.967c.046-.59.057-1.183.094-1.775 4.349-27.615 22.901-52.77 49.37-64.922a10.394 10.394 0 0 0 1.583-.928c41.2-19.682 65.11-68.249 48.199-113.017-11.566-30.618-41.454-52.011-73.336-52.004zm-38.058 172.17a102.994 102.994 0 0 0 16.701 2.122 109.122 109.122 0 0 0-10.041 13.523c-.08-.24-.145-.483-.227-.723a106.434 106.434 0 0 0-6.433-14.921zm38.164-204.998a104.106 104.106 0 0 0-39.398 7.725c-42.617 17.393-70.421 64.1-59.565 110.492-11.42-2.84-23.272-4.258-35.318-4.045a130.885 130.885 0 0 0-41.686 7.613c-63.009 22.5-101.576 93.17-76.644 159.172 20.972 55.521 84.509 89.476 143.31 65.477 14.137-5.77 26.587-14.825 36.608-25.965 22.717 62.677 93.138 100.955 158.945 76.097 55.521-20.972 89.476-84.509 65.477-143.31-12.165-29.806-38.677-52.39-69.383-59.574 26.95-32.36 37.834-77.414 21.566-120.48-16.384-43.376-57.22-73.143-103.912-73.202z"
        />
      </g>
    </svg>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf<Variant>(['light', 'primary'])
};
