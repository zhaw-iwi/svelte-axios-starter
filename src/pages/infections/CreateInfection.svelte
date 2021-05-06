<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let infection = {
        location: "",
        time: null,
        pathogen_id: null,
        person_id: null,
    };

    let person_ids = [];

    let pathogen_ids = [];

    onMount(() => {
        getPersonIds();
        getPathogenIds();
    });

    function getPersonIds() {
        axios
            .get("http://localhost:8080/infections/persons")
            .then((response) => {
                person_ids = [];
                for (let person of response.data) {
                    person_ids.push(person.id);
                }
                infection.person_id = person_ids[0];
            });
    }

    function getPathogenIds() {
        axios
            .get("http://localhost:8080/infections/pathogens")
            .then((response) => {
                pathogen_ids = [];
                for (let pathogen of response.data) {
                    pathogen_ids.push(pathogen.id);
                }
                infection.pathogen_id = pathogen_ids[0];
            });
    }

    function addInfection() {
        axios
            .post("http://localhost:8080/infections/infections", infection)
            .then((response) => {
                alert("Infection added");
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error)
                alert(error)
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add an infection</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Location</label>
            <input
                class="form-control"
                type="text"
                bind:value={infection.location}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Time</label>
            <input
                class="form-control"
                type="number"
                bind:value={infection.time}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Pathogen ID</label>
            <select bind:value={infection.pathogen_id} class="form-select">
                {#each pathogen_ids as id}
                    <option>{id}</option>
                {/each}
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Person ID</label>
            <select bind:value={infection.person_id} class="form-select">
                {#each person_ids as id}
                    <option>{id}</option>
                {/each}
            </select>
        </div>
        <button on:click={addInfection} type="button" class="btn btn-primary">
            Add Infection
        </button>
    </form>
</div>
