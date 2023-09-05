import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

import { Image } from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="secondary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Newsletter</ModalHeader>
              <ModalBody className="grid grid-cols-2" >
                      <div>
                        <Image  src="public\images\news.jpg"/>
                      </div>
                <div>
                  <div className="text-center flex-col items-center">
                    <h2>Subscribe To our Newsletter</h2>
                    <p className="mb-[50px]">Be the First to get Our latest News</p>
                    
                          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                              <Input type="email" label="Email" placeholder="Enter your email" />
                          </div>
                  </div>
                    </div>
                </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Subscribe
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
