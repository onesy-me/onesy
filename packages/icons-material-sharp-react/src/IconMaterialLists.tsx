import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLists = (props: IIcon) => {

  return (
    <Icon
      name='Lists'

      short_name='Lists'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z"/>
    </Icon>
  );
};

IconMaterialLists.displayName = 'OnesyIconMaterialLists';

export default IconMaterialLists;
