$(function () {
  fetchImg()

  $(".new").click(function (e) {
    e.preventDefault();
    fetchImg()
  });

  $(".categories").change(function (e) {
    e.preventDefault();
    const valueSelect = e.target.value;
    fetImgCategories(valueSelect)
  });
})

function fetchImg() {
  const url = "https://dog.ceo/api/breeds/image/random";
  //cách 1 gọi api bằng get
  // $.get(url, function(data, status) { 
  //   if(status === 'success') {
  //     $(".img").attr("src", data.message);
  //   }
  // })

  //cách 2 gọi api bằng ajax
  $.ajax({
    url, //do url trung r nên khỏi url: url
    success: function (response) {
      if (response.status === 'success') {
        $(".img").attr("src", response.message);
      }
    }
  });
}

function fetImgCategories(name = "") {
  const url = `https://dog.ceo/api/breed/${name}/images/random`;

  $.ajax({
    url,
    success: function (response) {
      if (response.status === 'success') {
        $(".img").attr("src", response.message);
      }
     
    }
  });
}

if ([]) {
  console.log(1);
}