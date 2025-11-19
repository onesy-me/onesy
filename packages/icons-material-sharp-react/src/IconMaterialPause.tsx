import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPause = (props: IIcon) => {

  return (
    <Icon
      name='Pause'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>
    </Icon>
  );
};

IconMaterialPause.displayName = 'OnesyIconMaterialPause';

export default IconMaterialPause;
