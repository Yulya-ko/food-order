
const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button className="btn-plus" onClick={addQuantity}> + </button>
            <span>{quantity}</span>
            <button className="btn-minus" onClick={removeQuantity}> - </button>
        </div>
    )
}
export default ChangeQuantity;