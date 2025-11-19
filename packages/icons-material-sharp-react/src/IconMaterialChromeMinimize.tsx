import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeMinimize = (props: IIcon) => {

  return (
    <Icon
      name='ChromeMinimize'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896v-80h640v80H160Z"/>
    </Icon>
  );
};

IconMaterialChromeMinimize.displayName = 'OnesyIconMaterialChromeMinimize';

export default IconMaterialChromeMinimize;
