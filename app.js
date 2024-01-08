$(document).ready(function () {
  // function to append gif to the UI
  function appendGif(gif) {
    const randomImg = Math.floor(Math.random() * 50 + 1);
    const randomGif = gif.data.data[randomImg].images.original.url;
    $('#gif').append(`<img src="${randomGif}">`);
  }

  // getting gif from the API
  $('#addGif').on('click', async function (e) {
    e.preventDefault();
    try {
      const $searchTerm = $('#search').val();
      const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          q: $searchTerm,
          api_key: 'L3lwcpDZVoGpnjuENxwyn8ndDai0oyXV',
        },
      });
      appendGif(res);
      $('#search').val('');
    } catch (e) {
      alert('No GIFs found!');
      $('#search').val('');
    }
  });

  // function for removing all gifs from the UI
  $('#removeGif').on('click', function (e) {
    e.preventDefault();
    $('#gif').empty();
  });
});
