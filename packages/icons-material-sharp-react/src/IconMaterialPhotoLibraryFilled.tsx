import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoLibraryFilled = (props: IIcon) => {

  return (
    <Icon
      name='PhotoLibraryFilled'

      short_name='PhotoLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720h480v480H320v-480Z"/>
    </Icon>
  );
};

IconMaterialPhotoLibraryFilled.displayName = 'OnesyIconMaterialPhotoLibraryFilled';

export default IconMaterialPhotoLibraryFilled;
