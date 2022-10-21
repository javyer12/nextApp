import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup)

export const ProductSchema = yup.object().shape({
    title: yup.string().required().min(5),
    price: yup.number().required().positive().integer().min(15).max(100000),
    description: yup.string().required().min(15).max(150),
    categoryId: yup.number().required(),
    image: yup.array().of(yup.string()),
    createdOn: yup.date().default(function () {
        return new Date();
    }),
})

export const UserSchema = yup.object().shape({
    name: yup.string().required().min(10),
    email: yup.string().email().required(),
    password: yup.string().required(),
    // password: yup.string().password().required().min(5),
    rol: yup.string().required(),
    image: yup.array().of(yup.string()),
})

