import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStack = (props: IIcon) => {

  return (
    <Icon
      name='Stack'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Zm80-80h400v-400H400v400Zm200-200Z"/>
    </Icon>
  );
};

IconMaterialStack.displayName = 'OnesyIconMaterialStack';

export default IconMaterialStack;
