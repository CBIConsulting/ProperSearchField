import React from 'react';
import Search from "../../src/jsx/propersearchfield";

function getDefaultProps() {
	return {
		throttle: 160,
		minLength: 3
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchVal: ''
		};
	}

	onSearch(value) {
		this.setState({searchVal: value});
	}

	render() {
		return (
			<div>
				<div style={{position: 'absolute', width: '100%', top: '20%'}}>
					<div style={{position: 'absolute', top: 0, left: '10%',  width: '20%'}}>
				        <div style={{position: 'absolute', top: 0, bottom: 0, width: '100%'}}>
				          	<form className="form-horizontal" role="form">
				          		<div className="form-group">
				          			<label>Result:</label>
					                {this.state.searchVal}
					            </div>
					        </form>
					    </div>
					</div>
					<div style={{position: 'absolute', top: 0, left: '33%',  width: '45%'}}>
						<div id="canvas" style={{position: 'absolute', top: 0, bottom: 0, width:' 40%'}}>
					       	<Search onSearch={this.onSearch} throttle={this.props.throttle} minLength={this.props.minLength}/>
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

App.defaultProps = getDefaultProps();

export default App;