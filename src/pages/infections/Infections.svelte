<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let infections = [];

    onMount(() => {
        getInfections();
    });

    function getInfections() {
        axios
            .get("http://localhost:8080/infections/infections")
            .then((response) => {
                infections = response.data;
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Infections</h1>
    <div>
        <a href="#/create-infection">+ Add Infection</a>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Time</th>
                <th>Pathogen ID</th>
                <th>Person ID</th>
            </tr>
        </thead>
        <tbody>
            {#each infections as infection}
                <tr>
                    <td>
                        {infection.id}
                    </td>
                    <td>
                        {infection.location}
                    </td>
                    <td>
                        {infection.time}
                    </td>
                    <td>
                        {infection.pathogen.id}
                    </td>
                    <td>
                        {infection.person.id}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    
</div>

<style>

</style>
