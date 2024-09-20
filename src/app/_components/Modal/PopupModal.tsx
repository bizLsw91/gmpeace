"use client"
import {CheckboxChangeEvent} from "antd/es/checkbox";
import React, { useEffect, useState } from "react";
import { Modal, Button, Checkbox } from "antd";
import Cookies from "js-cookie";

interface PopupModalProps {
    title: string;
    content: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ title, content }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);

    useEffect(() => {
        // 쿠키에서 "dontShowToday" 값을 확인하고 팝업 표시 여부 결정
        const cookieValue = Cookies.get("dontShowToday");
        if (!cookieValue) {
            setIsModalVisible(true); // 쿠키가 없으면 팝업을 보여줌
        }
    }, []);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        if(e.target.checked){
            const expires = new Date();
            expires.setDate(expires.getDate() + 1);
            Cookies.set("dontShowToday", "true", { expires });
            setIsModalVisible(false);
        }
    };

    return (
        <Modal
            title={title}
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null} // 확인 버튼과 닫기 버튼을 숨김
        >
            <div className=" p-4">
                <div className="mb-8">{content}</div>
                <div className="flex justify-end">
                    <Checkbox onChange={handleCheckboxChange}>오늘 하루 보지 않기</Checkbox>
                </div>
            </div>
        </Modal>
    );
};

export default PopupModal;
