import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChargingStation = (props: IIcon) => {

  return (
    <Icon
      name='ChargingStation'

      short_name='ChargingStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-280v-160h-80l120-240v160h80L460-280ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
};

IconMaterialChargingStation.displayName = 'OnesyIconMaterialChargingStation';

export default IconMaterialChargingStation;
