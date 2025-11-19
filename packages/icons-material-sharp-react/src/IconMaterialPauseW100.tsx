import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPauseW100 = (props: IIcon) => {

  return (
    <Icon
      name='PauseW100'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-252v-456h162v456H546Zm-294 0v-456h162v456H252Zm322-28h106v-400H574v400Zm-294 0h106v-400H280v400Zm0-400v400-400Zm294 0v400-400Z"/>
    </Icon>
  );
};

IconMaterialPauseW100.displayName = 'OnesyIconMaterialPauseW100';

export default IconMaterialPauseW100;
