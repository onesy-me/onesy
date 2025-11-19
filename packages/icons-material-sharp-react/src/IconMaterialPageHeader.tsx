import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageHeader = (props: IIcon) => {

  return (
    <Icon
      name='PageHeader'

      short_name='PageHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-760v-80h720v80H120Zm0 640v-560h720v560H120Zm80-80h560v-400H200v400Zm0 0v-400 400Z"/>
    </Icon>
  );
};

IconMaterialPageHeader.displayName = 'OnesyIconMaterialPageHeader';

export default IconMaterialPageHeader;
