import React, {useEffect, useState} from "react";
import scroll from "./images/scroll.svg"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scrollToTopBox">
            <div className="scroll-to-top">
                {isVisible && (
                    <div onClick={scrollToTop} className="scrollToTop">
                      <img src={scroll} alt={"scroll"} style={{float:"right",margin:"-1rem 1rem"}}/>
                    </div>
                )}
            </div>
        </div>
    );
}
