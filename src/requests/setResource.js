export default function setResource(url, data) {

    return fetch(url, {
        method: "post",
        headers: new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        }),
        body: JSON.stringify(data),
    });
}