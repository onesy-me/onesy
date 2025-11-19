import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPauseFilled = (props: IIcon) => {

  return (
    <Icon
      name='PauseFilled'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/>
    </Icon>
  );
};

IconMaterialPauseFilled.displayName = 'OnesyIconMaterialPauseFilled';

export default IconMaterialPauseFilled;
