/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-cycle
import rootReducer from './reducersCombine';

export type ActionTypeGroup = {
	[key: string]: string;
};

export type MethodNameGroup = {
	[key: string]: string;
};

/**
 * type: an action type
 * payload: the payload
 */
export type ActionReturnType<T = any> = {
	type: string;
	payload?: T;
};

export type RootState = ReturnType<typeof rootReducer>;

export type ActionGroup = {
	requesting: boolean;
	success: boolean;
	fail: boolean;
};

export interface State {
	getActionState?: ActionGroup;
}
