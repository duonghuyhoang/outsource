function handleResize() {
  if (window.innerWidth < 1040) {
    document.querySelector(".header-review").style.flexDirection = "column";
    document.querySelector(".star-reviews").style.display = "flex";
    document.querySelector(".write-review").style.marginTop = "50px";
  } else {
    document.querySelector(".header-review").style.flexDirection = "";
    document.querySelector(".star-reviews").style.display = "block";
    document.querySelector(".write-review").style.marginTop = "0px";
  }
  if (window.innerWidth < 1024) {
    document.querySelectorAll(".nav-item").forEach(function (element) {
      element.style.display = "none";
    });

    document.getElementById("menu-icon").style.display = "block";
    document.querySelector(".nav-bar").style.justifyContent = "space-around";
    document.querySelector(".content-store").style.flexDirection = "column";
    document.querySelector(".buy-now").style.margin = "auto";
    document.querySelector(".product").style.width = "";
    document.querySelector(".product").style.maxWidth = "918px";
    document.querySelector(".product").style.paddingRight = "0px";
    document.querySelector(".header-review").style.flexDirection = "column";
    document.querySelector(".review-statistics").style.flexDirection = "column";
    document.querySelector(".rate-review-item").style.justifyContent = "center";
    document.querySelector(
      ".rate-review-item-photo-video"
    ).style.justifyContent = "center";
  } else {
    document.querySelectorAll(".nav-item").forEach(function (element) {
      element.style.display = "block";
    });
    document.querySelector(".content-store").style.flexDirection = "row";
    document.getElementById("menu-icon").style.display = "none";
    document.querySelector(".nav-bar").style.justifyContent = "space-between";
    document.querySelector(".buy-now").style.margin = "";
    document.querySelector(".product").style.width = "918px";
    document.querySelector(".product").style.maxWidth = "";
    document.querySelector(".product").style.paddingRight = "166px";
    document.querySelector(".header-review").style.flexDirection = "row";
    document.querySelector(".review-statistics").style.flexDirection = "row";
    document.querySelector(".rate-review-item").style.justifyContent =
      "flex-start";
    document.querySelector(
      ".rate-review-item-photo-video"
    ).style.justifyContent = "flex-start";
  }
  if (window.innerWidth < 680) {
    document.querySelector(".sort-review").style.flexDirection = "column";
  } else {
    document.querySelector(".sort-review").style.flexDirection = "row";
  }
  if (window.innerWidth < 400) {
    document.querySelector(".filter-by").style.flexDirection = "column";
  } else {
    document.querySelector(".filter-by").style.flexDirection = "row";
  }
}

window.addEventListener("resize", handleResize);

handleResize();

var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (k = 0; k < sl; k++) {
        if (s.options[k].innerHTML === this.innerHTML) {
          s.selectedIndex = k;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();

      closeAllSelect(this);
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function showAllOptions(elmnt) {
  var i, s, l, ll, opt, selElmnt;
  selElmnt = elmnt.parentNode.parentNode.getElementsByTagName("select")[0];
  l = selElmnt.length;
  s = elmnt.nextElementSibling;

  for (i = 1; i < l; i++) {
    opt = document.createElement("DIV");
    opt.innerHTML = selElmnt.options[i].innerHTML;
    opt.addEventListener("click", function (e) {
      var y, k, h, sl;
      h = this.parentNode.previousSibling;
      sl = this.parentNode.parentNode.getElementsByTagName("select")[0];
      y = this.parentNode.getElementsByClassName("same-as-selected");
      yl = y.length;
      for (k = 0; k < yl; k++) {
        y[k].removeAttribute("class");
      }
      this.setAttribute("class", "same-as-selected");
      h.innerHTML = this.innerHTML;
      sl.selectedIndex =
        Array.prototype.indexOf.call(this.parentNode.children, this) + 1;
      h.click();
    });
    s.appendChild(opt);
  }
}

function closeAllSelectOnClick() {
  var x = document.getElementsByClassName("select-items");
  var y = document.getElementsByClassName("select-selected");
  var xl = x.length;
  var yl = y.length;

  for (var i = 0; i < yl; i++) {
    y[i].classList.remove("select-arrow-active");
  }

  for (var i = 0; i < xl; i++) {
    x[i].classList.add("select-hide");
  }
}

document.addEventListener("click", closeAllSelectOnClick);

var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select-star");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected-star");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items-star select-hide");

  for (j = 0; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function (e) {
      var y, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (k = 0; k < sl; k++) {
        if (s.options[k].innerHTML === this.innerHTML) {
          s.selectedIndex = k;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      h.click();
      closeAllSelect(this);
    });

    b.appendChild(c);
  }

  x[i].appendChild(b);

  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items-star");
  y = document.getElementsByClassName("select-selected-star");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (!arrNo.includes(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

var indexValue = 1;
showImg(indexValue);

function btm_slide(e) {
  showImg((indexValue = e));
}

function side_slide(e) {
  showImg((indexValue += e));
}

function showImg(e) {
  var i;
  const dataReview = document.querySelectorAll(".list-review");
  const btnPagination = document.querySelectorAll(".pagination button");
  if (e > dataReview.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = dataReview.length;
  }
  for (i = 0; i < dataReview.length; i++) {
    dataReview[i].style.display = "none";
  }
  for (i = 0; i < btnPagination.length; i++) {
    btnPagination[i].style.background = "white";
    btnPagination[i].style.color = "black";
  }
  console.log(indexValue, "indexValue");

  dataReview[indexValue - 1].style.display = "block";
  if (indexValue == 3 || indexValue == 1) {
    var check = indexValue == 3 ? 2 : indexValue;
    btnPagination[check - 1].style.background = "white";
    btnPagination[check - 1].style.color = "#727272";
  }
}

const stars = document.querySelectorAll(".pick_star");
stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("data-value"));
    setRating(index);
  });
});

