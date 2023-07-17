import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReleaseInterface {
  id?: string;
  status: string;
  organization_id?: string;
  manager_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReleaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  organization_id?: string;
  manager_id?: string;
}
