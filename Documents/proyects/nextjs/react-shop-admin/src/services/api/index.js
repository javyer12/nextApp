const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
        auth: {
                login: `${API}/api/${VERSION}/auth/login`,
                profile: `${API}/api/${VERSION}/auth/profile`,
        },
        categories: {
                list: `${API}/api/${VERSION}/categories`,
                create: `${API}/api/${VERSION}/categories`,
                get: (id) => `${API}/api/${VERSION}/categories/${id}`,
                update: (id) => `${API}/api/${VERSION}/categories/${id}`,
                categoryProducts: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
        },
        files: {
                upload: `${API}/api/${VERSION}/files/upload`,
                get: (filename) => `${API}/api/${VERSION}/files/${filename}`,
        },
        products: {
                getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
                list: `${API}/api/${VERSION}/products`,
                paginate: (limit = 10, offset = 1) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
                getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
                // getProducts: (limit, offset) => `${API}/api/${VERSION}/products/${id}`,
                createProduct: `${API}/api/${VERSION}/products`,
                updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
                deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        },
        users: {
                list: `${API}/v${VERSION}/users`,
                create: `${API}/api/${VERSION}/users`,
                isAvailable: `${API}/api/${VERSION}/users/is-available/`,
        },
}

export default endPoints;