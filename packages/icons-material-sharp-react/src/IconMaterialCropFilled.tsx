import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropFilled = (props: IIcon) => {

  return (
    <Icon
      name='CropFilled'

      short_name='Crop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-40v-160H200v-480H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h400v400h-80Z"/>
    </Icon>
  );
};

IconMaterialCropFilled.displayName = 'OnesyIconMaterialCropFilled';

export default IconMaterialCropFilled;
