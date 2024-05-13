import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import PetCard from "../components/PetCard";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { resizeImage } from "../utils/images";

const cards = [
  {
    id: 1,
    shelter: {
      contact: "@ciclano",
      place: "Rua dos bobos",
    },
    photo:
      "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png",
    description:
      "Resgatada em cima do telhado de uma casa na 448 próximo a Canoas, está em lar temporário com a Priscila. Contatar no Instagram: @pmosena",
  },
  {
    id: 2,
    shelter: {
      contact: "@fulano",
      place: "Rua dos bobos",
    },
    photo:
      "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
    description:
      "Localização: Centro - Canoas Contato: 51997669224 Informações adicionais Foi resgatada no bairro 5 colônias",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const [newImage, setNewImage] = useState(undefined);

  const uploadFile = async (file, photoId) => {
    const response = await fetch(file);
    const blob = await response.blob();
    const fileObj = new File([blob], "image.jpg", { type: "image/jpeg" });
    const params = {
      ACL: "public-read",
      Body: fileObj,
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: photoId,
    };

    // myBucket.putObject(params, (err, data) => {
    //   if (err) console.log(err);
    // });
  };

  const handleImage = async (e) => {
    const resizedImage = await resizeImage(e.target.files[0], 500, 500);
    setNewImage(resizedImage);
  };

  return (
    <Flex w={"100%"} justifyContent={"center"} p={5}>
      <Flex
        border={"1px solid #ccc"}
        w={["100%", "80%"]}
        p={5}
        borderRadius={6}
        justifyContent={"center"}
        bgColor={"white"}
      >
        <Flex w={["100%"]} flexDir={"column"} gap={5}>
          <Flex alignItems={"center"}>
            <Image src={logo} maxW={["80px", "160px"]} />
            <Text
              fontWeight={600}
              fontSize={["1.5rem", "3rem"]}
              w={"100%"}
              textAlign={"center"}
            >
              Encontre seu PET!
            </Text>
          </Flex>

          <Flex justifyContent={"center"}>
            <Text fontStyle={"italic"}>
              Envie a foto do seu pet para o site e uma Inteligência Artificial
              irá tentar reconhecer entre todos os animais cadastrados na base
              de dados pelos voluntários dos abrigos
            </Text>
          </Flex>

          <Flex flexDir={["column", "row"]} gap={2}>
            <Input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImage}
              ref={fileInput}
            />
            <Button
              m={"auto"}
              w={["100%", "50%"]}
              colorScheme="linkedin"
              onClick={() => fileInput.current.click()}
            >
              Envie a foto do seu Pet
            </Button>

            <Button
              m={"auto"}
              w={["100%", "50%"]}
              colorScheme="red"
              onClick={() => navigate("/loginAbrigo")}
            >
              Sou um voluntário de Abrigo
            </Button>
          </Flex>

          {newImage && (
            <Flex
              flexDir={["column", "row"]}
              justifyContent={"center"}
              gap={5}
              alignItems={"center"}
            >
              <Image
                borderRadius={8}
                w={["100%", "250px"]}
                h={["100%", "250px"]}
                objectFit={"cover"}
                src={newImage}
              />
              <Button w={["50%", "30%"]} colorScheme="whatsapp">
                Tentar encontrar Pet
              </Button>
            </Flex>
          )}

          <Flex gap={3} flexDir={["column", "row"]} wrap={"wrap"}>
            {cards[0] && cards.map((pet) => <PetCard key={pet.id} pet={pet} />)}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
