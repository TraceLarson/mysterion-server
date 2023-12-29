import { DataSource, Repository } from 'typeorm';
import { ProductionTypes } from '../../Constants';
import IWell from '../interface/IWell';
import IWellService from '../interface/IWellService';
import Well from '../Well';
import { Well as WellEntity } from '../../persistence/entity/Well';

export default class WellService implements IWellService {
  //#region Constructors

  constructor(appDataSource: DataSource) {
    this.AppDataSource = appDataSource;
    this.Repository = this.AppDataSource.getRepository<WellEntity>(WellEntity);
  }

  //#endregion

  //#region Properties

  AppDataSource: DataSource;

  Repository: Repository<WellEntity>;

  //#endregion

  //#region Public Methods

  public async CreateNewWell(newWell: IWell): Promise<void> {
    let well: IWell = new WellEntity();
    well = this.MapWellProperties(well, newWell);

    await this.Repository.save(well);
    console.log('Saved a new well with Recordid: ' + well.RecordId);

    console.log(`Current wells:\r\n`);
    const savedWells: IWell[] = await this.Repository.find();
    savedWells.forEach((sw) => console.log(`${sw.RecordId} : ${sw.Name} ${sw.Id}`));
  }

  public async GetWell(wellRecordId?: string): Promise<IWell | null> {
    // guard clause - well RecordId is null
    if (!wellRecordId) {
      return null;
    }

    const foundWell = await this.Repository.findOneBy({ RecordId: wellRecordId });

    // guard clause - well not found
    if (foundWell == null) {
      return null;
    }

    return this.CreateDomainCopy(foundWell);
  }

  public async GetWells(): Promise<IWell[] | []> {
    const foundWells: IWell[] = await this.Repository.find();

    // guard clause - well not found
    if (foundWells == null) {
      return [];
    }

    let foundDomainWells: IWell[] = foundWells.map((fu) => this.CreateDomainCopy(fu));

    return foundDomainWells;
  }

  public async UpdateWell(well: IWell, otherWell: IWell) {
    const storedWell: IWell | null = await this.GetWell(well.RecordId);

    // guard clause - stored well not found
    if (!storedWell) {
      return;
    }

    const updatedWell: IWell = this.MapWellProperties(storedWell, otherWell);

    await this.Repository.save(updatedWell);
  }

  public async UpdateWellActiveStatus(well: IWell, isActive: boolean) {
    const storedWell: IWell | null = await this.GetWell(well.RecordId);

    // guard clause - stored well not found
    if (!storedWell) {
      return;
    }

    storedWell.IsActive = isActive;

    await this.Repository.save(storedWell);
  }

  public async UpdateWellProductionType(well: IWell, productionType: ProductionTypes) {
    const storedWell: IWell | null = await this.GetWell(well.RecordId);

    // guard clause - stored well not found
    if (!storedWell) {
      return;
    }

    storedWell.ProductionType = productionType;

    await this.Repository.save(storedWell);
  }

  public async DeleteWell(well: IWell) {
    const storedWell: IWell | null = await this.GetWell(well.RecordId);

    // guard clause - stored well not found
    if (!storedWell) {
      return;
    }

    await this.Repository.delete(storedWell);
  }

  //#endregion

  //#region Private Methods

  private CreateDomainCopy(foundWell: IWell): IWell {
    const wellDomain: IWell = new Well();

    wellDomain.RecordId = foundWell.RecordId;
    wellDomain.Id = foundWell.Id;
    wellDomain.Name = foundWell.Name;
    wellDomain.ProductionType = foundWell.ProductionType;
    wellDomain.Managers = foundWell.Managers;
    wellDomain.Operators = foundWell.Operators;
    wellDomain.Traits = foundWell.Traits;
    wellDomain.IsActive = foundWell.IsActive;

    return wellDomain;
  }

  private MapWellProperties(producedWell: IWell, sourceWell: IWell): IWell {
    producedWell.Id = sourceWell.Id;
    producedWell.Id = sourceWell.Id;
    producedWell.Name = sourceWell.Name;
    producedWell.ProductionType = sourceWell.ProductionType;
    producedWell.Managers = sourceWell.Managers;
    producedWell.Operators = sourceWell.Operators;
    producedWell.Traits = sourceWell.Traits;
    producedWell.IsActive = sourceWell.IsActive;

    return producedWell;
  }

  //#endregion
}
