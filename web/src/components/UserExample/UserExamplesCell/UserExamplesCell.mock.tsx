import { FindUserExamples } from "types/graphql";

export const standard = (/* vars, { ctx, req } */) =>
  ({
    userExamples: [{
      id: 1,
      email: 'test@example.com',
      name: 'Test User',
    }]
  } satisfies FindUserExamples)
