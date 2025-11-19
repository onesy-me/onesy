import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureMedium = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPictureMedium'

      short_name='PictureInPictureMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320v-320h400v320H320ZM80-160v-80h720v-560h80v640H80Z"/>
    </Icon>
  );
};

IconMaterialPictureInPictureMedium.displayName = 'OnesyIconMaterialPictureInPictureMedium';

export default IconMaterialPictureInPictureMedium;
