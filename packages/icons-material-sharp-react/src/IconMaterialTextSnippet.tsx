import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSnippet = (props: IIcon) => {

  return (
    <Icon
      name='TextSnippet'

      short_name='TextSnippet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-367L567-760H200v560Zm-80 80v-720h480l240 240v480H120Zm160-160h400v-80H280v80Zm0-160h400v-80H280v80Zm0-160h280v-80H280v80Zm-80 400v-560 560Z"/>
    </Icon>
  );
};

IconMaterialTextSnippet.displayName = 'OnesyIconMaterialTextSnippet';

export default IconMaterialTextSnippet;
