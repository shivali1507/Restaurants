const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;

  const showHalfStar = remainder >= 0.5;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.146 6.68h6.843a.75.75 0 0 1 .66 1.108l-5.548 4.236 2.147 6.68a.75.75 0 0 1-1.16.843L10 15.937l-5.088 3.51a.75.75 0 0 1-1.16-.843l2.147-6.68-5.548-4.236a.75.75 0 0 1 .66-1.108h6.843L10 1z"
          />
        </svg>
      ))}

      {showHalfStar && (
        <div className="relative w-5 h-5">
          <svg
            className="absolute w-5 h-5 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.146 6.68h6.843a.75.75 0 0 1 .66 1.108l-5.548 4.236 2.147 6.68a.75.75 0 0 1-1.16.843L10 15.937l-5.088 3.51a.75.75 0 0 1-1.16-.843l2.147-6.68-5.548-4.236a.75.75 0 0 1 .66-1.108h6.843L10 1z"
            />
          </svg>
          <div
            className="absolute top-0 left-0 w-5 h-5 overflow-hidden"
            style={{ width: "50%" }}
          >
            <svg
              className="w-5 h-5 fill-current text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.146 6.68h6.843a.75.75 0 0 1 .66 1.108l-5.548 4.236 2.147 6.68a.75.75 0 0 1-1.16.843L10 15.937l-5.088 3.51a.75.75 0 0 1-1.16-.843l2.147-6.68-5.548-4.236a.75.75 0 0 1 .66-1.108h6.843L10 1z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarRating;
