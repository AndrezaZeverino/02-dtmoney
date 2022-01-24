import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
            {/* Container é o nome da minha função no css */}
            <img src={logoImg} alt="dt money"></img>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>

            </Content>
        </Container>
    )
}