export default function Card(props) {
  console.log(props)
  return (
    <div className="card my-2 flex flex-col md:flex-row text-black py-2">
      <img
        className="card--image block w-auto md:w-40 h-52 object-cover rounded-md m-auto md:mr-4"
        src={props.item.imageUrl}
        alt=""
      />

      <div className="card--content flex flex-col justify-center ">
        <p className="text-center md:text-left">
          <svg
            className="inline mr-1"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
              fill="#F55A5A"
            />
          </svg>
          <span className="uppercase"> {props.item.location}</span>
          <a className="text-gray-500 underline ml-2" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </p>
        <h2 className="text-2xl font-bold mb-2 text-center md:text-left">{props.item.title}</h2>
        <p> <strong> {props.item.startDate} - {props.item.endDate}</strong></p>
        <p>
          {props.item.description}
        </p>
      </div>
    </div>
  );
}
