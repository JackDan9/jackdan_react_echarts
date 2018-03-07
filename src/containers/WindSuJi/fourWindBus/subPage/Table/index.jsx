// 上帝保佑,永无bug

import React, {Component} from "react";
import style from './style.scss';

export default class Table extends Component {

    constructor (props) {
        super(props);
        this.state = {
            lazyData: [],
            sortable: {
                field: '',
                type: ''
            },
            selecting: false,
            selectItem: ''
        };

        this.uuid = new Date().getTime() + '' +  Math.random();
    }

    onSelect = (item) => {
        var state = {...this.state};
        state.selecting = !state.selecting;
        if(state.selecting)
        {
            document.addEventListener('click',this.topEvent);
        }
        this.setState(state);
    }

    topEvent = () => {
        var state = {...this.state};
        state.selecting = false;
        this.setState(state);
        document.removeEventListener('click',this.topEvent);
    }

    onSelectChose = (item) => {
      this.selectChange = true;
        var state = {...this.state};
        state.selectItem = item;
        this.setState(state);

        if(this.props.onHeaderSelect)
        {
            this.props.onHeaderSelect(item);
        }
    }

    getWidth = (item) => {
      var count = 0;
      for(let i = 0;i < item.selectList.length;i++)
      {
        let word = item.selectList[i].display + '' || item.selectList[i].value + '' || item.selectList[i] + '';
        if(word.length > count)
        {
          count = word.length;
        }
      }
      return (count * 16 + 16 + 10) / 20 + 'rem';
    }

    sort = (item) => {
      if(!item.sortable)
      {
        return;
      }
      var type = '';
      if(this.state.sortable.field != item.key)
      {
        type = 'asc';
      }else if(this.state.sortable.type) {
        if(this.state.sortable.type === 'asc')
        {
          type = 'desc';
        }else{
          type = 'asc';
        }
      }else{
        type = 'asc';
      }
      var state = {...this.state};
      state.sortable = {
        field: item.key,
        type: type
      };
      this.setState(state);
      if(this.props.sortCallBack)
      {
        this.props.sortCallBack(state.sortable);
      }
    }

    findTr = (dom) => {
      if(dom.nodeName === 'TR')
      {
        return dom;
      }

      return this.findTr(dom.parentElement);
    }

    findTbody = (dom) => {
      if(dom.nodeName === 'TBODY')
      {
        return dom;
      }

      return this.findTbody(dom.parentElement);
    }

    rowOpen = (item,index,e) => {
        var obj = {};
        obj[this.uuid] = true;
        var state = {...this.state};
        if(state.lazyData[index + 1] && state.lazyData[index + 1][this.uuid])
        {
            state.lazyData.splice(index + 1,1);
            this.setState(state);
            return;
        }
        var flag = false;
        var deleteIndex = 0;
        for(let i = 0;i < state.lazyData.length;i++)
        {
            if(state.lazyData[i][this.uuid])
            {
                flag = true;
                deleteIndex = i;
                state.lazyData.splice(i,1);
                break;
            }
        }
        if(flag)
        {
          if(index - deleteIndex < 0)
          {
            state.lazyData.splice(index + 1,0,obj);
          }else{
            state.lazyData.splice(index,0,obj);
          }
        }else{
          state.lazyData.splice(index + 1,0,obj);
        }
        this.setState(state);
        if(flag && index - deleteIndex >= 0)
        {
          var dom = this.findTr(e.target || e);
          var reg = new RegExp('( active)|(active)','g');
          dom=dom.previousElementSibling||dom.previousSibling;
          dom.className += ' active';
        }
        if(this.props.rowOpen)
        {
          this.props.rowOpen(this,item,index);
        }
    }

    rowClick = (item,index,e) => {
      if(!this.props.onRowClick && !this.props.rowOpen)
      {
        return;
      }
      var dom = this.findTr(e.target || e);
      var reg = new RegExp('( active)|(active)','g');
      if(reg.test(dom.className))
      {
        dom.className = '';
        if(this.props.onRowClick)
        {
            this.props.onRowClick();
        }
        if(this.props.rowOpen)
        {
            this.rowOpen(item,index,e);
        }
        return;
      }
      var trs = this.refs.tbody;
      for(let i = 0;i < trs.children.length;i++)
      {
        trs.children[i].className = trs.children[i].className.replace(reg,'');
      }
      dom.className += ' active';
      if(this.props.onRowClick)
      {
          this.props.onRowClick(item,index);
      }
      if(this.props.rowOpen)
      {
          this.rowOpen(item,index,e);
      }
    }

    copyObj = (obj) => {
      if(typeof obj !== 'object' || obj === null)
      {
        return obj;
      }
      let result = obj instanceof Array ? [] : {};
      for(let key in obj)
      {
        result[key] = this.copyObj(obj[key]);
      }

      return result;
    }

