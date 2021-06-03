import React from 'react';

import { Container } from './styles';

function RepositoryItem(props) {
  return (
    <Container>
      <li>
        <strong>{props.repository.name ?? 'Default '}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>
          Acessar repositório
        </a>
      </li>
    </Container>
  );
}

export default RepositoryItem;