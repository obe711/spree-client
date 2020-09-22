import { BehaviorSubject } from "rxjs";

import config from "config";
//import { apiUrl } from "../config.json";
import { fetchWrapper } from "../_helpers";

//const userSubject = new BehaviorSubject(null);
const baseUrl = `${config.apiUrl}/api/contact`;

export const contactService = {
  saveMessage,
  deleteMessage,
  toggleSeenMessage,
  getAll,
  getMessage,
  sendReply,
};

function saveMessage(params) {
  return fetchWrapper.post(`${baseUrl}`, params);
}

function deleteMessage(id) {
  return fetchWrapper.delete(`${baseUrl}/id/${id}`);
}

function toggleSeenMessage(id) {
  return fetchWrapper.put(`${baseUrl}/id/${id}`, { id });
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}`);
}

function getMessage(id) {
  return fetchWrapper.get(`${baseUrl}/id/${id}`);
}

function sendReply(id, reply) {
  return fetchWrapper.put(`${baseUrl}/reply/${id}`, { reply });
}
