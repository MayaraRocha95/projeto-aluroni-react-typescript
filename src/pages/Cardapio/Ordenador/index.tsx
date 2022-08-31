import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
  ordenador:string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {//ultimo passo e ele já sabe que espera o ordenador
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;//aqui está pegando a opção que tem o ordenador  
   return(
    <button
     className={classNames({
      [styles.ordenador]: true,
      [styles["ordenador--ativo"]]: ordenador !== "",//quando clicar na string ficara fixa e quando clicar na string vazia, ficará vazia.(mas ela ainda não sabe o valor)
     })} 
     onClick={() => 
     setAberto(!aberto)}
     onBlur={() => setAberto(false)}
     >
      <span>{ordenador || "Ordenar Por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20}/>
       : < MdKeyboardArrowDown size={20}/>}
      <div className={classNames({
        [styles.ordenador__options]: true, //se aberto for true ; ele está ativo, se aberto for false ele não estará ativo.
        [styles["ordenador__options--ativo"]]: aberto,
      })}>
        {opcoes.map(opcao => (
          <div className={styles.ordenador__option} key={opcao.value}
          onClick={() => setOrdenador(opcao.value)} //agora o estado ordenador quando clicka nesta opção
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
   );
}