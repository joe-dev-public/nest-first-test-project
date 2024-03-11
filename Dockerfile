# Remember: after changing this file, you need to re-build your image :¬)

# https://hub.docker.com/_/node
FROM node:20

WORKDIR /code

# Copying in package dependency definitions (and installing them) is
# good Docker practice to take advantage of caching.
COPY package.json package-lock.json ./

RUN npm install

# Having done that, we can copy the rest of the code etc. over.
COPY . .

# Run the app/server. Note start:dev is to watch file changes, for local dev
# only.
# Don't forget that you (might?) need to run the app on 0.0.0.0 for Docker!
# Doesn't seem like we can tell Nest.js to run on port 80 by adding
# "--port", "80", so just configure our app to run on 80 by default (which I
# assume would be required for deployment anyway?).
CMD ["npm", "run", "start:dev", "--host", "0.0.0.0"]
