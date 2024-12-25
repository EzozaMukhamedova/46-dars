let products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    category: "Telefonlar",
    price: 1499.99,
    stock: 100,
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    category: "Telefonlar",
    price: 1499.99,
    stock: 100,
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro Max",
    category: "Telefonlar",
    price: 1399.99,
    stock: 200,
  },
  {
    id: 3,
    name: "BMW X7",
    category: "Mashinalar",
    price: 120000.99,
    stock: 300,
  },
  {
    id: 4,
    name: "Mercedes Benz S600",
    category: "Mashinalar",
    price: 40900.99,
    stock: 400,
  },
  {
    id: 5,
    name: "HP Pavilion 15",
    category: "Kompyuterlar",
    price: 500,
    stock: 500,
  },
];

function getProductById(id) {
  for (let item of products) {
    if (item.id === id) {
      return item;
    }
  }
  return undefined;
}

function addProduct(name, category, price, stock) {
  const maxId = products.reduce((max, product) => Math.max(max, product.id), 0);
  const newProduct = { id: maxId + 1, name, category, price, stock };
  products.push(newProduct);
}

function deleteProduct(id) {
  products = products.filter((item) => item.id !== id);
}

function searchProduct(keyword) {
  return products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

function asosiySahifa() {
  const list = +prompt(`
      1. Hammasini ko'rish. 
      2. ID orqali qidirish. 
      3. Mahsulot izlash. 
      4. Mahsulotni o'chirish.`);

  switch (list) {
    case 1: {
      let str = "";
      for (let item of products) {
        str +=
          item.name +
          " " +
          item.price +
          " " +
          item.category +
          " " +
          item.stock +
          " " +
          "\n";
      }
      alert(str);
      asosiySahifa();
      break;
    }
    case 2: {
      const id = parseInt(prompt("ID raqamni kiriting: "));
      const product = getProductById(id);

      if (product) {
        const str =
          product.name +
          " " +
          product.price +
          " " +
          product.category +
          " " +
          product.stock;
        alert(str);
      } else {
        alert("Bunday IDli mahsulot mavjud emas.");
      }
      asosiySahifa();
      break;
    }
    case 3: {
      const keyword = prompt("Nimani izlayapsiz?");
      const results = searchProduct(keyword);

      let str = "";
      if (results.length > 0) {
        for (let item of results) {
          str += item.name + item.price + "\n";
        }
      } else {
        str = "Mahsulot topilmadi";
      }
      alert(str);
      asosiySahifa();
      break;
    }
    case 4: {
      const id = +prompt("O'chirmoqchi bo'lgan IDingizni kiriting: ");
      const product = getProductById(id);
      if (product) {
        deleteProduct(id);
        alert("Mahsulot o'chirildi: " + product.name);
      } else {
        alert("Bunday IDsi bor mahsulot topilmadi.");
        asosiySahifa();
      }
      break;
    }
    default: {
      alert("Noto'g'ri ID kiritildi!");
      asosiySahifa();
      break;
    }
  }
}

asosiySahifa();
