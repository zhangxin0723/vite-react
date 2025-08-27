import type React from "react"

const homeStyle = {
  padding: "20px",
  fontSize: "18px",
  borderRadius: "4px",
  background: "#fff",
  marginTop: "20px",
}

const Home: React.FC = () => {
  return <div className="home-page" style={{ padding: '0 16px 16px' }}>
    <div className="home" style={homeStyle}>
      欢迎管理员，使用本系统
    </div>
  </div>
}

export default Home