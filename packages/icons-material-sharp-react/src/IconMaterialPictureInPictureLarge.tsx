import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureLarge = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPictureLarge'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320v-400h480v400H240ZM80-160v-80h720v-560h80v640H80Z"/>
    </Icon>
  );
};

IconMaterialPictureInPictureLarge.displayName = 'OnesyIconMaterialPictureInPictureLarge';

export default IconMaterialPictureInPictureLarge;
