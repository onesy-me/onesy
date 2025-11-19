import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthEast = (props: IIcon) => {

  return (
    <Icon
      name='SouthEast'

      short_name='SouthEast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M624-280 188-716q-11-11-11-28t11-28q11-11 28-11t28 11l436 436v-224q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560v320q0 17-11.5 28.5T720-200H400q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h224Z"/>
    </Icon>
  );
};

IconMaterialSouthEast.displayName = 'OnesyIconMaterialSouthEast';

export default IconMaterialSouthEast;
