import { Button, Flex, Image, Space, Typography } from "antd"
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import DevCard from "./Card/DevCard";
import { motion } from "framer-motion"
import { variants } from "../global";

const { Title, Paragraph, Text, Link } = Typography;
const Pane8 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col bg-green5 relative items-center w-full lg:px-[135px] md:px-[75px] px-[50px] md:py-[130px] py-[50px]" >
            <motion.div variants={variants} className="flex flex-col items-center">
                <Text className="text-white1 xxl:text-[64px] xl:text-[44px] lg:text-[32px] text-[21px] font-interregular font-normal">
                    Our Team
                </Text>
                <Text className="text-paragraph xl:w-[950px] lg:text-[24px] text-[14px] text-center font-interregular font-normal">
                    Decentral Subs is a smart contract that has been rigorously audited by the highly reputable and expert firm, Certik, ensuring the utmost security and reliability.
                </Text>
            </motion.div>
            <motion.div variants={variants} className="flex 3xl:flex-row justify-center flex-wrap md:mt-[72px] mt-[50px] gap-[24px]">
                {
                    Array.from({ length: 5 }).map((item, index) =>
                        <DevCard key={index} />
                    )
                }
            </motion.div>
        </motion.div>
    )
}

export default Pane8;