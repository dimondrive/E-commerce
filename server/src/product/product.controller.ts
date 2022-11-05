import { Body, Controller, Delete, Get, Param, Post  } from "@nestjs/common"
import { ObjectId } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto"


@Controller('/products')
export class ProductController{
    constructor(private ProductService) { }
    @Post()
     create(@Body() dto: CreateProductDto) {
        return this.ProductService.create(dto);
    }

    @Get()
     getAll() {
        return this.ProductService.getAll()
    }
    
    @Get(':id')
     getOne(@Param('id')id: ObjectId) {
        return this.ProductService.getOne(id)
    }
    @Delete(':id')
     delete(@Param('id')id: ObjectId) {
        return this.ProductService.delete(id)
    }
}