const GistHeader = () => {
  return (
    <div className="gist_header">
      <div className="img">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="user" />
        <div className="heading">
          <div className="info">
            <span>Developer</span>&nbsp;/&nbsp;
            <span>
              <b>file_name.cpp</b>
            </span>
          </div>
          <div className="history">Created 7hrs Ago</div>
        </div>
        <div className="controls">
          <div>
            <i className="fa-regular fa-pen-to-square"></i> <span>Edit</span>
          </div>
          <div>
            <i className="fa-regular fa-trash-can"></i> <span>Delete</span>
          </div>
          <div>
            <i className="fa-regular fa-star"></i> <span>Star</span>
          </div>
          <div>
            <input type="text" name="" id="" />
          </div>
          <div>
            <i className="fa-solid fa-code-branch"></i>
            <span>Fork</span>
          </div>
          <div>
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GistHeader;
