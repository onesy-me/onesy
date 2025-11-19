import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeMaximize = (props: IIcon) => {

  return (
    <Icon
      name='ChromeMaximize'

      short_name='ChromeMaximize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896V256h640v640H160Zm80-80h480V336H240v480Zm0-480v480-480Z"/>
    </Icon>
  );
};

IconMaterialChromeMaximize.displayName = 'OnesyIconMaterialChromeMaximize';

export default IconMaterialChromeMaximize;
