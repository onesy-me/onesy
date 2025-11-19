import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentFilled = (props: IIcon) => {

  return (
    <Icon
      name='CommentFilled'

      short_name='Comment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-240v-640h800v800L720-240H80Z"/>
    </Icon>
  );
};

IconMaterialCommentFilled.displayName = 'OnesyIconMaterialCommentFilled';

export default IconMaterialCommentFilled;
