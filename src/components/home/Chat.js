import { useState } from "react";

const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  const handleSendPredefinedQuestion = () => {
    if (selectedQuestion) {
      handleSendMessage(selectedQuestion);
      switch (selectedQuestion) {
        case "¿Hola necesito ayuda?":
          handleSendMessage("¡Hola! ¿En qué puedo asistirte?");
          break;
        case "¿Cuál es tu nombre?":
          handleSendMessage("Puedes llamarme WearBot.");
          break;
        case "¿Qué servicios ofrecen?":
          handleSendMessage("Ofrecemos una variedad de camisas y diseños de edición limitada. Puedes ver nuestros productos en la página de inicio.");
          break;
        case "¿Cómo puedo contactarlos?":
          handleSendMessage("Puedes contactarnos a través del formulario de contacto en nuestra página web o enviando un correo electrónico a service@limitedwear.com.");
          break;
        case "¿Hacen envíos a todo el país?":
          handleSendMessage("Sí, tenemos el servicio de envío con cobertura a todo el país");
          break;
        default:
            handleSendMessage("Lo siento, no entiendo tu pregunta :c");
          break;
      }
      setSelectedQuestion(null); // Limpiar la pregunta seleccionada después de enviar
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg w-80">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Chat</h2>
              {/* Seleccionar pregunta predefinida */}
              <select
                value={selectedQuestion}
                onChange={(e) => handleQuestionSelect(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Seleccione una pregunta</option>
                <option value="¿Hola necesito ayuda?">¿Hola necesito ayuda?</option>
                <option value="¿Cuál es tu nombre?">¿Cuál es tu nombre?</option>
                <option value="¿Qué servicios ofrecen?">¿Qué servicios ofrecen?</option>
                <option value="¿Cómo puedo contactarlos?">¿Cómo puedo contactarlos?</option>
                <option value="¿Hacen envíos a todo el país?">¿Hacen envíos a todo el país?</option>
              </select>
            </div>
            <div className="overflow-y-auto max-h-60">
              {messages.map((message, index) => (
                <div key={index} className="mb-2 border-b-2">
                  {message}
                </div>
              ))}
            </div>
            <div>
              <div className="flex justify-between">
                {/* Botón para enviar la pregunta seleccionada */}
                <button
                  className="bg-primeColor text-white rounded p-2 mt-2"
                  onClick={handleSendPredefinedQuestion}
                >
                  Enviar
                </button>
                <button className="float-right" onClick={onClose}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
