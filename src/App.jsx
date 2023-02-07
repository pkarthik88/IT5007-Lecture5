class IssueFilter extends React.Component {
	  render() {
		      const systemnameinfilter = this.props.name;
		      return (
			            <div>This is a placeholder for the issue filter in {systemnameinfilter}.</div>
			          );
		    }
}

class IssueTable extends React.Component {
	  render() {
		      const systemnameintable = this.props.name;
		      return (
			            <div>This is a placeholder for a table of issues in {systemnameintable}.</div>
			          );
		    }
}

class IssueAdd extends React.Component {
	  
	  render() {
		      const systemnameinadd = this.props.name;
		      return (
			            <div>This is a placeholder for a form to add an issue in {systemnameinadd}.</div>
			          );
		    }
}

class IssueList extends React.Component {
	  render() {
		      const systemname = "IT5007 Bug Tracker";
		      return (
			            <React.Fragment>
			              <h1>{systemname}</h1>
			              <IssueFilter name={systemname}/>
			              <hr />
			              <IssueTable name={systemname}/>
			              <hr />
			              <IssueAdd name={systemname}/>
			              <hr/>
			            </React.Fragment>
			          );
		    }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));
