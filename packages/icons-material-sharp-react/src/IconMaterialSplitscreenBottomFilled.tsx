import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenBottomFilled = (props: IIcon) => {

  return (
    <Icon
      name='SplitscreenBottomFilled'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h720v320H120Zm0-400v-320h720v320H120Zm640-240H200v160h560v-160Z"/>
    </Icon>
  );
};

IconMaterialSplitscreenBottomFilled.displayName = 'OnesyIconMaterialSplitscreenBottomFilled';

export default IconMaterialSplitscreenBottomFilled;
