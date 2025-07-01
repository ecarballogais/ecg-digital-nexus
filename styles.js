:root {
  --primary: #7193f5;
  --accent: #ffa726;
  --dark-bg: #1a1a1a;
  --dark-text: #f0f0f0;
  --light-bg: #f7f9fc;
  --light-text: #333;
}
body {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: var(--light-bg);
  color: var(--light-text);
}
body.dark-theme {
  background: var(--dark-bg);
  color: var(--dark-text);
}
header {
  background: var(--primary);
  color: white;
  padding: 2rem;
  text-align: center;
}
.container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.feature {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
body.dark-theme .feature {
  background: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}
.btn {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: .6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}