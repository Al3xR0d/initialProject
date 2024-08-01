export const Filtres = ({ setCurrentFilter }) => {
  return (
    <>
      <button onClick={() => setCurrentFilter('all')}>All</button>
      <button onClick={() => setCurrentFilter('deleted')}>Deleted</button>
      <button onClick={() => setCurrentFilter('inWork')}>In work</button>
    </>
  );
};
