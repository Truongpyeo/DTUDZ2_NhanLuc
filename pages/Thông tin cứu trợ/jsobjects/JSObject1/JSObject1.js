export default {

	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Vị trí của bạn",
			"location": ""
		}
	},
	// async getVungNguyHiemGanBan () {
		// var dataNguyHiem = await getCanhBao.run();
		// return dataNguyHiem.data;
	// }


}