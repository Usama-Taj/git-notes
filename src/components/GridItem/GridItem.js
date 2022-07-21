const GridItem = () => {
  return (
    <div className="card">
      <div className="card-content">
        <table>
          <tbody>
            <tr>
              <td>1</td>
              <td>{`#include &lt;iostream&gt;`}</td>
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
                {` cout &lt;$lt &quot;Enter a positive integer: &quot;; cin
            &gt;&gt n;`}
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
                {`   if (is_prime) cout &lt;$lt n &lt;$lt &quot; is a prime
            number&quot;; else cout &lt;$lt n &lt;$lt &quot; is not a
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
        </table>
      </div>
      <div>
        <hr />
      </div>
      <div className="card-footer ">
        <div>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="user"
          />
        </div>
        <div>
          <div className="heading">
            <div className="info">
              <span>Developer</span>&nbsp;/&nbsp;
              <span>
                <b>file_name.cpp</b>
              </span>
            </div>
            <div className="history">Created 7hrs Ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
