
"use client";
import { useState } from "react";
import { Card, Button, Input, TextArea } from "@heroui/react";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [game, setGame] = useState("");
  const [review, setReview] = useState("");

  const [EnterSpacePressed, setEnterSpacePressed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [errorName, setErrorName] = useState(false);
  const [errorEmailEmpty, setErrorEmailEmpty] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorGame, setErrorGame] = useState(false);
  const [errorReview, setErrorReview] = useState(false);

  const handleSend = () => {
    let error = false;

    if (!name.trim()) {
      setErrorName(true);
      error = true;
    }
    else setErrorName(false);

    if (!email.trim()) {
      setErrorEmailEmpty(true);
      setErrorEmail(false);
      error = true;
    }

    else if (!validEmail.test(email)) {
      setErrorEmail(true);
      setErrorEmailEmpty(false);
      error = true;
    }
    else {
      setErrorEmail(false);
      setErrorEmailEmpty(false);
    }

    if (!game.trim()) {
      setErrorGame(true);
      error = true;
    }
    else setErrorGame(false);

    if (!review.trim()) {
      setErrorReview(true);
      error = true;
    }

    if (error) return;

    setName("");
    setEmail("");
    setGame("");
    setReview("");

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };

  return (
    <section className="bg-[] w-full pt-[0px] pb-[80px] flex justify-center">

      <div className="flex flex-col mx-auto w-full max-w-[1163px] px-2 md:px-4">

        <div className="flex flex-col items-start w-full">
          <h2 className="titulo-componentes">Deixe seu Feedback</h2>
        </div>

        {/*content (form + mascot) box */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
          
          {/*form box*/}
          <div className="w-full md:w-1/2 bg-[#7726BD] p-8 rounded-2xl flex flex-col">
            <div className="flex flex-col gap-4 w-full text-black">

              {/*name text bar*/}
              <div className="flex flex-col">
                <label className="text-white font-bold text-lg">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrorName(false);
                  }}
                  className={`bg-white rounded p-2 ${errorName ? "border-2 border-red-500" : "border-2 border-black"}`}
                />

                {errorName && (
                  <span className="text-red-300 text-sm mt-1">
                    Por favor, preencha o seu nome.
                  </span>
                )}
              </div>

              {/*email text bar*/}
              <div className="flex flex-col">
                <label className="text-white font-bold text-lg">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="Seu endereço de e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorEmail(false);
                    setErrorEmailEmpty(false);
                  }}
                  className={`bg-white rounded p-2 ${errorEmail || errorEmailEmpty ? "border-2 border-red-500" : "border-2 border-black"}`}
                />

                {errorEmailEmpty && (
                  <span className="text-red-300 text-sm mt-1">
                    Por favor, preencha o seu email.
                  </span>
                )}

                {errorEmail && (
                  <span className="text-red-300 text-sm mt-1">
                    Por favor, digite um email válido.
                  </span>
                )}
              </div>

              {/*game text bar*/}
              <div className="flex flex-col">
                <label className="text-white font-bold text-lg">
                  Jogo
                </label>
                <Input
                  type="text"
                  placeholder="Nome do jogo"
                  value={game}
                  onChange={(e) => {
                    setGame(e.target.value);
                    setErrorGame(false);

                  }}
                  className={`bg-white rounded p-2 ${errorGame ? "border-2 border-red-500" : "border-2 border-black"}`}
                />
                {errorGame && (
                  <span className="text-red-300 text-sm mt-1">
                    Por favor, preencha o nome do jogo.
                  </span>
                )}
              </div>

              {/*review text bar*/}
              <div className="flex flex-col">
                <label className="text-white font-bold text-lg">
                  Avaliação
                </label>
                <TextArea
                  placeholder="Deixe sua avaliação"
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                    setErrorReview(false);
                    setEnterSpacePressed(false);
                  }}
                  className={`bg-white rounded p-2 min-h-[100] ${errorReview ? "border-2 border-red-500" : "border-2 border-black"}`}
                />
                {errorReview && (
                  <span className="text-red-300 text-sm mt-1">
                    Por favor, escreva a sua avaliação.
                  </span>
                )}
              </div>

              {/*Send button*/}
              <div className="flex justify-center mt-4">
                <Button
                  onClick={handleSend}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setEnterSpacePressed(true); }}
                  onKeyUp={(e) => { if (e.key === 'Enter' || e.key === ' ') setEnterSpacePressed(false); }}

                  className={`bg-white text-[#7726BD] font-bold rounded-full px-8 uppercase
                  hover:bg-gray-300 transition-colors border-2 border-black
                  ${EnterSpacePressed ? "!bg-gray-400 scale-95" : "active:bg-gray-400 active:scale-95"}`}>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        

          {/*mascot image*/}
          <div className="w-full md:w-1/2 flex justify-center -scale-x-100">
            <img
              src="mascote_IDE.svg"
              alt="mascote IDE"
              className="w-full h-auto
                transition-all duration-300
                hover:scale-105
                hover:drop-shadow-[0_0_15px_rgba(119,38,189,1)]"
            />
          </div>
        </div>
      </div>

      {/*sent feedback notification*/}
      <div className={` fixed bottom-5 left-1/2 -translate-x-1/2 
          z-[100] bg-white text-[#7726BD] px-6 py-3 rounded-full 
        transition-all duration-200 ease-in-out 
        ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"} `}>
        Feedback enviado com sucesso!
      </div>
    </section>
  );
};
