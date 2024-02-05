import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";

const ModalDetail = ({isOpen,onOpenChange, dataX}) => {

    return (
        <div >
            <Modal
                size='xs'
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center justify-center font-bold text-[30px]" >{dataX.title}</ModalHeader>
                            <ModalBody>
                                <Image src={dataX.img}/>
                                <p className='mt-2'>{dataX.details}</p>
                                <div className='flex justify-center text-center font-medium text-[20px] mt-4 gap-4' >
                                    <span>{dataX.title}</span>
                                    <span>{dataX.price}</span>
                                </div>
                               
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalDetail