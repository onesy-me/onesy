import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackFilled = (props: IIcon) => {

  return (
    <Icon
      name='StackFilled'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Z"/>
    </Icon>
  );
};

IconMaterialStackFilled.displayName = 'OnesyIconMaterialStackFilled';

export default IconMaterialStackFilled;
