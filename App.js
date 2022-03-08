const dbop=require('./dboperations/dboperations');
const Customer=require('./customer');
const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const { route } = require('express/lib/application');
const { response } = require('express');
const router=express.Router();
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const dbconf=require('./dbconfig/dbconfig');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

router.use((req,resp,next)=> {
    console.log("incomming request");
    next();
});

router.route('/customers').get((req,resp)=>{
    console.log("Get customers");
    dbop.getAllCustomers().then(result=>{
        console.log("Get All");
        return resp.json(result);
    }).catch((reason)=>{

        console.log(reason);
    });
});

router.route('/customers/:id').get((req,resp)=>{
    console.log("Get customer by customerid");
    dbop.getCustomersById(req.params.id).then(result=>{
        console.log("Get by Id: "+req.params.id);
        return resp.json(result);
    }).catch((reason)=>{

        console.log(reason);
    });
});





app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
    console.log("Using SQL Server: "+dbconf.server+ ", Port: "+dbconf.port+", Database: "+dbconf.database)
});