
"use client";
import { useState } from "react";
import { Card, Button, Input, TextArea } from "@heroui/react";

export const Feedback = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [jogo, setJogo] = useState("");
  const [avaliacao, setAvaliacao] = useState("");

  const [showToast, setShowToast] = useState(false);

  const handleEnviar = () => {
    //apaga os textos definindo o estado como vazio
    setNome("");
    setEmail("");
    setJogo("");
    setAvaliacao("");
  
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };

  return (
    <section className="bg-[] w-full p-8 mt-16"> 

      {/*conteiner principal: start impede que o mascote se mova junto com a caixa de feedback*/}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 max-w-5xl mx-auto">
        
        {/*Imagem mascote*/}
        <div className="w-full md:w-1/2 flex justify-center">
           <img
              src="mascote_IDE.svg"
              alt="mascote IDE"
              className="w-full h-auto" />
        </div>
        
        {/*caixa do formulário */}
        <div className="w-full md:w-1/2 bg-[#7726BD] p-8 rounded-2xl">
           <h4 className="text-xl text-center font-bold text-black mb-8">
            Dê seu feedback para os desenvolvedores
           </h4>
           
           <div className="flex flex-col gap-4 w-full text-black">
             <Input 
               type="text" 
               placeholder="Seu nome" 
               value={nome}
               onChange={(e) => setNome(e.target.value)}
               className="bg-white rounded p-2" 
             />
             
             <Input 
               type="email" 
               placeholder="Seu endereço de e-mail" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="bg-white rounded p-2"
             />
             
             <Input 
               type="text" 
               placeholder="Nome do jogo"
               value={jogo}
               onChange={(e) => setJogo(e.target.value)} 
               className="bg-white rounded p-2"
             />
             
             <TextArea 
               placeholder="Deixe sua avaliação" 
               value={avaliacao}
               onChange={(e) => setAvaliacao(e.target.value)}
               className="bg-white rounded min-h-[120px] p-2"
             />
           </div>

           <div className="flex justify-center mt-6">
             <Button 
             onClick={handleEnviar}
             className="bg-white text-[#7726BD] font-bold rounded-full px-8 uppercase
             hover:bg-gray-300 transition-colors">
                Enviar
             </Button>
           </div>
        </div>
      </div>

      {/*notificacao toast*/}
      <div className={` fixed bottom-5 left-1/2 -translate-x-1/2 
          z-[100] bg-white text-[#7726BD] px-6 py-3 rounded-full 
        transition-all duration-200 ease-in-out
        ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"} `}> 
        Feedback enviado com sucesso!
      </div>
    </section>
  );
};
