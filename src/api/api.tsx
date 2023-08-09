const Api = {
  items: {
    search: async (search: string) => {
      const { results } = await fetch(`https://api.mercadolibre.com/sites/MEC/search?q=${search}&limit=40`)
        .then(res => res.json() as Promise<{
          results: {
            id: string
            title: string
            price: number
            currency_id: string
            thumbnail: string
            seller_address: {
              city: {
                name: string
              }
            }

          }[]
        }>)
      return results
    },
    detail: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(res => res.json() as Promise<{
          id: string
          title: string
          price: number
          currency_id: string
          thumbnail: string
          permalink: string
          seller_address: {
            city: {
              name: string
            },
            state: {
              name: string
            }
          },
          pictures: [{
            url: string
          }]
        }>)
      return item
    },
    description: async (id: string) => {
      const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(res => res.json() as Promise<{
          plain_text: string
        }>)
      return description
    }
  }
}

export default Api;