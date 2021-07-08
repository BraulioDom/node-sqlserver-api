export const querys = {
    getAllProducts: 'select * from products',
    addNewProduct: 'insert into products (name, description, cuantity) values (@name, @description, @cuantity)',
    getProduct: 'select * from products where id=@id',
    deleteProduct: 'delete from products where id=@id',
    updateProduct: 'update products set name=@name, description=@description, cuantity=@cuantity where id=@id'
}