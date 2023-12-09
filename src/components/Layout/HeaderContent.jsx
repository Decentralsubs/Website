import { Button, Space } from "antd";
import SmallLogo from "../../assets/icon/small-logo.svg";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const HeaderContent = () => {
    return (
        <div className="flex w-full justify-between">
            <div className="flex gap-5">
                <Link to={'/'}>
                    <div className="flex gap-[5px] mr-1">
                        <img src={SmallLogo} alt='logo' />
                        <p className="text-button font-interregular text-[16px] font-semibold">Decentral Subs</p>
                    </div>
                </Link>
                <Space align="center" className="hidden md:flex" size={24}>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Products</span>
                    </Link>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Token</span>
                    </Link>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Price</span>
                    </Link>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Audit</span>
                    </Link>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Team</span>
                    </Link>
                    <Link>
                        <span className="text-white font-interregular text-[16px] font-normal">Contact</span>
                    </Link>
                </Space>
            </div>
            <Space size={24} className="hidden md:flex">
                <Link>
                    <span className="text-white font-interregular text-[16px] font-normal">
                        Whitepaper
                    </span>
                </Link>
                <Button className="text-dark4 bg-button border-none rounded-[31px] font-normal text-[16px] font-interregular px-8">
                    Sign In
                </Button>
            </Space>
            <div className="cursor-pointer flex md:hidden">
                <MenuOutlined className="text-white w-6" />
            </div>
        </div >
    )
}

export default HeaderContent;