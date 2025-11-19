import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroupFilled = (props: IIcon) => {

  return (
    <Icon
      name='StackGroupFilled'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80q-33 0-56.5-23.5T320-160v-160H160q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h400q33 0 56.5 23.5T640-800v160h160q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Z"/>
    </Icon>
  );
};

IconMaterialStackGroupFilled.displayName = 'OnesyIconMaterialStackGroupFilled';

export default IconMaterialStackGroupFilled;
