import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@ant-design/v5-patch-for-react-19';
import Routers from './router/routers.tsx';
import "@/assets/style/index.scss";
import { store, persistor } from "@/store"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'; // 引入 PersistGate
import { ConfigProvider, App } from "antd"
import locale from 'antd/locale/zh_CN';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={locale} theme={{
      token: {
        colorPrimary: '#216dd9',
      },
      components: {
        Layout: {
          headerBg: '#fff',
          siderBg: "#0C284D",
          headerPadding: ""
        },
        Menu: {
          itemBg: '#0C284D',
          itemActiveBg: '#216dd9',
          itemColor: '#fff',
          itemHoverBg: '#13407E',
          itemHoverColor: '#fff',
          itemSelectedBg: '#216dd9',
          itemSelectedColor: '#fff',
          popupBg: '#0C284D'
        }
      }
    }}>
      <App>
        <Provider store={store}>
          <PersistGate
            loading={<div>Loading...</div>} // 加载状态（可选）
            persistor={persistor}
          >
            <Routers />
          </PersistGate>
        </Provider>
      </App>
    </ConfigProvider>
  </StrictMode>
)
