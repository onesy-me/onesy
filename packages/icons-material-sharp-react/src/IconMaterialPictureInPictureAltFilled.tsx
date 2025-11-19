import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureAltFilled = (props: IIcon) => {

  return (
    <Icon
      name='PictureInPictureAltFilled'

      short_name='PictureInPictureAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm360-120h320v-240H440v240Zm160-120Z"/>
    </Icon>
  );
};

IconMaterialPictureInPictureAltFilled.displayName = 'OnesyIconMaterialPictureInPictureAltFilled';

export default IconMaterialPictureInPictureAltFilled;
