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
  
}
