import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Sponser, SponserDocument } from '../sponsor/sponser.schema';
import { Winner, WinnerDocument } from '../winner/winner.schema';

export type ChallengeDocument = HydratedDocument<Challenge>;

// Define the enum for status
export enum ChallengeStatus {
    LIVE = 'live',
    ENDED = 'ended',
}

@Schema()
export class Challenge {   
    @Prop({ required: true })
    name: string

    @Prop({ required: true, enum: ChallengeStatus  })
    status: string

    @Prop({ type: Map, of: SponserDocument, default: {} })
    sponsers: Record<string, Sponser>;

    @Prop({ type: Object, of: WinnerDocument, default: {} })
    winners: Record<string, Winner>;
}

export const ChallengeDocument = SchemaFactory.createForClass(Challenge);