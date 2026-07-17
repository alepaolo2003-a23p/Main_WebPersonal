const Newsletter = require("../models/newsletter"); // ajusta la ruta según tu proyecto

// Formato básico de validación de email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Suscribir un nuevo correo al newsletter
const subscribe = async (req, res) => {
try {
const { email } = req.body;

if (!email) {
return res.status(400).json({ message: "El correo electrónico es obligatorio" });
}

if (!EMAIL_REGEX.test(email)) {
return res.status(400).json({ message: "El formato del correo electrónico no es válido"
});
}

const normalizedEmail = email.trim().toLowerCase();

const existing = await Newsletter.findOne({ email: normalizedEmail });

if (existing) {
if (existing.active) {
return res.status(409).json({ message: "Este correo ya está suscrito" });
}

// Si existía pero estaba inactivo (se había dado de baja), lo reactivamos
existing.active = true;
existing.subscribed_at = new Date();
await existing.save();

return res.status(200).json({
message: "Suscripción reactivada correctamente",
subscriber: existing,
});
}

const newSubscriber = new Newsletter({ email: normalizedEmail });
const savedSubscriber = await newSubscriber.save();

return res.status(201).json({
message: "Suscripción realizada correctamente",
subscriber: savedSubscriber,
});
} catch (error) {
return res.status(500).json({
message: "Error al procesar la suscripción",
error: error.message,
});
}
};

// Listar todos los suscriptores activos
const getSubscribers = async (req, res) => {
try {
const subscribers = await Newsletter.find({ active: true }).sort({ subscribed_at: -1 });

return res.status(200).json({
total: subscribers.length,
subscribers,
});
} catch (error) {
return res.status(500).json({
message: "Error al obtener los suscriptores",
error: error.message,
});
}
};

// Dar de baja un correo (sin eliminarlo de la base de datos)
const unsubscribe = async (req, res) => {
try {
const { email } = req.body;

if (!email) {
return res.status(400).json({ message: "El correo electrónico es obligatorio" });
}

const normalizedEmail = email.trim().toLowerCase();

const subscriber = await Newsletter.findOne({ email: normalizedEmail });

if (!subscriber) {
return res.status(404).json({ message: "Correo no encontrado en la lista de suscriptores" });
}

subscriber.active = false;
await subscriber.save();

return res.status(200).json({ message: "Te has dado de baja correctamente" });
} catch (error) {
return res.status(500).json({
message: "Error al procesar la baja",
error: error.message,
});
}
};

// Eliminar un suscriptor de forma permanente (uso administrativo)
const deleteSubscriber = async (req, res) => {
try {
const { id } = req.params;

const deleted = await Newsletter.findByIdAndDelete(id);

if (!deleted) {
return res.status(404).json({ message: "Suscriptor no encontrado" });
}

return res.status(200).json({ message: "Suscriptor eliminado correctamente" });
} catch (error) {
return res.status(500).json({
message: "Error al eliminar el suscriptor",
error: error.message,
});
}
};

module.exports = {
subscribe,
getSubscribers,
unsubscribe,
deleteSubscriber,
};