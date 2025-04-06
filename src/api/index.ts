
export const getUsers = async () => {
    try {
    fetch("http://localhost:4000/v1/users").then((res) => {
        console.log(res.body)
    })
    } catch (e: unknown) {
        console.log(e)
    }
}