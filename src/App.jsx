const initialProducts = [
    {
      id: 1, name: 'V-neck shirt', price: '$' + 10.99, category: 'Shirts',
      image: <a href="https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80">View</a>
    },
    {
        id: 2, name: 'Green Shorts', price: '$' + 16.99, category: 'Jeans',
        image: <a href="https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">View</a>
    },
  ];

  const sampleProduct = {
    name: 'Red Shorts', price: '$' + 6.99, category: 'Jeans',
    image: <a href="https://images.unsplash.com/photo-1597343781704-dc11f4ffd419?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlZCUyMHNob3J0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">View</a>
  };


class ProductFilter extends React.Component {
    render() {
      return (
        <div>Showing all available products</div>
      );
    }
  }

  function ProductRow(props)  {
        const product = props.product;
        return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.image}</td>
          </tr>
        );
  }

  
  function ProductTable(props){
        const productRows = props.products.map(product =>
          <ProductRow key={product.id} product={product} />
        );
    
        return (
          <table className="bordered-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {productRows}
            </tbody>
          </table>
        )
  }
  
  class ProductAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.productAdd;
        const product = {
          name: form.name.value, 
          price: form.price.value, 
          category: form.category.value,
          image: form.image.value
        }
        this.props.createProduct(product);
        form.name.value = ""; 
        form.price.value = "";
        form.category.value = "";
        form.image.value = "";
     }

    render() {
      return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <div><u>Add a new product to inventory</u></div>
        <b>Category</b><br/> 
        <select id="category" name="category">
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Jackets">Jackets</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Accessories">Accessories</option>
        </select><br/>
        <b>Price Per Unit</b><br/>
        <input type="text" name="price" placeholder="$" /><br/>
        <b>Product Name</b><br/>
        <input type="text" name="name" placeholder="" /><br/>
        <b>Image URL</b><br/>
        <input type="text" name="image" placeholder="" /><br/>
        <button>Add Product</button>
      </form>
        
      );
    }
  }
  
  class ProductList extends React.Component {
    constructor() {
        super();
        this.state = { products: [] };
        this.createProduct = this.createProduct.bind(this);
      }

      componentDidMount() {
        this.loadData();
      }
    
      loadData() {
        setTimeout(() => {
          this.setState({ products: initialProducts });
        }, 500);
      }

      createProduct(product) {
        product.id = this.state.products.length + 1;
        //product.name = this.state.products.name;
        product.price = '$' + product.price;
        //product.category = this.state.products.category;
        product.image = <a href="https://images.unsplash.com/photo-1564315254352-f33b576102a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">View</a>
        //var a = document.createElement('a');
        //var text = document.createTextNode("View");
        //a.appendChild(text);
       // product.image = a;
        //product.image.appendChild(text);
        //product.image.href = product.image
        //var td = document.createElement('td');
        //product.image = tbody.innerHTML.appendChild(a);
        const newProductList = this.state.products.slice();
        newProductList.push(product);
        this.setState({ products: newProductList });
      }

    render() {
      return (
        <React.Fragment>
          <h1>My Company Inventory</h1>
          <ProductFilter />
          <hr />
          <ProductTable products={this.state.products}/>
          <hr />
          <ProductAdd createProduct={this.createProduct} />
        </React.Fragment>
      );
    }
  }
  
  const element = <ProductList />;
  

ReactDOM.render(element, document.getElementById('contents'));
