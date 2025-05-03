// const BACKEND_URL = 'https://givexp.ro:10443/'
const BACKEND_URL = 'http://localhost:10443/'
const TEST_ENDPOINT = 'test'
const CROWN_BALANCE_ENDPOINT = 'balanceOf/'


const callTestEndpoint = async () => {
    console.log('calling backend GET /test endpoint')
    const url = BACKEND_URL + TEST_ENDPOINT

    return await fetch(url);
}

const crownBalanceOf = async (address) => {
    console.log(`getting balance for account: ${address}`)
    const url = BACKEND_URL + CROWN_BALANCE_ENDPOINT + address
    return await fetch(url)
}


export default { callTestEndpoint, crownBalanceOf }