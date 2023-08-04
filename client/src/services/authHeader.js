export default function authHeader() {
    const auth = JSON.parse(localStorage.getItem('accessToken'));
    
    if (auth && auth.accessToken) {
        return { 'x-access-token': auth.accessToken };
    } else {
        return {};
    }
}