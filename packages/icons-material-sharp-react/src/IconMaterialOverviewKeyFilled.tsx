import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKeyFilled = (props: IIcon) => {

  return (
    <Icon
      name='OverviewKeyFilled'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm640 0v-560h80v560h-80Zm160 0v-560h80v560h-80Z"/>
    </Icon>
  );
};

IconMaterialOverviewKeyFilled.displayName = 'OnesyIconMaterialOverviewKeyFilled';

export default IconMaterialOverviewKeyFilled;
