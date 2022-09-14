import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import ClassNames from 'classnames';

type IOpcao = typeof filtros[0];

/* 
 * ou podemos fazer da seguinte forma
 * interface Opcao {
 *   id: number;
 *   label: string;
 * }
 * 
 * */

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    return filtro === opcao.id ? setFiltro(null) : setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao)=>(
        <button
          className={ClassNames({
            [styles.filtros__filtro] : true,
            [styles['filtros__filtro--ativo']] : filtro === opcao.id
          })} 
          key={opcao.id} 
          onClick={()=> selecionarFiltro(opcao)}  
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}