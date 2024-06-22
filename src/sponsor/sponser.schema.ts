import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SponserDocument = HydratedDocument<Sponser>;


@Schema()
export class Sponser {
    @Prop({ required: true })
    accountAddress: string;

    @Prop({ required: true })
    rewardAmount: number;

    @Prop({ required: true })
    tokenAddress: string;

    @Prop({ required: true })
    chainId: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    name: string
}

export const SponserDocument = SchemaFactory.createForClass(Sponser);