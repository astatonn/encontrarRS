import { Card, Flex, Image, Text } from "@chakra-ui/react";

const PetCard = ({ pet }) => {
  return (
    <Card p={2} maxW="sm" boxShadow="xl">
      <Flex gap={2} flexDir={"column"}>
        <Image src={pet.photo} />
        <Flex gap={2}>
          <Text fontWeight={600}>Contato abrigo:</Text>
          <Text>{pet.shelter.contact}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight={600}>Descrição:</Text>
          <Text>{pet.description}</Text>
        </Flex>
        <Flex gap={2}>
          <Text fontWeight={600}>Localização:</Text>
          <Text>{pet.shelter.place}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default PetCard;
