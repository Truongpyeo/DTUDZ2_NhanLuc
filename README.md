#DTUDZ2 NHÂN LỰC![](https://github.com/Truongpyeo/DTURelifeLink/raw/master/assets/images/Reliefbanner.png)
## 📝 Giới thiệu
DTUDZ2 NHÂN LỰC là một ứng dụng quản trị được xây dựng bằng Appsmith, được thiết kế hỗ trợ, thực hiện cứu hộ cứu nạn trong các tình huống khẩn cấp, và hỗ trợ các hoạt động cứu trợ hiệu quả trong ứng dụng.
##### You can visit the application using the below link

###### [![](https://assets.appsmith.com/git-sync/Buttons.svg) ](https://dz1.dzfullstack.com/app/dtudz2-nhanluc/ang-nhap-6750f4ebf0b1ed2b4a0eb697?branch=master)
## ⚡ Tính năng chính
1. Đăng nhập
    - Cho phép nhân lực truy cập vào tài khoản nhân lực cá nhân
    - Cung cấp quyền truy cập vào các tính năng dành riêng cho thành viên

2. Thông tin cá nhân
    - Hiển thị và cho phép chỉnh sửa thông tin cá nhân của nhân lực
    - Quản lý hồ sơ người dùng, quản lý các hoạt động cứu trợ

3. Cứu trợ khẩn cấp
    - Đây là chức năng hỗ trợ nhân lực có thể tiếp cận đến các tình huống khẩn cấp. 
    - Giúp nhân lực nhanh chóng tiếp nhận các yêu cầu cứu trợ và thực hiện cứu trợ trong các tinh huống khẩn cấp
    - Thực hiện việc cứu trợ khẩn cấp 

4. Thông tin cứu trợ
    - Cung cấp thông tin chi tiết về các yêu cầu cứu trợ
    - Theo dõi lịch sử các hoạt động cứu trợ
    - Xem các thông tin liên quan đến việc hỗ trợ và cứu trợ

## Chức năng của nhân lực đối với hệ thống
1. Tiếp nhận và xử lý thông tin
2. Điều phối và tổ chức để đảm bảo cứu trợ hiệu quả
3. Thực hiện cứu trợ 
4. Ghi nhận và báo cáo
5. Phối hợp và liên lạc xử lý các thông tin khẩn cấp
7. Phòng ngừa và chuẩn bị cho tình huống khẩn cấp

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js >= 14
- Docker & Docker Compose 
- Appsmith Server

