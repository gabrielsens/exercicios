import PropTypes from 'prop-types';

import { BomDiaPrincipal } from './styles';

export default function BomDia({ nome, bemVindo }) {
    return (
        <div>Bom Dia {nome}, {bemVindo}!!
            <BomDiaPrincipal>
                BOm Dia Vermelho
            </BomDiaPrincipal>
        </div>
    )
}

BomDia.propTypes = {
    nome: PropTypes.string.isRequired,
    bemVindo: PropTypes.string,
}
BomDia.defaultProps = {
    bemVindo: "Seja Bem Vindo!"
}
