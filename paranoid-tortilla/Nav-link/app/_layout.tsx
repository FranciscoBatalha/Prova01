import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Apresentacoes",
          title: "Apresentacoes",
        }}
      />
      <Drawer.Screen
        name="telaSobre" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Sobre ",
          title: "Sobre",
        }}
      />
      <Drawer.Screen
        name="cadastro" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Cadastro ",
          title: "Cadastro",
        }}
      />
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Apresentacoes",
        }}
      />
    </Drawer>
    
  );
}