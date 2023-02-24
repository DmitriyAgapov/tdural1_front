export const CreateParts = `mutation CreatePart($item: PartInput!) {
  createPart(data: $item) {
    data {
      id
    }
  }
  
}`
export const PartsCategories = `query PartsCategory($url: String) {
  partsCategories {
    data {
      id
      attributes {
        title
        image {
          data {
            id
            attributes {
              width
              width
              name
              formats              
            }
          }
        }
        content
        url        
        parent_category {
          data {
            id
          }
        }
      }
    }
  }
  current: partsCategories(filters: {url: {eq: $url}}) {
    data {
      id
      attributes {
        title
        url
        content        
        custom__meta {
          metaPageTitle
          metaKeywords
          metaDescription
          descriptionText
        }
      }
    }
  }
  }`

export const PartsAndCategories = `query PartsAndCategory {
  partsCategories {
    data {
      id
      attributes {
        title
        image {
          data {
            id
            attributes {
              width
              width
              name
              formats              
            }
          }
        }
        content
        url        
        parent_category {
          data {
            id
          }
        }
      }
    }
  }
  parts {
    data {
      id
      attributes {
        title
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
        url
        publishDate
        partNumber
        price
        custom__meta {
          id
          descriptionText
          metaPageTitle
          metaKeywords
          metaDescription
        }
        parts_category {
          data {
            id
            attributes {
              title
              url
            }
          }}
        createdAt
        updatedAt
        
        
      }
    }
  } 
}`

export const Parts = `query Parts {
  parts {
    data {
      id
      attributes {
        title
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
        url
        publishDate
        partNumber
        price
        custom__meta {
          id
          descriptionText
          metaPageTitle
          metaKeywords
          metaDescription
        }
        parts_category {
          data {
            id
            attributes {
              title
              url
            }
          }}
        createdAt
        updatedAt
        publishedAt
        
      }
    }
  } 
}`

export const Part =
    `query Parts($url: String, $page: Int, $pageSize: Int, $specOffer: Boolean) {
  partsCategories {
    data {
      id
      attributes {
        
        title
        url       
      }
    }
  }
  current: partsCategories(filters: {url: {eq: $url}}) {
    data {
      id
      attributes {
        title
        url
        content        
        custom__meta {
          metaPageTitle
          metaKeywords
          metaDescription
          descriptionText
        }
      }
    }
  }
  parts(filters: { and: {
    Specpredlogenie: { eq: $specOffer},
    parts_category: {url: {eq: $url}}}},
    pagination: {page: $page, pageSize: $pageSize}) {
    meta {
     pagination {
       total
     }
   }
    data {
      id
      attributes {
        title
        price
        partNumber
        url
        Specpredlogenie
        parts_category {
       
          data {
            attributes {
              title
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
        
        url
      }
    }
  }
}`