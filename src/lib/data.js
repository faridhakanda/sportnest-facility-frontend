export const getAllSportFacilities = async() => {
    // try {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    //     if (!res.ok) {
    //         return null;
    //     }
    //     const data = await res.json();
    //     return data;
    // } catch(error) {
    //     console.error("Backend is offline: ", error);
    //     return null;
    // }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const data = await res.json();
    return data;
    
}

export const getFacilityDetailById = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`);
    const data = await res.json();
    return data;
}