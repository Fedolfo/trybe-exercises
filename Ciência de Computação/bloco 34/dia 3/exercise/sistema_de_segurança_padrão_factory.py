from abc import ABC, abstractmethod


class SystemAccess(ABC):
    @abstractmethod
    def __init__(self, can_access=False):
        pass

    def set_permission(self, can_access):
        pass


class SupportSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Support"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class FinanceSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Finance"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class SalesSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "Sales"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        pass

    def show_permissions(self):
        permissions_names = [permission.name for permission in self.permissions]
        return permissions_names

    def add_permissions(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(FinanceSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


class SupportSalerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


# ...

if __name__ == "__main__":
    print("Qual o nome da pessoa que deseja criar?")
    name = input()
    print("Escolha qual código do perfil que deseja criar:")
    account_type = input("\n1 - Suporte\n2 - Gerente\n3 - Vedendas & Suporte\n")
    if account_type == "1":
        account = SupportAccount(name)
    elif account_type == "2":
        account = ManagerAccount(name)
    elif account_type == "3":
        account = SupportSalerAccount(name)

    print(f"\nCriando a conta para {account.username}.")
    print(f"Acesso liberado para os sistemas: {account.show_permissions()}")
