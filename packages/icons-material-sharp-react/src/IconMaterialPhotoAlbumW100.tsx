import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoAlbumW100 = (props: IIcon) => {

  return (
    <Icon
      name='PhotoAlbumW100'

      short_name='PhotoAlbum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h536v696H212Zm28-28h480v-640h-80v234l-74-44-74 44v-234H240v640Zm78-106h332L548-402 448-278l-64-74-66 86Zm-78 106v-640 640Zm252-406 74-44 74 44-74-44-74 44Z"/>
    </Icon>
  );
};

IconMaterialPhotoAlbumW100.displayName = 'OnesyIconMaterialPhotoAlbumW100';

export default IconMaterialPhotoAlbumW100;
