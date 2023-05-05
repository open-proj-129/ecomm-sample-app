/**
 * this file defines custom hooks for accessing useDispatch and useSelector.
 * these custom hooks will help to sync data types or middlewares used instead of
 * imported types in each file/component separately.
 */

import {AppDispatch, RootState} from '../store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
