import { Flex, Stack, Box, Heading, Text, Input, Field, HStack, Link, Button} from "@chakra-ui/react"
import {PasswordInput} from "../ui/password-input"
import {useState} from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState("login")
  const isLogin = mode === "login"

  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  // const [address, setAddress]= useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try{
      const url = isLogin ? "http://localhost:8080/user/login" : "http://localhost:8080/user/register"
      // const body = isLogin ? {email, password} : {email, password, address} 
      const res = await fetch(url,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username, password}),
        credentials: "include"
      })
      if (!res.ok) throw new Error(isLogin ? "Username atau Password salah" : "Registrasi gagal")
      if (isLogin){
        const data = await res.json()
      
        navigate("/about")
      } 
      
    }catch (err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }
  return (
   <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box bg="white" p={8} rounded="xl" shadow="md" w="full" maxW="md">
        <HStack bg="gray.100" p={1} rounded="lg">
          <Button flex="1" variant={isLogin ? "solid" : "ghost"} colorPalette="blue" opacity={isLogin ? 1 : 0.5 } onClick={() => setMode("login")}>
            Login
          </Button>
          <Button flex="1" variant={!isLogin ? "solid" : "ghost"} colorPalette="blue" opacity={!isLogin ? 1 : 0.5} onClick={() => setMode("register")}>
            Register
          </Button>
        </HStack>
        <Stack gap={2}>
          <Stack gap={2} color="black" align="center" mb={5}>
            <Heading size="lg">{isLogin ? "Selamat Datang" : "Buat Akun"}</Heading>
            <Text color="grey.500">{isLogin ? "Masuk untuk melanjutkan" : "Daftarkan akun anda"}</Text>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack color="black">
              <Field.Root required>
                <Field.Label>Username</Field.Label>
                <Input type="text" placeholder="Masukkan username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              <Field.Root required>
                <Field.Label>Password</Field.Label>
                <PasswordInput placeholder="*********" visible={showPassword} onVisibleChange={setShowPassword} onChange = {(e) => setPassword(e.target.value)}/>
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              {/* {!isLogin ? 
              <Field.Root orientation="horizontal" required>
                <Field.Label>Address</Field.Label>
                <Input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e,target.value)}/>
                <Field.ErrorText>This field is requered</Field.ErrorText>
              </Field.Root> : null} */}
              
              {isLogin && (<Link color="blue.500" fontSize="sm">Lupa Password?</Link>)}
              {error && (<Text color="red.500" fontSize="sm">{error}</Text>)}
              
              <Button type="submit" colorPalette="blue" w="full" loading={loading} disabled={loading}>{isLogin ? "Masuk" : "Daftar"}</Button>
            </Stack>
          </form>
        </Stack>
      </Box>
   </Flex>
  )
}

export {Login}