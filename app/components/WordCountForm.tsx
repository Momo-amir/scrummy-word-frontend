'use client'
import Form from 'next/form'

export default function WordCountForm() {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const url = document.getElementById("url") as HTMLInputElement;
    const searchQuery = document.getElementById("searchQuery") as HTMLInputElement;
    console.log("URL:", url.value, "Query:", searchQuery.value);
  }

  return (
    <Form action="onSubmit">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input name="URL" placeholder='URL' id="url"/>
      <input name="searchQuery" placeholder='Search word' id="searchQuery"/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </Form>
  )
}