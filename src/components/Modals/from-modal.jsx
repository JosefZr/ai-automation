import { MODAL_TYPE, useModal } from "@/hooks/useModalStore"
import styled from "styled-components"
import { Dialog, DialogContent } from "../ui/dialog"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import emailjs from "@emailjs/browser"
const Text = styled.div`
    width: 100%;
    overflow-wrap: break-word;
    color: rgb(255, 255, 255);
    margin: 6px auto 4px;
    padding: 0px;
    font-size: 17px;
    font-style: normal;
    text-align: center;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    border-style: none;
    border-width: 1px;
    border-radius: 0px;
    letter-spacing: 0px;
    text-decoration: none;
    font-family: "Handjet", sans-serif;
    font-size: 38px;
    font-weight: 400;
    text-transform: uppercase;
`
const P = styled.div`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  overflow-wrap: inherit;
  text-align: inherit;
  text-decoration: inherit;
  width: inherit;
`
const H1 = styled.h1`
    width: 100%;
    overflow-wrap: break-word;
    color: rgb(255, 255, 255);
    margin: 6px auto 10px;
    padding: 0px;
    font-size: 19px;
    font-style: normal;
    text-align: center;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    border-style: none;
    border-width: 1px;
    border-radius: 0px;
    letter-spacing: 0px;
    text-decoration: none;
`
const Input = styled.input`
    color: rgb(68, 68, 68);
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    font-size: 16px;
    max-width: 450px;
    margin-top: 0px;
    min-height: 10px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    border-color: rgb(0, 0, 0);
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 10px;
    background-color: rgb(233, 233, 233);
`
const TextArea = styled.textarea`
    color: rgb(68, 68, 68);
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    max-width: 450px;
    margin-top: 0px;
    min-height: 80px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    border-color: rgb(0, 0, 0);
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 10px;
    background-color: rgb(233, 233, 233);
    resize: vertical;
`
const Button = styled.button`
color: rgb(0, 0, 0);
    width: 100%;
    display: flex;
    outline: none;
    font-size: 33px;
    max-width: 360px;
    font-style: normal;
    margin-top: 0px;
    min-height: 42px;
    align-items: center;
    font-family: Oswald, "Arial Narrow", "MS UI Gothic", sans-serif;
    font-weight: 400;
    line-height: 1;
    border-color: rgb(142, 142, 142);
    border-style: solid;
    border-width: 4px;
    border-radius: 12px;
    margin-top: 15px;
    letter-spacing: 0px;
    justify-content: center;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
`
const Button2 = styled.button`
  color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    outline: none;
    font-size: 15px;
    max-width: 360px;
    font-style: normal;
    margin-top: 0px;
    min-height: 42px;
    align-items: center;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
    line-height: 1.2;
    border-color: rgb(0, 0, 0);
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 0px;
    letter-spacing: 0px;
    justify-content: center;
    text-decoration: none;
    background-color: rgb(0, 0, 0);
`
export default function FormModal() {
    const { isOpen, onClose, type } = useModal()
    const isModalOpen = isOpen && type === MODAL_TYPE.FORM_MODAL;
    const [isSent, setIsSent] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        try {
            console.log("Sending data:", data);
            const response = await emailjs.send(
                "service_oh0ztep",
                "template_n5tijrs",
                data,
                "DkWbveA2Q_euRGHHf"
            );
            console.log("EmailJS response:", response);
            toast.success('Message sent successfully!');
            setIsSent(true);
        } catch (error) {
            console.error('Full error:', error);
            toast.error(`Failed: ${error.text}`);
        }
    };
    const SERVICES = [
        { id: '1', name: 'Professional Website' },
        { id: '2', name: 'AI Chat Assistant' },
        { id: '3', name: 'AI Phone Assistant' },
        { id: '4', name: 'Auto-Scheduling & Reminders' },
        { id: '5', name: 'AI Receptionist (Text or Voice)' },
        { id: '6', name: 'Client Database + Follow-Ups' },
    ];
    return (
        <Dialog open={isModalOpen} onOpenChange={onClose} >
            <DialogContent className="bg-black border-my-black max-w-md text-center z-50"
                style={{
                    margin: "auto",
                    display: 'grid',
                    maxWidth: "500px",
                    minWidth: "275px",
                    minHeight: "unset",
                    gridTemplateColumns: "unset",
                    borderRadius: "0",
                    maxHeight: "100%",
                    overflow: "scroll",
                    scrollbarWidth: "none",
                    zIndex: "1000"
                }}>
                {!isSent ? (
                    <div
                        style={{
                            color: "black",
                            width: "100%",
                            padding: "10px",
                            display: "block",
                            maxWidth: "unset",
                            minWidth: "unset",
                            maxHeight: "unset",
                            minHeight: "180px",
                            borderStyle: "0px",
                            borderRadius: "0px",
                            backgroundSize: "cover",
                            backgroundColor: "black",
                            backgroundImage: "unset",
                            backgroundRepeat: "repeat-y",
                            backgroundPosition: "center center",
                            margin: "0",
                        }}>
                        <div className="w-full my-auto">
                            <div className="items-center flex flex-col">
                                <Text>
                                    <P>
                                        Please fill out the form below
                                    </P>
                                </Text>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="items-center flex flex-col">
                                    <Input
                                        name="fullName"
                                        {...register("fullName", {
                                            required: "Full Name is required"
                                        })}
                                        placeholder="Dr. Full Name *"
                                        type="text"
                                        style={{ marginTop: "18px", marginBottom: "10px" }}
                                    />
                                    {errors.fullName && (
                                        <span className="text-red-500 text-sm mt-1 mb-2">
                                            {errors.fullName.message}
                                        </span>
                                    )}



                                    <Input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        name="email"
                                        placeholder="Enter Email Address *"
                                        type="email"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm mt-1 mb-2">
                                            {errors.email.message}
                                        </span>
                                    )}
                                    <Input
                                        {...register("company", {
                                            required: "company is required"
                                        })}
                                        placeholder="company name"
                                        type="text"
                                        name="company"
                                    />
                                    {errors.location && (
                                        <span className="text-red-500 text-sm mt-1 mb-2">
                                            {errors.company.message}
                                        </span>
                                    )}

                                    <Input
                                        {...register("phone", {
                                            validate: (value) => {
                                                // Optional field - only validate if value exists
                                                if (!value) return true;

                                                // Check if value contains only digits
                                                if (!/^\d+$/.test(value)) {
                                                    return "Only numbers are allowed";
                                                }

                                                return true;
                                            }
                                        })}
                                        placeholder="Phone Number"
                                        type="tel"
                                        name="phone"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        onChange={(e) => {
                                            e.target.value = e.target.value.replace(/\D/g, '');
                                        }}
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-sm mt-1 mb-2">
                                            {errors.phone.message}
                                        </span>
                                    )}

                                    <TextArea
                                        {...register("question")}
                                        name="question"
                                        placeholder="What is your most important question?"
                                    />
                                    <Input
                                        {...register("service", {
                                            required: "Please select a service"
                                        })}
                                        name="service"
                                        as="select" // Change input to select
                                        style={{ marginTop: "18px", marginBottom: "10px" }}
                                    >
                                        <option value="">Select a Service *</option>
                                        {SERVICES.map((service) => (
                                            <option key={service.id} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </Input>
                                    {errors.service && (
                                        <span className="text-red-500 text-sm mt-1 mb-2">
                                            {errors.service.message}
                                        </span>
                                    )}
                                </div>
                                <div className="items-center flex flex-col">
                                    <Button type="submit">
                                        <p className="py-2">SUBMIT</p>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>) : (
                    <div
                        style={{
                            color: "black",
                            width: "100%",
                            padding: "10px",
                            display: "block",
                            maxWidth: "unset",
                            minWidth: "unset",
                            maxHeight: "unset",
                            minHeight: "180px",
                            borderStyle: "0px",
                            borderRadius: "0px",
                            backgroundSize: "cover",
                            backgroundColor: "black",
                            backgroundImage: "unset",
                            backgroundRepeat: "repeat-y",
                            backgroundPosition: "center center",
                            margin: "0",
                        }}>
                        <div className="w-full my-auto">

                            <div className="items-center flex flex-col">
                                <Text>
                                    <P>
                                        Congratulations!
                                    </P>
                                </Text>
                            </div>
                            <div className="items-center flex flex-col">

                            </div>

                            <div className="items-center flex flex-col">
                                <H1>
                                    You&apos;re In. Application Submitted.
                                    <br /><br />
                                    We will review it, and contact you asap. <br /><br />
                                    Dr Truth
                                </H1>

                            </div>

                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
