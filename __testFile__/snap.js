import Enzyme from 'enzyme';
import Adatpter from "@wojtekmaj/enzyme-adapter-react-17"
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import jest  from 'jest/globals';
//import mockPersistGate from 'redux-persist/es/integration/react/jest/redux-persist-mock'


Enzyme.configure({adapter:new Adatpter()})
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
// jest.mock('redux-persist/es/integration/react', () => {
//     const real = jest.requireActual('redux-persist/es/integration/react');
//     return {
//       ...real,
//       persistReducer: jest
//         .fn()
//         .mockImplementation((config, reducers) => reducers),
//     };
//   });

//jest.mock('redux-persist/es/integration/react',()=>mockPersistGate);
//export default mockAsyncStorage;