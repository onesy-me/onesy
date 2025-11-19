import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticleFilled = (props: IIcon) => {

  return (
    <Icon
      name='ArticleFilled'

      short_name='Article'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialArticleFilled.displayName = 'OnesyIconMaterialArticleFilled';

export default IconMaterialArticleFilled;