### Các bước triển khai
1. Fork các repository của ReliefLink:
   - [Repo Nhân Lực](https://github.com/Truongpyeo/DTUDZ2_NhanLuc)

2. Import vào Appsmith:
   - Truy cập Appsmith workspace
   - Click **Create New** > **Import from Git repository**
   - Cấu hình Git và Deploy keys cho từng ứng dụng
   - Kết nối MongoDB với URI có sẵn

Chi tiết dự án xem tại [DTURelifeLink/setup](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)

## 🧩 Plugins
### DTU AppSmith Map
 -  NPM 
```
  npm install dtuappsmithmap
```
 -  CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js"></script>
```
  - AppSmith
    - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithmap@2.2.20/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithMap](https://www.npmjs.com/package/dtuappsmithmap)

### DTU AppSmith RealTime
- NPM 
```
  npm install dtuappsmithrealtime
```
- CDN
```
  <script src="https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js"></script>
```
  
- AppSmith
  - Thêm URL sau vào Resource của Appsmith:
```
  https://cdn.jsdelivr.net/npm/dtuappsmithrealtime@1.1.5/dist/index.umd.js
```
Chi tiết hướng dẫn tại [DTUAppSmithRealTime](https://www.npmjs.com/package/dtuappsmithrealtime/v/1.1.5)

Chi tiết cách cài đặt của AppSmith tại [AppSmith](https://docs.appsmith.com/core-concepts/writing-code/ext-libraries#prerequisites)

## ⚙️ Services
### DTU ServerSocket

- Xem chi tiết tại [DTUServerSocket](https://github.com/Truongpyeo/DTUServerSocket)

- Server Demo: [ServerDemo](https://socket.thanhtruongit.io.vn/login.html)

## 🐳 Docker Appsmith
### Yêu cầu tiên quyết
 - Docker (phiên bản 20.10.7 trở lên)  [Docker]( https://docs.docker.com/get-docker/)
 - Docker-Compose (phiên bản 1.29.2 trở lên) [Docker-Compose](https://docs.docker.com/compose/install/)

Bạn sẽ cần phải khởi động lại máy tính sau khi hoàn tất quá trình cài đặt.

- Clone repo của Appsmith từ GitHub về máy tính: 
``` 
    git clone https://github.com/appsmithorg/appsmith.git

```

- Nếu git clone về không có docker-compose.yml thì bạn cần tạo 1 file docker-compose.yml và cấu hình sau: 
	version: "3"

  ```
  services:
    appsmith:
        image: index.docker.io/appsmith/appsmith-ee
        container_name: appsmith
        ports:
            - "5555:80"
            - "444:443"
        volumes:
            - ./stacks:/appsmith-stacks
        restart: unless-stopped
    mysql:
        image: mysql:latest
        ports:
            - "33088:3306" 
        container_name: mysql
        environment:
            - MYSQL_ROOT_PASSWORD=admin
            - MYSQL_DATABASE=appsmith
        volumes:
            - mysql-data:/var/lib/mysql
        restart: unless-stopped
        volumes:
        mysql-data:
  ```



- Trong thư mục appsmith, chạy lệnh sau để khởi động Appsmith trong Docker:

``` 
  cd appsmith
  docker-compose up
```
Sau khi các container đã được khởi động, bạn có thể truy cập Appsmith qua trình duyệt.

- Mở trình duyệt và vào địa chỉ:

    - Truy cập Appsmith trên cổng http://localhost:5555 (HTTP).

    - Truy cập MySQL trên cổng http://localhost:33088.

Xem chi tiết tại [Docker Appsmith](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)



## 💡Nhà phát triển

- 📧 Email: thanhtruong23111999@gmail.com

- 📱 Hotline: 0376 659 652

*" 🏫 DTU_DZ - DUY TAN UNIVERSITY - SCS ✨"*

## 📞 Liên hệ
- Lê Thanh Trường       :  <u>thanhtruong23111999@gmail.com</u>
- Võ Văn Việt           :  <u>vietvo371@gmail.com</u>
- Nguyễn Ngọc Duy Thái  :  <u>kkdn011@gmail.com</u>

## 📚 Tài liệu
- [Hướng dẫn cài đặt](https://github.com/Truongpyeo/DTURelifeLink/blob/master/docs/setup.md)
- [Hướng dẫn đóng góp](https://github.com/Truongpyeo/DTUDZ2_NhanLuc/blob/master/CONTRIBUTING.md)

## 🤝 Đóng góp
Chúng tôi rất hoan nghênh mọi đóng góp! Xem [CONTRIBUTING](https://github.com/Truongpyeo/DTUDZ2_NhanLuc/blob/master/CONTRIBUTING.md) để biết thêm chi tiết.

## 🔄 Quy trình phát triển
1. Fork repo này
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`) 
5. Tạo Pull Request

## 🐛 Báo lỗi
Nếu bạn phát hiện lỗi, vui lòng tạo issue mới với:
- Mô tả chi tiết lỗi
- Các bước tái hiện
- Screenshots nếu có
- Môi trường (browser, OS...)

## 📜 Changelog
Xem [CHANGELOG](https://github.com/Truongpyeo/DTUDZ2_NhanLuc/blob/master/CHANGELOG.md) để biết lịch sử thay đổi.

## ⚖️ Code of Conduct
Xem [CODE_OF_CONDUCT](https://github.com/Truongpyeo/DTUDZ2_NhanLuc/blob/master/CODE_OF_CONDUCT.md) để biết các quy tắc và hành vi được chấp nhận.

## Báo cáo lỗi & Góp ý
- Issues: [GitHub Issues](https://github.com/Truongpyeo/DTURelifeLink/issues)
- Security: Đối với các vấn đề bảo mật nhạy cảm, vui lòng liên hệ trực tiếp qua email: <u>thanhtruong23111999@gmail.com</u>


### 📝 License
Dự án được phân phối dưới giấy phép [MIT License](https://github.com/Truongpyeo/DTUDZ2_NhanLuc/blob/master/LICENSE)

*"Được phát triển với ❤️ bởi Nhóm DTU-DZ"*
