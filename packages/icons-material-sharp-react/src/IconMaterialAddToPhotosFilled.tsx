import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToPhotosFilled = (props: IIcon) => {

  return (
    <Icon
      name='AddToPhotosFilled'

      short_name='AddToPhotos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
};

IconMaterialAddToPhotosFilled.displayName = 'OnesyIconMaterialAddToPhotosFilled';

export default IconMaterialAddToPhotosFilled;
