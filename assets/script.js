const app = Vue.createApp({
	data()
	{
		return {
			albums: [],
		};
	},

	methods: {
		requestAlbums()
		{
			axios
				.get("http://localhost/php-dischi-json/server.php")
				.then((response) => this.albums = response.data);
			console.log(this.albums);
		},

		getSrc(album)
		{
			console.log(`./assets/img/${album.cover}`);
			return `./assets/img/${album.cover}`;
		}
	},

	created()
	{
		this.requestAlbums();
	}
});

app.mount("#app");
