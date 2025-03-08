import baisseFront from '../assets/pullover baise png.png'
import baisseBack from '../assets/pullover baise back png.png'
import animalsFront from '../assets/pullover animals png.png'
import animalsBack from '../assets/pullover animals back png.png'
import numbFront from '../assets/Tshirt Numb png.png'
import numbBack from '../assets/Tshirt Numb back png.png'
import numbWhiteFront from '../assets/Tshirt Numb white png.png'
import numbWhiteBack from '../assets/Tshirt Numb back white png.png'
import shoper from "../assets/shopper witch png.png"


export interface Product {
    id: string
    name: string
    price: number
    category: string
    description: string
    color: string[]
    in_stock: boolean
    sizes_available: string[]
    images: {
      front: string
      back: string
    }
    material: string
  }
  
  const products: Product[] = [
    {
      id: "baisse-pullover",
      name: "BAISSE PULLOVER",
      price: 25,
      category: "pullover",
      description: "FOR THOSE WHO FALLING APPART",
      color: ["black"],
      in_stock: true,
      sizes_available: ["L", "XL"],
      images: {
        front: baisseFront,
        back: baisseBack,
      },
      material: "100% cotton",
    },
    {
      id: "animals-pullover",
      name: "ANIMALS PULLOVER",
      price: 25,
      category: "pullover",
      description: "100% ANIMAL TESTING FREE",
      color: ["black"],
      in_stock: true,
      sizes_available: ["M", "XXL"],
      images: {
        front: animalsFront,
        back: animalsBack,
      },
      material: "100% cotton",
    },
    {
      id: "numb-tshirt-black",
      name: "NUMB T-SHIRT BLACK",
      price: 9.99,
      category: "t-shirt",
      description: "I HAVE HOLE IN MY HEART",
      color: ["black"],
      in_stock: true,
      sizes_available: ["XS", "S", "L"],
      images: {
        front: numbFront,
        back: numbBack,
      },
      material: "100% cotton",
    },
    {
      id: "numb-tshirt-white",
      name: "NUMB T-SHIRT WHITE",
      price: 9.99,
      category: "t-shirt",
      description: "I HAVE HOLE IN MY HEART",
      color: ["white"],
      in_stock: true,
      sizes_available: ["XS", "S", "L"],
      images: {
        front: numbWhiteFront,
        back: numbWhiteBack,
      },
      material: "100% cotton",
    },
    {
      id: "witch-shopper",
      name: "WITCH SHOPPER",
      price: 8.99,
      category: "shopper",
      description: "LEMPRISE BRAND SHOPPER",
      color: ["black"],
      in_stock: false,
      sizes_available: [],
      images: {
        front: shoper,
        back: shoper,
      },
      material: "100% cotton",
    },
  ]
  
  export default products
  
  