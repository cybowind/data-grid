import reducer, { fetchGrids } from './gridSlice';
import { gridStatus } from './types';

describe('gridSlice', () => {
    describe('reducers', () => {
      const initialState = { 
        loading: false, 
        grids: [], 
        status: gridStatus.idle, 
        error: '',
      };
      
      //////////////////////////////////////////////////////////
      // Test asynchronous fetch
      //////////////////////////////////////////////////////////
      it('sets loading true when fetchGrids is pending', async () => {
        const action = { type: fetchGrids.pending.type };
        const state = reducer(initialState, action);
        expect(state).toEqual({ loading: true, grids: [], status: gridStatus.pending, error: '' });
      });
  
      it('sets grids when fetchGrids is fulfilled', async () => {
        const action = { type: fetchGrids.fulfilled.type, payload: { express: [{id:101}, {id:102}] } };
        const state = reducer(initialState, action);
        expect(state).toEqual({ loading: false, grids: [{id:101}, {id:102}], status: gridStatus.idle, error: '' });
      });
  
      it('sets fetching false when fetchGrids is rejected', async () => {
        const action = { type: fetchGrids.rejected.type, error: { message: 'some error' } };
        const state = reducer(initialState, action);
          expect(state).toEqual({ loading: false, grids: [], status: gridStatus.failed, error: 'some error' });
      });

    });
  
});