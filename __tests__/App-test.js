
import 'react-native';
import React from 'react';
import App from '../App';
import Home from '../lib/component/Home';
import Explore from '../lib/component/Explore';
//import {shallow} from "enzyme"


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

describe("testing component rendering",()=>{
  test("App component rendered",()=>{
    const render=renderer.create(<App/>).toJSON();
    expect(render).toMatchSnapshot()
  })
  // test("Home component rendered",()=>{
  //   const render=renderer.create(<Home/>).toJSON();
  //   expect(render).toMatchSnapshot();
  // })
  // test("Explore component rendered",()=>{
  //   const render=renderer.create(<Explore/>).toJSON();
  //   expect(render).toMatchSnapshot();
  // })
})