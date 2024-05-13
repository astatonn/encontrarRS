import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) =>
    console.log({
      ...data,
    });

  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Flex
        border={"1px solid #ccc"}
        w={["80%", "40%"]}
        p={5}
        borderRadius={6}
        justifyContent={"center"}
        bgColor={"white"}
        flexDir={"column"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDir={"column"} w={"100%"} gap={5}>
            <Flex alignItems={"center"}>
              <Image
                maxW={["30%", "40%"]}
                src={logo}
                onClick={() => navigate("/")}
              />
              <Text
                fontWeight={600}
                fontSize={["1.3rem", "2.5rem"]}
                w={"100%"}
                textAlign={"center"}
              >
                Login Abrigos
              </Text>
            </Flex>

            <FormControl>
              <FormLabel>Login</FormLabel>
              <Input type="text" {...register("login")} />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input type="password" {...register("password")} />
            </FormControl>
            <Button
              alignSelf={"center"}
              w={["100%", "50%"]}
              colorScheme="green"
              type="submit"
            >
              Login
            </Button>
          </Flex>
        </form>

        <Flex
          mt={5}
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Text fontStyle={"italic"}>Seu abrigo ainda não se cadastrou?</Text>
          <Button
            w={["100%", "50%"]}
            colorScheme="red"
            onClick={() => navigate("/adicionarAbrigo")}
          >
            Cadastrar Abrigo
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Login;
