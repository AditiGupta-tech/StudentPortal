const cardData = [ 
  { title: "GPA", value: "3.85", highlight: true }, 
  { title: "Attendance", value: "90%", highlight: false },
  { title: "Subjects", value: "12 / 15", highlight: false }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-10 transition-colors duration-300 ease-in-out">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Your Academic Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index} 
            className={`
              rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center
              transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
              ${card.highlight
                ? "bg-gradient-to-br from-pink-500 to-pink-700 text-white" 
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
              }
            `}
          >
            <h3 className="text-xl font-semibold mb-2">
              {card.title}
            </h3>
            <p className={`text-4xl font-bold ${card.highlight ? 'text-white' : 'text-pink-600 dark:text-pink-400'}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}