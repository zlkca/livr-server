export const merchants = [
    {
      _id: '1',
      name: 'Y-Sushi',
      phone: '647-123-1234',
      email: 'yshushi@livrai.com',
      branches:[
        {
          _id: '1',
          merchantId: '1',
          name: 'Y-Sushi - Warden',
          phone: '647-123-1234',
          email: 'yshushi@livrai.com',
          address: '8500 Warden Ave., Markham, ON L6G 1A5'
        },
        {
            _id: '2',
            merchantId: '1',
            name: 'Y-Sushi - Hwy7',
            phone: '647-123-1234',
            email: 'yshushi@livrai.com',
            address: '3760 Hwy 7, Markham, ON L3R 0N2'
          },
      ]
    },
    {
      _id: '2',
      name: 'Q-Hotpot',
      phone: '647-123-1234',
      email: 'qhotpot@livrai.com',
      branches:[
        {
          _id: '3',
          merchantId: '2',
          name: 'Qhotpot - McIntosh',
          phone: '647-123-1234',
          email: 'qhotpot@livrai.com',
          address: '165 McIntosh Dr, Markham, ON L3R 0N6'
        },
    
          {
            _id: '4',
            merchantId: '2',
            name: 'Qhotpot - Thomas Cook',
            phone: '647-123-1234',
            email: 'qhotpot@livrai.com',
            address: '310 Thomas Cook Ave, Maple, ON L6A 4S5'
          },
      ]
    },
  ]