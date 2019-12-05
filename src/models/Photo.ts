import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String 
});

interface iPhoto extends Document{
    title: string,
    description: string;
    imagePath: string;
}
export default model<iPhoto>('Photo', schema);

 