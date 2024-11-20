
import { cardData } from "@/components/cards_map";
import Image from "next/image";

export async function genereteStaticParams() {
    try {
        return cardData.map((pr)=> ({ id: pr.id + "" }))
    } catch (error) {
        console.log("Error", error)
        return [];
    }
}
export async function generateMetadata({params} : {params: {id: string}}){
    const findProduct = cardData.find((card)=> card.id === Number(params?.id))
    return {
        title: findProduct?.title,
        description: `TechnoArk - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt officia deleniti nesciunt perspiciatis sunt error quibusdam accusantium corrupti dignissimos similique eum sed quasi minus impedit commodi excepturi, tempora saepe quidem!`
    };
}

const Product = async ({params}: {params: {id: string}}) => {
    const findProduct = cardData.find(card => card.id === Number(params?.id))
    return (
        <div className="container mx-auto pt-4">
            {findProduct ? (
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-bold">{findProduct?.title}</h1>
                        <p className="text-lg font-medium">Price: {findProduct?.price}</p>
                        <p className="text-lg font-medium">Credit: {findProduct?.credit}</p>
                        <Image width={500} src={findProduct?.image} alt={findProduct?.title}/>
                </div>
            ) : (
                "Product not found"
            )}
        </div>
    )
}
export default Product