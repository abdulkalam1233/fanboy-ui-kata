import axios from "axios";
import { BaseApiUrl } from "../common/mapping";
import {objectUtils} from '../utils/object';

const ApiRoutes = {
  get_all_people: `${BaseApiUrl}/people`,
  get_people_by_id: `${BaseApiUrl}/people/:id`,
}

class CelebrityService {
  async getAllCelebrities(queryParams: {
    query: string;
  }) {
    const queryParamsSerialized = objectUtils.serializeQueryParamsObject(queryParams);
    return axios.get(`${ApiRoutes.get_all_people}?${queryParamsSerialized}`)
  };

  async getCelebrityById(id: number | string) {
    return axios.get(ApiRoutes.get_people_by_id.replace(':id', id.toString()))
  }
}

export const celebrityService = new CelebrityService();