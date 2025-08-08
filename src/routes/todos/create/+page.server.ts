export const actions =  {
    default: async ({request}) => {
        const form = await request.formData();
        const text = form.get("text");

        const payload = {text, "done": false}

        const res = await fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })

        const result = await res.json();
        console.log(result);
        return {result}
    }
}