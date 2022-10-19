import * as yup from 'yup';


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

