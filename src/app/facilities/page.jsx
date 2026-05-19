// import FacilityCard from "@/components/ui/facilityCard";
import { getAllSportFacilities } from "@/lib/data";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

const Facilities = async () => {
  const facilities = await getAllSportFacilities();
  return (
    <div className="grid grid-cols-3 mx-auto gap-2 my-4">
      {/* {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}/>)}
       */}
      {facilities.map((facility) => (
        <div
          className="bg-purple-200 m-1 text-black p-2 w-96 rounded-md"
          key={facility._id}
        >
          <h2>Facility name: {facility.name}</h2>
          <p>Facility type: {facility.facility_type}</p>
          <p>Location address: {facility.location.address}</p>
          <p>Price: ${facility.price_per_hour}</p>
          {/* {facility.location.coordinates.coordinates.map((coordinate, idx) => 
                    <p key={idx}>{coordinate}</p>)} */}
          <p>Latitude: {facility.location.coordinates.coordinates[0]}</p>
          <p>Longitude: {facility.location.coordinates.coordinates[1]}</p>
          <p>
            Facility location coordinate type:{" "}
            {facility.location.coordinates.type}
          </p>
          <p>Available slots: </p>
          {facility.available_slots.map((slot, idx) => (
            <p key={idx}>{slot}</p>
          ))}
          <p>Description: {facility.description}</p>
          <p>Owner email: {facility.owner_email}</p>
          <p>Facility booking count: {facility.booking_count}</p>
          <Link href={`/facilities/${facility._id}`}>
            <Button className={" bg-purple-400 rounded-md"} variant="outline">
              See details...
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
