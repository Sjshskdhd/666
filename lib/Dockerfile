FROM quay.io/Sjshskdhd/BOT-ELGAZARV11
RUN git clone https://github.com/Sjshskdhd/BOT-ELGAZARV11 /root/prabathLK
WORKDIR /root/prabathLK/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
