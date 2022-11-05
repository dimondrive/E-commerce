import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
    MongooseModule.forRoot('mongodb+srv://admin:Lologerman1@cluster0.d9mhp47.mongodb.net/?retryWrites=true&w=majority'),
    ProductModule
],
   
})
export class AppModule {}