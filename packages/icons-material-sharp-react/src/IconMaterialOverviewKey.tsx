import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKey = (props: IIcon) => {

  return (
    <Icon
      name='OverviewKey'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm80-80h400v-400H120v400Zm560 80v-560h80v560h-80Zm160 0v-560h80v560h-80Zm-720-80v-400 400Z"/>
    </Icon>
  );
};

IconMaterialOverviewKey.displayName = 'OnesyIconMaterialOverviewKey';

export default IconMaterialOverviewKey;
