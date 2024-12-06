export default {
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Vị trí của bạn",
			"location": "Cách 1km từ vị trí của bạn"
		}
	},
	createNhanCuuTro:async ()=>{
		const user = await findUser.data;
		if(user.is_san_san === true){
			const uuid = UUID.genV4();
			await inseCuuTro.run({id:uuid.hexNoDelim});
			await changeTTCN_False.run();
			await changeNL_False.run();
			await getDataYeuCau.run();
			showAlert("Đã gửi yêu cầu thành công!", "success");
		}
		else{
				showAlert("Bạn đã được điều phối không được tiếp nhận nữa!", "error");
		}
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