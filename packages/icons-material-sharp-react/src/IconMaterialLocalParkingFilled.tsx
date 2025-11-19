import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalParkingFilled = (props: IIcon) => {

  return (
    <Icon
      name='LocalParkingFilled'

      short_name='LocalParking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-720h280q100 0 170 70t70 170q0 100-70 170t-170 70H400v240H240Zm160-400h128q33 0 56.5-23.5T608-600q0-33-23.5-56.5T528-680H400v160Z"/>
    </Icon>
  );
};

IconMaterialLocalParkingFilled.displayName = 'OnesyIconMaterialLocalParkingFilled';

export default IconMaterialLocalParkingFilled;
