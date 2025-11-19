import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreenFilled = (props: IIcon) => {

  return (
    <Icon
      name='AddToHomeScreenFilled'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-504 204-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196H240q-17 0-28.5-11.5T200-600q0-17 11.5-28.5T240-640h200q17 0 28.5 11.5T480-600v200q0 17-11.5 28.5T440-360q-17 0-28.5-11.5T400-400v-104ZM320-40q-33 0-56.5-23.5T240-120v-120q0-17 11.5-28.5T280-280q17 0 28.5 11.5T320-240h400v-480H320q0 17-11.5 28.5T280-680q-17 0-28.5-11.5T240-720v-120q0-33 23.5-56.5T320-920h400q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H320Z"/>
    </Icon>
  );
};

IconMaterialAddToHomeScreenFilled.displayName = 'OnesyIconMaterialAddToHomeScreenFilled';

export default IconMaterialAddToHomeScreenFilled;
