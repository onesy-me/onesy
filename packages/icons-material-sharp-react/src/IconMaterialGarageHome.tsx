import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHome = (props: IIcon) => {

  return (
    <Icon
      name='GarageHome'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v480h-80v-440L480-740 240-560v440h-80Zm200-80h240v-80H360v80Zm0-160h240v-80H360v80Zm-80 240v-400h400v400H280Z"/>
    </Icon>
  );
};

IconMaterialGarageHome.displayName = 'OnesyIconMaterialGarageHome';

export default IconMaterialGarageHome;
