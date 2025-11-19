import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScan = (props: IIcon) => {

  return (
    <Icon
      name='Scan'

      short_name='Scan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-200h80v120h480v-120h80v200H160Zm0-440v-360h400l240 240v120h-80v-80H520v-200H240v280h-80ZM40-360v-80h880v80H40Zm440-160Zm0 240Z"/>
    </Icon>
  );
};

IconMaterialScan.displayName = 'OnesyIconMaterialScan';

export default IconMaterialScan;
