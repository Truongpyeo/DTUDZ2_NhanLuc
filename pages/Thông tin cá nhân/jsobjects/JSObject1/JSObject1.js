export default {
	load () {
		const socket = new AppsmithSocket().connect()
		socket.on("sos_response", (data) => {
			showAlert(data.data.message, "warning")
		})
	}, 
	sendSOS  () {
		const socket = new AppsmithSocket().connect();
		var payload = {
			message : `${appsmith.store.ten_nhan_luc || ""}  ĐÃ XÁC YÊU CẦU CỦA BẠN VÀ ĐANG TRÊN ĐƯỜNG ĐẾN`
		};
		socket.emit("send_location", payload);
	},
	async checkLogin () {
		var check = appsmith.store.id_nhan_luc;
		console.log(check);
		if(check === undefined){
			showAlert("Bạn chưa đăng nhập","success");
			navigateTo('Đăng nhập');
		}

	},
}