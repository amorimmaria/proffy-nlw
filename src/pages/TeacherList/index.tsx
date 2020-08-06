import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader> 
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/44977553?s=460&u=dbda94fab500e17ffd54959e0edf8f6fe6f27f73&v=4" alt="Maria das Graças"/>
            <div>
              <strong>Maria das Graças</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Professora de matemática.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}
export default TeacherList;