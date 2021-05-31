import { Component } from 'react'
import { connect } from 'react-redux'
import Zoom from 'react-reveal/Zoom';

class footers extends Component {
    render() {
        const socialMediaFooter = this.props.items.map(item => (    
            <div key={ item.id } className="footer-icon">
                <a href={ item.link } target="_blank" rel="noreferrer">
                    <i className={ item.icon_classcode }></i>
                </a>
            </div>
        ))
        return (
            <footer>
                <div className="footer-container">
                    <Zoom duration={2000}>
                        <div className="footer-copyright">
                            <p>© 2020 Personal Website</p>
                            <p>{ this.props.item.name }</p>
                        </div>
                    </Zoom>
                    <Zoom duration={2000}>
                        <div className="footer-socmed">
                            <p>Follow Me</p>
                            <div className="footer-icon-container"> 
                                { socialMediaFooter }
                            </div>
                        </div>
                    </Zoom>
                </div>
            </footer>
        )
    }
}

const mapStatetoProps = state => ({
    item: state.profile.item,
    items: state.profile.items
})

export default connect(mapStatetoProps)(footers)
