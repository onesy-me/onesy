import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeRestore = (props: IIcon) => {

  return (
    <Icon
      name='ChromeRestore'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 736V256h480v480H320Zm80-80h320V336H400v320ZM160 896V437h80v379h379v80H160Zm240-240V336v320Z"/>
    </Icon>
  );
};

IconMaterialChromeRestore.displayName = 'OnesyIconMaterialChromeRestore';

export default IconMaterialChromeRestore;
