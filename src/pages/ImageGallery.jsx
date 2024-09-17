
import Avatar from '../Components/Avatar';

function ImageGallery() {
  const users = [
    {
      img: "https://img.freepik.com/free-photo/full-shot-people-with-electric-scooters_23-2149356791.jpg?t=st=1726130559~exp=1726134159~hmac=c529aa5bcf677778472ed5604d6c79f35648be1cf97cc2da0eb63f8fa3d2d254&w=360",
      username: "star",
      title: "Electric-Scooters",
      bgColor: "gry",
      textColor: "white",
      price: "$200",
      description: "Stylish trainers for a modern look.",
      reviews: "⭐⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260959.jpg?t=st=1726130454~exp=1726134054~hmac=808aa846c9122a385a74ceea4292ff6eec480b282ed15015a3ff6d4dca06d652&w=360",
      username: "star",
      title: "Shart",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$50",
      description: "Comfortable blue t-shirt for casual wear.",
      reviews: "⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/free-vector/realistic-style-fitness-trackers_23-2148509776.jpg?ga=GA1.1.785182117.1707713114&semt=ais_hybrid",
      username: "star",
      title: "Watch",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$100",
      description: "High-tech smartwatch with advanced features.",
      reviews: "⭐⭐⭐⭐⭐"
    },
    {
      img: "https://img.freepik.com/premium-photo/finely-groomed-impeccably-dressed-gentleman_1254475-3948.jpg?w=740",
      username: "star",
      title: "formal dress",
      bgColor: "gry", // Consistent background color
      textColor: "white",
      price: "$85",
      description: "Elegant blue suit for formal occasions.",
      reviews: "⭐⭐⭐⭐⭐"
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="bg-gray-900 mt-2 p-4 flex flex-wrap justify-center">
        {users.map((data, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 m-2 rounded-lg shadow-lg"
            style={{ backgroundColor: data.bgColor }}
          >
            <img src={data.img} alt={data.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-bold mb-1" style={{ color: data.textColor }}>
              {data.title}
            </h2>
            <p className="mb-1" style={{ color: data.textColor }}>
              {data.description}
            </p>
            <p className="mb-2" style={{ color: data.textColor }}>
              Price: {data.price}
            </p>
            <p className="mb-2" style={{ color: data.textColor }}>
              Reviews: {data.reviews}
            </p>
            <button
              className="bg-gray-500 text-white py-1 px-4 rounded hover:text-gray-900 hover:bg-gray-300"
              onClick={() => console.log(data)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
