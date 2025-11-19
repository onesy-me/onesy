import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComment = (props: IIcon) => {

  return (
    <Icon
      name='Comment'

      short_name='Comment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-240v-640h800v800L720-240H80Zm80-80h594l46 45v-525H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialComment.displayName = 'OnesyIconMaterialComment';

export default IconMaterialComment;
