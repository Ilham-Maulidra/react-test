import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Heading, Container, Stack, Box, Text, InputGroup, Field, Input, SimpleGrid, Button, Textarea, Image } from "@chakra-ui/react"

const Max_Size = 10 * 1024 *1024
const Allowed_Types = ["image/jpeg", "image/png", "image/webp"]

const initialForm = {
    name : "",
    price : "",
    stock : "",
    description : "",
}

function AddProduct(){
    const navigate = useNavigate()
    const [form, setForm] = useState(initialForm)
    const [file, setFile] =  useState(null)
    const [preview, setPreview] = useState("")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({type: "", text: ""})

    // Preview gambar, dan bersihkan URL lama dari memori
    useEffect(() => {
        if (!file) {
            setPreview("")
            return
        }
        const url = URL.createObjectURL(file)
        setPreview(url)
        return () => URL.revokeObjectURL(url)
    }, [file])

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({ ...prev, [name]: value}))
        setErrors((prev) => ({ ...prev, [name]: ""}))
    }

    const handleFile = (e) => {
        const selected = e.target.files?.[0]
        if (!selected) return

        if (!Allowed_Types.includes(selected.type)){
            setErrors((prev) => ({ ...prev, image: "Format harus JPG, PNG, atau WEBP"}))
            return
        }
        if (selected.size > Max_Size) {
            setErrors((prev) => ({ ...prev, image: "Ukuran maksimal 10 MB"}))
            return
        }
        setErrors((prev) => ({ ... prev, image: ""}))
        setFile(selected)
    }

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = "Nama produk wajib diisi"
        if (!form.price || Number(form.price) <= 0) newErrors.price = "Harga harus lebih dari 0"
        if (form.stock === "" || Number(form.stock) < 0) newErrors.stock = "Stok tidak valid"
        if(!file) newErrors.image = "Foto produk wajib diisi"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ type: "", text : ""})
        if (!validate()) return

        const data = new FormData()
        data.append("name", form.name.trim())
        data.append("price", form.price)
        data.append("stock", form.stock)
        data.append("description", form.description.trim())
        data.append("image", file)

        setLoading(true)
        try{
            const url = "http://localhost:8080/product/add"
            const res = await fetch(url,{
                method : "POST",
                body : data,
                credentials: "include",
            })
            const text = await res.text()
            const result = text ? JSON.parse(text) : {}
            if (!res.ok) throw new Error(result.error || "Gagal menambahkan produk")

            setStatus({type: "success", text: "Produk berhasil ditambahkan"})
            setForm(initialForm)
            setFile(null)
            // if (res.status = 401){
            //     localStorage.removeItem("access_token")
            //     navigate("/login")
            //     return
            // }
        }catch (err){
            setStatus({type: "error", text: err.message})
        }finally {
            setLoading(false)
        }
    }

    return(
        <Box minH="100vh" bgGradient="to-br" gradientFrom="blue.50" gradientTo="gray.100" py={10}>
            <Container maxW="4xl">
                <Box bg="white" rounded="2xl" shadow="lg" p={{ base: 6, md: 6}}>
                    <Stack gap={1} mb={8}>
                        <Heading size="xl" color="black">Tambah Produk</Heading>
                        <Text color="gray.500">Isi detail produk dan unggah foto terbaiknya</Text>
                    </Stack>
                    <form onSubmit={handleSubmit} noValidate>
                        <SimpleGrid columns={{ base: 1, md: 2}} gap={8}>
                            <Stack gap={3}>
                                <Field.Root invalid={!!errors.image}>
                                    <Field.Label>Foto Produk</Field.Label>
                                    <Box as="label" cursor="pointer" border="2px dashed" borderColor={errors.image ? "red.500" : "blue.200"} rounded="xl" bg="blue.50" overflow="hidden" _hover={{borderColor: "blue.400"}} transition="all 0.2s">
                                        {preview ? (<Image src={preview} alt="Preview produk" h="260px" w="full" objectFit="cover"/> ) : (
                                        <Stack h="260px" align="center" justify="center" gap={2}>
                                            <Text fontSize="3xl">Foto</Text>
                                            <Text fontWeight="medium" color="blue.600">Klik untuk pilih foto</Text>
                                            <Text fontSize="sm" color="gray.500">JPG, PNG, atau WEBP, maks 10mb</Text>
                                        </Stack>
                                        )}
                                        <Input type="file" accept="image/*" hidden onChange={handleFile}/>
                                    </Box>
                                    <Field.ErrorText>{errors.image}</Field.ErrorText>
                                </Field.Root>
                                {preview && (<Button variant="ghost" size="sm" colorPalette="red" onClick={() => setFile(null)}>Hapus foto</Button>)}
                            </Stack>

                            <Stack gap={5}>
                                <Field.Root invalid={!!errors.name}>
                                    <Field.Label>Nama Produk</Field.Label>
                                    <Input name="name" placeholder="Masukkan nama produk, tipe produk dan variant" value={form.name} onChange={handleChange}/>
                                    <Field.ErrorText>{errors.name}</Field.ErrorText>
                                </Field.Root>

                                <SimpleGrid columns={2} gap={4}>
                                    <Field.Root invalid={!!errors.price}>
                                        <Field.Label>Harga</Field.Label>
                                        <InputGroup startElement={<Text color="gray.500">Rp.</Text>}>
                                            <Input name="price" type="number" min="0" ps="2.5rem" value={form.price} onChange={handleChange}/>
                                        </InputGroup>
                                        <Field.ErrorText>{errors.price}</Field.ErrorText>
                                    </Field.Root>
                                    <Field.Root invalid={!!errors.stock}>
                                        <Field.Label>Stok</Field.Label>
                                        <Input name="stock" type="number" min="0" value={form.stock} onChange={handleChange}/>
                                        <Field.ErrorText>{errors.stock}</Field.ErrorText>
                                    </Field.Root>
                                </SimpleGrid>

                                <Field.Root>
                                    <Field.Label>Description</Field.Label>
                                     <Textarea name="description" rows={4} placeholder="Tulis deskripsi dari produk" value={form.description} onChange={handleChange}/>
                                </Field.Root>

                                
                                {status.text && (
                                    <Box p={3} rounded="md" bg={status.type === "success" ? "green.50" : "red.50"} color={status.type === "success" ? "green.700" : "red.600"} fontSize="sm">
                                        {status.text}
                                    </Box>
                                )}
                               
                                <Button type="submit" colorPalette="blue" size="lg" w="full" loading={loading} disabled={loading}   >
                                    Posting produk
                                </Button>
                            </Stack>
                        </SimpleGrid>
                    </form>

                </Box>
            </Container>
        </Box>
        
    )
}

export {AddProduct}