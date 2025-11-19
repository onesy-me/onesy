import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerFilled = (props: IIcon) => {

  return (
    <Icon
      name='ComputerFilled'

      short_name='Computer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h800q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H80Zm80-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Z"/>
    </Icon>
  );
};

IconMaterialComputerFilled.displayName = 'OnesyIconMaterialComputerFilled';

export default IconMaterialComputerFilled;
