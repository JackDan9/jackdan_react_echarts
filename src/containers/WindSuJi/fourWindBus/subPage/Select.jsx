import React, { Component } from 'react';
import styles from './Select.scss';

class Select extends Component {

    constructor (props) {
        super(props);
        this.state = {
            value: props.value || '',
            text: '',
            selecting: false
        };
    }

    select = (e) => {
        let {value} = this.state;
        let targetValue = e.target.getAttribute('value');
        let targetText = e.target.innerText;
        if(targetValue !== value)
        {
          this.setState({
              value: targetValue
          });
            if(this.props.onChange)
            {
                this.props.onChange(targetValue, targetText);
            }
        }
    }

    clickListener = () => {
        this.setState({
            selecting: false
        });
    }

    getText = (value) => {
        for(let i = 0;i < this.props.list.length;i++)
        {
            let val = typeof this.props.list[i] === 'object' ? this.props.list[i].value : this.props.list[i];
            let text = typeof this.props.list[i] === 'object' ? this.props.list[i].text : this.props.list[i];
            if( val == value)
            {
                return text;
            }
        }
    }

    componentDidMount () {
        if(this.props.onChange && this.props.list.length)
        {
            this.props.onChange(typeof this.props.list[0] === 'object' ? this.props.list[0].value : this.props.list[0],typeof this.props.list[0] === 'object' ? this.props.list[0].text : this.props.list[0]);
        }
    }

    componentDidUpdate (prevProps,prevState) {
        if(prevProps.value !== this.props.value)
        {
            this.setState({
                value: this.props.value
            });
        }

        if(!this.compareObj(prevProps.list, this.props.list) && this.props.list)
        {

            if(this.props.onChange && this.props.list.length)
            {
                this.props.onChange(typeof this.props.list[0] === 'object' ? this.props.list[0].value : this.props.list[0],typeof this.props.list[0] === 'object' ? this.props.list[0].text : this.props.list[0]);
            }
        }

        if(this.state.selecting)
        {
            document.addEventListener('click',this.clickListener);
        }else{
            document.removeEventListener('click',this.clickListener);
        }
    }

    componentWillUnmount () {
        document.removeEventListener('click',this.clickListener);
    }

    compareObj = (obj1, obj2) => {
        let a = JSON.stringify(obj1);
        let b = JSON.stringify(obj2);
        return a === b;
    }

    render() {
        let {className, style, list} = this.props;
        let {selecting, value, text} = this.state;

        return (
            <div className={styles['select-component'] + ' ' + className} style={style || {}} onClick={() => {this.setState({selecting: !selecting})}}>
                <p>
                    <span>{this.getText(value || list[0] && (typeof list[0] === 'object' ? list[0].value : list[0]))}</span>
                    {
                      selecting ? (
                        <img src={require('../images/select-up.png')} />
                      ) : (
                        <img src={require('../images/select-down.png')} />
                      )
                    }
                </p>
                {
                    selecting && (
                        <ul>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li key={index} title={typeof item === 'object' ? item.text : item} className={(typeof item === 'object' ? item.value : item) == value ? styles.active : ''} value={typeof item === 'object' ? item.value : item} onClick={this.select}>{typeof item === 'object' ? item.text : item}</li>
                                    );
                                })
                            }
                        </ul>
                    )
                }
            </div>
        );
    }
}

export default Select;
