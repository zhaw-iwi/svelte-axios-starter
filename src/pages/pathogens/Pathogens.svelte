<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let pathogens = [];

    onMount(() => {
        getPathogens();
    });

    function getPathogens() {
        axios
            .get("http://localhost:8080/infections/pathogens")
            .then((response) => {
                pathogens = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Pathogens</h1>
    <a href="#/create-pathogen">+ Add Pathogen</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>ICD-10</th>
                <th>Incubation</th>
            </tr>
        </thead>
        <tbody>
            {#each pathogens as pathogen}
                <tr>
                <td>
                    <a href={"#/pathogens/" + pathogen.id}>
                        {pathogen.id}
                    </a>
                </td>
                <td>
                    {pathogen.icd10}
                </td>
                <td>
                    {pathogen.incubation}
                </td>
            </tr>
            {/each}
            
        </tbody>
    </table>
</div>
