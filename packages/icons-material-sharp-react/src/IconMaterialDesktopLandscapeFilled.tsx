import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopLandscapeFilled = (props: IIcon) => {

  return (
    <Icon
      name='DesktopLandscapeFilled'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h360v-200H240v200Zm420-120h60v-200H360v60h300v140ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialDesktopLandscapeFilled.displayName = 'OnesyIconMaterialDesktopLandscapeFilled';

export default IconMaterialDesktopLandscapeFilled;
