import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalParkingFilled = (props: IIcon) => {

  return (
    <Icon
      name='LocalParkingFilled'

      short_name='LocalParking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-360v160q0 33-23.5 56.5T320-120q-33 0-56.5-23.5T240-200v-560q0-33 23.5-56.5T320-840h200q100 0 170 70t70 170q0 100-70 170t-170 70H400Zm0-160h128q33 0 56.5-23.5T608-600q0-33-23.5-56.5T528-680H400v160Z"/>
    </Icon>
  );
};

IconMaterialLocalParkingFilled.displayName = 'OnesyIconMaterialLocalParkingFilled';

export default IconMaterialLocalParkingFilled;
