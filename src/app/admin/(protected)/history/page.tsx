"use client"
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {Category} from "@/types/admin";
import {Button, Form, List, Modal, Select} from "antd";
import {useForm} from "antd/lib/form/Form";
import {useState} from "react";

const categoriesMock = [
    {id: 1, name: '카테고리 1'},
    {id: 2, name: '카테고리 2'},
    {id: 3, name: '카테고리 3'},
]; // 예시 카테고리 목록
interface ISampleFormValue {
}


const AdminHistory = () => {
    const [form] = useForm();
    // formData는 아래에 전송데이터를 보여주기위한 state값. 실제 작업시 지우고 사용.
    const [formData, setFormData] = useState<ISampleFormValue>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>(categoriesMock); // 카테고리 상태
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); // 선택된 카테고리
    const [layout, setLayout] = useState('board');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleFinish = (formValue: ISampleFormValue) => {
        // 이곳에 실제 폼 전송 로직 작성.
        setFormData(formValue);
        form.resetFields();
    };

    const handleAddCategory = () => {
        // 카테고리 추가 로직
        console.log('카테고리 추가');
    };

    const handleEditCategory = () => {
        // 카테고리 수정 로직
        if (selectedCategory) {
            console.log(`카테고리 수정: ${selectedCategory.name}`);
        }
    };

    const handleDeleteCategory = () => {
        // 카테고리 삭제 로직
        if (selectedCategory) {
            setCategories(categories.filter(cat => cat.id !== selectedCategory.id));
            console.log(`카테고리 삭제: ${selectedCategory.name}`);
            setSelectedCategory(null); // 선택된 카테고리 초기화
        }
    };

    return (
        <div className={'history pt-10'}>
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">History</div>
                <DefaultForm<ISampleFormValue>
                    form={form}
                    initialValues={{
                        layout: 'board',
                        select: "2023",
                        category: "all",
                        inputNumber: 0,
                        switch: true,
                        slider: 50,
                        radioGroup: "a",
                        radioButton: "b",
                        checkbox: ["A"],
                        rate: 3,
                    }}
                    onFinish={handleFinish}
                >
                    <FormSection title="설정" description=" ">
                        <FormGroup title="레이아웃 유형">
                            <Form.Item name="layout">
                                <Select style={{width: 120}} onChange={(value)=>setLayout(value)}>
                                    <Select.Option value="board">게시판</Select.Option>
                                    {/*<Select.Option value="carousel">캐러셀</Select.Option>*/}
                                </Select>
                            </Form.Item>
                        </FormGroup>
                        {layout === 'carousel' &&
                            <>
                                <FormGroup title="년도">
                                    <Form.Item name="select">
                                        <Select style={{width: 120}}>
                                            <Select.Option value="2023">3회 2023년</Select.Option>
                                            <Select.Option value="2022">2회 2022년</Select.Option>
                                            <Select.Option value="2021">1회 2021년</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </FormGroup>
                                <FormGroup title="카테고리">
                                    <div className="flex gap-3">
                                        <Form.Item name="category">
                                            <Select style={{width: 200}}>
                                                <Select.Option value="all">전체</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Button type={"primary"} style={{height: '30px', fontSize: 'medium'}}
                                                onClick={showModal}>편집</Button>
                                        <Modal title="카테고리 편집" open={isModalOpen} onOk={handleOk}
                                               onCancel={handleCancel}>
                                            {/* 상단 버튼 영역 */}
                                            <div className="flex justify-between mb-4">
                                                <Button type="primary" onClick={handleAddCategory}>추가</Button>
                                                <Button type="default" onClick={handleEditCategory}
                                                        disabled={!selectedCategory}>수정</Button>
                                                <Button type="primary" danger className="bg-red-500"
                                                        onClick={handleDeleteCategory}
                                                        disabled={!selectedCategory}>삭제</Button>
                                            </div>

                                            {/* 카테고리 목록 박스 */}
                                            <div className="overflow-auto"
                                                 style={{maxHeight: '300px', maxWidth: '100%'}}>
                                                <List
                                                    dataSource={categories}
                                                    renderItem={item => (
                                                        <List.Item
                                                            className={selectedCategory?.id === item.id ? 'bg-gray-100' : ''}
                                                            onClick={() => setSelectedCategory(item)} // 클릭 시 선택된 카테고리 변경
                                                        >
                                                            {item.name}
                                                        </List.Item>
                                                    )}
                                                />
                                            </div>
                                        </Modal>
                                    </div>
                                </FormGroup>
                            </>
                        }
                    </FormSection>
                    <FormSection title="설정" description=" ">
                    </FormSection>
                </DefaultForm>
            </div>
        </div>
    );
};

export default AdminHistory;
