export const ServiceCategories = `query ServiceCategory {
  serviceCategories {
    data {
      id
      attributes {
        title
        
        url
      
      }
    }
  } 
}`
export const ServiceAndCategories = `query ServiceCategory {
  serviceCategories {
    data {
      id
      attributes {
        title        
        url      
      }
    }
  } 
  services {
    data {
      id
      attributes {
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
        order
        url

        service_category {
          data {
            id
            attributes {
              title
              url
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
}`
export const Services = `query Services {
serviceCategories {
    data {
      id
      attributes {
        title
        
        url
      
      }
    }
  } 
  services {
    data {
      id
      attributes {
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
        order
        url

        service_categories {
          data {
            id
            attributes {
              title
              url
            }
          }
        }
      }
    }
  }
}
`
export const Service = `query Services($url: String) {
  serviceCategories {
    data {
      id
      attributes {
        title
        url       
      }
    }
  }
  services(filters: {service_category: {url: {eq: $url}}}) {
    data {
      id
      attributes {
        title
        price
        service_category {
          data {
            attributes {
              title
              url
            }
          }
        }
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
        order
        url
      }
    }
  }
}`

