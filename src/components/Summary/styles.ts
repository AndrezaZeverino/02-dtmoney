import  styled from 'styled-components';

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Se coloco a propriedade acima, crio 3 colunas com tamanho flexível */
    gap: 2rem;
    margin-top: -10rem;
    
    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        /* coloco display block pois o strong não aceita margin */ 
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background{
        background: var(--green);
        color: #fff;

    }
}

`