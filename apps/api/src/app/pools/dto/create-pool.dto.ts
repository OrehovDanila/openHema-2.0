import { poolTypes } from '@prisma/client';

export class CreatePoolDto {
	type: poolTypes;
	poolName: string;
	nomination : {connect: {id:number}};
}
