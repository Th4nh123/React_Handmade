import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bar from './components/content';
import logo from './logo512.png'

function Headerleft({ name }) {
  const university = "TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI";
  return (
    <div className="left">
      <img src="https://huce.edu.vn/theme1/images/logo/logo_trans.png" alt="" height="70" width="70" />
      <div className="element1">{university}</div>
      <div className="element2">{name}</div>
    </div>
  )
}

function Main() {
  return (
    <div class="main">
      <img width="100%" height="100%" src="https://huce.edu.vn/images57/portal-1/slider/Banerchinhthuc001.jpg" />
    </div>
  )
}

function SecondMain(props) {
  function mouse() {
    console.log("asasas")
  }
  return (
    <div class="center2">
      <img height="100%" width="100%" src={props.src} onMouseOver={mouse()} />
    </div>
  )
}

function HeaderRight() {
  const [Data, setData] = React.useState("fa fa-car");
  const Text = ["Tìm kiếm", "English", "Các ứng dụng", "Đăng nhập"];
  const headerright = Text.map(index => {
    return (<span>{index}</span>);
  })
  console.log(Data);
  // function set() {
    // setData("fa fa-apple")
  // }
  console.log(Data);
  // setData("fas fa-clock")
  return (
    <div class="right">
      <i class={Data}></i>
      {headerright}
      <span>
        {/* <a onClick={set()} style={{textDecoration: "none",color:"white"}} >GIỚI THIỆU</a> */}
      </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div class="header">
      <Headerleft name="Hanoi University Of Civil Engineering" />
      <HeaderRight />
    </div>
    <Bar />
    <Main />
    <div className='main2'>
      <SecondMain src="https://huce.edu.vn/images57/portal-1/Chuy%C3%AAn%20m%E1%BB%A5c%20n%E1%BB%95i%20b%E1%BA%ADt/92a36514-4e79-44b1-befc-68e0d7956f82.jpg" />
      <SecondMain src="https://huce.edu.vn/images57/portal-1/Chuy%C3%AAn%20m%E1%BB%A5c%20n%E1%BB%95i%20b%E1%BA%ADt/846d2718-aa07-4840-8d6b-9867c58a833f.jpg" />
      <SecondMain src="https://huce.edu.vn/images57/portal-1/Chuy%C3%AAn%20m%E1%BB%A5c%20n%E1%BB%95i%20b%E1%BA%ADt/ded70e8b-906e-45e2-acd8-bea7cd354c92.jpg" />
    </div>
  </>
);



// document.getElementById('root').append(JSON.stringify(element));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
