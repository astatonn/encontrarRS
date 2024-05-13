import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import cep from "cep-promise";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AddShelter = () => {
  const [address, setAddress] = useState();
  const [editable, setEditable] = useState(true);
  const [cepError, setCepError] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleCep = async (event) => {
    if (event.target.value.length === 8) {
      setEditable(false);
      try {
        const result = await cep(event.target.value);
        setAddress(result);
      } catch (error) {
        setAddress();
        setCepError("Cep não encontrado");
      }
      setEditable(true);
    } else {
      setAddress();
      setCepError();
    }
  };

  const onSubmit = (data) =>
    console.log({
      ...data,
      street: address?.street,
      city: address?.city,
      neighborhood: address?.neighborhood,
      state: address?.state,
    });

  return (
    <Flex
      margin={"auto"}
      my={5}
      border={"1px solid #ccc"}
      w={["90%", "40%"]}
      p={5}
      borderRadius={6}
      justifyContent={"center"}
      bgColor={"white"}
      flexDir={"column"}
    >
      <Flex flexDir={"column"} w={"100%"} gap={[3, 5]}>
        <Flex alignItems={"center"}>
          <Text
            fontWeight={600}
            fontSize={["1.3rem", "2.5rem"]}
            w={"100%"}
            textAlign={"center"}
          >
            Cadastro de Abrigos
          </Text>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={"column"} gap={3}>
            <Flex
              flexDir={"column"}
              borderLeft="1px solid #cccccc7a"
              borderBottom="1px solid #cccccc7a"
              borderRight="1px solid #cccccc7a"
              borderRadius={6}
              p={2}
              gap={2}
            >
              <Box>
                <Badge textAlign={"center"} colorScheme="linkedin">
                  Informações do Abrigo
                </Badge>
              </Box>

              <FormControl isRequired>
                <FormLabel>Nome do Abrigo</FormLabel>
                <Input type="text" {...register("shelterName")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Nome do Responsável</FormLabel>
                <Input type="text" {...register("shelterAccountable")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>CEP</FormLabel>
                <Input
                  type="number"
                  isDisabled={!editable}
                  onChange={handleCep}
                />
                <Text color={"red"}>{cepError && cepError}</Text>
              </FormControl>
              {address && (
                <>
                  <FormControl isRequired>
                    <FormLabel>Rua</FormLabel>
                    <Input
                      type="text"
                      isDisabled={true}
                      value={address?.street}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Bairro</FormLabel>
                    <Input
                      type="text"
                      isDisabled={true}
                      value={address?.neighborhood}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Cidade</FormLabel>
                    <Input
                      type="text"
                      isDisabled={true}
                      value={`${address?.city} - ${address?.state}`}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Número (endereço)</FormLabel>
                    <Input type="text" {...register("addressNumber")} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Complemento</FormLabel>
                    <Input type="text" {...register("addressInfo")} />
                  </FormControl>
                </>
              )}
            </Flex>

            <Flex
              flexDir={"column"}
              borderLeft="1px solid #cccccc7a"
              borderBottom="1px solid #cccccc7a"
              borderRight="1px solid #cccccc7a"
              borderRadius={6}
              p={2}
              gap={2}
            >
              <Box>
                <Badge textAlign={"center"} colorScheme="linkedin">
                  Informações de contato
                </Badge>
              </Box>

              <FormControl>
                <FormLabel>Instagram</FormLabel>
                <Input
                  type="text"
                  defaultValue={"@"}
                  {...register("instagram")}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Whatsapp</FormLabel>
                <Input type="tel" {...register("whatsapp")} />
              </FormControl>
              <FormControl>
                <FormLabel>Telefone Secundário</FormLabel>
                <Input type="tel" {...register("telphone")} />
              </FormControl>
            </Flex>

            <Flex
              flexDir={"column"}
              borderLeft="1px solid #cccccc7a"
              borderBottom="1px solid #cccccc7a"
              borderRight="1px solid #cccccc7a"
              borderRadius={6}
              p={2}
              gap={2}
            >
              <Box>
                <Badge textAlign={"center"} colorScheme="linkedin">
                  Informações para Login
                </Badge>
              </Box>

              <FormControl isRequired>
                <FormLabel>Login</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type="password" {...register("password")} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password.current || "As senhas não coincidem",
                  })}
                />
                <Text color={"red"}>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </Text>
              </FormControl>
            </Flex>

            <Button
              alignSelf={"center"}
              w={["100%", "50%"]}
              colorScheme="green"
              type="submit"
            >
              Cadastrar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
export default AddShelter;
