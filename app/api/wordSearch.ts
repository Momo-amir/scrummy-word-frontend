import { wordSearchRequest, wordSearchResponse } from '@/types/wordSearch.module';
import { endpoints } from '@/api/endpoints';
import axiosClient from './axiosClient.ts';
import axios from 'axios';

export const performWordSearch = async (searchData: wordSearchRequest): Promise<wordSearchResponse> => {
    const response = await axiosClient.post<wordSearchResponse>(endpoints.wordSearch.submitSearch, searchData);

    return response.data;
  }
}
