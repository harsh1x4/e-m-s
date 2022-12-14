const data = [
    {
        "firstName": "John",
        "lastName": "Smith",
        "emailId": "johnsmith@gmail.com",
        "imageUrl": "https://static01.nyt.com/images/2019/05/18/arts/johnwick-anatomy/johnwick-anatomy-square640-v3.jpg",
        "designation": "Consultant",
        "department": "Finance",
        "status": "active",
        "position": "Junior",
        "bloodGroup": "O+",
        "phoneNumber": "+91 9999999991"
    },
    {
        "firstName": "Henry",
        "lastName": "Cavill",
        "emailId": "henrycavil@gmail.com",
        "imageUrl": "https://pyxis.nymag.com/v1/imgs/1f8/919/67900d8315e6e59beca19eea0e2804f0f1-12-henry-cavill.rsquare.w700.jpg",
        "designation": "Software Engineer",
        "department": "UI/UX",
        "status": "awaiting",
        "position": "Senior",
        "bloodGroup": "A+",
        "phoneNumber": "+91 9999999992"
    },
    {
        "firstName": "Harshbardhan",
        "lastName": "Singh",
        "emailId": "harsha@gmail.com",
        "imageUrl": "https://i.ibb.co/KDvZCxZ/harsh-small.png",
        "designation": "Software Engineer",
        "department": "Finance",
        "status": "onboarding",
        "position": "Senior",
        "bloodGroup": "B+",
        "phoneNumber": "+91 9999999990"
    },
    {
        "firstName": "Tom",
        "lastName": "Hiddleston",
        "emailId": "tomhiddle@gmail.com",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuw3omv3J1l281TssHJfTPsMKE3AsL2tojQ&usqp=CAU",
        "designation": "Designer",
        "department": "UI/UX",
        "status": "active",
        "position": "Junior",
        "bloodGroup": "O+",
        "phoneNumber": "+91 9999999993"
    },
    {
        "firstName": "Tom",
        "lastName": "Holland",
        "emailId": "tomholland@gmail.com",
        "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tom-holland-spider-man-1564104864.jpg",
        "designation": "Consultant",
        "department": "IT",
        "status": "awaiting",
        "position": "Senior",
        "bloodGroup": "A+",
        "phoneNumber": "+91 9999999993"
    },
    {
        "firstName": "Angelina",
        "lastName": "Jolie",
        "emailId": "angeljolie@gmail.com",
        "imageUrl": "https://i.dailymail.co.uk/i/pix/2017/05/04/08/02822A96000007D0-4472474-image-m-11_1493884694973.jpg",
        "designation": "Consultant",
        "department": "Finance",
        "status": "onboarding",
        "position": "Senior",
        "bloodGroup": "B+",
        "phoneNumber": "+91 9999999990"
    },
    {
        "firstName": "Johnny",
        "lastName": "Depp",
        "emailId": "jd@gmail.com",
        "imageUrl": "https://pyxis.nymag.com/v1/imgs/245/a91/351c99a3f00ad967365b7d179e20a300a3-johnny-depp.rsquare.w700.jpg",
        "designation": "Consultant",
        "department": "Finance",
        "status": "onboarding",
        "position": "Senior",
        "bloodGroup": "B+",
        "phoneNumber": "+91 9999999980"
    },
    {
        "firstName": "Tony",
        "lastName": "Stark",
        "emailId": "tonystark@gmail.com",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0560/1955/0265/products/0_BEYONDSTAR-2019-Iron-Man-Tony-Stark-Square-Sunglasses-For-Men-Style-Leopard-Transparent-Lens-Sunglass-Women.jpg?v=1638781606",
        "designation": "Consultant",
        "department": "Finance",
        "status": "awaiting",
        "position": "Junior",
        "bloodGroup": "A+",
        "phoneNumber": "+91 9999999982"
    },
    {
        "firstName": "Michele",
        "lastName": "Morrone",
        "emailId": "michele@gmail.com",
        "imageUrl": "https://img.republicworld.com/republic-prod/personality/xxhdpi/15916385225ede79fa8b34a.jpeg?tr=w-280,h-280",
        "designation": "Consultant",
        "department": "Finance",
        "status": "onboarding",
        "position": "Junior",
        "bloodGroup": "B+",
        "phoneNumber": "+91 9999999967"
    },
    {
        "firstName": "Kylie",
        "lastName": "Jenner",
        "emailId": "kj@gmail.com",
        "imageUrl": "https://assets.teenvogue.com/photos/62f64df289871c5bfa281b18/1:1/w_354%2Cc_limit/1412960607",
        "designation": "Consultant",
        "department": "IT",
        "status": "active",
        "position": "Senior",
        "bloodGroup": "A+",
        "phoneNumber": "+91 9999999900"
    },
    {
        "firstName": "N",
        "lastName": "A",
        "emailId": "na@gmail.com",
        "imageUrl": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        "designation": "Consultant",
        "department": "Finance",
        "status": "active",
        "position": "Senior",
        "bloodGroup": "B+",
        "phoneNumber": "+91 9999998888"
    }, 
    {
        "empID": 52000015,
        "firstName": "Sushant",
        "lastName": "Rajput",
        "emailId": "ssr@gmail.com",
        "imageUrl": "https://cdn.tollywood.net/wp-content/uploads/2020/06/Unable-to-bear-loss-Sushant-Singh-Rajput-S-I-L-dies.jpg",
        "designation": "Software Engineer",
        "department": "IT",
        "status": "active",
        "position": "Senior",
        "bloodGroup": "A+",
        "phoneNumber": "+91 9696969696"
    }
];

data.map((ele) => {
    fetch(`http://localhost:8080/registerEmployee`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(ele)
    }).then((resp) => console.log("success"))
        .catch((e) => console.log("error"))
})