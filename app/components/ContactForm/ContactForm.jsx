// app/components/ContactForm.js
import { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      // TODO: show a success message
    } catch (error) {
      // TODO: show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.txt}>Preencha o formulário abaixo, para ser contactado por um membro da equipa Alvenaria4.</p>
      <label htmlFor="name" className={styles.label}>Nome</label>
      <input
        className={`${styles.input} ${styles.txt_input}`}
        type="text"
        name="name"
        placeholder="Nome completo"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        className={`${styles.input} ${styles.txt_input}`}
        type="email"
        name="email"
        placeholder="Endereço de email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="phone" className={styles.label}>Telefone</label>
      <input
        className={`${styles.input} ${styles.txt_input}`}
        type="text"
        name="phone"
        placeholder="Número de telefone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="message" className={styles.label}>Mensagem</label>
      <textarea
        className={`${styles.input} ${styles.txt_area}`}
        name="message"
        placeholder="Assunto"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className={`btn btn--main ${styles.btn_submit}`}>Enviar</button>
    </form>
  );
};

export default ContactForm;
