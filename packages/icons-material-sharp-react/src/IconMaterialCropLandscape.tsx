import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscape = (props: IIcon) => {

  return (
    <Icon
      name='CropLandscape'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialCropLandscape.displayName = 'OnesyIconMaterialCropLandscape';

export default IconMaterialCropLandscape;
