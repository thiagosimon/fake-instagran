import styled from 'styled-components';

export const Section = styled.section`
    
    width: 100%;
    max-width:  580px;
    margin: 0 auto;
    padding: 30px;


`;

export const Article = styled.article`
    
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

`;

export const ArticleHeader = styled.header`
    
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;

`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Author = styled.span`
    
    font-size: 13px;

`;

export const Place = styled.span`
    
    font-size: 11px;
    color: #666;
    margin-top: 3px;  

`;

export const Image = styled.img`

    width: 100%;

`;

export const Footer = styled.footer`

    padding: 20px;
    
`;

export const Actions = styled.div`

    margin-bottom: 10px;  
    
`;

export const ActionsButton = styled.button`

    background: transparent;
    border: 0;
    cursor: pointer;
    height: 20px;
    margin-right: 10px;

`;

export const Description = styled.p`

    font-size: 13px;
    margin-top: 2px;
    line-height: 18px; 
    
`;

export const Hashtags = styled.span`

    color: #7160a1;
    display: block;
    
`;
