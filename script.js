document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/leandrokaminise');
        const data = await response.json();

        // Atualiza os elementos HTML com os dados obtidos
        document.getElementById('profileName').textContent = data.name;
        document.getElementById('profileUsername').textContent = `@${data.login}`;
        document.getElementById('repoCount').textContent = data.public_repos;
        document.getElementById('followersCount').textContent = data.followers;
        document.getElementById('followingCount').textContent = data.following;
        document.getElementById('profileLink').href = data.html_url;
    } catch (error) {
        console.error('Erro ao obter dados do Github:', error);
    }
}