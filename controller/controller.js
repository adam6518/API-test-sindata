const db = require('../databse')

module.exports = {
    addSupplier: (req, res) => {
        db.query(`insert into data_supplier (idsupplierName, Supplier_Name, Address, Phone) values (
            0, '${req.body.supplierName}', '${req.body.address}', '${req.body.phone}'
        )`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    deleteSupplier: (req, res) => {
        db.query(`delete from data_supplier where idsupplierName = ${req.body.idSupplier}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    searchSupplier: (req, res) => {
        let sql = `select * from data_supplier`
        let { query } = req
        if (query) {
            sql += ` where`

            if (query.inputan) {
                sql += ` Supplier_Name like '$${query.inputan}%`
            }
        }

        db.query(sql, (err, result) => {
            try {
                if (err) throw err
                res.send(result)
            } catch (err) {

                console.log(err);

            }
        })
    },

    getData: (req, res) => {
        db.query(`select * from data_supplier`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
}