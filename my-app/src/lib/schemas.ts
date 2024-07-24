import { fieldNames } from "./types";
import { z , ZodType} from 'zod'
export const FieldSchemas:ZodType<fieldNames> = z.object({
    fullname:z.string().min(3,'Name must be at least 3 characters'),
    email:z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Invalid email'),
    message:z.string()
    
})

