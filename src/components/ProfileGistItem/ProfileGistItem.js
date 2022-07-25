import React, { Component } from "react";
import avatar_one from "assets/images/img_avatar.png";
import {
  GistItem,
  GistHeader,
  GistPorfileImageArea,
  GistProfileImage,
  GistInfo,
  GistHistory,
  GistControls,
  GistControlLabel,
  Card,
  CardContent,
  Table,
} from "./ProfileGistItem.styles";
class ProfileGistItem extends Component {
  render() {
    return (
      <GistItem>
        <GistHeader>
          <GistPorfileImageArea>
            <GistProfileImage
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="user"
            />
            <div>
              <GistInfo>
                <span>Developer</span>&nbsp;/&nbsp;
                <span>
                  <b>file_name.cpp</b>
                </span>
              </GistInfo>
              <GistHistory>Created 7hrs Ago</GistHistory>
            </div>
            <GistControls>
              <div>
                <i className="fa-regular fa-star"></i>
                <GistControlLabel>Star</GistControlLabel>
              </div>
              <div>
                <input type="text" name="" id="" />
              </div>
              <div>
                <i className="fa-solid fa-code-branch"></i>
                <GistControlLabel>Fork</GistControlLabel>
              </div>
              <div>
                <input type="text" name="" id="" />
              </div>
            </GistControls>
          </GistPorfileImageArea>
        </GistHeader>
        <div>
          <Card>
            <CardContent>
              <Table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{`#include <iostream>`}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>{`using namespace std;`}</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>{`int main() {`}</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>{`int i, n; bool is_prime = true;`}</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      {` cout <$lt &quot;Enter a positive integer: &quot;; cin
              >&gt n;`}
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      {` // 0 and 1 are not prime numbers if (n == 0 || n == 1) {
              is_prime = false; }`}
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      {`   // loop to check if n is prime for (i = 2; i <= n/2; ++i) {
              if (n % i == 0) { is_prime = false; break; } }`}
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      {`   if (is_prime) cout <$lt n <$lt &quot; is a prime
              number&quot;; else cout <$lt n <$lt &quot; is not a
              prime number&quot;;`}
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>{`return 0; }`}</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>{`// Quit`}</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </GistItem>
    );
  }
}

export default ProfileGistItem;
