import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User, UserInstance } from '../models/User';

export const home = async (req: Request, res: Response) => {



    /*   const [usuario, created] = await User.findOrCreate({
        where: { name: 'Bonieky' },
        defaults: {
            age: 80
        }
    });

    if (created) {
        console.log("Usuário criado com sucesso!");
    } else {
        console.log("Achamos o usuário.")
    }
    console.log("NOME: ", usuario.name);


  let usuario = await User.findOne({
         where: {
             id: 1
         }
     });
     if (usuario) {
         console.log(`Usuario ${usuario.name} possui ${usuario.age} anos.`);
     } else {
         console.log('Usuario não emcontrado');
     }

    let usuario = await User.findByPk(14);


    if (usuario) {
        console.log(`Usuario ${usuario.name} possui ${usuario.age} anos.`);
    } else {
        console.log('Usuario não emcontrado');
    }*/





    let results = await User.findAll({ where: { name: 'Perola' } });
    if (results.length > 0) {
        let usario = results[0];

        await usario.destroy();
    }

    /* await User.destroy({//deletar varios usuarios do bd
        where: {
            age: {
                [Op.lte]: 18
            }
        }
    });*/


    /* let results = await User.findAll({ where: { id: 7 } }); //função para trocar informações do Banco de dadeos
     if (results.length > 0) {
         let usuario: UserInstance = results[0];
 
         usuario.name = 'Testador';
         usuario.age++;
 
         await usuario.save();
     }*/



    let users = await User.findAll();




    //build + save
    /*  const user = User.build({
          name: 'Beltrano',
      });
      //código de conversão de nascimento para idade
      let idade: number = 27;
      user.age = idade;
      await user.save();
     
      //create
      /*const users = await User.create({
          name: 'Ciclano',
          age: 39
      });*/



    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;

    if (name) {
        const newUser = User.build({ name });

        if (age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }

    res.redirect('/');
}