function Home() {

  return (
    <>
      <div>
        <h1>Drone Photography Log</h1>
        <p>Welcome to the Drone Photography Log, where you can see all the images your drone has taken.</p>
        <p>To access specific data about each image, ask a question like "What is the battery level of the drone during the last image?" and hit search.</p>
        
        <form className="query-form">
          <input id='query-field' type="text" placeholder="What is the battery level of the drone during the last image?" name="search" />
          <button id='search-button' type="submit">Search</button>
        </form>

        <h2 id='response'>The answer to your question will go here</h2>
      </div>
    </>
  )
}

export default Home