import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import Blueberry from '../assets/Blueberry.jpg'
import Cola from '../assets/cola.jpg'
import kiwi from '../assets/kiwi.jpg'
import LemonSoda from '../assets/LemonSoda.jpg'
import lychee from '../assets/lychee.jpg'
import Mangopeach from '../assets/Mangopeach.jpg'
import Mineral from '../assets/Mineral.jpg'
import Mixfruit from '../assets/Mixfruit.jpg'
import Pomegranate from '../assets/Pomegranate.jpg'
import RedApple from '../assets/RedApple.jpg'
import strawberrybanana from '../assets/strawberrybanana.jpg'
import Yakult from '../assets/Yakult.jpg'
import ModalDetail from './ModalDetail';
// import ModalContent from './ModalContent';

const Content = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [data, setData] = useState([])

    const list = [
        {
            title: "Blueberry",
            img: Blueberry,
            price: "250 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Cola",
            img: Cola,
            price: "230 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Kiwi",
            img: kiwi,
            price: "250 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "LemonSoda",
            img: LemonSoda,
            price: "270 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Lychee",
            img: lychee,
            price: "280 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Mangopeach",
            img: Mangopeach,
            price: "280 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Mineral",
            img: Mineral,
            price: "240 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Mixfruit",
            img: Mixfruit,
            price: "260 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Pomegranate",
            img: Pomegranate,
            price: "260 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "RedApple",
            img: RedApple,
            price: "260 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Strawberrybanana",
            img: strawberrybanana,
            price: "260 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
        {
            title: "Yakult",
            img: Yakult,
            price: "260 Bath",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut sollicitudin augue. Aliquam mi risus, ullamcorper quis mauris a, dictum semper massa. Donec rutrum tellus orci, at luctus lacus blandit ac. Sed molestie ipsum ut erat lobortis, quis efficitur erat porttitor. Curabitur pharetra lectus et bibendum semper."
        },
    ];

    return (

        <div className='flex flex-col justify-center items-center w-full'>

            <div className='font-bold text-[27px]'>Product </div>
            <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 mt-4 w-[85%]">
                {list.map((item, index) => (
                    <>
                        <Card shadow="sm" key={index} isPressable onPress={() => {setData(item)}} onClick={onOpen} >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[240px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>

                        </Card>

                    </>
                ))}
            </div>

            <ModalDetail isOpen={isOpen} onOpenChange={onOpenChange} dataX={data} />
        </div>
    );
}

export default Content