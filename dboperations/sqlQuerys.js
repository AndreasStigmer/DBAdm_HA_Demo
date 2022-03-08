const querys= {
    getAll:"SELECT CustomerId, CustomerName,CustomerCategoryName  FROM Customers",
    getByName: (name)=> {
        return "SELECT CustomerId, CustomerName,CustomerCategoryName  FROM Customers WHERE CustomerName='"+name+"'"
    },
    getById: (id)=> {
        return "SELECT CustomerId, CustomerName,CustomerCategoryName  FROM Customers WHERE CustomerId="+id
    },
    getByCustomerCategory: (name)=> {
        return "SELECT CustomerId, CustomerName,CustomerCategoryName  FROM Customers WHERE CustomerCategoryName='"+name+"'"
    }
}
module.exports=querys;