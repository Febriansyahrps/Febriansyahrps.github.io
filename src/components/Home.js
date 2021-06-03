import { Component } from 'react'
import { connect } from 'react-redux'
import { profileData } from '../actions/PostAction'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
    componentDidMount() {
        this.props.profileData()
    }
    render() {
        const socialMedia = this.props.items.map(item => (
            <div className="logo-link-container" key={ item.id }>
                <a href={ item.link } target="_blank" rel="noreferrer">
                    <i className={ item.icon_classcode }></i>
                </a>
            </div>
        ))
        return (
            <div className="home" id="home">
                <div className="profile">
                    <Zoom duration={2000}>
                        <div className="card-profile">
                            <div className="card-profile-top">
                                <div className="profile-picture-container">
                                    <img className="profile-picture" src={ this.props.item.image } alt="profile"/>
                                </div>
                                <div className="card-profile-text">
                                    <div className="profile-name">
                                        <h2>{this.props.item.name}</h2>
                                    </div>
                                    <hr className="line-behind-name"/>
                                    <div className="download-button-container-small">
                                        <a className="download-button" href={this.props.item.resume_link} target="blank">Download CV</a>
                                    </div>
                                    <div className="profile-job">
                                        <p>{this.props.item.job}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-profile-bottom"> 
                                {socialMedia}
                            </div>  
                        </div>
                    </Zoom>
                    <div className="profile-desc">
                        <Fade top duration={2000}>
                            <div className="profile-desc-top">
                                <h1>Hello</h1>
                                <p>Here is who I am & what I do</p>
                            </div>
                        </Fade>
                        <Zoom duration={2000}>
                            <div className="download-button-container-big">
                                <a className="download-button" href={this.props.item.resume_link} target="blank">Download Curriculum Vitae</a>
                            </div>
                        </Zoom>
                        <Fade bottom duration={2000}>
                            <div className="profile-text">  
                                <p className="profile-text1">{this.props.item.profile_description}</p>
                                <p className="profile-text2">{this.props.item.job_description}</p>
                            </div>
                        </Fade>
                    </div>  
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    item: state.profile.item,
    items: state.profile.items
})

export default connect(mapStatetoProps, { profileData })(Home)