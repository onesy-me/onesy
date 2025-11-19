import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAlbumFilled = (props: IIcon) => {

  return (
    <Icon
      name='PhotoAlbumFilled'

      short_name='PhotoAlbum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm120-160h400L545-420 440-280l-65-87-95 127Zm160-280 100-60 100 60v-280H440v280Z"/>
    </Icon>
  );
};

IconMaterialPhotoAlbumFilled.displayName = 'OnesyIconMaterialPhotoAlbumFilled';

export default IconMaterialPhotoAlbumFilled;
