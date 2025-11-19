import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewList = (props: IIcon) => {

  return (
    <Icon
      name='ViewList'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200q-33 0-56.5-23.5T120-280Zm80-320h80v-80h-80v80Zm160 0h400v-80H360v80Zm0 160h400v-80H360v80Zm0 160h400v-80H360v80Zm-160 0h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialViewList.displayName = 'OnesyIconMaterialViewList';

export default IconMaterialViewList;
