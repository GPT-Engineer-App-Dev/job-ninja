import { Container, Text, VStack, Heading, Box, Button, HStack, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    const newJob = { jobTitle, companyName, location, description };
    setJobs([...jobs, newJob]);
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setDescription("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Job Listing Website</Heading>
        <Box width="100%" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4} align="stretch">
            <FormControl id="jobTitle">
              <FormLabel>Job Title</FormLabel>
              <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" />
            </FormControl>
            <FormControl id="companyName">
              <FormLabel>Company Name</FormLabel>
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Job Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter job description" />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSubmit}>Post Job</Button>
          </VStack>
        </Box>
        <VStack spacing={4} width="100%">
          {jobs.map((job, index) => (
            <Box key={index} width="100%" p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">{job.jobTitle}</Heading>
              <Text fontWeight="bold">{job.companyName}</Text>
              <Text>{job.location}</Text>
              <Text>{job.description}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;