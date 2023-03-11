import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];
  override connect(
    collectionViewer: CollectionViewer
  ): Observable<readonly Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products.map((item) => item.price).reduce((p, c) => p + c, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex > -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProducts = this.originalData.filter((item) => {
      const data = `${item.id}-${item.price}-${item.title}`;
      return data.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    this.data.next(newProducts);
  }

  override disconnect(collectionViewer: CollectionViewer): void {}
}
