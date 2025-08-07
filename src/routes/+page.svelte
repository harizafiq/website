<script>
    let todos = [];

    // Example: Replace with your Railway Go URL
    const apiURL = 'https://to-do-app-production-23c0.up.railway.app/todos';

    fetch(apiURL)
        .then(res => res.json())
        .then(data => todos = data)
        .catch(console.error);
</script>

hello