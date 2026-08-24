# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# Use Case Diagram – Hệ thống quản lý bán xe

```mermaid
flowchart LR

    %% =========================
    %% ACTORS
    %% =========================

    KH["Khách hàng"]
    NV["Nhân viên bán hàng"]
    HAL["Hal<br/>(Chủ cửa hàng)"]
    NCC["Nhà cung cấp"]
    QLXC["Quản lý xe cũ"]
    KT["Kế toán"]

    %% =========================
    %% SYSTEM
    %% =========================

    subgraph SYS["HỆ THỐNG QUẢN LÝ BÁN XE"]

        UC1(("Quản lý xe mới"))
        UC2(("Lập phiếu chào hàng"))
        UC3(("Phê duyệt phiếu chào hàng"))
        UC4(("Đàm phán lại đề nghị"))

        UC5(("Quản lý xe đổi"))
        UC6(("Quản lý trang bị tùy chọn"))

        UC7(("Lập hợp đồng mua bán"))
        UC8(("Ghi nhận đặt cọc"))
        UC9(("Tính ngày giao xe"))

        UC10(("Chuẩn bị xe giao khách hàng"))
        UC11(("Thanh toán và giao xe"))

        UC12(("Hoàn tất giao dịch"))
        UC13(("Ghi nhận doanh số"))
    end

    %% =========================
    %% ACTOR - USE CASE
    %% =========================

    NCC --> UC1
    NV --> UC1

    KH --> UC2
    NV --> UC2

    HAL --> UC3
    NV --> UC4

    QLXC --> UC5
    NV --> UC5

    KH --> UC6
    NV --> UC6

    NV --> UC7
    KH --> UC7

    NV --> UC8
    KH --> UC8

    NV --> UC9

    NV --> UC10

    NV --> UC11
    KH --> UC11

    NV --> UC12

    KT --> UC13

    %% =========================
    %% INCLUDE
    %% =========================

    UC2 -.->|«include»| UC6
    UC7 -.->|«include»| UC8
    UC7 -.->|«include»| UC9
    UC11 -.->|«include»| UC12
    UC12 -.->|«include»| UC13

    %% =========================
    %% EXTEND
    %% =========================

    UC4 -.->|«extend»| UC3
    UC5 -.->|«extend»| UC2

```

Sơ đồ trên có **6 Actor**:

- **Khách hàng**
- **Nhân viên bán hàng**
- **Hal – Chủ cửa hàng**
- **Nhà cung cấp**
- **Quản lý xe cũ**
- **Kế toán**

và **13 Use Case chính**:

1. Quản lý xe mới
2. Lập phiếu chào hàng
3. Phê duyệt phiếu chào hàng
4. Đàm phán lại đề nghị
5. Quản lý xe đổi
6. Quản lý trang bị tùy chọn
7. Lập hợp đồng mua bán
8. Ghi nhận đặt cọc
9. Tính ngày giao xe
10. Chuẩn bị xe giao khách hàng
11. Thanh toán và giao xe
12. Hoàn tất giao dịch
13. Ghi nhận doanh số
