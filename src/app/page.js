import { getAllSportFacilities } from "@/lib/data";
import Image from "next/image";
import NotFoundPage from "./not-found";

export default async function Home() {
    //const res = await fetch('http://localhost:5000/facilities');
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    // const data = await res.json();
    // console.log(data, 'facilities data!');
    const facilities = await getAllSportFacilities();
    // if (!facilities) {
    //     NotFoundPage();
        
    // }
    console.log(facilities);
  return (
    <div>
        <h2>Facilities data set!</h2>
        <p>{facilities.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl  mx-auto gap-2">
            {facilities.map(facility => 
                <div className="bg-purple-200 m-1 text-black p-2 w-96 rounded-md" key={facility._id}>
                    <h2>Facility name: {facility.name}</h2>
                    <p>Facility type: {facility.facility_type}</p>
                    <p>Location address: {facility.location.address}</p>
                    <p>Price: ${facility.price_per_hour}</p>
                    {/* {facility.location.coordinates.coordinates.map((coordinate, idx) => 
                    <p key={idx}>{coordinate}</p>)} */}
                    <p>Latitude: {facility.location.coordinates.coordinates[0]}</p>
                    <p>Longitude: {facility.location.coordinates.coordinates[1]}</p>
                    <p>Facility location coordinate type: {facility.location.coordinates.type}</p>
                    <p>Available slots: </p>
                    {facility.available_slots.map((slot, idx) =>
                        <p key={idx}>{slot}</p>
                    )}
                    <p>Description: {facility.description}</p>
                    <p>Owner email: {facility.owner_email}</p>
                    <p>Facility booking count: {facility.booking_count}</p>
                </div>

            )}
        </div>

    </div>
  );
}
