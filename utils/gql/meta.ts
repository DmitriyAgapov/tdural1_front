export const Titles = `query Cat($url:String!){truckCategory(url:$url){data{attributes{title url}}}partsCategory(url:$url){data{attributes{title}}}}`
export const Search = `query Search($query: String!) {
  search(query: $query) {
    parts {
      data {
        attributes {
          partNumber
          url
          title
           price
           image {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        }
      }
    }
  }
}`
export const SeoTruckCat = `query SeoMeta($url: String!) {
  truckCategory(url: $url) {  
    data {
      id
      attributes {
        url
        seo {
          metaTitle
          metaDescription
          keywords
        }
      }
    }
  }
}
`
export const SeoTruck = `query SeoMeta($url: String!) {
  truck(url: $url) {  
    data {
      id
      attributes {
        url
        seo {
          metaTitle
          metaDescription
          keywords
        }
      }
    }
  }
}
`
