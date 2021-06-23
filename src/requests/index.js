const BASE_URL = "https://finnhub.io";
const token = "c30csp2ad3i9gms5o570";

export const apiCall = async (query,success,error) => {

    try {
        const result = await fetch(
            `${BASE_URL}/api/v1/stock/profile?symbol=${query}&token=${token}`
          );
          const json = await result.json();
          success(json)
        
    } catch (e) {

        error(e)
        
    }
    

  
  };
   