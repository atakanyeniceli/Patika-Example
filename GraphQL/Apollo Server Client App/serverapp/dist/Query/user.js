export const queryUser = `
Users: () => users,
User: (parent, args: { id: number }) => users.find((user) => user.id === args.id),
`;
