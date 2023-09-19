import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from 'src/styles/style.module.scss';


const slider1 = [
    {
        color: "#e3e5e7",
        src: "david.png"
    },
    {
        color: "#d6d7dc",
        src: "kinder.jpg"
    },
    {
        color: "#e3e3e3",
        src: "union.jpg"
    },
    {
        color: "#21242b",
        src: "onu.jpg"
    }
]

const slider2 = [
    {
        color: "#e5e0e1",
        src: "unicef.png"
    },
    {
        color: "#d4e3ec",
        src: "segal.png"
    },
    {
        color: "#d7d4cf",
        src: "embassy.jpg"
    }
]

export default function SlidingImage() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <h1 className='text-center'>Our Partners</h1>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <img 
                                    alt={"image"}
                                    src={`/images/partners/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <img 
                                    alt={"image"}
                                    src={`/images/partners/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}