import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVitalsW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='VitalsW100Filled'

      short_name='Vitals'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 12.35v-.7h5.1l2.1 5.25 4.9-11.65 2.65 6.4h4.6v.7h-5.1l-2.15-5.275-4.925 11.65L6.95 12.35Z"/>
    </Icon>
  );
};

IconMaterialVitalsW100Filled.displayName = 'OnesyIconMaterialVitalsW100Filled';

export default IconMaterialVitalsW100Filled;
