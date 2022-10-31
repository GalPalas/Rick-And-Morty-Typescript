const CharactersFilter = () => {
  return (
    <div className="container">
      <div className="row text-center mb-3">
        <div className="col">
          <label htmlFor="name" className="lead">
            Filter by name
          </label>
          <input
            type="text"
            name="name"
            className="form-control shadow-none"
            placeholder="Rick Sanchez"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="gender" className="lead">
            Filter by gender
          </label>
          <select className="form-select shadow-none" name="gender">
            <option value="none">None</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="species" className="lead">
            Filter by species
          </label>
          <select className="form-select shadow-none" name="species">
            <option value="none">None</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="status" className="lead">
            Filter by status
          </label>
          <select className="form-select shadow-none" name="status">
            <option value="none">None</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharactersFilter;
