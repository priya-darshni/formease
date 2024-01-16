import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout/Layout';

const Exams = ({source,alttext,titl,desc,btn,link,exam_desc, eligibility, imp_details}) => {
  return (
    <Layout>
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
      <Card source="https://picsum.photos/200/200" alttext='this is card text' titl='TITLE' desc='this is the example of how well bhavya can shit' link='/exams' btn='view details' />
    </Layout>
  );
}

export default Exams;
