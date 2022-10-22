import React from "react";

export default function Bar(props) {
    function alert() {
        console.log("asasa");
    }

    return (
        <div className="bar">
            <span><a onClick={() => alert()} style={{textDecoration: props.name ,color:"white"}} >GIỚI THIỆU</a></span>
            <span>TUYỂN SINH</span>
            <span>ĐÀO TẠO</span>
            <span>NGHIÊN CỨU KHOA HỌC</span>
            <span>HỢP TÁC QUỐC TẾ</span>
            <span>SINH VIÊN</span>
        </div>
    );
}

