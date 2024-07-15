

export default function MoviesPage() {
 
const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };

};
    return (
      <form>
        <input type="text" name="topic" />
        <button>Search</button>
      </form>
      );
    
  };
