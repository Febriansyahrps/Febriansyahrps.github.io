import { Component } from 'react'
import { connect } from 'react-redux'
import { skillData } from '../actions/PostAction'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Skills extends Component {
    componentDidMount() {
        this.props.skillData()
    }
    render() {
        const Skills = this.props.items.map(item => (
            <div key={ item.id } className="card-skills">
                <div className="card-skill-item">
                    <div className="card-skill-icon">
                        <i className={item.icon_classcode}/>
                    </div>
                    <div className="card-skill-description">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        ))
        return (
            <div id="skills" className="skills">
                <Zoom duration={2000}>
                    <h1>{this.props.item.title}</h1>
                    <hr className="line-behind-header"/>
                </Zoom>
                <Fade bottom duration={2000}>
                    <div className="body-skills">
                        { Skills }
                    </div>
                </Fade>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    item: state.skill.item,
    items: state.skill.items
})

export default connect(mapStatetoProps, {skillData})(Skills)