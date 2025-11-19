import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortraitFilled = (props: IIcon) => {

  return (
    <Icon
      name='CropPortraitFilled'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Z"/>
    </Icon>
  );
};

IconMaterialCropPortraitFilled.displayName = 'OnesyIconMaterialCropPortraitFilled';

export default IconMaterialCropPortraitFilled;
