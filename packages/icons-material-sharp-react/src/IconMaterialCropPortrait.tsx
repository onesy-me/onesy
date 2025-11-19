import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropPortrait = (props: IIcon) => {

  return (
    <Icon
      name='CropPortrait'

      short_name='CropPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm0 0v-640 640Z"/>
    </Icon>
  );
};

IconMaterialCropPortrait.displayName = 'OnesyIconMaterialCropPortrait';

export default IconMaterialCropPortrait;
