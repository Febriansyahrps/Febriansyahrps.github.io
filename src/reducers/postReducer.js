/* eslint-disable import/no-anonymous-default-export */
import { PROFILE_DATA, SKILL_DATA, CONTACT_DATA, PROFILE_ARRAY, SKILL_ARRAY, CONTACT_ARRAY } from '../actions/types'

const initialState = {
    item: {},
    items: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DATA: {
            return {
                ...state, 
                item: action.payload
            }
        }
        case PROFILE_ARRAY: {
            return {
                ...state,
                items: action.payload.payload.icon_follow
            }
        }
        default:
            return state
    }
}

export const skillReducer = (state = initialState, action) => {
    switch (action.type) {
        case SKILL_DATA: {
            return {
                ...state, 
                item: action.payload
            }
        }
        case SKILL_ARRAY: {
            return {
                ...state, 
                items: action.payload.payload.skills
            }
        }
        default:
            return state
    }
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_DATA: {
            return {
                ...state, 
                item: action.payload
            }
        }
        case CONTACT_ARRAY: {
            return {
                ...state, 
                items: action.payload.payload.contacts
            }
        }
        default:
            return state
    }
}