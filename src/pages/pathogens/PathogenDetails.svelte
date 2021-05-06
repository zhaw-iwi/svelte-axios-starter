<script>
    import axios from "axios";

    export let params = {};
    let pathogenId;

    $: {
        pathogenId = params.id;
        getPathogen();
    }
    let pathogen = {};

    function getPathogen() {
        console.log("getpa")
        axios
            .get("http://localhost:8080/infections/pathogens/" + pathogenId)
            .then((response) => {
                pathogen = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Pathogen (ID: {pathogenId})</h1>
    <p>ICD-10: {pathogen.icd10}</p>
    <p>Incubation: {pathogen.incubation}</p>
</div>
