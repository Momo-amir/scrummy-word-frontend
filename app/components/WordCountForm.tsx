'use client'
import Form from 'next/form'
import { useState } from 'react';
import { findWordsInWebsiteData } from '../utils/wordFinder';
import { wordSearchRequest } from '../types/wordSearch.module';
import { performWordSearch } from '../api/wordSearch';

export default function WordCountForm() {

	const [formData, setFormData] = useState({
		URL: "",
    searchQuery: ""
	});

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textToSearch = await findWordsInWebsiteData(formData.URL); 

    const wordSearchRequst: wordSearchRequest = {
      url: formData.URL,
      searchWord: formData.searchQuery,
      textToSearch: textToSearch
    };

    const result = performWordSearch(wordSearchRequst);
  };

  	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

  return (
   <div className='flex mx-auto my-auto '>
      <Form
        action='  '
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center gap-4'
      >
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <input
          name='URL'
          placeholder='URL'
          id='url'
          className='rounded outline px-4 py-2'
          onChange={handleChange}
        />
        <input
          name='searchQuery'
          placeholder='Search word'
          id='searchQuery'
          className='rounded outline px-4 py-2'
          onChange={handleChange}
        />
        <button
          type='submit'
          className='rounded bg-white text-black px-4 py-1 flex items-center '
        >
          Submit
        </button>
      </Form>
    </div>
  )
}