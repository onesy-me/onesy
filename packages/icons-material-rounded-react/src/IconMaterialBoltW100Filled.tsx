import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoltW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='BoltW100Filled'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-412H302q-14 0-20-12t2-23l203-295q5-7 12-9t15 1q8 3 11.5 9.5T528-726l-27 218h140q14 0 20 13t-3 24L431-199q-5 6-12 7.5t-14-1.5q-7-3-10.5-9t-2.5-14l28-196Z"/>
    </Icon>
  );
};

IconMaterialBoltW100Filled.displayName = 'OnesyIconMaterialBoltW100Filled';

export default IconMaterialBoltW100Filled;
