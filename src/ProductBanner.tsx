
type ProductProps={
    line1:string
    image:string
}
const ProductBanner=(props:ProductProps)=>{
    return (
        <>
        <div className="bg-red-200 flex gap-4">
                    <div>   
                            <div>{props.line1}</div>
                            <div>Free Shipping</div>
                            <div>Artifical Natural Furniture</div>
                            <div><button>Shop Now</button></div>

                    </div>
                    <img src={props.image} className="w-44"></img>
                </div>
        </>
    )
}
export default ProductBanner;