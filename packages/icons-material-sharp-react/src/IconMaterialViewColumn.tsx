import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumn = (props: IIcon) => {

  return (
    <Icon
      name='ViewColumn'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M121-200v-560h719v560H121Zm79-80h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z"/>
    </Icon>
  );
};

IconMaterialViewColumn.displayName = 'OnesyIconMaterialViewColumn';

export default IconMaterialViewColumn;
