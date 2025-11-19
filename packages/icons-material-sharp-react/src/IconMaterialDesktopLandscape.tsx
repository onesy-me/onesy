import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopLandscape = (props: IIcon) => {

  return (
    <Icon
      name='DesktopLandscape'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h360v-200H240v200Zm420-120h60v-200H360v60h300v140ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialDesktopLandscape.displayName = 'OnesyIconMaterialDesktopLandscape';

export default IconMaterialDesktopLandscape;
