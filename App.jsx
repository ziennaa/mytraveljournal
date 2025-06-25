import Header from "./components/Header"
import Japan from "./components/Entry"
import data from "./data"
export default function App(){
  const entryele = data.map((entry)=>{
    return(
      <Japan
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
      />
    )
  })
  return(
    <>
    <Header/>
    <main className="container">
      {entryele}
    </main>
    </>
  )
}
