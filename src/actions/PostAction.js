import { PROFILE_DATA, PROFILE_ARRAY, SKILL_DATA, CONTACT_DATA, SKILL_ARRAY, CONTACT_ARRAY } from './types'

export const profileData = () => dispatch => {
    fetch('https://febriansyahrizqi.github.io/profile.json')
        .then(res => res.json())
        .then(data => dispatch ({
            type: PROFILE_DATA,
            payload: data
            })
        )
        .then(data => dispatch ({
            type: PROFILE_ARRAY,
            payload: data
            })
        )
}

export const skillData = () => dispatch => {
    fetch('https://febriansyahrizqi.github.io/skill.json')
        .then(res => res.json())
        .then(data => dispatch ({
            type: SKILL_DATA,
            payload: data
            })
        )
        .then(data => dispatch ({
            type: SKILL_ARRAY,
            payload: data
            })
        )
}

export const contactData = () => dispatch => {
    fetch('https://febriansyahrizqi.github.io/contact.json')
        .then(res => res.json())
        .then(data => dispatch ({
            type: CONTACT_DATA,
            payload: data
            })
        )
        .then(data => dispatch ({
            type: CONTACT_ARRAY,
            payload: data
            })
        )
}