import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* 상단 메뉴 */}
      <div id = "메뉴">
        <ul>
          <li class = "tool" id = "first">ABOUT</li>
          <li class = "tool">BORAD</li>
          <li class = "tool">STUDY</li>
          <li class = "tool">APLLY</li>
          <li class = "tool">Q&A</li>
        </ul>
      </div>

      {/* 로고 및 CPU 슬로건 */}
      <div className = "로고">
        <img src="cpuLogo.png" style = {{width: "300px", height: "300px", display: "block", margin: "0 auto"}}></img>
        <div className = 'text'>
         <p>전북대학교 유일 IT 중앙동아리 CPU</p>
         <p style = { {fontStyle: "italic", fontSize: "1rem"}}>SINCE 1987</p>
        </div>
      </div>

      {/* 공지사항 게시판 */}
      <div id = "notice" style = {{float: "left", width: "70%", height: "500px"}}>
        <span >
          <span style = { {fontSize: "2rem", marginLeft: "2rem"}}>Notice</span>
          <span style = {{ fontSize: "2rem", float: "right",marginLeft: "15rem", marginRight: "2rem"}}>+</span>
          <hr style={{margin : "0rem 2rem 0rem 2rem", height: "1px", backgroundColor: "black", border: "0px"}}></hr>
          <span style = { {fontSize: "1rem", marginLeft: "2rem"}}>게시글이 없습니다.</span>
        </span>
      </div>

      {/* 로그인 폼 */}
      <div id = "login" style = {{backgrouncColor: "white", float: "right", width: "20%", height: "300px"}}>
        <form>
          <p >LOGIN</p>
          <div><input type = "text" placeholder='ID' style = {{backgroundColor: "#D9D9D9", border: "none", height: "40px", width: "250px", marginTop: "1rem", marginBottom: "1rem"}}></input></div>
          <div><input type = "password" placeholder='PASSWORD' style = {{backgroundColor: "#D9D9D9", border: "none",  height: "40px", width: "250px"}}></input></div>
          <div><button type = "submit"  style = {{backgroundColor: "rgb(131, 231, 232)", marginTop: "2rem", border: "none",  height: "40px", width: "250px"}}>LOG IN</button></div>
        </form>
      </div>

      {/* 사진 게시판 */}
      
      <div id = "photo" style = {{float: "left", width: "70%", height: "500px"}}>
        <span >
          <span style = { {fontSize: "2rem", marginLeft: "2rem"}}>CPU photo</span>
          <span style = {{ fontSize: "2rem", float: "right",marginLeft: "15rem", marginRight: "2rem"}}>+</span>
          <hr style={{margin : "0rem 2rem 0rem 2rem", height: "1px", backgroundColor: "black", border: "0px"}}></hr>
          <span style = { {fontSize: "1rem", marginLeft: "2rem"}}>게시글이 없습니다.</span>
        </span>
      </div>

      {/* 캘린더 */}
      <div id = "login" style = {{float: "right", width: "20%", height: "300px"}}>
          <p >CALENDAR</p>
      </div>

      {/* 회장 소개 */}
      <div id = "login" style = {{float: "left", width: "30%", height: "300px", marginLeft: "5rem"}}>
          <p >PRESIDENT</p>
          <hr style={{margin : "0rem 2rem 0rem 2rem", height: "1px", backgroundColor: "black", border: "0px"}}></hr>
      </div>

      {/* 부회장 소개 */}
      <div id = "login" style = {{float: "left", width: "30%", height: "300px", marginRight: "10rem"}}>
          <p >VICE PRESIDENT</p>
          <hr style={{margin : "0rem 2rem 0rem 2rem", height: "1px", backgroundColor: "black", border: "0px"}}></hr>
      </div>
      {/* 소개 게시판 */}
      
      <div id = "photo" style = {{float: "left", width: "70%", height: "500px"}}>
        <span >
          <span style = { {fontSize: "2rem", marginLeft: "2rem"}}>ABOUT US</span>
          <span style = {{ fontSize: "2rem", float: "right",marginLeft: "15rem", marginRight: "2rem"}}>+</span>
          <hr style={{margin : "0rem 2rem 0rem 2rem", height: "1px", backgroundColor: "black", border: "0px"}}></hr>
          <span style = { {fontSize: "1rem", marginLeft: "2rem"}}>게시글이 없습니다.</span>
        </span>
      </div>

      {/* copyright */}
      <div style = {{backgroundColor: "rgb(131, 231, 212)", float: "left", width: "100%", height: "50px", marginTop: "10rem", textAlign: "center"}}>
        <p>ⓒ CPU 전북대학교 제2학생회관 4층 DEVELOPED BY 멋진ㄷ웹</p>
      </div>


    </div>
    
  );
}

export default App;
