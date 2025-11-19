import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsFilled = (props: IIcon) => {

  return (
    <Icon
      name='NewsFilled'

      short_name='News'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h520l200 200v520H120Zm480-640v160h160L600-760ZM280-280h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Z"/>
    </Icon>
  );
};

IconMaterialNewsFilled.displayName = 'OnesyIconMaterialNewsFilled';

export default IconMaterialNewsFilled;
