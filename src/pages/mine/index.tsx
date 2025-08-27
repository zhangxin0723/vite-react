import React from "react";
import { useNavigate } from "react-router";
import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "@/store/modules/account"

const Mine: React.FC = () => {
  const navigate = useNavigate()
  const count = useSelector((state: any) => state.account.value)
  const dispatch = useDispatch();

  const toAbout = () => {
    navigate('/?a=1')
  }

  return <div>Mine Page
    <Button onClick={toAbout}>to about</Button>

    <div>Count: {count}</div>
    <Button onClick={() => dispatch(increment())}>+</Button>
    <Button onClick={() => dispatch(decrement())}>-</Button>
    <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
  </div>;
};

export default Mine;