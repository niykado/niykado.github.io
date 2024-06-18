// NewsSection.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import newsItems from './Data/AllData'


const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 600px) {
justify-content: center;
  }
`;

const NewsBlock = styled.div`
  width: 300px;
  background-color: #ffffff;
margin:30px 10px 10px 10px ;

  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

 
`;

const NewsImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const NewsTitle = styled.h2`
  font-size: 20px;
  color: #333333;
  margin-bottom: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const NewsText = styled.p`
  color: #666666;
  line-height: 1.5;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const ReadMoreLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 0;
  background-color: #333131;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  &:hover {
    background-color: #5c5c5c;
  }
`;



export default function NewsSection() {
  return (
    <NewsContainer>
      {newsItems.map((item, index) => (
        <NewsBlock key={index}>
          <NewsImage src={item.imgSrc} alt={`img ${index + 1}`} />
          <NewsTitle>{item.title}</NewsTitle>
          <NewsText>{item.text}</NewsText>
          <ReadMoreLink to={`/news/${item.id}`}>Read More</ReadMoreLink>
        </NewsBlock>
      ))}
    </NewsContainer>
  );
}