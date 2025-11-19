import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumn = (props: IIcon) => {

  return (
    <Icon
      name='ViewColumn'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M121-280v-400q0-33 23.5-56.5T201-760h559q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H201q-33 0-56.5-23.5T121-280Zm79 0h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z"/>
    </Icon>
  );
};

IconMaterialViewColumn.displayName = 'OnesyIconMaterialViewColumn';

export default IconMaterialViewColumn;
