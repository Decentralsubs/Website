import { ConfigProvider } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutContainer from './Layout'
import Home from './pages/Home'
import Policy from './pages/Policy'
import Terms from './pages/Terms'
import Legal from './pages/Legal'

const theme = {
  token: { colorPrimary: '#FFF', colorBgContainer: '#021A19' }
  ,
  components: {
    Input: {
      colorPrimary: '#000',
      colorBgContainer: "#FFF",
    },
  },
}

function App() {

  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutContainer />}>
            <Route index element={<Home />} />
            <Route path='policy' element={<Policy />} />
            <Route path='terms' element={<Terms />} />
            <Route path='legal' element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
