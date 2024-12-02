//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Bánh Kem Mousse Chanh Dây',
            img: './assets/img/products/chanhday.jpg',
            category: 'Bánh Kem Mousse',
            price: 200000,
            desc: 'Bánh Mousse Chanh Dây tại Tiệm Bánh SHA Food là sự kết hợp hoàn hảo giữa vị chua thanh dịu của chanh dây tươi và lớp mousse mềm mịn, ngọt vừa. Vị chanh dây thơm nhẹ hòa quyện cùng kết cấu bánh mịn màng, tạo nên sự cân bằng tuyệt vời giữa chua ngọt, mang đến cảm giác tươi mới, sảng khoái. Mỗi miếng bánh sẽ giúp bạn giải nhiệt và thưởng thức hương vị nhiệt đới trọn vẹn.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Bánh Kem Tiramisu Socola',
            img: './assets/img/products/tiramisu2.jpg',
            category: 'Bánh Kem Mousse',
            price: 180000,
            desc: 'Tiramisu là một món tráng miệng ngọt ngào với hương vị đậm đà của cà phê, được coi là biểu tượng của ẩm thực Ý. Món này thường được chế biến từ các lớp bánh Savoiardi, được ngâm trong cà phê và xen kẽ với hỗn hợp trứng, đường và kem phô mai mascarpone bông. Cuối cùng, bột cacao thường được rắc lên trên cùng để tạo điểm nhấn hấp dẫn trên mỗi chiếc bánh'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bánh Kem Mousse Chanh Dây(Dâu Tây)',
            img: './assets/img/products/chanhday3.jpg',
            category: 'Bánh Kem Mousse',
            price: 180000,
            desc: 'Bánh Mousse Chanh Dây tại Tiệm Bánh SHA Food là sự kết hợp hoàn hảo giữa vị chua thanh dịu của chanh dây tươi và lớp mousse mềm mịn, ngọt vừa. Vị chanh dây thơm nhẹ hòa quyện cùng kết cấu bánh mịn màng, tạo nên sự cân bằng tuyệt vời giữa chua ngọt, mang đến cảm giác tươi mới, sảng khoái. Mỗi miếng bánh sẽ giúp bạn giải nhiệt và thưởng thức hương vị nhiệt đới trọn vẹn.'
        },
        {
            id: 4,
            status: 1, title: 'Bánh Kem Mousse Socola',
            img: './assets/img/products/socola.jpg',
            category: 'Bánh Kem Mousse',
            price: 699000,
            desc: 'Bánh Mousse Socola mang đến sự kết hợp hoàn hảo giữa vị đắng nhẹ của socola nguyên chất và lớp mousse mềm mịn. Vị ngọt ngào hòa quyện cùng chút béo ngậy tạo nên trải nghiệm tuyệt vời, khiến bạn khó cưỡng lại từ lần thử đầu tiên. Phù hợp cho mọi dịp, từ buổi tiệc sang trọng đến những khoảnh khắc thưởng thức nhẹ nhàng cùng gia đình.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Bánh Kem Mousse Trà Xanh',
            img: './assets/img/products/traxanh.jpg',
            category: 'Bánh Kem Mousse',
            price: 280000,
            desc: 'Bánh Mousse Trà Xanh mang hương vị thanh mát và tinh tế từ lá trà xanh nguyên chất. Lớp mousse mềm mịn hòa quyện cùng vị trà xanh đậm đà, tạo nên một trải nghiệm vừa nhẹ nhàng vừa thanh tao, hoàn hảo cho những ai yêu thích sự tươi mát và ngọt dịu.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Bánh Kem Mousse Chanh Dây (2)',
            img: './assets/img/products/chanhday2.jpg',
            category: 'Bánh Kem Mousse',
            price: 540000,
            desc: 'Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Bánh Kem Mousse Trà Xanh(2)',
            category: 'Bánh Mousse Trái Cây',
            img: './assets/img/products/traxanh2.jpg',
            price: 340000,
            desc: 'Bánh Mousse Chanh Dây là sự kết hợp hoàn hảo giữa vị chua thanh dịu của chanh dây tươi và lớp mousse mềm mịn, ngọt vừa. Vị chanh dây thơm nhẹ hòa quyện cùng kết cấu bánh mịn màng, tạo nên sự cân bằng tuyệt vời giữa chua ngọt, mang đến cảm giác tươi mới, sảng khoái. Mỗi miếng bánh sẽ giúp bạn giải nhiệt và thưởng thức hương vị nhiệt đới trọn vẹn.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Bánh Kem Tiramisu',
            img: './assets/img/products/tiramisu.jpg',
            category: 'Bánh Kem Mousse',
            price: 140000,
            desc: 'Bánh Tiramisu mang đến một trải nghiệm độc đáo với sự hòa quyện giữa vị ngọt nhẹ nhàng và lớp trái cây tươi mát trang trí trên mặt bánh. Mỗi chiếc bánh không chỉ đẹp mắt mà còn tạo cảm giác hài hòa, giúp khách hàng thưởng thức hương vị truyền thống nhưng lại đầy mới mẻ.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Trà phô mai kem',
            category: "Nước uống",
            img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
            price: 34000,
            desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: './assets/img/products/tra-dao-chanh-sa.jpg',
            price: 25000,
            desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Bánh chuối nướng',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-chuoi-nuong.jpeg',
            price: 60000,
            desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Bánh Kem Mousse Socola 2',
            img: './assets/img/products/socola2f.jpg',
            category: 'Bánh Kem Mousse',
            price: 140000,
            desc: 'Bánh Mousse Socola mang đến sự kết hợp hoàn hảo giữa vị đắng nhẹ của socola nguyên chất và lớp mousse mềm mịn. Vị ngọt ngào hòa quyện cùng chút béo ngậy tạo nên trải nghiệm tuyệt vời, khiến bạn khó cưỡng lại từ lần thử đầu tiên. Phù hợp cho mọi dịp, từ buổi tiệc sang trọng đến những khoảnh khắc thưởng thức nhẹ nhàng cùng gia đình.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Bánh Kem Mousse Socola Trái Cây',
            img: './assets/img/products/socolatraicay.jpg',
            category: 'Bánh Kem Mousse',
            price: 60000,
            desc: 'Bánh Mousse Socola mang đến sự kết hợp hoàn hảo giữa vị đắng nhẹ của socola nguyên chất và lớp mousse mềm mịn. Vị ngọt ngào hòa quyện cùng chút béo ngậy tạo nên trải nghiệm tuyệt vời, khiến bạn khó cưỡng lại từ lần thử đầu tiên. Phù hợp cho mọi dịp, từ buổi tiệc sang trọng đến những khoảnh khắc thưởng thức nhẹ nhàng cùng gia đình.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Bánh Mousse Bưởi Hồng',
            img: './assets/img/products/buoihong.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 60000,
            desc: 'Bưởi hồng không chỉ mang lại cảm giác tươi mới mà còn giúp cân bằng vị giác, tạo nên một trải nghiệm ẩm thực vừa tinh tế vừa thú vị. Với mousse bưởi hồng, bạn sẽ có cảm giác như đang thưởng thức một món quà nhỏ bé nhưng đầy ý nghĩa trong mỗi lần cắt bánh.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Bánh Mousse Dưa Lưới',
            img: './assets/img/products/dualuoi.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 60000,
            desc: 'Bánh mousse dưa lưới nổi bật với hương vị ngọt thanh của dưa lưới, hòa quyện với lớp mascarpone béo ngậy. Màu xanh dịu mát của dưa lưới không chỉ làm nổi bật vẻ ngoài tươi mới của bánh mà còn tạo cảm giác thư thái khi thưởng thức. Đặc biệt, mousse dưa lưới mang đến một trải nghiệm vị giác vừa tinh tế vừa sảng khoái, thích hợp cho cả người lớn và trẻ nhỏ.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Bánh Mousse Dưa Lưới Vàng',
            img: './assets/img/products/dualuoivang.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 60000,
            desc: 'Mousse Dưa Lưới Vàng nổi bật với hương vị ngọt dịu và thanh mát từ những lát dưa lưới vàng tươi ngon. Lớp mousse mềm mịn kết hợp hoàn hảo với vị béo nhẹ, mang đến một trải nghiệm ẩm thực vừa tinh tế vừa đầy sảng khoái. Màu vàng ấm áp của dưa lưới không chỉ làm bánh trở nên bắt mắt mà còn tạo cảm giác thư giãn, dễ chịu khi thưởng thức.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Bánh Mousse Xoài',
            img: './assets/img/products/mousse xoài.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 60000,
            desc: 'Với sắc vàng tươi tắn, mousse xoài không chỉ bắt mắt mà còn mang đến hương vị ngọt dịu, thanh mát từ những miếng xoài tươi chín mọng. Lớp mousse mềm mịn kết hợp cùng xoài tạo ra một sự hòa quyện hoàn hảo, mang lại cảm giác nhẹ nhàng và sảng khoái trong mỗi lần thưởng thức.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Bánh Mousse Bơ',
            img: './assets/img/products/mousse bơ.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 60000,
            desc: 'Bơ tươi được chọn lọc kỹ lưỡng, mang đến một hương vị đậm đà và ngọt ngào mà không bị ngấy. Kết cấu mềm mịn của mousse bơ giúp bánh tan chảy ngay khi chạm vào đầu lưỡi, để lại dư vị dễ chịu và phong phú. Đây là một lựa chọn lý tưởng cho những buổi tiệc hay những dịp đặc biệt khi bạn muốn mang đến một món tráng miệng vừa ngon miệng vừa giàu dinh dưỡng.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Bánh Mousse Dâu Tây',
            img: './assets/img/products/mousse dâu tây.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 130000,
            desc: 'Được làm từ những trái dâu tây tươi ngon nhất, món bánh này mang đến hương vị ngọt ngào, quyến rũ mà khó ai có thể chối từ. Sắc đỏ tươi tắn của dâu tây không chỉ thu hút ánh nhìn mà còn gợi lên cảm giác ấm áp và yêu thương.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Bánh Mousse Táo Xanh',
            img: './assets/img/products/mousse táo xanh.jpg',
            category: 'Bánh Mousse Trái Cây',
            price: 130000,
            desc: 'Với lớp mousse mềm mịn kết hợp cùng táo xanh tươi mát, mỗi miếng bánh mang đến một cảm giác sảng khoái và thỏa mãn. Điểm đặc biệt của bánh là lớp trang trí bằng trái cây tươi như nho, dâu, và việt quất, không chỉ làm nổi bật vẻ đẹp mà còn tăng thêm sự phong phú về hương vị. Mousse táo xanh thực sự là một bản giao hưởng ngọt ngào dành cho những ai yêu thích trải nghiệm ẩm thực đa dạng.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Combo Bánh Ngọt (Cpmbo1)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn1.jpg',
            price: 550000,
            desc: 'Combo bánh ngọt'
        },
        {
            id: 22,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo2)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn2.jpg',
            price: 550000,
            desc: 'Combo Bánh ngọt'
        },

        {
            id: 23,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo3)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn3.png',
            price: 510000,
            desc: 'Combo bánh ngọt'
        },

        {
            id: 24,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo4)',
            img: './assets/img/products/cbn4.jpg',
            category: 'Combo Bánh Ngọt',
            price: 950000,
            desc: 'Combo Bánh Ngọt'
        },
        {
            id: 25,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo5)',
            img: './assets/img/products/cbn5.jpg',
            category: 'Combo Bánh Ngọt',
            price: 350000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 26,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo6)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn6.jpg',
            price: 450000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 27,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo7)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn7.jpg',
            price: 520000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 28,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo8)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn8.jpg',
            price: 350000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 29,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo9)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn9.jpg',
            price: 420000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 30,
            status: 1, 
            title: 'Combo Bánh Ngọt (Combo10)',
            category: 'Combo Bánh Ngọt',
            img: './assets/img/products/cbn10.jpg',
            price: 175000,
            desc: 'Combo Bánh Ngọt'
        },

        {
            id: 31,
            status: 1, 
            title: 'Nước Ép Dâu Tây',
            category: 'Nước uống',
            img: './assets/img/products/nuoc-ep-dau-tay.jpg',
            price: 350000,
            desc: 'được ép nguyên chất từ những quả dâu tây tươi'
        },
        {
            id: 32,
            status: 1, 
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        },

        {
            id: 33,
            status: 1, 
            title: 'Chè bưởi',
            category: 'Món tráng miệng',
            img: './assets/img/products/che-buoi.jpeg',
            price: 50000,
            desc: 'Chè bưởi rất dễ ăn bởi hương vị ngọt mát, thơm ngon, vị bùi bùi của đậu xanh, giòn sần sật của cùi bưởi mà không hề bị đắng'
        },
        
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "SHA",
            phone: "0987654321",
            password: "123456",
            address: '',
            email: 'kieumyn528@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "SHA2",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
