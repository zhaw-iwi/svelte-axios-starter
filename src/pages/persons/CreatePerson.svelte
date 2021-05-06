<script>
    import axios from "axios";

    let person= {
        name: "",
        birthdate: null,
      };


    function addPerson() {
        axios
            .post("http://localhost:8080/infections/persons", person)
            .then((response) => {
                alert("Person added");
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error)
                alert(error)
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a person</h1>

    <form>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input class="form-control" type="text" bind:value={person.name} />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Birthdate</label>
        <input class="form-control" type="number" bind:value={person.birthdate} />
      </div>
      <button on:click={addPerson} type="button" class="btn btn-primary">
        Add Person
      </button>
    </form>
  </div>