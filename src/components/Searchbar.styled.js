import styled from '@emotion/styled'

export const SearchbarConteiner = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const SearchFormButton = styled.button`
    
    height: 30px;
    cursor: pointer;
    margin-right: 20px;
    `;

    export const SearchFormInput = styled.input
        `
        width: 30%;
        height: 24px;
        font: 12px;
        font-size: 20px;
        padding-left: 4px;
        padding-right: 4px;`;


        export const SearchForm =styled.form
            `display: flex;
            align-items: center;
            width: 100%;
            max-width: 600px;
            background-color: #fff;
            border-radius: 3px;
            overflow: hidden;`;