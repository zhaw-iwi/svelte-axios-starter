// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte"

import Infections from "./pages/infections/Infections.svelte"
import CreateInfection from "./pages/infections/CreateInfection.svelte"

import Persons from "./pages/persons/Persons.svelte"
import PersonDetails from "./pages/persons/PersonDetails.svelte"
import CreatePerson from "./pages/persons/CreatePerson.svelte"

import Pathogens from "./pages/pathogens/Pathogens.svelte"
import PathogenDetails from "./pages/pathogens/PathogenDetails.svelte"
import CreatePathogen from "./pages/pathogens/CreatePathogen.svelte"

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/demo': DemoPage,

    // infections
    '/infections': Infections,
    '/create-infection': CreateInfection,
    
    // persons
    '/persons': Persons,
    '/persons/:id': PersonDetails,
    '/create-person': CreatePerson,

    // pathogens
    '/pathogens': Pathogens,
    '/pathogens/:id': PathogenDetails,
    '/create-pathogen': CreatePathogen,
}