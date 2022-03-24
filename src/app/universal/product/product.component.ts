import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any=[];
  category:any=[];
  subcategory:any=[];
  colorList:any=[];
  sizeList:any=[];
  slug:any;
  subCateSlug:any;
  prodd:Boolean = true;
  sub:Boolean = false;
  constructor(private auth:AuthenticationService,private router:Router, private route:ActivatedRoute) {
    
    this.slug = this.route.snapshot.paramMap.get('category');
    this.subCateSlug = this.route.snapshot.paramMap.get('subcategory');
    console.log(this.subCateSlug, 'subcategory slugggggg11')
    console.log(this.sub, 'sub sub')
    console.log(this.prodd, 'prodd prodd')
    if(this.slug != null){
      this.categoryFilter(this.slug,'ab');
      // this.products = this.products.filter((product:any)=>product.category === this.slug)
      // this.productsFilter(this.slug);
    }
    if(this.subCateSlug != null){
      this.sub = true;
      this.auth.getProductAPI().subscribe(result=>{
        this.products = result.filter((product:any)=>product.sub_category === this.subCateSlug);
      });
    }
    console.log(this.slug,'sluggg')
    this.auth.getProductAPI().subscribe(result=>{
      this.products = result;
    });

    this.auth.getCategoryAPI().subscribe(result=>{
      this.category = result;
    });

    this.auth.getSubcategoryAPI().subscribe(result=>{
      this.subcategory = result;
    });

    this.auth.getColorAPI().subscribe(result=>{
      this.colorList = result
    });

    this.auth.getSizeAPI().subscribe(result=>{
      this.sizeList = result
    });
    
  }

  ngOnInit(): void {
    
  }

  categoryFilter(e:any,p:any){
    console.log(e,'categoryyyyyyyyyyyyyyyyyy')
    console.log(this.slug, 'sluggggggggg')
    console.log(this.subCateSlug, 'subCateSluggggggggggg')
    this.sub = true;
    if(this.slug && this.subCateSlug == null && p == 'ab'){
      console.log('000000')

      this.router.navigate(['/product',e]);
      this.auth.getProductAPI().subscribe(result=>{
        this.products = result.filter((product:any)=>product.category === e);
      });
    }
    if(p == 'pro'){
      console.log('11111111111')
      this.router.navigate(['/product',e]);
      this.auth.getProductAPI().subscribe(result=>{
        this.products = result.filter((product:any)=>product.category === e);
      });
    }
      console.log('233333333333333')

    this.auth.getSubcategoryAPI().subscribe(result=>{
      this.subcategory = result.filter((subcategory:any)=>subcategory.category === e);
    });
  }
  subcategoryFilter(sub:any){
    console.log(sub,'subcategoryyyyyyyy')
    this.router.navigate(['/product',sub['category'],sub['title']]);

    if(this.subCateSlug != null){
      this.auth.getProductAPI().subscribe(result=>{
        this.products = result.filter((product:any)=>product.sub_category === sub['title']);
      });
      this.auth.getColorAPI().subscribe(result=>{
        this.colorList = result.filter((color:any)=>color.sub_category === sub['title']);
        console.log(this.colorList,'color filter by subcategory')
      });
      this.auth.getSubcategoryAPI().subscribe(result=>{
        this.subcategory = result.filter((subcategory:any)=>subcategory.category === sub['category']);
        console.log(this.subcategory,'subcategory filterrrr')
      });
    }
  }

  colorFilter(color:any){
    console.log(color, 'color filter')
    this.router.navigate(['/product',color['category'],color['sub_category'],color['title']]);
    this.auth.getProductAPI().subscribe(result=>{
      this.products = result.filter((product:any)=>product.color === color['title'] && product['category'] === color['category'] && product['sub_category'] === color['sub_category']);
      console.log(this.products, 'color filterrrr')
    });

  }
  sizeFilter(size:any){
    console.log(size, 'size filter')
    
    
  }
  // productsFilter(category:any){
  //   console.log(category, 'listtt sluggg');
  //   this.auth.getProductAPI().subscribe(result=>{
  //     this.products = result.filter((product:any)=>product.category === this.slug);
  //   });
  // }

}
