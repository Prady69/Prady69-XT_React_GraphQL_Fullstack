import React,{Component} from 'react';
import * as S from './style';

class Autosuggestion extends Component {      
    render() {
        const data = this.props.data;
        return (
            <React.Fragment>
                <S.AutosuggestionUL>
                    {Object.keys(data).map((key) => (
                        <S.AutosuggestionLI key={key} onClick={()=> this.props.handleClick(data[key].name)}>
                            {data[key].name}
                        </S.AutosuggestionLI>
                    ))}
                </S.AutosuggestionUL>
            </React.Fragment>
        )
    }
}

export default Autosuggestion;