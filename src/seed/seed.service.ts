import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
 
	executedSeed(){
		return 'Seed executed';
	}

}
