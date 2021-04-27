import {Result} from './result';


export interface Characters {
    info:    Info;
    results: Resultados[];
}

interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

interface Resultados {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

interface Gender {
    Female : "Female",
    Male : "Male",
    Unknown : "unknown",
}

interface Location {
    name: string;
    url:  string;
}

interface Species {
    Alien : "Alien",
    Human : "Human",
}

interface Status {
    Alive : "Alive",
    Dead : "Dead",
    Unknown : "unknown",
}
