import {vi} from 'vitest'
import {PrismaClient} from "@prisma/client"
import {mockDeep} from 'vitest-mock-extended'

export const prisma = mockDeep<PrismaClient>()

