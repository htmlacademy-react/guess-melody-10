import {createAction} from '@reduxjs/toolkit';
import {Question, Questions, UserAnswer} from '../types/question';
import {AppRoute, AuthorizationStatus} from '../const';

export const incrementStep = createAction('game/incrementStep');

export const checkUserAnswer = createAction<{question: Question, userAnswer: UserAnswer}>('game/checkUserAnswer');

export const resetGame = createAction('game/reset');

export const loadQuestions = createAction<Questions>('data/loadQuestions');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
