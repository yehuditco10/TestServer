export class Category {
    
    categoryId:number;
    categoryName:string;
    parentCategoryId:number;
    constructor(categoryId?,categoryName?,parentCategoryId?){
        this.categoryId=categoryId;
        this.categoryName=categoryName;
        this.parentCategoryId=parentCategoryId;
    }

}

