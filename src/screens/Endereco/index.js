import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function EnderecoEntrega() {
  const [endereco, setEndereco] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEndereco({
      ...endereco,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os detalhes do endereço para processamento.
    console.log('Detalhes do Endereço:', endereco);
  };

  return (
    <Container>
      <h1>Endereço de Entrega</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={endereco.nome}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Endereço:</Form.Label>
          <Form.Control
            type="text"
            name="endereco"
            value={endereco.endereco}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cidade:</Form.Label>
          <Form.Control
            type="text"
            name="cidade"
            value={endereco.cidade}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Estado:</Form.Label>
          <Form.Control
            type="text"
            name="estado"
            value={endereco.estado}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>CEP:</Form.Label>
          <Form.Control
            type="text"
            name="cep"
            value={endereco.cep}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit">Salvar Endereço</Button>
      </Form>
    </Container>
  );
}

export default EnderecoEntrega;
