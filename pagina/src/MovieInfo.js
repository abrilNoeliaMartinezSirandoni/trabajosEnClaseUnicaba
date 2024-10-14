// Movie.js
import React, { useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [movieData, setMovieData] = useState(null);
  const apiKey = 'cd9f170b';

  const fetchUrl = async (title, type) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&type=${type || ''}&r=json`;
    const response = await axios.get(url);
    return response.data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchUrl(title, type);
    setMovieData(data);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: '#333' }}>Información de Peliculas y Series</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '100%', margin: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <label htmlFor="title" style={{ width: '100%' }}>
            Titulo:
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
            />
          </label>
          <label htmlFor="type" style={{ width: '100%' }}>
            Tipo (opcional):
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Pelicula, serie, episodio"
              style={{ padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Buscar</button>
      </form>

      {movieData && (
        <div id="movieInfo" style={{ display: 'flex', marginTop: '20px', backgroundColor: 'white', boxShadow: '5px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10%', padding: '10px' }}>
          <img src={movieData.Poster} alt={movieData.Title} style={{ maxHeight: '300px', borderRadius: '10% 0% 0% 10%' }} />
          <div className="info" style={{ padding: '10px 20px' }}>
            <p><strong>Titulo:</strong> {movieData.Title}</p>
            <p><strong>Año:</strong> {movieData.Year}</p>
            <p><strong>Género:</strong> {movieData.Genre}</p>
            <p><strong>Trama:</strong> {movieData.Plot}</p>
            <p><strong>Elenco:</strong> {movieData.Actors}</p>
            <p><strong>Rating IMDB:</strong> {movieData.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
