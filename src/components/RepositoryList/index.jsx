import React from 'react';

import RepositoryItem from '../RepositoryItem';

import { Container } from './styles';

const repository = {
  name: 'unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList() {
  return (
    <Container>
      <section>
        <h1>Lista de repositórios</h1>

        <ul>
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
        </ul>
      </section>
    </Container>
  );
}

export default RepositoryList;