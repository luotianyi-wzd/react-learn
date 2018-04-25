import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			arr: []
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleTextInput = this.handleTextInput.bind(this);
		this.handleDel = this.handleDel.bind(this);
	}
	handleAdd() {
		if (!this.state.text) {
			return
		}
		this.state.arr.push(this.state.text)
		this.setState({
			arr: this.state.arr,
			text: ''
		})
	}
	handleTextInput(value) {
		this.setState({
			text: value
		})
	}
	handleDel(index) {
		this.state.arr.splice(index, 1);
		this.setState({
			arr: this.state.arr
		})
	}
	render() {
		return (
			<div>
				<Input onInput={this.handleTextInput} value={this.state.text}/>
				<AddButton onAdd={this.handleAdd}/>
				<List arr={this.state.arr} onDel={this.handleDel}/>
			</div>
		)
	}
}
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.onInput(e.target.value)
	}
	render() {
		return (
			<from className='box'>
				<label className="please">请输入：</label>
				<input type="text" value={this.props.value} onChange={this.handleChange} className='text'/>
			</from>
		)
	}
}
class AddButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		this.props.onAdd()
	}
	render() {
		return (
			<button onClick={this.handleSubmit} className="submit">点击</button>
		)
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.handleLiDel = this.handleLiDel.bind(this);
	}
	handleLiDel(e) {
		this.props.onDel(e.target.getAttribute("data-index"))
	}
	render() {
		return (
			<ul>{
				this.props.arr.map((i,index)=>(
						<li key={index} className="content">
							{i}
							<button onClick={this.handleLiDel} data-index={index} className="delete">删除</button>
						</li>
				))}
			</ul>
		)
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById('root')
)