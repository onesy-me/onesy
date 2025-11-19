import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParkingSignFilled = (props: IIcon) => {

  return (
    <Icon
      name='ParkingSignFilled'

      short_name='ParkingSign'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-520h60v-80h140v-160H600v240Zm60-140v-40h80v40h-80ZM440-400v-480h480v480H720v280h-80v-280H440ZM280-120v-80H80v-360h208l-42-120H80v-80h222l98 280v360H280Zm-60-200q25 0 42.5-17.5T280-380q0-25-17.5-42.5T220-440q-25 0-42.5 17.5T160-380q0 25 17.5 42.5T220-320Z"/>
    </Icon>
  );
};

IconMaterialParkingSignFilled.displayName = 'OnesyIconMaterialParkingSignFilled';

export default IconMaterialParkingSignFilled;
