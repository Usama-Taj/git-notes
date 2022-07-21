const AddGist = () => {
  return (
    <form className="add_gist">
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Enter Gist Description..."
      />
      <input
        type="text"
        name="file_name"
        id="file_name"
        placeholder="Enter file name..."
      />
      <textarea
        name="file_content"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter File Content..."
      ></textarea>
      <button>Add File</button>
      <button>Create Gist</button>
    </form>
  );
};

export default AddGist;
