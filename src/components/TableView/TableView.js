const TableView = () => {
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <td className="text-center">
              <input type="checkbox" name="check_all" id="check_all" />
            </td>
            <td className="text-center">Name</td>
            <td className="text-center">Date</td>
            <td className="text-center">Time</td>
            <td className="text-center">Keyword</td>
            <td className="text-center">Notebook Name</td>
            <td className="text-center"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td className="text-center column-name">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="user"
                  />
                </div>
                <div>Carlos Bass</div>
              </div>
            </td>
            <td className="text-center">4/26/2059</td>
            <td className="text-center">6:26 PM</td>
            <td className="text-center">NOEgdMKO</td>
            <td className="text-center">Ruiz</td>
            <td className="text-center column-controls">
              <div className="d-flex justify-content-around">
                <div className="div">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="div">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td className="text-center column-name">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="user"
                  />
                </div>
                <div>Stella Rice</div>
              </div>
            </td>
            <td className="text-center">12/28/2038</td>
            <td className="text-center">13:19 PM</td>
            <td className="text-center">tteltwi</td>
            <td className="text-center">Edwards</td>
            <td className="text-center column-controls">
              <div className="d-flex justify-content-around">
                <div className="div">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="div">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td className="text-center column-name">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="user"
                  />
                </div>
                <div>Hester Howard</div>
              </div>
            </td>
            <td className="text-center">2/10/2061</td>
            <td className="text-center">5:37 PM</td>
            <td className="text-center">ahiEFxVaJH</td>
            <td className="text-center">Saunders</td>
            <td className="text-center column-controls">
              <div className="d-flex justify-content-around">
                <div className="div">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="div">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td className="text-center column-name">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="user"
                  />
                </div>
                <div>Floyd Fowler</div>
              </div>
            </td>
            <td className="text-center">11/21/2027</td>
            <td className="text-center">4:30 PM</td>
            <td className="text-center">CrbjlcKrHdob</td>
            <td className="text-center">Jensen</td>
            <td className="text-center column-controls">
              <div className="d-flex justify-content-around">
                <div className="div">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="div">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td className="text-center column-name">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    alt="user"
                  />
                </div>
                <div>May Allison</div>
              </div>
            </td>
            <td className="text-center">5/1/2094</td>
            <td className="text-center">5:38 PM</td>

            <td className="text-center">AXntee</td>
            <td className="text-center">Peterson</td>
            <td className="text-center column-controls">
              <div className="d-flex justify-content-around">
                <div className="div">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="div">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
