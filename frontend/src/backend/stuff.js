const BACKEND_URL = 'https://givexp.ro:10443/'
const TEST_ENDPOINT = 'test'


const callTestEndpoint = async () => {
    console.log('calling backend GET /test endpoint')
    const url = BACKEND_URL + TEST_ENDPOINT

    return await fetch(url);
}


export default callTestEndpoint