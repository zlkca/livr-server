export const orders = [
    {
      _id: '1',
      status: 'PENDING',
      user: {
        _id: '1',
        name: 'Adam',
        phone: '416-000-0001',
        email: 'adam@livrai.com',
      },
      merchant:     {
        _id: '1',
        name: 'Y-Sushi',
        phone: '647-123-1234',
        email: 'yshushi@livrai.com',
      },
      items:[
        {
            _id: '1',
            product: {
                _id: '1',
                title: 'Product 1',
                description: 'Product 1 description',
                image: '',
                price: 21.5,
            },
            quantity: 2,
        },
        {
            _id: '2',
            product: {
                _id: '2',
                title: 'Product 2',
                description: 'Product 2 description',
                image: '',
                price: 11.5,
            },
            quantity: 3,
        }
      ],
    },
    {
      _id: '2',
      status: 'PENDING',
      user: {
        _id: '2',
        email: 'mary@livrai.com',
      },
      merchant: {
        _id: '2',
        name: 'Q-Hotpot',
        phone: '647-123-1234',
        email: 'qhotpot@livrai.com',
      },
      items:[
        {
            _id: '3',
            product: {
                _id: '1',
                title: 'Product 1',
                description: 'Product 1 description',
                image: '',
                price: 21.5,
            },
            quantity: 1,
        },
        {
            _id: '4',
            product: {
                _id: '2',
                title: 'Product 2',
                description: 'Product 2 description',
                image: '',
                price: 11.5,
            },
            quantity: 4,
        }
      ],
    },
    {
      _id: '3',
      status: 'ACCEPTED',
      user: {
        _id: '2',
        email: 'mary@livrai.com',
      },
      merchant: {
        _id: '2',
        name: 'Q-Hotpot',
        phone: '647-123-1234',
        email: 'qhotpot@livrai.com',
      },
      items:[
        {
            _id: '3',
            product: {
                _id: '1',
                title: 'Product 1',
                description: 'Product 1 description',
                image: '',
                price: 21.5,
            },
            quantity: 1,
        },
        {
            _id: '4',
            product: {
                _id: '2',
                title: 'Product 2',
                description: 'Product 2 description',
                image: '',
                price: 11.5,
            },
            quantity: 4,
        }
      ],
    },
    {
      _id: '4',
      status: 'DELIVERED',
      user: {
        _id: '2',
        email: 'mary@livrai.com',
      },
      merchant: {
        _id: '2',
        name: 'Q-Hotpot',
        phone: '647-123-1234',
        email: 'qhotpot@livrai.com',
      },
      items:[
        {
            _id: '3',
            product: {
                _id: '1',
                title: 'Product 1',
                description: 'Product 1 description',
                image: '',
                price: 21.5,
            },
            quantity: 1,
        },
        {
            _id: '4',
            product: {
                _id: '2',
                title: 'Product 2',
                description: 'Product 2 description',
                image: '',
                price: 11.5,
            },
            quantity: 4,
        }
      ],
    },
  ]