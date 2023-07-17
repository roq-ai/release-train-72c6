interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Developer'],
  customerRoles: [],
  tenantRoles: ['Developer'],
  tenantName: 'Organization',
  applicationName: 'release train',
  addOns: [],
};
