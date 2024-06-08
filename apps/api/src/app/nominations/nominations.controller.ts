import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Nomination } from '@prisma/client';
import { NominationsService } from './nominations.service';

@Controller('nominations')
export class NominationsController {
	constructor(private readonly nominationsService: NominationsService) {}

	@Get()
	async getAllNominations() : Promise<Nomination[]> {
	  return this.nominationsService.getAllNominations();
	}

	@Get(':id')
	async getNomination(@Param('id') id: string) : Promise<Nomination> {
		return this.nominationsService.getNominationById({id : Number(id)});
	}

	@Delete(':id')
	async deleteNomination(@Param('id') id:string) : Promise<Nomination> {
		return this.nominationsService.deleteNomination({id: Number(id)});
	}

	@Post()
	async createNomination(@Body() nominationData: {nominationName: string}) : Promise<Nomination> {
		return this.nominationsService.createNomination(nominationData);
	}
}
