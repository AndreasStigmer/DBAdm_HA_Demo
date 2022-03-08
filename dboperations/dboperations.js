var config=require('../dbconfig/dbconfig');
const sql=require('mssql')
const querys=require('./sqlQuerys')

async function getAllCustomers() {
    try{
        let pool=await sql.connect(config)
     
        let products=await pool.request().query(querys.getAll);
        return products;
    }catch(error) {
        console.log(error)
    }
}

async function getCustomersByName(name) {
    try{
        let pool=await sql.connect(config)
        let products=await pool.request().query(querys.getByName(name));
        return products;
    }catch(error) {
        console.log(error)
    }
}

async function getCustomersById(id) {
    try{
        let pool=await sql.connect(config)
        let product=await pool.request().query(querys.getById(id));
        console.log("q"+querys.getById(id));
        return product;
    
    }catch(error) {
        console.log(error)
    }
}


module.exports= {
    getAllCustomers:getAllCustomers,
    getCustomersByName:getCustomersByName,
    getCustomersById:getCustomersById
}