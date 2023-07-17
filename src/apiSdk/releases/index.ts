import axios from 'axios';
import queryString from 'query-string';
import { ReleaseInterface, ReleaseGetQueryInterface } from 'interfaces/release';
import { GetQueryInterface } from '../../interfaces';

export const getReleases = async (query?: ReleaseGetQueryInterface) => {
  const response = await axios.get(`/api/releases${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRelease = async (release: ReleaseInterface) => {
  const response = await axios.post('/api/releases', release);
  return response.data;
};

export const updateReleaseById = async (id: string, release: ReleaseInterface) => {
  const response = await axios.put(`/api/releases/${id}`, release);
  return response.data;
};

export const getReleaseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/releases/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteReleaseById = async (id: string) => {
  const response = await axios.delete(`/api/releases/${id}`);
  return response.data;
};
