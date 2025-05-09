import styled from "styled-components";
import "../../index.css"
import LeftContent from "../LeftContent";
import RightVideo from "../RightVideo";
import SmallLeftContent from "../SmallLeftContent";
import WideLeftShades from "../Shades/WideLeftShades";
import WideRightShades from "../Shades/WideRightShades";
import SmallLeftShades from "../Shades/SmallLeftShades";
import SmallRightShades from "../Shades/SmallRightShades";
import { size } from "@/lib/mediaQuerys";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MODAL_TYPE, useModal } from "@/hooks/useModalStore";
const Special = styled.h1`
    color: hsla(0, 0%, 100%, .21);
    font-size: 10px;
    line-height: 30px;
    letter-spacing: -3%;
    @media screen and (max-width: 991px) {
        display: none;
    }
`

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 30%;
  height: 100vh;
  background-color: rgba(26, 26, 26, 0.2); /* Slightly darker but more transparent */
  backdrop-filter: blur(10px); /* Strong blur for glass effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  z-index: 997;
  padding: 6rem 2rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $isOpen }) => ($isOpen ? "0 0 15px rgba(0, 0, 0, 0.3)" : "none")};
  border-right: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for glass effect */

  @media screen and (max-width: ${size.tablet}) {
    width: 70%;
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2); /* Very transparent */
  z-index: 996;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(3px); /* Light blur for background */
  -webkit-backdrop-filter: blur(3px); /* For Safari */
`
const MenuItem = styled.div`
  color: ${props => props.$active ? 'var(--redClaire)' : 'var(--white)'};
  font-size: 1.1rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: var(--redClaire);
    transform: translateX(10px);
  }
  &.active {
    color: var(--redClaire);
  }
`
const MenuHeader = styled.div`
  color: var(--redClaire);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow for better readability on glass */
`
const Notification = styled.div`
    z-index: 999;
    color: #fff;
    text-align: center;
    letter-spacing: 0;
    text-transform: uppercase;
    font-size: .88rem;
    font-weight: 500;
`
const PaddingGlobal = styled.div`
    justify-content: center;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    display: flex;
    position: relative;
