import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureCenter = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPictureCenter'

      short_name='PictureInPictureCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm160-120h320v-240H320v240Z"/>
    </Icon>
  );
};

IconMaterialPictureInPictureCenter.displayName = 'OnesyIconMaterialPictureInPictureCenter';

export default IconMaterialPictureInPictureCenter;
