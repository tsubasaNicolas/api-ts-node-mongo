import app from './app';
import { startConnection} from './database'

async function main(){
    startConnection();
    await app.listen(4000);
    console.log('server on port', 4000);

}
main();
/*

app.listen(4000, ()=> {
    console.log('server on port', 4000);
});*/   