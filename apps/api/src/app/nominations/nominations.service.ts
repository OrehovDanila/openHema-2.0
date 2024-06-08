import { Injectable, Param } from '@nestjs/common';
import { Nomination, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NominationsService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllNominations(): Promise<Nomination[]> {
		return this.prisma.nomination.findMany();
	}

	async getNominationById( where: Prisma.NominationWhereUniqueInput ) : Promise<Nomination | null>  {
		return this.prisma.nomination.findUnique({
			where
		});
	}

	async createNomination(data: Prisma.NominationCreateInput) : Promise<Nomination> {
		return this.prisma.nomination.create({
			data
		});
	}

	async updateNomination(params : {
		where: Prisma.NominationWhereUniqueInput,
		data: Prisma.NominationUpdateInput
	}) : Promise<Nomination> {
		const {where, data} = params;
		return this.prisma.nomination.update({
			data,
			where,
		});
	}

	async deleteNomination(where: Prisma.NominationWhereUniqueInput) : Promise<Nomination> {
		return this.prisma.nomination.delete({
			where,
		});
	}
}
