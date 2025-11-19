import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32Filled = (props: IIcon) => {

  return (
    <Icon
      name='Crop32Filled'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-480h720v480H120Z"/>
    </Icon>
  );
};

IconMaterialCrop32Filled.displayName = 'OnesyIconMaterialCrop32Filled';

export default IconMaterialCrop32Filled;
