import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscapeFilled = (props: IIcon) => {

  return (
    <Icon
      name='CropLandscapeFilled'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialCropLandscapeFilled.displayName = 'OnesyIconMaterialCropLandscapeFilled';

export default IconMaterialCropLandscapeFilled;
