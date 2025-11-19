import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75Filled = (props: IIcon) => {

  return (
    <Icon
      name='Crop75Filled'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h720v560H120Z"/>
    </Icon>
  );
};

IconMaterialCrop75Filled.displayName = 'OnesyIconMaterialCrop75Filled';

export default IconMaterialCrop75Filled;
