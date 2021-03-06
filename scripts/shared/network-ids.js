// ------------------------------------------------------------------
//
// Shared module between Nodejs and the browser that defines constants
// used for network communication.
//
// The use of the IIFE is to create a module that works on both the server
// and the client.
// Reference for this idea: https://caolan.org/posts/writing_for_node_and_the_browser.html
//
// ------------------------------------------------------------------
(function(exports) {
    'use strict';

    Object.defineProperties(exports, {
        'INPUT': {
            value: 'input',
            writable: false
        },
        'INPUT_MOVE_FORWARD': {
            value: 'moveForward',
            writable: false
        },
        'INPUT_MOVE_BACK': {
            value: 'moveBack',
            writable: false
        },
        'INPUT_ROTATE': {
            value: 'rotate',
            writable: false
        },
        'INPUT_ROTATE_LEFT': {
            value: 'rotate-left',
            writable: false
        },
        'INPUT_ROTATE_RIGHT': {
            value: 'rotate-right',
            writable: false
        },
        'INPUT_FIRE': {
            value: 'fire',
            writable: false
        },
        'CONNECT_ACK': {
            value: 'connect-ack',
            writable: false
        },
        'CONNECT_OTHER': {
            value: 'connect-other',
            writable: false
        },
        'DISCONNECT_OTHER': {
            value: 'disconnect-other',
            writable: false
        },
        'UPDATE_SELF': {
            value: 'update-self',
            writable: false
        },
        'UPDATE_OTHER': {
            value: 'update-other',
            writable: false
        },
        'UPDATE_DEPLOY_TIMER': {
            value: 'update-deploy-timer',
            writable: false
        }, 
        'UPDATE_STORM_TIMER': {
            value: 'update-storm-timer',
            writable: false
        },
        'UPDATE_LOBBY_TIMER': {
            value: 'update-lobby-timer',
            writable: false
        },
        'UPDATE_STORM': {
            value: 'update-storm',
            writable: false
        },
        'MISSILE_NEW': {
            value: 'missile-new',
            writable: false
        },
        'MISSILE_HIT': {
            value: 'missile-hit',
            writable: false
        },
        'TAKE_HEALTH': {
            value: 'take-health',
            writable: false
        },
        'CREATE_USER': {
            value: 'create-user',
            writable: false
        },
        'LOGIN': {
            value: 'successful-login',
            writable: false
        },
        'MESSAGE': {
            value: 'message-sent',
            writable: false
        },
        'JOIN_LOBBY': {
            value: 'join-lobby',
            writable: false
        },
        'LEAVE_LOBBY': {
            value: 'leave-lobby',
            writable: false
        },
        'START_GAME': {
            value: 'start-game',
            writable: false
        }

    });

})(typeof exports === 'undefined' ? this['NetworkIds'] = {} : exports);
