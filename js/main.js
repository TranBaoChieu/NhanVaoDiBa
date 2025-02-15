
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const titleElement = document.getElementById('title');
    const titles = ('Trần Tử Lin').split('')
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  // function createCircle() {
  //   for (let i = 0; i < 2; i++) { // Tạo 2 viền tròn mỗi lần gọi hàm
  //     const circle = document.createElement('div');
  //     circle.classList.add('circle');
  //     circle.innerHTML = 'LIN';
  //     circle.style.top = `${Math.random() * 100}vh`;
  //     circle.style.left = `${Math.random() * 100}vw`;
  //     document.body.appendChild(circle);

  //     setTimeout(() => {
  //       circle.remove();
  //     }, 4000); // Thời gian tồn tại của viền tròn
  //   }
  // }

  // setInterval(createCircle, 2000); // Gọi hàm tạo viền tròn mỗi 1 giây
  // setTimeout(() => {
  //   function createCircle() {
  //     const circle = document.createElement('div');
  //     circle.classList.add('circle');
  //     circle.innerHTML = '❤️'; // Sử dụng ký tự Unicode cho trái tim
  //     circle.style.top = `${Math.random() * 100}vh`;
  //     circle.style.left = `${Math.random() * 100}vw`;
  //     const randomAngle = Math.random() * 20 - 10; // Tạo góc nghiêng ngẫu nhiên từ -10 đến 10 độ
  //     circle.style.transform = `rotate(${randomAngle}deg)`;
  //     document.body.appendChild(circle);

  //     setTimeout(() => {
  //       circle.remove();
  //     }, 2000); // Thời gian tồn tại của viền tròn
  //   }

  //   setInterval(createCircle, 500); // Tạo viền tròn mới mỗi 2 giây
  // }, 5000); // Tạo viền tròn mới mỗi 3 giây
};