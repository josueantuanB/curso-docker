# Etapa 1: Build
FROM node:22-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias y lockfile
COPY package.json ./

# Instalar dependencias
RUN yarn install --frozen-lockfile

# Copiar todo el código fuente
COPY . .

# Construir el proyecto Next.js
RUN yarn build

# Etapa 2: Producción
FROM node:22-alpine AS runner

# Establecer directorio de trabajo
WORKDIR /app

# Copiar solo lo necesario desde la etapa de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Puerto expuesto
EXPOSE 3000

# Iniciar la app
CMD ["yarn", "start"]
