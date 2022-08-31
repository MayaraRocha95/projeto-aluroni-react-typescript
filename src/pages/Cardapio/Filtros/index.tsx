import filtros from './filtros.json';
import styles from './Filtro.module.scss';
import React from 'react';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro }: Props) {
  
  function selecionarFiltro(opcao: IOpcao){
    if (filtro === opcao.id) return setFiltro(null);//para deixar de selecionar o botão
    return setFiltro(opcao.id);
  }

  return (
    <>
     <div className={styles.filtros}>
    {filtros.map((opcao) => (
      <button 
      className={classNames({
        [styles.filtros__filtro]: true,//levando em consideração o valor desta variavel
        [styles['filtros__filtro--ativo']]: filtro === opcao.id
      })}
      
       key={opcao.id}
       onClick={()=> selecionarFiltro(opcao)}>
       {opcao.label}
      </button>
    ))}
  </div>
    </>
  )
}