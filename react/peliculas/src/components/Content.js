//Dependencies
import React, { Component } from 'react';

//Aqui en Content es donde se veran efectuados los cambios de los link
class Content extends Component {
  
  render() { 
    const { body } = this.props;
    return ( 
      <div>
        {body}
      </div>
     );
  }
}
 
export default Content;