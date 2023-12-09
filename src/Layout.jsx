import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderContent from "./components/Layout/HeaderContent";
import FooterContent from "./components/Layout/FooterContent";
import useScrollPosition from "./hooks/useScrollPosition";
import { useEffect, useState } from "react";

const { Header, Footer, Content } = Layout;
const LayoutContainer = () => {
    const scrollPosition = useScrollPosition()
    const [prevPos, setPrevPos] = useState(0)
    useEffect(() => {
        if (scrollPosition - prevPos > 5) {
            document.getElementById('header').style.top = "-100px";
        } else if (prevPos - scrollPosition > 5) {
            document.getElementById('header').style.top = "0px";
        }
        if (scrollPosition < 5) {
            document.getElementById('header').style.zIndex = 1;
        } else {
            document.getElementById('header').style.zIndex = 50;
        }
        setPrevPos(scrollPosition)
    }, [scrollPosition])
    return (
        <Layout className="w-full bg-dark1">
            <Header id="header" className=" 2xl:px-[200px] lg:px-[100px] px-[20px] 3xl:px-[300px] h-[100px] py-4 bg-dark1 z-50">
                <HeaderContent />
            </Header>
            <Content id="content">
                <Outlet />
            </Content>
            <Footer className="bg-dark1 min-h-[400px] p-0">
                <FooterContent />
            </Footer>
        </Layout>
    )
}

export default LayoutContainer;