import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendFilled = (props: IIcon) => {

  return (
    <Icon
      name='SendFilled'

      short_name='Send'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-183q-20 8-38-3.5T120-220v-180l320-80-320-80v-180q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37L176-183Z"/>
    </Icon>
  );
};

IconMaterialSendFilled.displayName = 'OnesyIconMaterialSendFilled';

export default IconMaterialSendFilled;
