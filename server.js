const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const faker = require('faker');
const { response } = require('express');

app.use(cors());
app.use(express.json());



class User {
    constructor(){
        this._userid = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._compid = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}


app.get('/api/user/new',(request,response)=>{
    response.json(new User())
})

app.get('/api/company/new',(request,response)=>{
    response.json(new Company())
})

app.get('/api/user/company',(request,response)=>{
    response.json({user:new User(), company:new Company})
})

app.listen(port,()=> console.log(`Listening on port ${port}`))