    compareObj = (obj1,obj2) => {
      for(let key in obj1)
      {
        if(obj1[key] != obj2[key])
        {
          return false;
        }
      }

      return true;
    }

    lazyLoad = (e) => {
      var target = e.target;
      if(target.scrollHeight - (target.scrollTop + target.clientHeight) < 50)
      {
        var state = {...this.state};
        var more = this.props.dataSource.slice(this.state.lazyData.length,this.state.lazyData.length + this.props.lazyNum);
        state.lazyData = state.lazyData.concat(more);
        this.setState(state);
      }
    }

    getSortable = (item) => {
      var src = '';
      if(item.sortable)
      {
        if(this.state.sortable.field === item.key)
        {
          if(this.state.sortable.type === 'asc')
          {
            src = 'icon_sort_asc.png';
          }else{
            src = 'icon_sort_desc.png';
          }
        }else{
          src = 'icon_sort.png';
        }
      }
      return <img src={require('./images/' + src)} style={{marginLeft: '0.5rem',cursor: 'pointer',width: '0.65rem'}}/>
    }

    scrollAnimate = (target) => {
        var scroll = this.refs.tbody.scrollTop;
        this.refs.tbody.scrollTop += 1;
        if(scroll == this.refs.tbody.scrollTop)
        {
            this.refs.tbody.scrollTop = 0;
        }
    }

    componentDidMount () {
      var state = {...this.state};
      var data = this.copyObj(this.props.dataSource);
      if(this.props.lazyNum)
      {
        data.length = this.props.lazyNum;
      }
      state.lazyData = data;
      this.setState(state,() => {
          if((this.props.open || this.props.open === 0))
          {
              this.rowClick(this.state.lazyData[this.props.open],this.props.open,this.refs['tr'+this.props.open]);
          }
      });

      if(!this.props.lazyNum)
      {
        return;
      }
      var scroll = this.refs.scroll;
      scroll.addEventListener('scroll',this.lazyLoad);

    }

    componentDidUpdate (prevProps) {
        if(this.state.lazyData.length && this.props.autoScroll)
        {
            if(this.interval || this.interval === 0)
            {
                clearInterval(this.interval);
            }
            this.interval = setInterval(this.scrollAnimate,this.props.autoScroll.speed);
        }
        if(this.props.selectItem != prevProps.selectItem)
        {
          var state = {...this.state};
          state.selectItem = {value: this.props.selectItem};
          this.setState(state);
        }
        this.selectChange = false;
      if(!this.compareObj(prevProps.dataSource,this.props.dataSource) || this.props.dataSource && ((!prevProps || this.props.dataSource.length != prevProps.dataSource.length) || this.props.pageable && ((this.props.pageable.current_page != prevProps.pageable.current_page) || (this.props.pageable.size != prevProps.pageable.size))))
      {
        var state = {...this.state};
        var data = this.copyObj(this.props.dataSource);
        if(this.props.lazyNum)
        {
          data.length = this.props.lazyNum;
        }
        if(this.props.open || this.props.open === 0)
        {
            var obj = {};
            obj[this.uuid] = true;
            data.splice(parseInt(this.props.open) + 1,0,obj);
        }
        state.lazyData = data;
        this.setState(state);

        var reg = new RegExp('( active)|(active)','g');
        var trs = this.refs.tbody;
        for(let i = 0;i < trs.children.length;i++)
        {
          trs.children[i].className = trs.children[i].className.replace(reg,'');
        }

        if(this.props.open || this.props.open === 0)
        {
            this.refs['tr' + this.props.open].className += 'active';
        }
      }
      if(this.state.lazyData.length === this.props.dataSource.length)
      {
        var scroll = this.refs.scroll;
        scroll.removeEventListener('scroll',this.lazyLoad);
      }
    //   if((this.props.open || this.props.open === 0) && !this.openFlag)
    //   {
    //       this.rowClick(this.state.lazyData[this.props.open],this.props.open,this.refs['tr'+this.props.open]);
    //   }
    }

    componentWillUnmount () {
        if(this.interval || this.interval === 0)
        {
            clearInterval(this.interval);
        }
        document.removeEventListener('click',this.topEvent);
    }

