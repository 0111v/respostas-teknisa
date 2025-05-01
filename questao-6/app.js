const form = document.getElementById('form');
const loading = document.getElementById('loading');
const success = document.getElementById('success');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  loading.style.display = 'block';
  success.style.display = 'none';

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://teknisa.com/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    // o request vai falhar por que coloquei um endereco ficticio.

    if (!response.ok) {
      throw new Error('Erro no envio');
    }

    loading.style.display = 'none';
    success.style.display = 'block';
  } catch (error) {
    loading.textContent = 'Erro ao enviar.';
    console.error(error);
  }
});
