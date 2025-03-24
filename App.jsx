const CelebCard = ({ name, imageUrl }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <img 
          src={`assets/img/${imageUrl}`} 
          alt={name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="mt-4 text-xl font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};

const TopCelebs = () => {
  const celebs = [
    { id: 1, name: "Celebrity 1", imageUrl: "celeb1.jpg" },
    { id: 2, name: "Celebrity 2", imageUrl: "celeb2.jpg" },
    { id: 3, name: "Celebrity 3", imageUrl: "celeb3.jpg" },
    { id: 4, name: "Celebrity 4", imageUrl: "celeb4.jpg" },
    { id: 5, name: "Celebrity 5", imageUrl: "celeb5.jpg" },
    { id: 6, name: "Celebrity 6", imageUrl: "celeb6.jpg" },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Top Celebs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {celebs.map((celeb) => (
          <CelebCard key={celeb.id} name={celeb.name} imageUrl={celeb.imageUrl} />
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            CelebBattles
          </h1>
        </div>
      </header>
      <main>
        <TopCelebs />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root')); 