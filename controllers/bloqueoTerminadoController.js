import { Sequelize } from "sequelize";
import BloqueoDeTerminado from "../models/BloqueoDeTerminado.js";
import { Op } from "sequelize";
import moment from 'moment-timezone';

const obtenerRegistrosHoy = async (req, res) => {
    try {
        // Obtener la fecha actual en la zona horaria de México
        const fechaHoy = moment().tz('America/Mexico_City').format('YYYY-MM-DD');
        console.log(fechaHoy); // Obtiene la fecha actual en formato "YYYY-MM-DD"
        
        // Convertir la fecha de hoy a un formato compatible con la base de datos
        const registros = await BloqueoDeTerminado.findAll({
            where: {
                fecha: {
                    [Op.gte]: new Date(`${fechaHoy}T00:00:00`), // Fecha de hoy a las 00:00:00 en la zona horaria local
                    [Op.lt]: new Date(`${fechaHoy}T23:59:59.999`) // Fecha de hoy a las 23:59:59 en la zona horaria local
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