function setRating(value, e) {
  stars.forEach((star, index) => {
    if (index + 1 > value) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

const uploadImage = document.querySelector(".upload_image");
const inputFile = document.querySelector("#input_file");
uploadImage.addEventListener("click", function () {
  inputFile.click();
});

var uploadedImages = [];
function previewImages() {
  var previewContainer = document.getElementById("preview_container");
  var files = document.getElementById("input_file").files;

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new FileReader();

    reader.onload = function (e) {
      var imageContainer = document.createElement("div");
      imageContainer.className = "image-container";

      var image = document.createElement("img");
      image.className = "preview_img";
      image.src = e.target.result;

      var deleteButton = document.createElement("span");
      deleteButton.className = "img-close";
      deleteButton.innerText = "✖";
      deleteButton.addEventListener("click", function () {
        deleteImage(imageContainer, image);
      });

      imageContainer.appendChild(image);
      imageContainer.appendChild(deleteButton);
      previewContainer.appendChild(imageContainer);

      uploadedImages.push({
        container: imageContainer,
        image: image,
      });
    };
    reader.readAsDataURL(file);
  }
}

function deleteImage(container, image) {
  var previewContainer = document.getElementById("preview_container");
  previewContainer.removeChild(container);
  uploadedImages = uploadedImages.filter(function (uploadedImage) {
    return uploadedImage.image !== image;
  });
}
inputFile.addEventListener("change", previewImages);

const textName = document.getElementById("input_name");
const textEmail = document.getElementById("input_email");
const textDesc = document.getElementById("input_desc");
const btnSubmit = document.getElementById("submit");

const err_mess = document.getElementById("inline_err");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkInput() {
  if (
    textName.value == "" ||
    textEmail.value == "" ||
    textDesc.value == "" ||
    inputFile.value == "" ||
    textEmail.value.match(emailFormat) == null
  ) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
}

function clearData() {
  const listImages = document.querySelectorAll(".image-container");
  listImages.forEach((e) => {
    e.remove();
  });
  textName.value = "";
  textEmail.value = "";
  textDesc.value = "";
  btnSubmit.disabled = true;
  setRating(5);
}

textName.addEventListener("input", checkInput);
textEmail.addEventListener("input", checkInput);
textDesc.addEventListener("input", checkInput);
inputFile.addEventListener("input", checkInput);
function handleSubmitReview() {
  if (
    textName.value == "" ||
    textEmail.value == "" ||
    textDesc.value == "" ||
    inputFile.value == "" ||
    textEmail.value.match(emailFormat) == null
  ) {
    err_mess.style.display = "block";
  } else {
    err_mess.style.display = "none";
    toggleModal(event.currentTarget.closest(".modal").id);
    toggleModal("modal2");
    clearData();
  }
}

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

function showModalReview() {
  toggleModal("modal1");
}

modalCloseButtons.forEach((elem) => {
  elem.addEventListener("click", (event) =>
    toggleModal(event.currentTarget.closest(".modal").id)
  );
});
modals.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    if (event.currentTarget === event.target)
      toggleModal(event.currentTarget.id);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (getComputedStyle(modal).display === "flex") {
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial";
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";
    }, 200);
  } else {
    document.body.style.overflow = "hidden";
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}
