import Hero from "./components/sections/Hero";
import Section2 from "./components/sections/Section2";
import ReverseSection from "./components/sections/ReverseSection";
import Services from "./components/sections/Services";
import AfterServices from "./components/sections/AfterServices";
import Prices from "./components/sections/Price";
import Questions from "./components/sections/Questions";
import LastSection from "./components/sections/LastSection";

export default function AiAutomation() {
    return (
        <div >
            {(function () {
                window.VG_CONFIG = {
                    ID: "VrrJwLSMVOoJT76B7Sfu", // YOUR AGENT ID
                    region: 'na', // YOUR ACCOUNT REGION 
                    render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
                    // modalMode: true, // Set this to 'true' to open the widget in modal mode
                    stylesheets: [
                        // Base TIXAE Agents CSS
                        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
                        // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
                    ],
                    // THIS IS SUPPOSED TO BE CHANGED OR REMOVED.
                    // user: {
                    //     name: 'John Doe', // User's name
                    //     email: 'johndoe@gmail.com', // User's email
                    //     phone: '+1234567890', // User's phone number
                    // }
                    // Optional user data -- end
                    // **
                    // userID: 'USER_ID', // If you want to use your own user_id
                    // autostart: true, // Whether to autostart the chatbot with the proactive message
                }
                var VG_SCRIPT = document.createElement("script");
                VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
                VG_SCRIPT.defer = true; // Remove 'defer' if you want widget to load faster (Will affect website loading)
                document.body.appendChild(VG_SCRIPT);
            })()}
            <Hero />
            <Section2 />
            <ReverseSection />
            <Services />
            <AfterServices />
            <Prices />
            <Questions />
            <LastSection />
        </div>
    )
}
