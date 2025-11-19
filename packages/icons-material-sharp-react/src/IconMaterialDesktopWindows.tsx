import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopWindows = (props: IIcon) => {

  return (
    <Icon
      name='DesktopWindows'

      short_name='DesktopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80h80v-80H80v-560h800v560H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/>
    </Icon>
  );
};

IconMaterialDesktopWindows.displayName = 'OnesyIconMaterialDesktopWindows';

export default IconMaterialDesktopWindows;
