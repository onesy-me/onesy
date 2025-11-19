import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableViewFilled = (props: IIcon) => {

  return (
    <Icon
      name='TableViewFilled'

      short_name='TableView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-560h560v560H280Zm80-400h400v-80H360v80Zm160 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM360-360h80v-80h-80v80Zm320 0h80v-80h-80v80ZM360-200h80v-80h-80v80Zm320 0h80v-80h-80v80Zm-440-80H120v-560h560v120h-80v-40H200v400h40v80Z"/>
    </Icon>
  );
};

IconMaterialTableViewFilled.displayName = 'OnesyIconMaterialTableViewFilled';

export default IconMaterialTableViewFilled;
