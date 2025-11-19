import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbell = (props: IIcon) => {

  return (
    <Icon
      name='Doorbell'

      short_name='Doorbell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q17 0 28.5-11.5T520-300h-80q0 17 11.5 28.5T480-260Zm-160-60h320v-40h-40v-94q0-44-24-80t-66-46v-40h-60v40q-42 10-66 46t-24 80v94h-40v40ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
};

IconMaterialDoorbell.displayName = 'OnesyIconMaterialDoorbell';

export default IconMaterialDoorbell;
