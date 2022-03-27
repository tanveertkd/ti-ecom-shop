import { Toaster } from "react-hot-toast";
import { Hero } from "../../components/Hero/Hero";
import { Showcase } from "../../components/Showcase/Showcase";

const Home = () => {
    return(
        <div>
            <Hero />
            <Toaster />
            <Showcase />
        </div>
    );
}

export { Home };