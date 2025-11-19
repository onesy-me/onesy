import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardwareFilled = (props: IIcon) => {

  return (
    <Icon
      name='HardwareFilled'

      short_name='Hardware'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-520v-120H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v120H360Zm0 400v-320h240v320H360Z"/>
    </Icon>
  );
};

IconMaterialHardwareFilled.displayName = 'OnesyIconMaterialHardwareFilled';

export default IconMaterialHardwareFilled;
