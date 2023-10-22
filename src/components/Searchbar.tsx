const Searchbar = (props: any) => {
  const { setSearchPokemon } = props;

  const onChangeHandler = (e: any) => {
    setSearchPokemon(e.target.value);
    if(e.target.value.length === 0){
      setSearchPokemon("all");
      
    }console.log(e.target.value)
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
    </div>
  );
};

export default Searchbar;
