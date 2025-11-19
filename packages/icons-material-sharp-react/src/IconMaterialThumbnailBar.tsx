import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBar = (props: IIcon) => {

  return (
    <Icon
      name='ThumbnailBar'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm320-80h400v-480H400v480Zm-80 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h80-80Zm0-480h80-80Z"/>
    </Icon>
  );
};

IconMaterialThumbnailBar.displayName = 'OnesyIconMaterialThumbnailBar';

export default IconMaterialThumbnailBar;
