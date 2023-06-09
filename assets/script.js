const app = Vue.createApp({
	data()
	{
		return {
			albums: [],
			selectedAlbum: null,
		};
	},

	methods: {
		requestAlbums()
		{
			axios
				.get("http://localhost/php-dischi-json/server.php")
				.then((response) => this.albums = response.data);
		},

		getSrc(album)
		{
			return `./assets/img/${album.cover}`;
		},

		selectAlbum(album)
		{
			this.selectedAlbum = album;
			console.log(this.selectedAlbum.titolo);
		},
	},

	created()
	{
		this.requestAlbums();
	}
});

app.mount("#app");
