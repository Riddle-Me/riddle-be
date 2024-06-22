import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    email: string
}

export const UsersDocument = SchemaFactory.createForClass(User);