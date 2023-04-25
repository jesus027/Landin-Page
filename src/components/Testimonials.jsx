import { feedback } from "../constants";
import styles from "../constants/Style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
    <section id="client" className={`${styles.paddingY} ${styles.flexCenter} flex flex-col relative`}>
        
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h1>What people are <br className="sm:block hidden" /> saying about us</h1>
            {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        </div>
    </section>
)

export default Testimonials