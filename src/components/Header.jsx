import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="red"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'10'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <div>DayveHUB</div>
            </DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                  <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                  <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                  <Link to={'/upload'}>Upload Video</Link>
                </Button>
              </VStack>

              <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} variant={'solid'} colorScheme={'red'}>
                  <Link to={'/login'}>Log In</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'outline'}
                  colorScheme={'red'}
                >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
