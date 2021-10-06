import {global, env} from 'skalavel'

global.set('port', Number(env.getParsedValue('PORT') || '8000'))