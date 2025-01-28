// productService.js
import axios from 'axios';

// Access the RapidAPI key from environment variable
const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
const baseURL = 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword';

// Function to fetch products by keyword and pagination
const fetchProducts = async (keyword, page = 1) => {
  try {
    // Make the API request
    const response = await axios.get(baseURL, {
      headers: {
        'x-rapidapi-key': rapidApiKey, // Add the RapidAPI key in headers
      },
      params: {
        sortBy: 'best_match', // Sorting parameter as per the curl example
        keyword, // Search term (e.g., 'computer')
        page, // Pagination parameter (default is 1)
      },
    });
    return response.data.item.props.pageProps.initialData.searchResult.itemStacks[0].items; // Return the data from the API response
    
  } catch (error) {
    console.error('Error fetching products:', error);
    
    return [];
  }
};

export { fetchProducts };
