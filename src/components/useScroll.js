import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const control = useAnimation();
    const [element, view] = useInView({ threshold: 0.5 });
    if (view) {
        control.start("show");
    } else {
        control.start("hidden");
    }
    return [element, control];
};
