class UI {
  constructor() {
    this.mainCategory = '';
    this.subCategory = '';
  }
  
  showMainCategories = mainCategories => {
    mainCategories.forEach((mainCategories, index) => {
      const mainCategoryWrap = document.querySelector(
        '.main-button-collection'
        );
        mainCategoryWrap.appendChild(
          this.createButtonWrap('main', mainCategory, index)
        );
    });
  };
  
  showSubButtonHeading(heading) {
    document.getElementById('sub-button-heading').innerText=heading;
  }
  
  showSubCategories = (mainCategory, index) => {
    const subCategories = mainItemsArray[index];
    subCategories.forEach(subCategory => {
      const subCategoryWrap = document.querySelector('.sub-button-collection');
      subCategoryWrap.appendChild(this.createButtonWrap('sub', subCategory));
    });
  }
  
  clearSubCategories = () => {
    const subCategoryWrap = document.querySelector('.sub-button-collection');
    subCategoryWrap.innerHTML = '';
  };
  
  createButtonWrap = (type, innerText) => {
    const button = document.createElement("button");
    button.className = `${type}-button`;
    button.innerText= innerText;
    return button;
  };
  
  changeImage = (mainCategory, image) => {
    const imageLink = `./img/${mainCategory}/${image}.png`;
    const toChangeImage = document.getElementById(mainCategory);
    toChangeImage.innerHTML = `<img src = "${imageLink}" alt="" />`;
  };
  
  getImageNodeArray() {
    const imageWrapperItems = document.querySelectorAll('.image-wrap-items');
    const imageNodeArray = [];
    
    imageWrapperItems.forEach((imageWrapperItem, index) => {
      imageNodeArray.push(imageWrapperItem.id)
    })
  }
}
