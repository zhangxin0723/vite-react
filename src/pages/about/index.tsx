import React from "react"
import { useSearchParams, useNavigate } from "react-router"
import { Button } from "antd";

const About: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  const toMine = () => {
    navigate('/mine')
  }

  return (<div>About Page
    <Button onClick={() => setSearchParams({ a: new Date().valueOf() + '' })}>set {searchParams.get('a')}</Button>
    <Button onClick={toMine}>to mine</Button>
  </div>)
}

export default About
