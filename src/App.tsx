import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./transactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setisNewTransactionModalOpen(true);
      
  }

  function handleCloseNewTransactionModal() {
      setisNewTransactionModalOpen(false);
  /* o nome de função começa com handle informando que a pessoa precisa clicar algo, fazer algo, pra essa função executar */

  }
  
  return (
    <TransactionsContext.Provider value={[]}>
        <Header onOpenNewTransactionModal={
          handleOpenNewTransactionModal
        } />
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyle />
    </TransactionsContext.Provider>
  );
}


