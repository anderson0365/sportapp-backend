import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { AthleteEntity, Gender, IDType, NutritionType, PaymentPlatType } from './athlete.entity';
import { AthleteService } from './athlete.service';


describe('AthleteService', () => {
  let service: AthleteService;
  let repository: Repository<AthleteEntity>;
  let athletesList: AthleteEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AthleteService],
    }).compile();

    service = module.get<AthleteService>(AthleteService);
    repository = module.get<Repository<AthleteEntity>>(
      getRepositoryToken(AthleteEntity),
    );

    // await seedDatabase();
  });

  // const seedDatabase = async () => {
  //   repository.clear();
  //   athletesList = [];
  //   for (let i = 0; i < 5; i++) {
  //     const athlete: AthleteEntity = await repository.save({
  //       completed: false,
  //       name: "Jose",
  //       lastName: "Qunietro",
  //       idType: IDType.CC,
  //       idNumber: "123456",
  //       gender: Gender.MALE,
  //       weight: 10.0,
  //       height: 23.0,
  //       email: `sample${i}@sample.com`,
  //       password: "123",
  //       cityOfBirth: null,
  //       cityOfResidence: null,
  //       sports: null,
  //       nutritionType: NutritionType.NORMAL,
  //       sportProfile: "AA",
  //       trainingPlan: "AA",
  //       risks: null,
  //       demographicProfile: "<sample>",
  //       paymentPlan: PaymentPlatType.FREE,
  //       foodProfile: "<sample>"
  //     });
  //     athletesList.push(athlete);
  //   }
  // };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
