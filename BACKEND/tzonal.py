class Paradero:

    def __init__(self, nombre, direccion):
        self.nombre = nombre
        self.direccion = direccion

    def to_dict(self):
        return {
            "nombre": self.nombre,
            "direccion": self.direccion
        }