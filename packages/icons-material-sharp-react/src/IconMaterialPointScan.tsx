import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointScan = (props: IIcon) => {

  return (
    <Icon
      name='PointScan'

      short_name='PointScan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm-40-240v-200h80v200h-80Zm0 520v-200h80v200h-80Zm200-320v-80h200v80H640Zm-520 0v-80h200v80H120Z"/>
    </Icon>
  );
};

IconMaterialPointScan.displayName = 'OnesyIconMaterialPointScan';

export default IconMaterialPointScan;