    render() {
        var scrollStyle = {
          border: '1px solid #6ec2fe',
          height: this.props.height,
          minHeight: this.props.loading ? '15rem' : 0
        };
        if(!this.props.border)
        {
          delete scrollStyle.border;
        }

        if(!this.props.height)
        {
          delete scrollStyle.height;
        }

        var loadingStyle = {
          top: '2rem',
          left: '2.325rem',
          width: '0.35rem',
          height: '1rem',
          background: '#00b2ff',
          borderRadius: '0.5rem',
          position: 'absolute'
        }

        var getLoading = () => {
          var list = [];
          for(let i = 0;i < 12;i++)
          {
            var style = this.copyObj(loadingStyle);
            style.transform = 'rotate(' + i*30 + 'deg) translate(0,-1.5rem)';
            list.push(
              <div key={i} style={style}></div>
            );
          }
          return list;
        }

        return (
          <div className={style.container}>
            <div className={style.scroll + (this.props.autoScroll ? (' ' + style.scrollTable) : '')} style={scrollStyle} ref="scroll">
              <table className={style.table + (this.props.hideHead ? (' ' + style.hidden) : '')} style={this.props.autoScroll ? {height: this.props.autoScroll.height} : {}}>
                {
                    this.props.hideHead ? null : (
                        <thead>
                          <tr>
                            { this.props.columns.map((item,index) => {
                              return (
                                <td key={index} style={item.selectList ? {position: 'relative'} : {}}>
                                  <div className={style.sortable} style={(item.sortable || item.selectList) ? {cursor: 'pointer'} : {}} onClick={item.sortable ? this.sort.bind(this,item) : (item.selectList ? this.onSelect.bind(this,item) : '')}>
                                    <span>{item.label ? item.label : ''}</span>
                                    { item.sortable ? this.getSortable(item) : '' }
                                    { item.selectList ? (
                                        <img src={require('./images/select_arrow.png')} style={{marginLeft: '0.5rem',cursor: 'pointer'}}/>
                                    ) : '' }
                                  </div>
                                  {
                                      item.selectList && this.state.selecting ? (
                                          <ul className={style.selecting} style={{width: this.getWidth(item)}}>
                                              {
                                                  item.selectList.map((d,i) => {
                                                    let className = '';
                                                    if(this.state.selectItem && this.state.selectItem.value === d.value)
                                                    {
                                                      className = 'active';
                                                    }
                                                      return (
                                                          <li key={i} onClick={this.onSelectChose.bind(this,d)} className={className}>
                                                              <div>
                                                                  {d.display}
                                                              </div>
                                                          </li>
                                                      );
                                                  })
                                              }
                                          </ul>
                                      ) : ''
                                  }
                                </td>
                              );
                            }) }
                          </tr>
                        </thead>
                    )
                }
                <tbody ref='tbody' style={this.props.autoScroll ? {height: this.props.autoScroll.height} : {}}>
                  { this.state.lazyData.map((item,index) => {
                      if(item[this.uuid])
                      {
                          return (
                              <tr key={index}>
                                  <td colSpan={this.props.columns.length}>
                                      {
                                          this.state.childTemp
                                      }
                                  </td>
                              </tr>
                          )
                      }
                    return (
                      <tr key={index} ref={'tr' + index} onClick={this.rowClick.bind(this,item,index)} className={this.props.rowOpen ? style.hoverTr : ''}>
                        {
                          this.props.columns.map((d,i) => {
                            var style = {};
                            if(d.style)
                            {
                                style = d.style;
                            }

                            if(d.limit)
                            {
                              if(item[d.key ? d.key : d] + '')
                              {
                                var text = (item[d.key ? d.key : d] + '') ? ((item[d.key ? d.key : d] + '').substr(0,d.limit) + ((item[d.key ? d.key : d] + '').length > d.limit ? '...' : '')) : '';
                              }
                              return (
                                <td key={i} title={item[d.key ? d.key : d]} style={style}>{text}</td>
                              );
                            }

                            if(d.template)
                            {
                              var text = d.template && React.cloneElement(d.template,{data: item});
                              return (
                                <td key={i} onClick={this.onClick} style={style}>{text}</td>
                              );
                            }

                            if(d.filter)
                            {
                              var text = d.filter(item,index,this.props.pageable);
                              return (
                                <td key={i} style={style}>{text}</td>
                              );
                            }

                            var text = item[d.key ? d.key : d];
                            return (
                              <td key={i} style={style}>{text}</td>
                            );
                          })
                        }
                      </tr>
                    );
                  }) }
                  {
                    (this.state.lazyData.length === 0 && !this.props.loading) ? (
                      <tr className={style.loading} style={{height: '100%'}}>
                        <td colSpan={this.props.columns.length}>
                          <div style={{padding: '1rem 0'}}>
                            <p style={{fontSize: '0.8rem',color: '#fff'}}>
                              暂无数据
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : null
                  }
                </tbody>
              </table>
              {
                this.props.loading ? (
                  <div className={style.loading}>
                    <div style={{padding: '1rem 0'}}>
                      <div className='uil-default-css'>
                        <img src={require('./images/loading.svg')}/>
                      </div>
                      <p style={{fontSize: '0.8rem',color: '#fff'}}>
                        loading...
                      </p>
                    </div>
                  </div>
                ) : null
              }
            </div>
          </div>
        )
    }
}
