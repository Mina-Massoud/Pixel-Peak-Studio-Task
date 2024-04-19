// schemas/schemaTypes.js

export const schemaTypes = [
    {
      name: 'account',
      title: 'Account',
      type: 'document',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: Rule => Rule.required().email(),
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'password',
          title: 'Password',
          type: 'string',
          validation: Rule => Rule.required(),
        },
      ],
    },
  ];
  