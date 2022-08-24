import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/react'
import React from 'react'
import { ImgObj } from '../AllData/UrlImgIcon'
import styles from "../CSS/FreeHubSpotCRM.module.css"

const Operation = () => {
  return (
    <div>
         <Box mt='4rem' ml="1rem">
              <Text mb="12px" fontSize="22px" fontWeight="600" color="gray.600">
              HubSpot CRM for Operations Managers
              </Text>
              <Text fontSize="15px" fontWeight="500" lineHeight="30px" color="gray.600">
              Enable your sales and marketing teams with free tools to elevate their productivity — and get all the tracking,
              </Text>
              <Text fontSize="" fontWeight="400" lineHeight="30px" color="gray.600">
              reporting, and third-party integrations you need. Not to mention unlimited users, data, and up to 1,000,000 contacts.
              </Text>
              <button className={styles.crmbtn}>Get Free CRM</button>
            </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="38%" mr="2rem" ml="1rem">
              <Text mb="12px" mt='3rem' fontSize="23px" fontWeight="500" color="gray.700">
              Set your teams up for success with easy-to-use tools and integrations.
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Get a real-time view of your entire sales pipeline on a visual dashboard.
              </Text>
              <Text  mt='1rem' fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Access detailed reports on sales activity, productivity, and individual performance. Then use those insights to track team performance and spot opportunities for growth
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Leverage over 1090 integrations to connect your existing tech stack to HubSpot CRM and get even more out of the tools and apps your team uses every day.
              </Text>
            </Box>
            <Box w="50%">
              <Img
                src={ImgObj.Operation}
                alt="leader"
                w="80%"
                ml='3rem'
              />
            </Box>
          </Box>
          <Box mt='2rem' textAlign='center'>
                <Text fontSize="14px" fontWeight="600" color="gray.600">FREE FEATURES YOU'LL LOVE</Text>
                <HStack ml='20%' gap='1rem' mt='1rem' mb='4rem'>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> Reporting dashboard</Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> Company insights</Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> Deal tracking</Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> Pipeline management</Box>
                </HStack>
            </Box>

    </div>
  )
}

export default Operation