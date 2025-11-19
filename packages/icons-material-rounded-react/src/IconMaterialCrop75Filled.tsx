import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75Filled = (props: IIcon) => {

  return (
    <Icon
      name='Crop75Filled'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200Z"/>
    </Icon>
  );
};

IconMaterialCrop75Filled.displayName = 'OnesyIconMaterialCrop75Filled';

export default IconMaterialCrop75Filled;
