import {
  Center,
  Flex,
  Img,
  Text,
  VStack,
  HStack,
  Stack,
  UnorderedList,
  ListItem,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel,
  Accordion,
  Icon,
  Image,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';
import { ratelistData } from './pricelistData';
import {
  MdOutlineIron,
  MdOutlineDryCleaning,
  MdOutlineOtherHouses,
  MdOutlineLocalLaundryService,
} from 'react-icons/md';
import { RiShirtLine } from 'react-icons/ri';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { GiSewingNeedle } from 'react-icons/gi';
import { motion } from 'framer-motion';

const motionHStack = motion(HStack);

const PriceList = () => {
  console.log(ratelistData[6].items[0].categoryItems[0]);
  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1629582626803-26d116398eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        title='Price List'
      />
      <Center w={'full'} padding={'4'} backgroundColor={'attire.1'}>
        <VStack textColor={'black'} alignItems={'center'}>
          <Text
            fontWeight={'600'}
            fontSize={['xl', '2xl', '4xl']}
            w={'full'}
            my={['0', '1rem', '3rem']}
            textAlign={'center'}
          >
            List
          </Text>
          <Accordion
            allowMultiple
            allowToggle
            w={['90vw', '70vw', '50vw']}
            alignItems={'center'}
          >
            {ratelistData.map((item) => (
              <AccordionItem
                w={['88vw', '70vw', '50vw']}
                my={['1.5rem', '2rem', '2rem']}
                borderWidth={'0'}
                mx={'auto'}
                flex={'1'}
                justifyContent={'space-between'}
              >
                <AccordionButton
                  w={'100%'}
                  borderBottom={['0', '1px solid gray']}
                  py={['0', '1rem']}
                  mx={'auto'}
                  flex={'1'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <HStack>
                    <Center
                      w={['1.4rem', '2rem', '3rem']}
                      h={['1.4rem', '2rem', '3rem']}
                      mr={['0', '1rem', '2rem']}
                    >
                      {/*  {item.icon} */}
                      Icon
                    </Center>
                    <Text textAlign='left' fontSize={['sm', 'lg', 'xl']}>
                      {item.title}
                    </Text>
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel mx={'0'}>
                  {item.items.map((isItemlist) => (
                    <UnorderedList>
                      {isItemlist.categoryItems ? (
                        <Accordion allowMultiple allowToggle>
                          <AccordionItem
                            w={'100%'}
                            mx={'auto'}
                            p='0'
                            flex={'1'}
                            justifyContent={'space-between'}
                            border={'0'}
                          >
                            <AccordionButton
                              w='100%'
                              mx={'auto'}
                              flex={'1'}
                              my={['2', '1rem']}
                              borderLeft='0.3px solid gray'
                              justifyContent={'space-between'}
                              alignItems={'center'}
                            >
                              <Text
                                fontSize={['sm', 'lg']}
                                fontWeight={['light', 'normal']}
                              >
                                {isItemlist.categoryTitle}
                              </Text>
                              <AccordionIcon />
                            </AccordionButton>
                            {isItemlist.categoryItems.map((subList) => (
                              <AccordionPanel
                                padding={'0'}
                                my={['1rem', '1.5rem']}
                                mx={['0', '1rem']}
                              >
                                <HStack
                                  justifyContent={'space-between'}
                                  borderBottom='0.3px solid gray'
                                  pb={['0.5rem', '1rem']}
                                  mx={'1rem'}
                                >
                                  <Heading
                                    fontSize={['xs', 'lg']}
                                    fontWeight={'light'}
                                    isTruncated
                                  >
                                    {subList.name}
                                  </Heading>
                                  <Text
                                    fontSize={['xs', 'lg']}
                                    fontWeight={'light'}
                                    fontStyle={'italic'}
                                  >
                                    {subList.price}
                                  </Text>
                                </HStack>
                              </AccordionPanel>
                            ))}
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <ListItem listStyleType={'none'} my={['1rem', '2rem']}>
                          <HStack
                            justifyContent={'space-between'}
                            borderBottom='0.3px solid gray'
                            pb={['0.5rem', '1rem']}
                            mx={['0', '2rem']}
                          >
                            <Heading
                              fontSize={['xs', 'lg']}
                              fontWeight={'normal'}
                              isTruncated
                            >
                              {isItemlist.name}
                            </Heading>
                            <Text
                              fontSize={['xs', 'lg']}
                              fontWeight={'light'}
                              fontStyle={'italic'}
                            >
                              {isItemlist.price}
                            </Text>
                          </HStack>
                        </ListItem>
                      )}
                    </UnorderedList>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Center>
    </>
  );
};

export default PriceList;