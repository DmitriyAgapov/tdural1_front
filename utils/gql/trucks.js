export const TrucksCategories = `query TrucksCategories {
  truckCategories(filters: { trucks: { id: { not: null } } }) {
    data {
      id
      attributes {
        title
        order
        categoryId
        url
        parent_category {
          data {
            id
            attributes {
              categoryId
            }
          }
        }
      }
    }
  }
}
`
export const CurrentTrucksCategory = `query CurrentTrucksCategory($url: String!) {
  currentCategory: truckCategories(filters: {url: {eq: $url}}) {
    data {
      id
      attributes {
        title       
        order
        categoryId
        url      
        parent_category {
          data {
            id
            attributes {          
                categoryId
            }
          }
        }     
      }
    }   
  } 
  
}`
export const TrucksCat = `query TrucksCategories {
  truckCategories {
    data {
      id
      attributes {
        title       
        categoryId
        order
        url      
        parent_category {
          data {
            id
            attributes {          
                categoryId
            }            
          }
        }     
      }
    }   
  } 
  trucks(filters: {instock: {eq: true}}){
    data {
      id      
      attributes {
        title
        uid
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
        content
        fullTextSpecs
        baseSpecs {
          id
          wheelType
          weightLoad
          power
          platforma
          typeOfUnload
          year
          engine
          
        }
        shortSpecs {
          spec_title
          id
          spec_value
        }
        order
        url
        category {
          data {
            id
            attributes {
              title
              url
            }
          }
        }
        custom__meta {
          id
          descriptionText
          metaPageTitle
          metaKeywords
          metaDescription
        }
        instock
     
      }
    } 
  }
}`
export const CategoriesWithTrucksWithAmount = `query TrucksCategories {
  truckCategories {
    data {
      id
      attributes {
        title
        categoryId
        order
        title
        url
        trucks(pagination: { limit: 4 }) {
          data {
            id
            attributes {
              uid
              price
               image {
                 data {
                   attributes {
                     url
                     height
                     
                     width
                   }
                 }
               }
               title
               category {
                data {
                  attributes {
                    categoryId
                    url
                  }
                }
              }
              additional_options 
              additional_content
              content
              fullTextSpecs
              baseSpecs {                
                id
                wheelType
                weightLoad
                power
                engine
                year
                platforma
                typeOfUnload
              }
              shortSpecs {
                spec_value
                spec_title
                id
              }
              order
              url
              instock
            }
          }
        }
      }
    }
  }
}
`
export const Trucks = `query Trucks($url: String, $limit: Int) {
        trucks(filters: {instock: {eq: true} and: { category: { url: {eq: $url}}}} pagination: {limit: $limit})
    {
    data {
      id
      attributes {
        title
        uid
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
        additional_options
        additional_content
        content
        fullTextSpecs
        baseSpecs {
          id
          wheelType
          weightLoad
          power
          engine
          year
          platforma
          typeOfUnload
        }
        shortSpecs {
          spec_title
          id
          spec_value
        }
        order
        url
        category {
          data {
            id
            attributes {
              title
              url
              categoryId
            }
          }
        }
        custom__meta {
          id
          descriptionText
          metaPageTitle
          metaKeywords
          metaDescription
        }
        instock
     
      }
    } 
  }
}`
export const Truck = `query Truck($url: String!) {
        truck(url: $url)
    {
    data {
      id
      attributes {
        title
        uid
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
        additional_options
        additional_content
        content
        fullTextSpecs
        baseSpecs {
          id
          wheelType
          weightLoad
          power
          engine
          year
          platforma
          typeOfUnload
        }
        shortSpecs {
          spec_title
          id
          spec_value
        }
        order
        url
        category {
          data {
            id
            attributes {
              title
              url
              categoryId
            }
          }
        }
        custom__meta {
          id
          descriptionText
          metaPageTitle
          metaKeywords
          metaDescription
        }
        instock
     
      }
    } 
  }
}`