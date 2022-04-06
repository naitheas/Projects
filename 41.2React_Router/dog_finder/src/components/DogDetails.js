import React from "react";
import { useParams } from "react-router-dom";
import ShowDetails from './ShowDetails';

{/* <DogDetails /> shows all of the info about a single dog*/}
const DogDetails = ({dogs}) => {
    const { name } = useParams();
    if (name) {
        {/*// check dog array for name to derive the current dog*/}
        const currDog = dogs.find(
            (dog) => dog.name.toLowerCase() === name.toLowerCase()
        );
    {/* render detail component with currDog instead of entire list*/}
        return <ShowDetails dog={currDog} />;
        }
    return null;
};

export default DogDetails;