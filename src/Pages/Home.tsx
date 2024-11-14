import { useState } from 'react'

function Home() {

  const [searchQuery, setSearchQuery] = useState<any>('');
  const [answer, setAnswer] = useState('');

  const droneData = [
    {
      "image_id": "001",
      "timestamp": "2024-09-24 14:31:05",
      "latitude": "44.4280° N",
      "longitude": "110.5885° W",
      "altitude_m": 50,
      "heading_deg": 270,
      "file_name": "YNP_001.jpg",
      "camera_tilt_deg": -15,
      "focal_length_mm": 24,
      "iso": 100,
      "shutter_speed": "1/500",
      "aperture": "f/2.8",
      "color_temp_k": 5600,
      "image_format": "RAW+JPEG",
      "file_size_mb": 25.4,
      "drone_speed_mps": 5.2,
      "battery_level_pct": 98,
      "gps_accuracy_m": 0.5,
      "gimbal_mode": "Follow",
      "subject_detection": "Yes",
      "image_tags": ["Geyser", "Steam"]
    },
    {
      "image_id": "002",
      "timestamp": "2024-09-24 14:33:22",
      "latitude": "44.4279° N",
      "longitude": "110.5890° W",
      "altitude_m": 75,
      "heading_deg": 180,
      "file_name": "YNP_002.jpg",
      "camera_tilt_deg": -30,
      "focal_length_mm": 35,
      "iso": 200,
      "shutter_speed": "1/1000",
      "aperture": "f/4",
      "color_temp_k": 5200,
      "image_format": "RAW+JPEG",
      "file_size_mb": 27.1,
      "drone_speed_mps": 3.8,
      "battery_level_pct": 95,
      "gps_accuracy_m": 0.6,
      "gimbal_mode": "Free",
      "subject_detection": "No",
      "image_tags": ["Forest", "River"]
    },
    {
      "image_id": "003",
      "timestamp": "2024-09-24 14:36:47",
      "latitude": "44.4275° N",
      "longitude": "110.5888° W",
      "altitude_m": 100,
      "heading_deg": 90,
      "file_name": "YNP_003.jpg",
      "camera_tilt_deg": 0,
      "focal_length_mm": 50,
      "iso": 400,
      "shutter_speed": "1/2000",
      "aperture": "f/5.6",
      "color_temp_k": 5800,
      "image_format": "RAW+JPEG",
      "file_size_mb": 26.8,
      "drone_speed_mps": 2.5,
      "battery_level_pct": 91,
      "gps_accuracy_m": 0.4,
      "gimbal_mode": "Tripod",
      "subject_detection": "Yes",
      "image_tags": ["Wildlife", "Elk"]
    },
    {
      "image_id": "004",
      "timestamp": "2024-09-24 14:40:13",
      "latitude": "44.4277° N",
      "longitude": "110.5882° W",
      "altitude_m": 120,
      "heading_deg": 0,
      "file_name": "YNP_004.jpg",
      "camera_tilt_deg": -45,
      "focal_length_mm": 70,
      "iso": 800,
      "shutter_speed": "1/4000",
      "aperture": "f/8",
      "color_temp_k": 6000,
      "image_format": "RAW+JPEG",
      "file_size_mb": 28.3,
      "drone_speed_mps": 1.2,
      "battery_level_pct": 87,
      "gps_accuracy_m": 0.7,
      "gimbal_mode": "Follow",
      "subject_detection": "No",
      "image_tags": ["Canyon", "Waterfall"]
    },
    {
      "image_id": "005",
      "timestamp": "2024-09-24 14:44:56",
      "latitude": "44.4282° N",
      "longitude": "110.5879° W",
      "altitude_m": 80,
      "heading_deg": 315,
      "file_name": "YNP_005.jpg",
      "camera_tilt_deg": -10,
      "focal_length_mm": 24,
      "iso": 100,
      "shutter_speed": "1/250",
      "aperture": "f/2.8",
      "color_temp_k": 5400,
      "image_format": "RAW+JPEG",
      "file_size_mb": 24.9,
      "drone_speed_mps": 6.7,
      "battery_level_pct": 82,
      "gps_accuracy_m": 0.5,
      "gimbal_mode": "Free",
      "subject_detection": "Yes",
      "image_tags": ["Thermal Pool", "Bacteria"]
    }
  ]

  // this function POSTs the searchQuery to the backend and saves the response in the state variable called answer.
  const postQueryForAnswer = async () => {
    const options: object = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchQuery)
    };
    try {
      const response = await fetch(import.meta.env.VITE_DATA_SERVER_URL, options);
      const result = await response.json();
      const answerFromBackend = result;
      console.log(`Answer received from the backend:`, answerFromBackend);
      setAnswer(answerFromBackend);
      return;
    }
    catch (error: any) {
      console.log('error', error);
    }
  };

  //this function sets the current value of the search bar to a state variable called searchQuery
  const handleInputChange = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  }

  //this function submits the searchQuery to the server and calls getAllData() which populates all of the data as the response in the h2
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`You submitted the following query: ${searchQuery}`)
    postQueryForAnswer();
  };

  return (
    <>
      <div id='outer-div'>

        <div id='header-div'>
          <h1>Drone Photography Log</h1>
        </div>

        <div id='p-div'>
          <p className='p-div-p'>Welcome to the Drone Photography Log, where you can learn about the images your drone has taken.</p>
          <p className='p-div-p'>Ask for specific data, and then press search.</p>
        </div>

        <form className="query-form" onSubmit={handleSubmit} >
          <input id='query-field' type="text" onChange={handleInputChange} placeholder="What is the battery level of the drone during the last image?" name="search" />
          <button id='search-button' className='button-18' type="submit">Search</button>
        </form>

        {JSON.stringify(answer) && <h2 id='response'>The answer to your question is: {answer}</h2>}

        <div id='table-div'>
          <table className='styled-table'>
            <tr key={"header"} className='active-row'>
              {/* maps through droneData's objects and returns a row for each object. Then maps through the objects' values and returns them as <td> elements */}
              {Object.keys(droneData[0]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
            {/* maps through droneData's first object's keys and displays them as table headers */}
            {droneData.map((obj) => (
              <tr key={obj.image_id} className='active-row'>
                {Object.values(obj).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>

      </div>
    </>
  )
}

export default Home