import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop32Filled = (props: IIcon) => {

  return (
    <Icon
      name='Crop32Filled'

      short_name='Crop32'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-240q-33 0-56.5-23.5T120-320v-320q0-33 23.5-56.5T200-720h560q33 0 56.5 23.5T840-640v320q0 33-23.5 56.5T760-240H200Z"/>
    </Icon>
  );
};

IconMaterialCrop32Filled.displayName = 'OnesyIconMaterialCrop32Filled';

export default IconMaterialCrop32Filled;
