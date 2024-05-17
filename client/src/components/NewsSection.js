import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const NewsBlock = styled.div`
  width: 25%;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
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

const ReadMoreLink = styled.a`
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

const newsItems = [
  {
    imgSrc: "https://via.placeholder.com/200x167",
    title: "lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    link: "newssecond.html",
  },
  {
    imgSrc: "https://via.placeholder.com/200x167",
    title: "lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    link: "newssecond.html",
  },
  {
    imgSrc: "https://via.placeholder.com/200x167",
    title: "lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    link: "newssecond.html",
  },
  {
    imgSrc: "https://via.placeholder.com/200x167",
    title: "lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    link: "newssecond.html",
  },
];

export default function NewsSection() {
  return (
    <NewsContainer>
      {newsItems.map((item, index) => (
        <NewsBlock key={index}>
          <NewsImage src={item.imgSrc} alt={`img ${index + 1}`} />
          <NewsTitle>{item.title}</NewsTitle>
          <NewsText>{item.text}</NewsText>
          <Link to="/news"><ReadMoreLink href={item.link} target="_main">Read More</ReadMoreLink></Link>
        </NewsBlock>
      ))}
    </NewsContainer>
  );
}
