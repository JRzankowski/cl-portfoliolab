import React, {Component} from "react";

export default class PaginationRender extends Component {

    render() {
        if (this.props.numberOfOrg === 'local') {
            return (
                <div className="who-we-help__pagination">
                    <div onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-one page-active">1
                    </div>
                    <div style={{'display': 'none'}} onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-two">2
                    </div>
                    <div style={{'display': 'none'}} onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-three">3
                    </div>
                </div>
            )
        } else if (this.props.numberOfOrg === 'organizations') {
            return (
                <div className="who-we-help__pagination">
                    <div onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-one page-active">1
                    </div>
                    <div onClick={this.props.clickEvent} className="who-we-help__pagination--page page-two">2</div>
                    <div style={{'display': 'none'}} onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-three">3
                    </div>
                </div>
            )
        } else if (this.props.numberOfOrg === 'foundations') {
            return (
                <div className="who-we-help__pagination">
                    <div onClick={this.props.clickEvent}
                         className="who-we-help__pagination--page page-one page-active">1
                    </div>
                    <div onClick={this.props.clickEvent} className="who-we-help__pagination--page page-two">2</div>
                    <div onClick={this.props.clickEvent} className="who-we-help__pagination--page page-three">3
                    </div>
                </div>
            )
        }
    }


}