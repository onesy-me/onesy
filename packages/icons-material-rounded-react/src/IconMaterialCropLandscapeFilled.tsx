import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropLandscapeFilled = (props: IIcon) => {

  return (
    <Icon
      name='CropLandscapeFilled'

      short_name='CropLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
};

IconMaterialCropLandscapeFilled.displayName = 'OnesyIconMaterialCropLandscapeFilled';

export default IconMaterialCropLandscapeFilled;
