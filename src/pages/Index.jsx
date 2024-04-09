import React from "react";
import { Box, Heading, Text, Stack, Flex, Button, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCode, FaGlobe, FaMobile, FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" wrap="wrap">
            <Box flex="1" pr={8}>
              <Heading as="h1" size="2xl" mb={4}>
                Soft-Tech Solutions
              </Heading>
              <Text fontSize="xl" mb={8}>
                Providing cutting-edge software solutions for your business needs
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxMjY1MDU2Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={8}>
            <Box textAlign="center">
              <Icon as={FaCode} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                ERP Systems
              </Heading>
              <Text>Streamline your business processes with our customized ERP solutions</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaGlobe} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Websites
              </Heading>
              <Text>Create a strong online presence with our professional website development services</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaMobile} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Mobile Apps
              </Heading>
              <Text>Reach your customers on the go with our feature-rich mobile applications</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaChartBar} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Web Applications
              </Heading>
              <Text>Enhance your business efficiency with our powerful web applications</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} direction={["column", "row"]} align="center">
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2YlMjBzb2Z0d2FyZSUyMGRldmVsb3BlcnN8ZW58MHx8fHwxNzEyNjUwODg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team of Software Developers" />
            </Box>
            <Box flex="1">
              <Heading as="h2" size="xl" mb={4}>
                About Soft-Tech
              </Heading>
              <Text fontSize="lg" mb={8}>
                Soft-Tech is a leading software development company dedicated to delivering innovative solutions to businesses of all sizes. With our team of experienced developers and cutting-edge technologies, we help organizations streamline their processes, enhance efficiency, and achieve their goals.
              </Text>
              <Button colorScheme="blue" size="lg">
                Learn More
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Contact Us
          </Heading>
          <Stack spacing={8} direction={["column", "row"]} align="center">
            <Box flex="1">
              <Image src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNzEyNjUwODg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Contact Us" />
            </Box>
            <Box flex="1">
              <Text fontSize="lg" mb={8}>
                Ready to take your business to the next level? Contact us today to discuss your software development needs. Our team is here to help you find the right solutions for your organization.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get in Touch
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
