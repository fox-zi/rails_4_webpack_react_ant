import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker } from 'antd';

class Post extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          Greeting: {this.props.greeting}
        </div>
        <DatePicker />
        <Button type='primary' style={{ marginLeft: 8 }} onClick={() => {console.log('hello')}}>
          Primary Button
        </Button>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  greeting: PropTypes.string
};

export default Post
