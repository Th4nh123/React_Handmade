import React,{useState} from "react";

export default function Bar(props) {
    class Welcome extends React.Component {
        constructor(props) {
            super(props);
            this.name = {name1: "GIỚI THIỆU"};
            // [this.mainboard,this.setMainboard] = useState("ĐÀO TẠO");
        };
        render() {
            return (
                <>
                <span>{this.name.name1}</span>
                <span>{this.props.name2}</span>
                </>
            );
        }
    }
    return (
        <div className={props.class} id="bar">
            <Welcome name2="TUYỂN SINH" />
            <span>ĐÀO TẠO</span>
            <span>NGHIÊN CỨU KHOA HỌC</span>
            <span>HỢP TÁC QUỐC TẾ</span>
            <span>SINH VIÊN</span>
            <span></span>
        </div>
    );
}

