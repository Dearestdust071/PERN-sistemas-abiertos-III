import {Request, Response} from 'express'
import products from '../models/ProductoModel';
import { ExpressValidator, query } from 'express-validator';

export const createProduct = async (req: Request, res: Response) => {
  //   const product = new products(req.body)
  //   product.save()
  //   console.log(req.body);
    
  // res.send("Post si")
  query('name').isString().withMessage('Nombre debe ser una cadena de texto / string');
  query('price').isNumeric().withMessage('Precio debe ser un número');

  const product = await products.create(req.body);
  res.json({data: product});
}