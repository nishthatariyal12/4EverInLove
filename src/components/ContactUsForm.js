import { useState, React } from "react";
import { notification, Spin } from "antd";
import axios from "axios";
function ContactUsForm() {
    const [api, contextHolder] = notification.useNotification();
    const [loader, setLoader] = useState(false);
    const openNotification = (message, description) => {
        api.open({
            message: message,
            description: description,
        });
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        setLoader(true);
        axios
            .post(
                "https://api.gngtest.site/api/submit-contact-us-request?locale=en",
                formData
            )
            .then((response) => {
                setLoader(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                openNotification("Success", "Data sent successfully");
            })
            .catch((error) => {
                console.log(error);
                setLoader(false);
                openNotification("Error occuring", "");
            });
    };

    const onChangeHandler = (key, value) => {
        setFormData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    return (
        <>
            <div className="mx-[4%] md:mx-[7%] lg:mx-[14%] py-6">
                {contextHolder}
                <div className="w-full bg-white rounded lg:px-8 px-4 pt-6 pb-8 mb-4">
                    <h1 className="lg:text-[96px] text-[50px] text-[#292930] font-bold  font-dm tracking-tight pb-8 text-center">
                        Contact Us
                    </h1>

                    <form
                        className=" lg:px-8 px-4 pt-6 pb-8 mb-4"
                        onSubmit={(e) => submitHandler(e)}
                    >
                        <div className="mb-6">
                            <label
                                className="font-medium font-poppins text-[16px] text-[#292930] mb-2"
                                htmlFor="username"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded font-poppins text-[14px] w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter Your Name"
                                required
                                onChange={(e) => {
                                    onChangeHandler("name", e.target.value);
                                }}
                                value={formData?.name}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="font-medium font-poppins text-[16px] text-[#292930] mb-2">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border font-poppins text-[14px] rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Enter Your Email"
                                required
                                onChange={(e) => {
                                    onChangeHandler("email", e.target.value);
                                }}
                                value={formData?.email}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="font-medium font-poppins text-[16px] text-[#292930] mb-2">
                                Phone
                            </label>
                            <input
                                className="shadow appearance-none border font-poppins text-[14px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="number"
                                placeholder="Enter Your Number"
                                required
                                onChange={(e) => {
                                    onChangeHandler("phone", e.target.value);
                                }}
                                value={formData?.phone}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="font-medium font-poppins text-[16px] text-[#292930] mb-2">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border font-poppins text-[14px] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter Your Mobile Number"
                                rows={8}
                                required
                                onChange={(e) => {
                                    onChangeHandler("message", e.target.value);
                                }}
                                value={formData?.message}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="font-bold bg-[#FAB8C4] text-[#2522BA] font-medium font-poppins  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {loader ? <Spin /> : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>{" "}
            </div>{" "}
        </>
    );
}

export default ContactUsForm