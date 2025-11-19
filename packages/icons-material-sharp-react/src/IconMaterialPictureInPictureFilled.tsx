import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureFilled = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPictureFilled'

      short_name='PictureInPicture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm360-280h320v-240H440v240Z"/>
    </Icon>
  );
};

IconMaterialPictureInPictureFilled.displayName = 'OnesyIconMaterialPictureInPictureFilled';

export default IconMaterialPictureInPictureFilled;
