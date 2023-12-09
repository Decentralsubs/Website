import { Button, Flex, Image, Space, Typography } from "antd"
const { Title, Paragraph, Text, Link } = Typography;
const IcoCard = ({
    Icon,
    title,
    description
}) => {
    return (
        <Flex className="bg-green5 min-h-[180px] max-w-[380px] lg:min-h-[220px] lg:max-w-[440px] 3xl:min-h-[258px] 3xl:max-w-[530px] py-8 px-6 rounded-[16px] sm:gap-6 gap-4">
            <Image src={Icon} alt='ico' width={42} height={42} preview={false} />
            <Flex vertical className="sm:gap-[18px] gap-4">
                <Text className="text-white1 text-[17px] lg:text-[27px] sm:text-[21px] font-interregular font-semibold">
                    {title}
                </Text>
                <Text className="text-paragraph text-[14px] lg:text-[18px] sm:text-[16px] font-interregular font-normal">
                    {description}
                </Text>
            </Flex>
        </Flex>
    )
}

export default IcoCard;