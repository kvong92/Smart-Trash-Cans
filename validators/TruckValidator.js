import { z } from "zod";

const TruckValidator = z.object({
  id: z.number().int().positive(),
  should_move: z.boolean(),
  last_trigger: z.date().optional(),
});

export default TruckValidator;