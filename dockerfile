# Utilizza un'immagine base ufficiale di Node.js
FROM node:18-alpine

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file di configurazione del progetto
COPY package.json package-lock.json ./

# Installa le dipendenze del progetto
RUN npm install

# Copia i restanti file del progetto
COPY . .

# Espone la porta 5173
EXPOSE 5173

# Define environment variable
ENV HOST=0.0.0.0

# Comando per eseguire l'applicazione
CMD ["npm", "run", "dev"]
