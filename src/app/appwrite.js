import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6766a1e6003da77b10fe');

export const account = new Account(client);
export { ID } from 'appwrite';
