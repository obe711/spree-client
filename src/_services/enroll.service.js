import config from "config";
import { fetchWrapper } from "../_helpers";

const baseUrl = `${config.apiUrl}/api/enroll`;

export const enrollService = {
  saveEnrollment,
  deleteEnrollment,
  toggleSeenEnrollment,
  getAll,
  getEnrollment,
};

function saveEnrollment(params) {
  return fetchWrapper.post(`${baseUrl}`, params);
}

function deleteEnrollment(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}

function toggleSeenEnrollment(id) {
  return fetchWrapper.put(`${baseUrl}/${id}`, id);
}

function getAll() {
  return fetchWrapper.get(`${baseUrl}`);
}

function getEnrollment(id) {
  return fetchWrapper.get(`${baseUrl}/${id}`);
}
