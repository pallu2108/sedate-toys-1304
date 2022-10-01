import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import styles from "../Pages/Restaurants.module.css";

const Question = () => {
  return (
    <div>
        <div className={styles.faq}>
          <p>Frequently asked Question</p>
          <Accordion allowToggle width="xxl">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi that deliver?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi that deliver are:
                <ul>
                  <li> Three Kitchens Restaurant and Bar</li>
                  <li> MoMo Cafe - Courtyard Delhi Chakan</li>
                  <li> Malaka Spice</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi that provide takeaway?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi that provide
                takeaway are:
                <ul>
                  <li>Spice Kitchen</li>
                  <li>Alto Vino</li>
                  <li>Mosaic</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the most popular restaurants in Delhi?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                The best restaurants in Delhi include:
                <li>Paasha</li>
                <li>Alto Vino</li>
                <li>Ukiyo</li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi for families with
                    children?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the best restaurants in Delhi for families with children
                include:
                <ul>
                  <li>The Market</li>
                  <li>Feast</li>
                  <li>Spice Kitchen</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    What are the best restaurants in Delhi for cheap eats?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Some of the most popular restaurants in Delhi for cheap eats
                include:
                <ul>
                  <li>JJ Garden Vada Pav</li>
                  <li> Vohuman Cafe</li>
                  <li>Marzorin</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
    </div>
  )
}

export default Question
