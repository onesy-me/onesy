import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToHomeScreen = (props: IIcon) => {

  return (
    <Icon
      name='AddToHomeScreen'

      short_name='AddToHomeScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40v-240h80v40h400v-480H320v40h-80v-240h560v880H240Zm80-120v40h400v-40H320ZM176-280l-56-56 224-224H200v-80h280v280h-80v-144L176-280Zm144-520h400v-40H320v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
};

IconMaterialAddToHomeScreen.displayName = 'OnesyIconMaterialAddToHomeScreen';

export default IconMaterialAddToHomeScreen;
