import { Component } from 'react'
import { connect } from 'react-redux'
import { contactData } from '../actions/PostAction'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {
    componentDidMount() {
        this.props.contactData()
    }
    render() {
        const Contacts = this.props.items.map(item => (
            <div key={item.id} className="contact-item-container">
                <div className="contact-icon">
                    <i className={item.icon_classcode}/>
                </div>
                <div className="contact-text">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        ))
        return (
            <div className="contact" id="contact">
                <Zoom duration={2000}>
                    <h1 className="contact-header">{ this.props.item.title }</h1>
                    <hr className="line-behind-header"/>
                <p className="contact-subheader">{ this.props.item.contact_subheader }</p>
                </Zoom>
                <Fade bottom duration={2000}>
                    <div className="contact-container">
                        { Contacts }
                    </div>
                </Fade>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    item: state.contact.item,
    items: state.contact.items
})

export default connect(mapStatetoProps, { contactData })(Contact)
