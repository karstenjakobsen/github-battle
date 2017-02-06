var USER_DATA = {
  name: 'Karsten Jakobsen',
  username: 'karstenjakobsen',
  image: 'https://avatars3.githubusercontent.com/u/15323098?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

var Link = React.createClass({

    changeURL: function () {
        window.location.replace(this.props.href)
    },
    render: function() {
        return (
            <span
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={this.changeURL}
            >
            {this.props.children}
            </span>
        )
    }
})

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
ReactDOM.render(<FriendsContainer />, document.getElementById('friends'));
