Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  
  formatTime(time) {
    return moment(time).format('h:mm A');
  },
  
  render() {
    return (
      <li>{this.formatTime(this.props.message.time)} - {this.props.message.text}</li>
    );
  }
});
