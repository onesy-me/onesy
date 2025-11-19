import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrandingWatermark = (props: IIcon) => {

  return (
    <Icon
      name='BrandingWatermark'

      short_name='BrandingWatermark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280h360v-240H400v240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialBrandingWatermark.displayName = 'OnesyIconMaterialBrandingWatermark';

export default IconMaterialBrandingWatermark;
