import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        
    }



    return(
        <Container>
            <Content>
            {/* Container é o nome da minha função no css */}
            <img src={logoImg} alt="dt money"></img>
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}