`
export default function Hero() {
    const { onOpen } = useModal();
    const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
    const params = useParams()

    const toggleMenu = () => {
        setIsLeftMenuOpen(!isLeftMenuOpen)
    }
    const closeMenu = () => {
        setIsLeftMenuOpen(false)
    }
    const menu = [
        {
            id: "Your ",
            name: "Your Dental Network",
            route: "https://buildydn.com"
        },
        {
            id: "Marketing",
            name: "Marketing 1.2.3",
            route: "https://buildydn.com/#/growthSupport"
        },
        {
            id: "Free",
            name: "Free Guide",
            route: "https://buildydn.com/#/growthSupport"
        }
    ]
    return (
        <div className="" style={{ position: "relative", fontFamily: "'Funnel Display', sans-serif" }}>
            <img
                src="/ai/carbon_bg.webp"
                alt="carbon fiber bg"
                width="1736"
                height="943"
                loading="lazy"
                className="max-h-[100%] h-[100%] opacity-5 w-full object-cover top-0 left-0 pointer-events-none"
                style={{ position: "absolute" }}
            />
            {/* top bar */}
            <Notification >
                <PaddingGlobal className="hash-background">
                    <div >
                        THE PRICE OF YDN WILL BE INCREASING SOON.
                        <Link to={"https://buildydn.com/#/sign-up"} style={{
                            fontWeight: "bold",
                            paddingLeft: "5px",
                            textDecoration: "underline",
                            transition: "opacity .2s"
                        }}>
                            join now
                        </Link>
                    </div>
                </PaddingGlobal>
            </Notification>
            {/* navbar */}
            <div className=" w-full pointer-events-none hidden lg:block" style={{ position: "relative" }}>
                <nav className="text-sm">
                    <div className="w-full border-b-[1px] border-b-stroke undefined">
                        <article className="w-full max-w-[1428px] mx-auto px-[15px] lg:px-[41px] lg:border-x-[1px] lg:border-stroke " style={{ position: "relative" }}>
                            <WideLeftShades />
                            <div className="border-x-[1px] border-stroke">
                                <div className="justify-between flex w-full " style={{ position: "relative" }}>
                                    <div className="z-40 flex justify-center items-center transition-all duration-500 false p-2 border-r-stroke border-r-[1px]" style={{ position: "relative" }}>
                                        <div onClick={toggleMenu} className="group cursor-pointer">
                                            <div className="border-[4px] border-[#2b334079]">
                                                <div className="border-[2px] border-[#2b3340be]">
                                                    <div className="group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-stroke hover:border-[#6a6d6f] border-[1px] hover:bg-[#202326] py-1 px-3 w-auto">
                                                        <img src="https://www.cobratate.com/jointherealworld/menu_icon.svg" alt="za" className="w-[28px] h-[28px]" width={56} height={56} />
                                                        <p className="text-sm">MENU</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center py-3">
                                        <div className="border-[6px] border-white/50 rounded-full">
                                            <div className="border-[3px] border-white rounded-full">
                                                <img className="w-[60px] h-[60px] rounded-full scale-150" src="/ai/autobank.webp" alt="" height={168} width={168} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-end pointer-events-auto items-center p-2 border-l-stroke border-l-[1px]" style={{ position: "relative" }}>
                                        <div className="group cursor-pointer">
                                            <div className="border-[4px] border-[#2b334079]">
                                                <div className="border-[2px] border-[#2b3340be]">
                                                    <button onClick={() =>
                                                        onOpen(MODAL_TYPE.FORM_MODAL)

                                                    } className="group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-stroke hover:border-[#6a6d6f] border-[1px] hover:bg-[#202326] py-1 px-3 w-auto">
                                                        <img src="https://www.cobratate.com/jointherealworld/login_icon.png" alt="za" className="w-[28px] h-[28px]" width={56} height={56} />
                                                        <p className="text-sm">FREE DEMO</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <WideRightShades />
                        </article>
                    </div>
                </nav>
            </div >
            <Overlay $isOpen={isLeftMenuOpen} onClick={closeMenu} />

            <Sidebar $isOpen={isLeftMenuOpen}>
                <MenuHeader>Menu</MenuHeader>
                {menu.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            closeMenu();
                            window.open(item.route, '_blank', 'noopener,noreferrer');
                        }}
                        $active={params.name === item.id}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Sidebar>
            <div className=" w-full pointer-events-none lg:hidden z-50" style={{ position: "relative" }}>
                <div className="text-sm">
                    <div className="justify-between flex w-full " style={{ position: "relative" }}>
                        <div className=" z-40 flex justify-center items-center transition-all duration-500 false p-6" style={{ position: "relative" }}>
                            <div onClick={toggleMenu} className="group cursor-pointer">
                                <div className="border-[4px] border-[#2b334079]">
                                    <div className="border-[2px] border-[#2b3340be]">
                                        <div className="group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-stroke hover:border-[#6a6d6f] border-[1px] hover:bg-[#202326] py-1 px-3 w-auto">
                                            <img src="https://www.cobratate.com/jointherealworld/menu_icon.svg" alt="za" className="w-[28px] h-[28px]" width={56} height={56} />
                                            <p className="text-sm max-[350px]:hidden">MENU</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="border-[6px] border-white/50 rounded-full">
                                <div className="border-[3px] border-white rounded-full">
                                    <img className="w-[50px] h-[50px] rounded-full scale-150" src="/ai/autobank.webp" alt="" height={168} width={168} />
                                </div>
                            </div>
                        </div>
                        <div className=" z-40 flex justify-center items-center transition-all duration-500 false p-6" style={{ position: "relative" }}>
                            <div className="group cursor-pointer">
                                <div className="border-[4px] border-[#2b334079]">
                                    <div className="border-[2px] border-[#2b3340be]">
                                        <button onClick={() =>
                                            onOpen(MODAL_TYPE.FORM_MODAL)

                                        } target="_blank" className="group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-stroke hover:border-[#6a6d6f] border-[1px] hover:bg-[#202326] py-1 px-3 w-auto">
                                            <img src="https://www.cobratate.com/jointherealworld/login_icon.png" alt="za" className="w-[28px] h-[28px] " width={56} height={56} />
                                            <p className="text-sm max-[350px]:hidden">FREE DEMO</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-b-[1px] border-b-[#2b3340] hidden lg:block">
                <article className="w-full max-w-[1428px] mx-auto px-[15px] lg:px-[41px] lg:border-x-[1px] lg:border-[#2b3340] " style={{ position: "relative" }}>
                    <WideLeftShades />
                    <div className="border-x-[1px] border-[#2b3340]">
                        <div className="lg:p-[60px] p-2 w-full" style={{ position: "relative" }}>
                            <div className="flex">
                                <LeftContent
                                    top="Scale your dental Practice--like never before"
                                    title="Turn Cold Visitors Into Paying Patients"
                                    p="<strong>I run a clinic too. I know the chaos.</strong> <br/>
                                        You’re mid-root canal, phones are ringing, front desk’s overwhelmed.<br/>
                                        Leads get missed. Patients wait. Some never call back.<br/>
                                        And just like that—<strong>money’s gone.</strong>"
                                    button="BOOK YOUR FREE DEMO"
                                />
                                <RightVideo />
                            </div>
                        </div>
                    </div>
                    <WideRightShades />
                </article>
            </div>
            <div className="w-full border-b-[1px] border-b-[#2b3340] lg:hidden">
                <article className="w-full max-w-[1428px] mx-auto px-[15px] lg:px-[41px] lg:border-x-[1px] lg:border-[#2b3340]" style={{ position: "relative" }}>
                    <SmallLeftShades />
                    <div className="border-x-[1px] border-[#2b3340]">
                        <div className=" w-full group min-h-[200px]" style={{ position: "relative" }}>
                            <Special className="top-[-48px] left-[calc(50%-42px)] capitalize" style={{ position: "absolute" }}>in Less Than 48h</Special>
                            <div className=" undefined" style={{ position: "relative" }}>
                                <div className=" w-full  undefined" style={{ position: "relative" }}>
                                    <div className="max-w-[100%]  undefined" style={{ position: "relative" }}>
                                        <div className="w-full  lg:hidden undefined" style={{ position: "relative", paddingTop: "56.25%" }}>
                                            <iframe
                                                src="https://player.vimeo.com/video/1046354505?h=fe92c2a68a&autoplay=1&muted=1&loop=1"
                                                frameBorder="0"
                                                height={"100%"}
                                                width={"100%"}
                                                style={{
                                                    position: "absolute",
                                                    inset: "0px",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                allowFullScreen="true"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SmallLeftContent
                            top="Scale your dental Practice--like never before"
                            title="Turn Cold Visitors Into Paying Patients"
                            p="<strong>I run a clinic too. I know the chaos.</strong>
                                You’re mid-root canal, phones are ringing, front desk’s overwhelmed.
                                Leads get missed. Patients wait. Some never call back.
                                And just like that—<strong>money’s gone.</strong>"
                            button="BOOK YOUR FREE DEMO"
                        />
                    </div>
                    <SmallRightShades />
                </article>
            </div>
        </div >
    )
}
