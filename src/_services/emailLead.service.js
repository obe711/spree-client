import { BehaviorSubject } from "rxjs";

import config from "config";
//import { apiUrl } from "../config.json";
import { fetchWrapper } from "../_helpers";

//const userSubject = new BehaviorSubject(null);
const baseUrl = `${config.apiUrl}/api/lead`;

export const emailLeadService = {
  saveLead,
  deleteLead,
  toggleSeenLead,
  getAll,
  getLead,
  sendReply,
};

function saveLead(params) {
  return fetchWrapper.post(`${baseUrl}`, params);
}

function deleteLead(id) {
  return fetchWrapper.delete(`${baseUrl}/id/${id}`);
}

function toggleSeenLead(id) {
  return fetchWrapper.put(`${baseUrl}/id/${id}`, { id });
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}`);
}

function getLead(id) {
  return fetchWrapper.get(`${baseUrl}/id/${id}`);
}
function sendReply(id, reply) {
  return fetchWrapper.put(`${baseUrl}/reply/${id}`, { reply });
}
