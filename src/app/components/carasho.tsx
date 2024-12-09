import Image from "next/image"
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg"

export default function Carasho(){
    return(
        <div className="w-[1439px] h-[716px] absolute top-[136px] left-[1px] border">
          <div className="w-[1440px] h-[716px]">
                 <Image src={women} alt="women"/>
          </div>
         
      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-[100px] top-[100px] items-start gap-[35px] px-6 lg:px-16 z-10">
        <h1 className="font-Montserrat font-semibold text-[32px] leading-[24px] color-[#252B42]">
          SHOP
        </h1>
      </div>
        </div>
    )
}