import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/react'
import React from 'react'
import { ImgObj } from '../AllData/UrlImgIcon'
import styles from "../CSS/FreeHubSpotCRM.module.css"

const SalesPeople = () => {
  return (
    <div>
         <Box mt='4rem' ml="1rem">
              <Text mb="12px" fontSize="22px" fontWeight="600" color="gray.600">
              HubSpot CRM for Salespeople
              </Text>
              <Text fontSize="15px" fontWeight="500" lineHeight="30px" color="gray.600">
              Say “so long” to messy spreadsheets and time wasted on menial tasks. HubSpot CRM features a full suite of sales
              </Text>
              <Text fontSize="" fontWeight="400" lineHeight="30px" color="gray.600">
              productivity tools so you can sell more, but work less.
              </Text>
              <button className={styles.crmbtn}>Get Free CRM</button>
            </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="38%" mr="2rem" ml="1rem">
              <Text mb="12px" mt='3rem' fontSize="23px" fontWeight="500" color="gray.700">
              Stop letting leads slip through the cracks with an easy-to-use sales CRM.
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Get a real-time view of your entire sales pipeline on a visual dashboard.
              </Text>
              <Text  mt='1rem' fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Access detailed reports on sales activity, productivity, and individual performance. Then use those insights to track team performance and spot opportunities for growth
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Enjoy unlimited users, data, and up to 1,000,000 contacts with no time limit or expiration date — whether you're a team of 1 or 1,000.
              </Text>
            </Box>
            <Box w="50%">
              <Img
                src={ImgObj.SalesPeople}
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

export default SalesPeople