import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import { Login } from '../components/Login'

describe('>>>L O G I N --- Shallow Render REACT COMPONENTS', () => {
    let wrapper
    const user = {
        email: '',
        password: '',
    }

    beforeEach(() => {
        wrapper = shallow(<Login user={user}/>)
    })

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });
});