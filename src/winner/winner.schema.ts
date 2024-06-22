import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WinnerDocument = HydratedDocument<Winner>;

@Schema()
export class Winner {
    @Prop({required: true})
    _id: string

    @Prop({ required: true })
    address: string

    @Prop({ required: true  })
    email: string

    @Prop({ required: true  })
    amount: number
}

export const WinnerDocument = SchemaFactory.createForClass(Winner);