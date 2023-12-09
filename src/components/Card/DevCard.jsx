import { Flex, Space, Typography } from "antd";
import { TwitterOutlined, LinkedinFilled } from '@ant-design/icons';
import AvatarImg from "../../assets/image/pane8/avatar.png";
const { Title, Paragraph, Text, Link } = Typography;
const DevCard = () => {
    return (
        <Flex vertical className="p-10 gap-2 bg-green1 rounded-[24px]">
            <div className="relative w-[227px] mt-8 mb-4 aspect-square rounded-full bg-gradient-to-b from-green1 to-[#063C30]">
                <div className="absolute bottom-0 left-[31px]">
                    <img src={AvatarImg} alt='bg' width={165} height={277} className="rounded-full" />
                </div>
            </div>
            <Text className="text-white1 text-[24px] font-interregular text-center font-medium">
                David Redoan
            </Text>
            <Text className="text-white1 text-[16px] font-interregular text-center font-medium">
                CCO
            </Text>
            <Space size={20} className="justify-center">
                <TwitterOutlined className="text-white1 text-[24px]" />
                <LinkedinFilled className="text-white1 text-[24px]" />
            </Space>
        </Flex>
    )
}

export default DevCard;