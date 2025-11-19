import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropW100 = (props: IIcon) => {

  return (
    <Icon
      name='CropW100'

      short_name='Crop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-66v-160H226v-480H66v-28h160v-160h28v640h640v28H734v160h-28Zm0-216v-424H282v-28h452v452h-28Z"/>
    </Icon>
  );
};

IconMaterialCropW100.displayName = 'OnesyIconMaterialCropW100';

export default IconMaterialCropW100;
