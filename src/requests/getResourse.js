export default function getResourse(url){

    return fetch(url, {
        method: "get",
        headers: new Headers({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        })
    }).then((data) => data.json()).catch((error) => console.error(error));
}