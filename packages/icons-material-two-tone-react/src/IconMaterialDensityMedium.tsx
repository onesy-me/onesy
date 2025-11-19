import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityMedium = (props: IIcon) => {

  return (
    <Icon
      name='DensityMedium'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="3"/><rect height="2" width="18" x="3" y="19"/><rect height="2" width="18" x="3" y="11"/></g></g>
    </Icon>
  );
};

IconMaterialDensityMedium.displayName = 'OnesyIconMaterialDensityMedium';

export default IconMaterialDensityMedium;
