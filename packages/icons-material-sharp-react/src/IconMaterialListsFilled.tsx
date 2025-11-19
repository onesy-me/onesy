import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListsFilled = (props: IIcon) => {

  return (
    <Icon
      name='ListsFilled'

      short_name='Lists'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z"/>
    </Icon>
  );
};

IconMaterialListsFilled.displayName = 'OnesyIconMaterialListsFilled';

export default IconMaterialListsFilled;
