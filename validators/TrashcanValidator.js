import { z } from "zod";

const TrashcanValidator = z.object({
  id: z.number().int().positive(),
  pos_x: z.number(),
  pos_y: z.number(),
  state: z.string().min(1),
});

export default TrashcanValidator;