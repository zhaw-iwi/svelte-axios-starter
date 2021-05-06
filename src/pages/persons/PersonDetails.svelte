<script>
    import axios from "axios";

    export let params = {};

    let personId;

    $: {
        personId = params.id;
        getPerson();
    }

    let person = {};

    function getPerson() {
        axios
            .get("http://localhost:8080/infections/persons/" + personId)
            .then((response) => {
                person = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Person (ID: {personId})</h1>
    <p>Name: {person.name}</p>
    <p>Birthdate: {person.birthdate}</p>
</div>
