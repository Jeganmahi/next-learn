import {z} from 'zod';

const Schema = z.object({
    name:z.string().length(4),
})

export default Schema;