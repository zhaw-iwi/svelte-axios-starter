<script>
    let pathogen = {
        icd10: "",
        incubation: null,
    };

    function addPathogen() {
        // TODO: POST with axios (like in CreatePerson.svelte)

        console.log("adding pathogen: " + JSON.stringify(pathogen));

        // reset input fields
        pathogen.icd10 = "";
        pathogen.incubation = null;
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a pathogen</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">ICD-10</label>
            <input
                class="form-control"
                type="text"
                bind:value={pathogen.icd10}
            />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Incubation</label>
            <input
                class="form-control"
                type="number"
                bind:value={pathogen.incubation}
            />
        </div>
        <button on:click={addPathogen} type="button" class="btn btn-primary">
            Add Pathogen
        </button>
    </form>
</div>
