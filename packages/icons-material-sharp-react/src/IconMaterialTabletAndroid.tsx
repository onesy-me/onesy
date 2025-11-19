import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletAndroid = (props: IIcon) => {

  return (
    <Icon
      name='TabletAndroid'

      short_name='TabletAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-880h720v880H120Zm80-200v120h560v-120H200Zm200 80h160v-40H400v40ZM200-320h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z"/>
    </Icon>
  );
};

IconMaterialTabletAndroid.displayName = 'OnesyIconMaterialTabletAndroid';

export default IconMaterialTabletAndroid;
