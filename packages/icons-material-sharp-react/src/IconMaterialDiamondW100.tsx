import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondW100 = (props: IIcon) => {

  return (
    <Icon
      name='DiamondW100'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-161 111-604l105-210h528l105 210-369 443ZM343-614h274l-86-172H429l-86 172Zm123 393v-365H163l303 365Zm28 0 303-365H494v365Zm154-393h164l-86-172H562l86 172Zm-500 0h164l86-172H234l-86 172Z"/>
    </Icon>
  );
};

IconMaterialDiamondW100.displayName = 'OnesyIconMaterialDiamondW100';

export default IconMaterialDiamondW100;
