import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenTop = (props: IIcon) => {

  return (
    <Icon
      name='SplitscreenTop'

      short_name='SplitscreenTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h720v320H120Zm0 400v-320h720v320H120Zm80-80h560v-160H200v160Z"/>
    </Icon>
  );
};

IconMaterialSplitscreenTop.displayName = 'OnesyIconMaterialSplitscreenTop';

export default IconMaterialSplitscreenTop;
