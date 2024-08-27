import { Sequelize } from "sequelize";
import Generadores from "../models/Generadores.js";
import { Op } from "sequelize";
import moment from 'moment-timezone';

const obtenerRegistrosHoy = async (req, res) => {
    try {
        // Obtener la fecha actual en la zona horaria de México
        const fechaHoy = moment().tz('America/Mexico_City').startOf('day');

        // Convertir la fecha de hoy a un rango de fechas en UTC
        const inicioHoy = fechaHoy.clone().utc().format();
        const finHoy = fechaHoy.clone().endOf('day').utc().format();

        // Consultar los registros en la base de datos
        const registros = await Generadores.findAll({
            where: {
                fecha: {
                    [Op.gte]: inicioHoy, // Fecha de hoy a las 00:00:00 en UTC
                    [Op.lt]: finHoy // Fecha de hoy a las 23:59:59 en UTC
                }
            }
        });

        res.json({ registros });
    } catch (error) {
        console.error("Error al obtener los registros de hoy:", error);
        res.status(500).json({ error: "Error al obtener los registros de hoy" });
    }
}

export {
    obtenerRegistrosHoy
}