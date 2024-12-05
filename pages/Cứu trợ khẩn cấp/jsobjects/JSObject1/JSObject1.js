export default {
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Vị trí của bạn",
			// "location": ""
		}
	},
	createNhanCuuTro:async ()=>{
		const uuid = UUID.genV4();
		await insertCuuTro.run({id:uuid.hexNoDelim});
		// await changeTrangThaiCuuNans.run();
		// await changeNhanLucs.run();
		// await getYeuCauCuuTro.run();
		// await getNhanLucByNguonLuc.run();
		showAlert("Đã gửi yêu cầu thành công!", "success");
		// closeModal(Modal1.name);
	}
	
	// // defaultCheck = false,
// 
	// setDefaultTab: () => {
		// this.defaultCheck = false;
	// },

	// async getVungNguyHiemGanBan () {
	// var dataNguyHiem = await getCanhBao.run();
	// return dataNguyHiem.data;
	// }


}