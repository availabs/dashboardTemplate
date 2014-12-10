var React = require('react');

var SamplePage = React.createClass({

  render: function() {
    
    return (
    	<div className="content container">
        	<h2 className="page-title">Page Two <small>is slightly different</small></h2>
        	<div className="col-lg-12">
                <section className="widget">
                    <header>
                        <h4>
                            Visits
                            <small>
                                Based on a three months data
                            </small>
                        </h4>
                        <div className="widget-controls">
                            <a title="Options" href="#"><i className="glyphicon glyphicon-cog"></i></a>
                            <a data-widgster="expand" title="Expand" href="#" ><i className="glyphicon glyphicon-chevron-up"></i></a>
                            <a data-widgster="collapse" title="Collapse" href="#"><i className="glyphicon glyphicon-chevron-down"></i></a>
                            <a data-widgster="close" title="Close" href="#"><i className="glyphicon glyphicon-remove"></i></a>
                        </div>
                    </header>
                    <div className="body no-margin">
                        <div id="visits-chart" className="chart visits-chart">
                           
                        </div>
                        <div className="visits-info well well-sm">
                            <div className="row">
                                <div className="col-sm-3 col-xs-6">
                                    <div className="key"><i className="fa fa-users"></i> Total Traffic</div>
                                    <div className="value">24 541 <i className="fa fa-caret-up color-green"></i></div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                    <div className="key"><i className="fa fa-bolt"></i> Unique Visits</div>
                                    <div className="value">14 778 <i className="fa fa-caret-down color-red"></i></div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                    <div className="key"><i className="fa fa-plus-square"></i> Revenue</div>
                                    <div className="value">$3 583.18 <i className="fa fa-caret-up color-green"></i></div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                    <div className="key"><i className="fa fa-user"></i> Total Sales</div>
                                    <div className="value">$59 871.12 <i className="fa fa-caret-down color-red"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
    	</div>
    );
  }
});

module.exports = SamplePage;