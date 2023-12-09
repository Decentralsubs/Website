import { Button, Flex, Image, Input, Space, Typography } from "antd"
import { motion } from "framer-motion"
import { variants } from "../global";

const { Title, Paragraph, Text, Link } = Typography;
const Pane11 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col bg-green5 relative items-center lg:px-[100px] 2xl:px-[300px] px-[20px] w-full md:pb-[225px] pb-[100px] md:pt-[130px] pt-[50px]" >
            <motion.div variants={variants} className="flex flex-col items-center">
                <Text className="text-white1 sm:text-[44px] text-[21px] md:text-[64px] font-interregular font-normal">
                    Contact form
                </Text>
                <Text className="text-paragraph lg:w-[950px] w-full text-[14px] sm:text-[20px] text-center font-interregular font-normal">
                    Simply share your name, company, and email. Briefly describe your project in the provided field, allowing us to tailor our approach to your unique vision.
                </Text>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col w-full">
                <Space direction="vertical" size={30} style={{ width: '100%' }} className="sm:mt-[72px] mt-[40px]" >
                    <div className="flex sm:flex-row flex-col gap-[24px] sm:gap-[30px]" style={{ width: "100%" }}>
                        <Flex vertical style={{ width: "100%" }}>
                            <Text className="text-white1 text-[14px] sm:text-[16px] font-interregular font-normal">First Name*</Text>
                            <Input size="large" placeholder="Enter Your Name" allowClear />
                        </Flex>
                        <Flex vertical className="w-full">
                            <Text className="text-white1 text-[14px] sm:text-[16px] font-interregular font-normal">Last Name*</Text>
                            <Input size="large" placeholder="Enter Your Name" allowClear width={'100%'} />
                        </Flex>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-[24px] sm:gap-[30px]" style={{ width: "100%" }}>
                        <Flex vertical style={{ width: "100%" }}>
                            <Text className="text-white1 text-[14px] sm:text-[16px] font-interregular font-normal">Email*</Text>
                            <Input size="large" placeholder="Enter Your Email" allowClear />
                        </Flex>
                        <Flex vertical style={{ width: "100%" }}>
                            <Text className="text-white1 text-[14px] sm:text-[16px] font-interregular font-normal">Company Name*</Text>
                            <Input size="large" placeholder="Enter Your Company Name" allowClear />
                        </Flex>
                    </div>
                    <Flex vertical className="w-full">
                        <Text className="text-white1 text-[14px] sm:text-[16px] font-interregular font-normal">About Your Project*</Text>
                        <Input.TextArea placeholder="Enter Your Details" className=" min-h-[200px]" allowClear />
                    </Flex>
                    <Flex className="justify-center">
                        <Button className="text-dark3 sm:mt-[52px] mt-[36px] bg-button border-none sm:h-[54px] h-[38px] rounded-[48px] font-normal text-[16px] font-interregular sm:px-[50px] px-[80px]">
                            Submit
                        </Button>
                    </Flex>
                </Space>
            </motion.div>
        </motion.div>
    )
}

export default Pane11;