import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnHubDevice = (props: IIcon) => {

  return (
    <Icon
      name='OnHubDevice'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80h320v80H320Zm0-120-47-600h414l-47 600H320Zm74-80h172l34-440H360l34 440Zm0-440h-34 240-206Z"/>
    </Icon>
  );
};

IconMaterialOnHubDevice.displayName = 'OnesyIconMaterialOnHubDevice';

export default IconMaterialOnHubDevice;
