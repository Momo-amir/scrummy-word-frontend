import { wordSearchRequest, wordSearchResponse } from '../types/wordSearch.module';
import axiosClient from '../utils/axiosClient';
import { endpoints } from './endpoints';

export const performWordSearch = async (searchData: wordSearchRequest): Promise<wordSearchResponse> => {
    const response = await axiosClient.post<wordSearchResponse>(endpoints.wordSearch.submitSearch, searchData);
    console.log(response)
    return response.data;
  }