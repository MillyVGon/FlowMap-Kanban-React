import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors()) //colocar url do site depois

// Validar token
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ error: 'Acesso negado. Token ausente.' })

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch (err) {
        console.error(err)
        res.status(400).json({ error: "Token inválido." })
    }
}

// Rota protegida
app.get('/users/:id', checkToken, async (req, res) => {
    const id = req.params.id

    try {
        const user = await prisma.user.findUnique({ where: { id } })
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' })

        res.status(200).json({ user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao buscar usuário.' })
    }
})

// Registro de usuário
app.post('/users/register', async (req, res) => {
    try {
        const { name, email, signature, password, confirmPassword } = req.body
        const passwordCheck = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)
        const emailCheck = await prisma.user.findUnique({ where: { email } })

        // Validação da conta
        if ([name, email, signature, password, confirmPassword].some(field => !field?.trim()))
            return res.status(400).json({ error: "Todos os campos devem ser preenchidos." })
        if (emailCheck)
            return res.status(409).json({ error: "Email já cadastrado." })
        if (!passwordCheck)
            return res.status(400).json({ error: "A senha deve ter no mínimo 8 caracteres e um número." });
        if (password != confirmPassword)
            return res.status(400).json({ error: "As senhas não conferem." });

        // Criptografar a senha e assinatura
        const salt = await bcrypt.genSalt(12)
        const hashSignature = await bcrypt.hash(signature, salt)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                signature: hashSignature,
                password: hashPassword
            }
        })

        res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Erro ao criar o usuário." })
    }

})

// Login do usuário
app.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await prisma.user.findUnique({ where: { email } })
        if ([email, password].some(field => !field?.trim()))
            return res.status(400).json({ error: "Todos os campos devem ser preenchidos." })
        if (!user)
            return res.status(404).json({ error: "Email não encontrado." })
        
        const passwordCheck = await bcrypt.compare(password, user.password)
        if (!passwordCheck)
            return res.status(400).json({ error: "Senha inválida." })
        
        const secret = process.env.SECRET
        const token = jwt.sign(
            { id: user.id },
            secret,
        )
        res.status(200).json({ message: "Login feito com sucesso!", token, 
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            } 
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Erro ao fazer login." })
    }
})

// Atualizar usuário (incompleto)
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: req.params.id },
            data: {
                email: req.body.email,
                name: req.body.name,
            },
        })
        res.status(200).json({ message: 'Usuário atualizado com sucesso!', updatedUser })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao atualizar o usuário.' })
    }
})

// Deletar usuário 
app.delete('/users/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: req.params.id }
        })
        res.status(200).json({ message: 'Usuário deletado com sucesso!' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao deletar o usuário.' })
    }
})

// Listar todos os usuários
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: { id: true, name: true, email: true, createdAt: true },
        })
        res.status(200).json(users)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao listar usuários.' })
    }
})

// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'FlowMap API rodando com sucesso' })
})

export default app