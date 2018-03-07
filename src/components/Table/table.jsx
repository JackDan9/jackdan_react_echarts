import React, {Component} from 'react';
import style from './table.scss';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state ={
            key:[],
            head:[],
            data:[]
        }
    }

    componentDidMount(){
        let key =[];
        for(let i=0;i<this.props.head.length;i++){
            key.push(this.props.head[i].column_name)
        }
        this.setState({
            key:key,
            head:this.props.head,
            data:this.props.data
        })
    }

    componentWillReceiveProps(props){
        let key =[];
        let props1 = props;
        for(let i=0;i<props1.data.head.length;i++){
            key.push(props1.data.head[i].column_name)
        }
        this.setState({
            key:key,
            head:props1.data.head,
            data:props1.data.data
        })
    }

    handleUrl = (key,item) => {
        if(item.url){
            return <a href={item.url} target="_black">{key}</a>
        }else{
            return key;
        }
    };


    render() {
        return (
            <section className={style.table}>
                <table className={style.biao}>
                    <thead className={style.thead}>
                        <tr className={style.tr}>
                            {
                                this.state.head.map((item,index) => {
                                    console.log(this.state.head);
                                    return(
                                        <th key={index}>{item.column_value}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((item,index) => {
                            return(
                                <tr key={index} className={style.tr}>
                                    {
                                        this.state.key.map((item1,index) => {
                                            return(
                                                <td key={index}>{this.handleUrl(item[item1],item)}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </section>
        )
    }
}