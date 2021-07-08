import { getConnection, sql, querys } from '../database';

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllProducts)
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
};

export const createNewProduct = async (req, res) => {
    const { name, description } = req.body;
    let { cuantity } = req.body;

    if (!cuantity) cuantity = 0;

    if (name == null || description == null) {
        return res.json("no");
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('cuantity', sql.Int, cuantity)
            .query(querys.addNewProduct);

        return res.json({ name, description, cuantity });
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params

    if (!cuantity) cuantity = 0;

    if (name == null || description == null) {
        return res.json("no");
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(querys.getProduct)
    
        return res.json(result.recordset[0]);
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params
    try {
        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query(querys.deleteProduct)
    
        res.json('ok');
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params

    const { name, description } = req.body;
    let { cuantity } = req.body;

    try {
        
        const pool = await getConnection();
        await pool.request()
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('cuantity', sql.Int, cuantity)
            .input('id', sql.Int, id)
            .query(querys.updateProduct)

        return res.json('ok');
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
}
