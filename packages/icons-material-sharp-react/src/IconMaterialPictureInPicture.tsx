import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPicture = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPicture'

      short_name='PictureInPicture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm280-200h320v-240H440v240Zm80-80v-80h160v80H520ZM160-240v-480 480Z"/>
    </Icon>
  );
};

IconMaterialPictureInPicture.displayName = 'OnesyIconMaterialPictureInPicture';

export default IconMaterialPictureInPicture;
