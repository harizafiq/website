export const load = async () => {
    const res = await fetch('https://todo.starlimes.com/todos');
	const result = await res.json();
	console.log(result.data);
	return { "todos": result.data };
}