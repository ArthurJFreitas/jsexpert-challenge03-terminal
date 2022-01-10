import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';
import IncomeRepository from './repository/IncomeRepository.js';
import language from './config/language.js';

const VOCABULARY = {
  STOP: ':q',
};

const db = new IncomeRepository()
const terminal = new CustomTerminal();
//terminal.initialize(db.getConversions(), language);

const service = new IncomeService();

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
    // TODO: Looks like you have some work to do right here :)
      console.log(db.getConversions())
    
  } catch (error) {
    // TODO: Don't forget of handling some errors beautifully ;)
    console.error('DEU RUIM*', err)
    // return mainLoop()
  }
 // return mainLoop();
}

await mainLoop();
