import {z} from 'zod'

const envSchema = z.object({
    PORT: z.string().default('3000'),
    DATE_NAGER_API: z.string(),
    COUNTRIES_NOW_API:z.string()
})

export const env = envSchema.parse(process.env); 