// Importe a classe WindowManager
import WindowManager from './WindowManager';

// Crie uma instância da classe WindowManager no seu componente
const windowManager = new WindowManager();

// Inicie o WindowManager com metadados (opcional)
windowManager.init({ /* seus metadados aqui */ });

// Você pode acessar as informações da janela atual assim:
const thisWindowData = windowManager.getThisWindowData();
console.log('Informações da Janela Atual:', thisWindowData);

// Você pode acessar todas as janelas assim:
const allWindows = windowManager.getWindows();
console.log('Todas as Janelas:', allWindows);

// Você pode se inscrever para notificações de alteração na forma da janela assim:
windowManager.setWinShapeChangeCallback(() => {
  console.log('A forma da janela foi alterada!');
});

// Você pode se inscrever para notificações de alteração nas janelas assim:
windowManager.setWinChangeCallback(() => {
  console.log('As janelas foram alteradas!');
});

// Em algum lugar do seu componente ou aplicativo, chame o método update para verificar se houve alterações na forma da janela:
windowManager.update();
