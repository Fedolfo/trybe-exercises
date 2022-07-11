class Node:
    def __init__(self, value):
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para outro nó
        self.prev = None  # Forma de apontar para o nó anterior

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"
