
import { IWebserviceOptions, STATUS_TEXT, WEBSERVICE_METHOD } from "./WebserviceTypes";
import { WebServiceURLs } from "./WebserviceURLs";

const BASE_URL = "https://";
const TIME_OUT = 60000; // timeout in miliseconds


const defaultOptions: IWebserviceOptions = {
    method: WEBSERVICE_METHOD.GET,
    headers: {
        "Content-Type": "application/json",
    },
    body: undefined,
}
export function fetchURL(urlString: string | WebServiceURLs, query = "", request?: any, _method =  WEBSERVICE_METHOD.GET , _options?: IWebserviceOptions, newBase = BASE_URL ): any{
    try{   
        if(!urlString) throw Error(`Unable to find url - ${urlString}`);
        // String build url
        const url = `${newBase}${urlString}${query}`;

        console.info(`Performing URL Call to ${url}`)
        
        // Set up the options (with request, method type and other options if passed in)
        // const jsonRequest = request ?  JSON.stringify(request) : undefined;
        const jsonRequest = request ?  JSON.stringify(request) : null;
        const urlOptions = {...defaultOptions, method:_method , body: jsonRequest, ..._options};

        //Perform fetch
        return fetch(url, urlOptions)
        .then((promiseObject) => {
            if(promiseObject.ok) {
                return promiseObject.json();
            }
            else if(promiseObject.statusText === STATUS_TEXT.NOT_FOUND)
            throw Error(`Unable to find url - ${url}`);
            else {
                console.info(promiseObject);
                throw Error(`Error in Promise Object - ${promiseObject?.statusText}`);
            }
        }).then((responseObject) => {
            console.log(`Response success from ${url}
            --------------------------------------------------`);
            console.log(responseObject);
            return responseObject;
        })
        .catch((responseError) => {
            console.error(responseError);
        });

    }catch(error) {
        console.error(`Unable to fetchURL -`, error);
    }
}

