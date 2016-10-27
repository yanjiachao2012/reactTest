var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({
					data: data
				});
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>hello yanjiachao come on</h1>
		        <CommentList data={this.state.data}/>
		        <CommentForm />
		    </div>
		)
	}
});
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.author}>
				        {comment.text}
				</Comment>
			)
		});
		return (
			<div className="commentList">
				<h3>评论列表</h3>
				{commentNodes}
				
			</div>
		);
	}
});
var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
			    <h5>我们会成功的啦啦啦啦</h5>
			</div>
		)
	}
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
                 <h2 className="commentAuthor">
                   {this.props.author}
                 </h2>
                 {this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
	<CommentBox url="js/first.json" pollInterval={2000}/>, document.getElementById("first")
)