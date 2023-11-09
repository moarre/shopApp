import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../state/store"
import { decrement, incrementByAmount } from "../state/item/itemSlice"

function Item() {
    const item = useSelector((state: RootState) => state.item.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>{item}</h2>
        <div>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Item