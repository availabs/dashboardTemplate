var React = require('react');

var WidgetHeader = React.createClass({

  render: function() {
    return (
    	<header>
            <h4>
                {this.props.title}
                <small>
                    {this.props.subtitle}
                </small>
            </h4>
            <div className="widget-controls">
                <a title="Options" href=""><i className="glyphicon glyphicon-cog"></i></a>
                <a data-widgster="expand" title="Expand" href="" ><i className="glyphicon glyphicon-chevron-up"></i></a>
                <a data-widgster="collapse" title="Collapse" href=""><i className="glyphicon glyphicon-chevron-down"></i></a>
                <a data-widgster="close" title="Close" href=""><i className="glyphicon glyphicon-remove"></i></a>
            </div>
        </header>
    );
  }
});

module.exports = WidgetHeader;